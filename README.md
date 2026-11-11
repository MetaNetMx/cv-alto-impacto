# 🚀 CV Alto Impacto (Bilingual Strategic Resume Builder)

> Generador web de currículums de alto impacto con arquitectura a doble columna, diseñado para que estudiantes y profesionistas creen CVs de clase mundial en **Español e Inglés** con exportación directa a PDF y formato optimizado para filtros ATS.

Inspirado en la **Metodología de Creación de CV de Platzi** y los estándares de reclutamiento técnico internacional (la regla de los 6 segundos de escaneo, formulación de logros cuantificables y jerarquía visual estratégica).

---

## 🌐 Demo en Vivo

Puedes acceder a la aplicación en producción de manera totalmente gratuita:
👉 **[https://cv-alto-impacto-production.up.railway.app](https://cv-alto-impacto-production.up.railway.app)**

---

## 🎯 ¿Para quién es esta herramienta?

La aplicación incluye **3 plantillas y arquetipos pedagógicos** basados en la enseñanza de Platzi, además de una plantilla limpia en blanco:

1. 🎓 **Estudiante / Primer Empleo / Prácticas Profesionales**:
   - Ideal para estudiantes universitarios o recién egresados sin amplia experiencia laboral formal.
   - Enfatiza proyectos académicos de titulación, hackatones, retos de código, promedio escolar y habilidades de aprendizaje autónomo.
2. 💻 **Desarrollador de Software / Tech & AI**:
   - Diseñado para ingenieros y programadores (Frontend, Backend, Full Stack, Cloud o Data).
   - Enfatiza el stack tecnológico categorizado, proyectos en producción, optimización de latencia/costos, uptime y métricas cuantificables.
3. 🔄 **Cambio de Carrera / Perfil Híbrido Multidisciplinario**:
   - Orientado a profesionistas que transicionan desde otras áreas (Finanzas, Administración, Psicología, Leyes, Diseño, Docencia) hacia el sector tecnológico.
   - Conecta la experiencia previa con las nuevas habilidades técnicas a través de una narrativa sólida en "Sobre Mí" y habilidades transferibles.
4. 📝 **Plantilla en Blanco**:
   - Para iniciar desde cero con guías de ayuda en cada campo.

---

## ✨ Características Principales

- 📐 **Estructura Estratégica a Doble Columna**:
  - **Columna Lateral (30%)**: Contacto profesional directo (LinkedIn, GitHub), habilidades técnicas (*Hard Skills*) clasificadas, competencias clave (*Soft Skills*) acompañadas de evidencia práctica, formación continua, idiomas y proyectos comunitarios.
  - **Columna Principal (70%)**: Titular profesional de alto impacto (*Headline*), narrativa "Sobre Mí" (5-7 líneas), experiencia laboral y proyectos redactados con la fórmula Platzi, hackatones y educación formal.
- 💡 **Fórmula del Logro Cuantificable**:
  - Guía integrada para redactar viñetas con la estructura: `[Verbo de Acción Potente] + [Herramienta o Contexto] + [Impacto Cuantificable (% / $ / tiempo / usuarios)]`.
- 🌐 **Soporte Bilingüe Instantáneo**:
  - Alterna entre **Español (ES)** e **Inglés (EN)** con un solo clic.
- 🖨️ **Exportación Directa a PDF**:
  - Estilos de impresión `@media print` calibrados al milímetro para hoja tamaño Carta (US Letter). Cero desbordes y márgenes limpios.
- 💾 **Persistencia y Privacidad**:
  - Exporta y carga tus borradores en archivos **JSON** locales. Tus datos nunca se almacenan en servidores de terceros.
- 📥 **Exportaciones Múltiples**:
  - Descarga como archivo **HTML independiente** con estilos integrados.
  - Copia la versión en texto plano **Markdown optimizado para ATS**.
- ⚡ **Cero Dependencias Externas (Zero-Dependency)**:
  - Servidor construido con módulos nativos de Node.js (`http`, `fs`, `path`). Inicia en <10ms, consume menos de 15MB de RAM y no requiere `npm install` de librerías pesadas.

---

## 💻 Ejecución Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MetaNetMx/cv-alto-impacto.git
   cd cv-alto-impacto
   ```
2. Inicia el servidor con Node.js (v18 o superior):
   ```bash
   node server.js
   ```
3. Abre tu navegador en:
   ```
   http://localhost:3000
   ```

---

## 🚀 Despliegue en Railway

El proyecto incluye configuración lista para producción (`Dockerfile`, `railway.json`, `Procfile`):

1. En tu panel de [Railway.app](https://railway.com), crea un nuevo proyecto: **Deploy from GitHub repo**.
2. Selecciona tu repositorio.
3. Railway compilará e iniciará el servicio en segundos.
4. En **Settings > Networking**, genera un dominio público gratuito.

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Libre y gratuito para estudiantes, universidades, comunidades tech y desarrolladores.
