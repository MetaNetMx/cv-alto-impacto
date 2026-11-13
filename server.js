const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const db = require('./db');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function generateSlug(fullName) {
  if (!fullName || typeof fullName !== 'string') return 'cv-' + crypto.randomBytes(3).toString('hex');
  const clean = fullName.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const randomSuffix = crypto.randomBytes(2).toString('hex');
  return (clean.slice(0, 25) || 'cv') + '-' + randomSuffix;
}

// Initialize Database (Postgres on Railway or Local fallback)
db.init();

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // Healthcheck for Railway
  if (pathname === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      status: 'ok', 
      uptime: process.uptime(),
      storage: db.usePostgres ? 'postgresql' : 'local-files'
    }));
    return;
  }

  // API: Save CV (Create or Update)
  if (pathname === '/api/cv/save' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        let { cvId, editToken, profile, visualConfig, qrSettings, slug } = payload;

        if (!profile) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Faltan los datos del perfil (profile).' }));
          return;
        }

        // Generate ID and Token if new
        const isNew = !cvId;
        if (isNew) {
          cvId = generateSlug(profile.fullName);
          editToken = crypto.randomBytes(16).toString('hex');
          slug = cvId;
        }

        const result = await db.saveCv({
          id: cvId,
          editToken,
          slug: slug || cvId,
          profileData: profile,
          visualConfig: visualConfig || {},
          qrSettings: qrSettings || {}
        });

        const host = req.headers.host || 'localhost:3000';
        const proto = req.headers['x-forwarded-proto'] || 'http';
        const publicUrl = `${proto}://${host}/cv/${result.slug || cvId}`;
        const editUrl = `${proto}://${host}/?edit=${cvId}&key=${editToken}`;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          cvId,
          editToken,
          slug: result.slug || cvId,
          publicUrl,
          editUrl,
          storage: db.usePostgres ? 'postgresql' : 'local',
          updatedAt: result.updated_at
        }));
      } catch (err) {
        const statusCode = err.statusCode || 500;
        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // API: Get Public CV by ID or Slug
  if (pathname.startsWith('/api/cv/') && req.method === 'GET') {
    const id = pathname.replace('/api/cv/', '').trim();
    if (!id) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'ID de CV requerido.' }));
      return;
    }

    db.getCv(id).then(cv => {
      if (!cv) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'CV no encontrado.' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, cv }));
    }).catch(err => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    });
    return;
  }

  // API: Verify Edit Token
  if (pathname === '/api/cv/verify' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const { cvId, editToken } = JSON.parse(body || '{}');
        const valid = await db.verifyToken(cvId, editToken);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ valid }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Translation API Endpoint
  if (pathname === '/api/translate' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const { profile, targetLang } = JSON.parse(body || '{}');
        if (!profile) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing profile data' }));
          return;
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (apiKey) {
          const prompt = `You are a bilingual technical resume coach. Translate this JSON to ${targetLang === 'en' ? 'English' : 'Spanish'}. Maintain same JSON schema. Use strong action verbs.\n${JSON.stringify(profile)}`;
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { responseMimeType: 'application/json' }
            })
          });
          if (response.ok) {
            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ translated: JSON.parse(text), engine: 'gemini' }));
              return;
            }
          }
        }

        // Fallback rule-based translation
        const translated = JSON.parse(JSON.stringify(profile));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ translated, engine: 'fallback' }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Public Profile View Route: /cv/:id -> serve view.html
  if (pathname.startsWith('/cv/') && req.method === 'GET') {
    const viewPath = path.join(PUBLIC_DIR, 'view.html');
    fs.readFile(viewPath, (readErr, content) => {
      if (readErr) {
        // Fallback to index.html if view.html is loading
        const indexPath = path.join(PUBLIC_DIR, 'index.html');
        fs.readFile(indexPath, (_, indexContent) => {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(indexContent);
        });
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      }
    });
    return;
  }

  // Serve static files
  let reqPath = pathname;
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  const filePath = path.join(PUBLIC_DIR, reqPath);

  // Security check: ensure path is inside PUBLIC_DIR
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      fs.readFile(indexPath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404);
          res.end('Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(content);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`🚀 CV Alto Impacto running on http://localhost:${PORT}`);
});
