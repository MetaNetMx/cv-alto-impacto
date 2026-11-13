const fs = require('fs');
const path = require('path');

let pg = null;
try {
  pg = require('pg');
} catch (e) {
  // pg will be available in Docker on Railway
}

const LOCAL_DATA_DIR = path.join(__dirname, 'data', 'cvs');

class DatabaseManager {
  constructor() {
    this.usePostgres = false;
    this.pool = null;
  }

  async init() {
    // 1. Ensure local fallback directory exists
    if (!fs.existsSync(LOCAL_DATA_DIR)) {
      try {
        fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
      } catch (err) {
        console.warn('⚠️ Could not create local data dir:', err.message);
      }
    }

    // 2. Check if PostgreSQL is available
    const dbUrl = process.env.DATABASE_URL;
    if (dbUrl && pg) {
      try {
        const isInternal = dbUrl.includes('railway.internal') || dbUrl.includes('localhost') || dbUrl.includes('127.0.0.1');
        this.pool = new pg.Pool({
          connectionString: dbUrl,
          ssl: isInternal ? false : { rejectUnauthorized: false },
          max: 10,
          idleTimeoutMillis: 30000,
          connectionTimeoutMillis: 5000
        });

        // Test connection and run migration
        const client = await this.pool.connect();
        try {
          await client.query(`
            CREATE TABLE IF NOT EXISTS cvs (
              id VARCHAR(64) PRIMARY KEY,
              edit_token VARCHAR(64) NOT NULL,
              slug VARCHAR(100),
              profile_data JSONB NOT NULL,
              visual_config JSONB,
              qr_settings JSONB,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            CREATE INDEX IF NOT EXISTS idx_cvs_edit_token ON cvs(id, edit_token);
            CREATE INDEX IF NOT EXISTS idx_cvs_slug ON cvs(slug);
          `);
          this.usePostgres = true;
          console.log('🐘 Connected to Railway PostgreSQL database & migrated schema successfully.');
        } finally {
          client.release();
        }
      } catch (err) {
        console.error('⚠️ Failed connecting to PostgreSQL, falling back to local file storage:', err.message);
        this.usePostgres = false;
      }
    } else {
      console.log('📁 Using local file-based storage for CVs (data/cvs/).');
    }
  }

  async saveCv({ id, editToken, slug, profileData, visualConfig, qrSettings }) {
    if (!id || !editToken) {
      throw new Error('ID and editToken are required');
    }

    if (this.usePostgres && this.pool) {
      // Check if exists
      const checkRes = await this.pool.query('SELECT edit_token FROM cvs WHERE id = $1', [id]);
      if (checkRes.rows.length > 0) {
        // Exists, verify token
        if (checkRes.rows[0].edit_token !== editToken) {
          const err = new Error('Invalid edit token. You are not authorized to edit this CV.');
          err.statusCode = 403;
          throw err;
        }
        // Update
        const updateRes = await this.pool.query(
          `UPDATE cvs 
           SET profile_data = $2, visual_config = $3, qr_settings = $4, slug = $5, updated_at = NOW() 
           WHERE id = $1
           RETURNING id, slug, created_at, updated_at`,
          [id, JSON.stringify(profileData), JSON.stringify(visualConfig), JSON.stringify(qrSettings), slug || id]
        );
        return updateRes.rows[0];
      } else {
        // Insert new
        const insertRes = await this.pool.query(
          `INSERT INTO cvs (id, edit_token, slug, profile_data, visual_config, qr_settings, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
           RETURNING id, slug, created_at, updated_at`,
          [id, editToken, slug || id, JSON.stringify(profileData), JSON.stringify(visualConfig), JSON.stringify(qrSettings)]
        );
        return insertRes.rows[0];
      }
    }

    // Fallback: Local JSON files
    const filePath = path.join(LOCAL_DATA_DIR, `${id}.json`);
    const now = new Date().toISOString();
    let createdAt = now;

    if (fs.existsSync(filePath)) {
      try {
        const existing = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        if (existing.editToken && existing.editToken !== editToken) {
          const err = new Error('Invalid edit token. You are not authorized to edit this CV.');
          err.statusCode = 403;
          throw err;
        }
        createdAt = existing.createdAt || now;
      } catch (e) {
        if (e.statusCode === 403) throw e;
      }
    }

    const record = {
      id,
      editToken,
      slug: slug || id,
      profileData,
      visualConfig,
      qrSettings,
      createdAt,
      updatedAt: now
    };

    fs.writeFileSync(filePath, JSON.stringify(record, null, 2), 'utf-8');
    return { id, slug: slug || id, created_at: createdAt, updated_at: now };
  }

  async getCv(id) {
    if (!id) return null;

    if (this.usePostgres && this.pool) {
      const res = await this.pool.query(
        'SELECT id, slug, profile_data, visual_config, qr_settings, created_at, updated_at FROM cvs WHERE id = $1 OR slug = $1',
        [id]
      );
      if (res.rows.length === 0) return null;
      const row = res.rows[0];
      return {
        id: row.id,
        slug: row.slug,
        profileData: row.profile_data,
        visualConfig: row.visual_config,
        qrSettings: row.qr_settings,
        createdAt: row.created_at,
        updatedAt: row.updated_at
      };
    }

    // Local file fallback
    const filePath = path.join(LOCAL_DATA_DIR, `${id}.json`);
    if (fs.existsSync(filePath)) {
      try {
        const record = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return {
          id: record.id,
          slug: record.slug,
          profileData: record.profileData,
          visualConfig: record.visualConfig,
          qrSettings: record.qrSettings,
          createdAt: record.createdAt,
          updatedAt: record.updatedAt
        };
      } catch (e) {
        return null;
      }
    }

    return null;
  }

  async verifyToken(id, editToken) {
    if (!id || !editToken) return false;

    if (this.usePostgres && this.pool) {
      const res = await this.pool.query('SELECT 1 FROM cvs WHERE id = $1 AND edit_token = $2', [id, editToken]);
      return res.rows.length > 0;
    }

    const filePath = path.join(LOCAL_DATA_DIR, `${id}.json`);
    if (fs.existsSync(filePath)) {
      try {
        const record = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return record.editToken === editToken;
      } catch (e) {
        return false;
      }
    }

    return false;
  }
}

const db = new DatabaseManager();
module.exports = db;
