# 🚀 CV Alto Impacto (Bilingual Strategic Resume Builder)

> Generador web de currículums de alto impacto con arquitectura a doble columna, diseñado para que estudiantes y profesionales de TI creen CVs de clase mundial en **Español e Inglés** con exportación directa a PDF.

Inspirado en las metodologías de reclutamiento de alto rendimiento (la regla de los 6 segundos de escaneo, formulación de logros cuantificables y jerarquía visual estratégica).

---

## ✨ Características Principales

- 🎯 **Estructura Estratégica a Doble Columna**:
  - **Columna Lateral (30%)**: Datos de contacto esenciales, habilidades técnicas categorizadas, competencias clave transferibles, formación de vanguardia, idiomas y comunidad/hobbies con propósito.
  - **Columna Principal (70%)**: Título profesional de alto impacto, narrativa "Sobre Mí", experiencia profesional redactada en primera persona con verbos de acción y métricas, hackatones/retos de innovación y educación formal con cédulas/promedios.
- 🌐 **Exportación Bilingüe Instantánea**:
  - Generación y alternancia de vistas en **Español (ES)** e **Inglés (EN)** con un solo clic.
  - Endpoint inteligente con soporte para traducción automática (heurística nativa o impulsada por Google Gemini API si se configura `GEMINI_API_KEY`).
- 🖨️ **Exportación Directa a PDF**:
  - Hoja de estilos `@media print` calibrada al milímetro para hoja tamaño Carta (US Letter).
  - Cero desbordes, márgenes limpios y tipografía nítida para entrevistas presenciales o envío digital.
- 💾 **Persistencia y Portabilidad**:
  - Guarda tu borrador completo en formato JSON para actualizarlo en el futuro.
  - Carga borradores existentes en segundos.
  - Exporta como HTML independiente o copia en formato Markdown para Notion/GitHub.
- ⚡ **Perfil de Ejemplo Integrado**:
  - Botón *"Cargar Ejemplo"* para que tus compañeros vean de inmediato cómo se redacta un CV de un perfil tecnológico multidisciplinario.

---

## 🛠️ Tecnologías

- **Backend**: Node.js & Express (ultraligero, inicio en <50ms, ideal para planes gratuitos).
- **Frontend**: HTML5 semántico, Tailwind CSS y Vanilla JavaScript reactivo.
- **Despliegue**: Optimizado para **Railway** (Nixpacks / Dockerfile / Procfile) y **GitHub**.

---

## 🚀 Despliegue en Railway (Paso a Paso)

### Opción 1: Despliegue Automático con Railway CLI
1. Clona o entra a la carpeta del proyecto:
   ```bash
   cd cv-alto-impacto
   ```
2. Inicializa o vincula tu proyecto en Railway:
   ```bash
   railway init
   ```
3. Despliega la aplicación:
   ```bash
   railway up
   ```
4. Genera tu dominio público gratuito:
   ```bash
   railway domain
   ```

### Opción 2: Conectar desde GitHub a Railway
1. Sube este repositorio a tu cuenta de GitHub (ej. `MetaNetMx/cv-alto-impacto`).
2. En tu panel de [Railway.app](https://railway.com), haz clic en **New Project** > **Deploy from GitHub repo**.
3. Selecciona el repositorio `cv-alto-impacto`.
4. Railway detectará automáticamente el archivo `Procfile` o `railway.json` y desplegará la aplicación en segundos.
5. En la pestaña **Settings** > **Networking**, haz clic en **Generate Domain** para obtener tu enlace público gratuito (ej. `https://cv-alto-impacto.up.railway.app`).

---

## 💻 Ejecución Local

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   npm start
   ```
4. Abre en tu navegador:
   ```
   http://localhost:3000
   ```

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Libre para uso personal, educativo y comunitario.
