/**
 * CV Alto Impacto - Application Engine
 * Generates bilingual high-impact CVs with two-column strategic layout.
 */

// Initial high-impact profile template (based on José Ernesto's proven record)
const SAMPLE_PROFILE_ES = {
  fullName: "José Ernesto Ramírez García",
  headline: "AI & Financial Intelligence Engineer · Computer Systems Engineer · Founder & Tech Lead",
  contact: {
    location: "Guadalajara, Jalisco, México",
    email: "ernesto.ramirez@alumno.udg.mx",
    phone: "+52 33 2343 7338",
    linkedin: "https://www.linkedin.com/in/ernesto-ram%C3%ADrez-garc%C3%ADa-jose/",
    linkedinUser: "in/ernesto-ramírez-garcía-jose",
    github: "https://github.com/MetaNetMx",
    githubUser: "github.com/MetaNetMx"
  },
  about: "Ingeniero en Computación titulado y estudiante de alto rendimiento en la Licenciatura en Inteligencia Financiera y de Negocios con IA en la Universidad de Guadalajara (promedio 99.10 / 100). Emprendedor tecnológico con más de 20 años de liderazgo continuo como Fundador de Sigma Computadoras (servicios de TI, hardware e insumos) y Líder Técnico de evalua035.com, plataforma SaaS RegTech con la que reduje los tiempos de diagnóstico de riesgo psicosocial de 4 semanas a menos de 4 horas. Perfil multidisciplinario único con Cédulas Profesionales en Psicología y Derecho (SEP), fortalecido con 1 año de estudios en Minnesota, EUA. Actualmente me formo en tecnologías de frontera (IA Agéntica, Vibecoding, Investing y Marketing) con Raúl Martín (CEO de Talent Land), mientras participo activamente en hackatones como el reto Fintech de Stellar y Cursor, y la aceleradora ITE Salud. Mi objetivo es diseñar e implementar soluciones tecnológicas y agénticas de alto impacto que transformen datos complejos en rentabilidad y decisiones estratégicas.",
  skills: [
    { title: "IA Agéntica & Vibecoding", desc: "Agentic AI, Workflows Multi-agente, Prototipado Asistido por IA (Cursor / Vibecoding), LLMs aplicados." },
    { title: "Data Science & Machine Learning", desc: "Python (Pandas, NumPy, Scikit-Learn), Modelos Predictivos, EDA, Estadística Aplicada, Data Storytelling." },
    { title: "Bases de Datos & BI", desc: "SQL Analítico, Power BI, Modelado Relacional, Dashboards Ejecutivos, KPIs Financieros." },
    { title: "Hardware, Redes & TI", desc: "Diagnóstico y soporte de hardware de cómputo e impresión, Protocolos TCP/IP, Routing & Switching." },
    { title: "Compliance & RegTech", desc: "NOM-035-STPS, Psicometría Laboral, Gobernanza Ética de Datos, LegalTech y Derecho Laboral." }
  ],
  softSkills: [
    { name: "Liderazgo Directivo (20 Años)", desc: "Dirección sostenida de operaciones comerciales y de TI en Sigma Computadoras." },
    { name: "Pensamiento Analítico", desc: "Descomposición estructurada de problemas técnicos, legales y financieros." },
    { name: "Data Storytelling", desc: "Traducción de métricas cuantitativas complejas en decisiones ejecutivas claras." },
    { name: "Negociación & Gestión de Clientes", desc: "Atención a cuentas corporativas, proveedores y comités directivos." }
  ],
  executiveTraining: [
    "Talent Land (Raúl Martín, CEO): Agentic AI, Vibecoding, Investing y Growth Marketing.",
    "Estudios Internacionales: Minnesota, EUA (1 año de Psicología y Teología)."
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B2 Profesional Técnico (Inmersión en EE.UU., lectura técnica y negociación)." }
  ],
  community: [
    { name: "Club de Lectura Comunitario", desc: "Fundador y moderador desde hace 3 años (miércoles 7:20pm a 9:30pm). Psicología y literatura." },
    { name: "Comunidades Dev & ODS 2", desc: "Miembro de grupos de developers locales/internacionales y voluntariado en ReAlimenta." }
  ],
  experience: [
    {
      role: "Fundador & Director General",
      company: "Sigma Computadoras (Soluciones de TI e Infraestructura)",
      period: "2006 – Presente (20 años) | Guadalajara, MX",
      bullets: [
        "Fundé y consolidé durante 20 años ininterrumpidos una empresa de servicios de TI, liderando la gestión comercial, soporte técnico empresarial y atención a clientes corporativos.",
        "Supervisé servicios de mantenimiento preventivo y correctivo de equipo de cómputo y sistemas de impresión, garantizando alta disponibilidad operativa y minimizando fallas para empresas clientes.",
        "Comercialicé e implementé licencias de software e insumos de impresión, administrando cadenas de suministro y control de inventarios tecnológicos de forma rentable."
      ]
    },
    {
      role: "Fundador & Chief Technology Officer (CTO)",
      company: "evalua035.com",
      period: "2019 – Presente | Guadalajara, MX",
      bullets: [
        "Diseñé y construí la arquitectura integral SaaS en la nube para la evaluación, calificación y reporte automatizado de la NOM-035-STPS en organizaciones.",
        "Automaticé el procesamiento estadístico y psicométrico, reduciendo el ciclo diagnóstico de 4 semanas a menos de 4 horas por centro de trabajo, alcanzando 0% de margen de error de tabulación.",
        "Desarrollé dashboards analíticos interactivos para comités directivos y RRHH, facilitando la toma de decisiones inmediata sobre factores de riesgo psicosocial.",
        "Aseguré el 100% de apego normativo ante auditorías e inspecciones laborales de la STPS, articulando código, derecho laboral y psicometría."
      ]
    },
    {
      role: "Co-Fundador & Tech Lead",
      company: "ReAlimenta (Iniciativa Social · ODS 2)",
      period: "2024 – 2025 | Guadalajara, MX",
      bullets: [
        "Lideré la arquitectura técnica y el modelado de datos de la plataforma digital para optimizar la trazabilidad y logística de redistribución de excedentes alimentarios.",
        "Coordiné a un equipo interdisciplinario de 5 especialistas bajo sprints ágiles, logrando un MVP funcional y validado con la comunidad en un plazo de 4 meses."
      ]
    },
    {
      role: "Profesor de Asignatura (Redes de Telecomunicaciones)",
      company: "Universidad de Guadalajara",
      period: "Licenciatura",
      bullets: [
        "Diseñé programas y laboratorios prácticos en arquitectura de redes TCP/IP, switching, routing y seguridad para más de 60 alumnos por semestre, con 92% de acreditación práctica."
      ]
    }
  ],
  hackathons: [
    {
      title: "Hackathon Stellar & Cursor (Fintech Challenge) | Nov – Dic 2026",
      desc: "Desarrollo de un MVP Fintech integrando tecnología blockchain (red Stellar) y programación acelerada con IA en Cursor mediante vibecoding."
    },
    {
      title: "Incubadora & Aceleradora ITE Salud",
      desc: "Participación activa en el programa de incubación de soluciones de salud y bienestar digital."
    },
    {
      title: "Comunidades Tecnológicas & Networking",
      desc: "Miembro activo en grupos locales e internacionales de desarrolladores; asistente habitual a foros técnicos y meetups en Guadalajara."
    }
  ],
  education: [
    {
      degree: "Licenciatura en Inteligencia Financiera y de Negocios (LIFN)",
      school: "Universidad de Guadalajara — Centro Universitario de Guadalajara (CUGDL)",
      period: "2024 – En curso",
      badge: "Promedio: 99.10 / 100",
      details: "160 créditos concluidos con honores. Especialización en ciencia de datos, estadística analítica, finanzas corporativas y ética de datos."
    },
    {
      degree: "Licenciatura como Ingeniero en Computación",
      school: "Universidad de Guadalajara — CUCEI",
      period: "Titulado",
      badge: "Cédula SEP: 3718404",
      details: "Formación en arquitectura de software, redes de telecomunicaciones TCP/IP, ingeniería de sistemas y bases de datos."
    },
    {
      degree: "Lic. en Psicología & Lic. como Abogado",
      school: "Universidad de Guadalajara",
      period: "Titulado",
      badge: "Cédulas SEP: 5615924 & 10231670",
      details: "Especialización en psicometría organizacional, clima de trabajo, derecho corporativo y normatividad laboral de la STPS."
    }
  ]
};

const SAMPLE_PROFILE_EN = {
  fullName: "José Ernesto Ramírez García",
  headline: "AI & Financial Intelligence Engineer · Computer Systems Engineer · Founder & Tech Lead",
  contact: {
    location: "Guadalajara, Jalisco, Mexico",
    email: "ernesto.ramirez@alumno.udg.mx",
    phone: "+52 33 2343 7338",
    linkedin: "https://www.linkedin.com/in/ernesto-ram%C3%ADrez-garc%C3%ADa-jose/",
    linkedinUser: "in/ernesto-ramírez-garcía-jose",
    github: "https://github.com/MetaNetMx",
    githubUser: "github.com/MetaNetMx"
  },
  about: "Licensed Computer Engineer and top-tier student in the B.S. in Financial & Business Intelligence with AI at Universidad de Guadalajara (cumulative GPA: 99.10 / 100). Tech entrepreneur with over 20 years of continuous leadership as Founder & Managing Director of Sigma Computadoras (IT infrastructure, hardware support, software, and supplies) and Chief Technology Officer (CTO) of evalua035.com, a RegTech SaaS platform that reduced organizational psychosocial risk diagnosis turnaround from 4 weeks to under 4 hours. Multi-disciplinary profile with official degrees in Psychology and Law (both registered with professional licenses before the Mexican Ministry of Education - SEP), reinforced by 1 year of academic studies in Minnesota, USA. Currently mastering cutting-edge technologies (Agentic AI, Vibecoding, Strategic Investing, and Growth Marketing) with Raúl Martín (CEO of Talent Land), while actively competing in high-impact hackathons such as the Stellar & Cursor Fintech Challenge and the ITE Salud incubator. Committed to engineering scalable AI, agentic systems, and financial analytics that transform complex data and regulatory challenges into high-yield business outcomes.",
  skills: [
    { title: "Agentic AI & Vibecoding", desc: "Agentic Workflows, Multi-agent Systems, AI-Assisted Rapid Prototyping (Cursor / Vibecoding), Applied LLMs." },
    { title: "Data Science & Machine Learning", desc: "Python (Pandas, NumPy, Scikit-Learn), Predictive Modeling, Exploratory Data Analysis (EDA), Statistics, Storytelling." },
    { title: "Databases & Business Intelligence", desc: "Analytical SQL, Power BI, Relational Data Modeling, Executive Dashboards, Strategic Financial KPIs." },
    { title: "Hardware, Networks & IT", desc: "Computer & Enterprise Printer Diagnostics & Maintenance, TCP/IP Protocols, Network Routing & Switching." },
    { title: "Compliance & RegTech", desc: "NOM-035 Standard, Workplace Psychometrics, Data Ethics & AI Governance, LegalTech, Labor Audits." }
  ],
  softSkills: [
    { name: "Executive Leadership (20 Years)", desc: "Sustained leadership over business and IT operations at Sigma Computadoras." },
    { name: "Analytical Problem Solving", desc: "Structured decomposition of complex technical, regulatory, and financial problems." },
    { name: "Data Storytelling", desc: "Translating complex quantitative findings into clear, actionable executive insights." },
    { name: "Client & Vendor Negotiation", desc: "Managing corporate client accounts, technology suppliers, and executive boards." }
  ],
  executiveTraining: [
    "Talent Land (Raúl Martín, CEO): Agentic AI & Vibecoding, Investing & Strategic Finance, Growth Marketing.",
    "International Studies: Minnesota, USA (1 academic year in Psychology & Theology)."
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2 Professional Proficiency (US academic immersion, technical documentation, business negotiation)." }
  ],
  community: [
    { name: "Community Book Club", desc: "Founder and moderator for 3 years (Wednesdays 7:20 PM – 9:30 PM). Deep literature and psychology analysis." },
    { name: "Dev Communities & SDG 2", desc: "Active member in local/global developer groups and technical leadership at ReAlimenta (Zero Hunger)." }
  ],
  experience: [
    {
      role: "Founder & Managing Director",
      company: "Sigma Computadoras (IT Solutions & Infrastructure)",
      period: "2006 – Present (20 years) | Guadalajara, MX",
      bullets: [
        "Founded, scaled, and sustained a thriving IT solutions enterprise over 20 consecutive years, overseeing commercial operations, enterprise technical support, and client retention.",
        "Supervised comprehensive preventive and corrective maintenance for computer hardware and enterprise printing systems, ensuring high operational availability and minimizing client downtime.",
        "Commercialized and implemented software licenses and specialized printing supplies, managing vendor channels, supply logistics, and disciplined inventory control."
      ]
    },
    {
      role: "Founder & Chief Technology Officer (CTO)",
      company: "evalua035.com",
      period: "2019 – Present | Guadalajara, MX",
      bullets: [
        "Architected and deployed a cloud-based SaaS platform for automated assessment, scoring, and compliance reporting under Mexico NOM-035 labor standard.",
        "Automated statistical and psychometric data processing, reducing diagnostic turnaround from 4 weeks to under 4 hours per corporate branch, achieving 0% calculation error.",
        "Built interactive analytics dashboards and executive reporting suites for HR leadership, enabling immediate risk visibility and corrective action planning.",
        "Guaranteed 100% regulatory and legal compliance during federal labor audits by the Ministry of Labor (STPS), aligning software architecture with labor law and psychometrics."
      ]
    },
    {
      role: "Co-Founder & Tech Lead",
      company: "ReAlimenta (Social Tech Initiative · UN SDG 2)",
      period: "2024 – 2025 | Guadalajara, MX",
      bullets: [
        "Spearheaded technical architecture and data schema design for food surplus redistribution to community dining halls, directing 5 specialists under Agile sprints (validated MVP in 4 months)."
      ]
    },
    {
      role: "Adjunct Professor (Telecommunications & Computer Networks)",
      company: "Universidad de Guadalajara",
      period: "Undergraduate Level",
      bullets: [
        "Designed coursework and laboratory modules in TCP/IP architecture, routing, and security for 60+ engineering students per semester, achieving a 92% practical pass rate."
      ]
    }
  ],
  hackathons: [
    {
      title: "Stellar & Cursor Hackathon (Fintech Challenge) | Nov – Dec 2026",
      desc: "Developing a Fintech MVP integrating decentralized blockchain technology (Stellar network) and AI-assisted accelerated coding in Cursor using vibecoding."
    },
    {
      title: "ITE Salud Incubator & Accelerator",
      desc: "Active participation in the startup acceleration program for health and digital wellness technology solutions."
    },
    {
      title: "Tech Communities & Networking",
      desc: "Active member in local and international developer groups; regular attendee at tech meetups and networking hubs across the Guadalajara tech cluster."
    }
  ],
  education: [
    {
      degree: "B.S. in Financial & Business Intelligence with AI (LIFN)",
      school: "Universidad de Guadalajara — Centro Universitario de Guadalajara (CUGDL)",
      period: "2024 – In progress",
      badge: "GPA: 99.10 / 100",
      details: "160 completed credits with highest honors. Specialization in applied data science, statistical analytics, corporate finance, and data ethics."
    },
    {
      degree: "B.S. in Computer Engineering",
      school: "Universidad de Guadalajara — CUCEI",
      period: "Graduated & Licensed",
      badge: "SEP License: 3718404",
      details: "Core focus in software architecture, TCP/IP telecommunications networks, systems engineering, and databases."
    },
    {
      degree: "B.S. in Psychology & LL.B. in Law",
      school: "Universidad de Guadalajara",
      period: "Graduated & Licensed",
      badge: "SEP Licenses: 5615924 & 10231670",
      details: "Applied organizational psychometrics, corporate law, and federal labor regulatory compliance (STPS)."
    }
  ]
};

// Global App State
let state = {
  lang: 'es', // 'es' or 'en'
  profile: JSON.parse(JSON.stringify(SAMPLE_PROFILE_ES)),
  profiles: {
    es: JSON.parse(JSON.stringify(SAMPLE_PROFILE_ES)),
    en: JSON.parse(JSON.stringify(SAMPLE_PROFILE_EN))
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initFormBindings();
  renderPreview();
  setupEventListeners();
});

// Setup top toolbar & UI interactions
function setupEventListeners() {
  document.getElementById('btn-load-sample').addEventListener('click', () => {
    state.profiles.es = JSON.parse(JSON.stringify(SAMPLE_PROFILE_ES));
    state.profiles.en = JSON.parse(JSON.stringify(SAMPLE_PROFILE_EN));
    state.profile = state.profiles[state.lang];
    populateFormFromState();
    renderPreview();
    showToast('✨ Perfil de ejemplo cargado correctamente.');
  });

  document.getElementById('btn-lang-es').addEventListener('click', () => switchLanguage('es'));
  document.getElementById('btn-lang-en').addEventListener('click', () => switchLanguage('en'));

  document.getElementById('btn-print').addEventListener('click', () => {
    window.print();
  });

  document.getElementById('btn-download-html').addEventListener('click', downloadHTML);
  document.getElementById('btn-copy-md').addEventListener('click', copyMarkdown);
  document.getElementById('btn-save-json').addEventListener('click', saveJSON);
  document.getElementById('input-load-json').addEventListener('change', loadJSON);
}

// Switch language view
function switchLanguage(targetLang) {
  if (state.lang === targetLang) return;
  // Save current form fields to active profile
  readFormIntoState();
  state.profiles[state.lang] = JSON.parse(JSON.stringify(state.profile));

  state.lang = targetLang;
  state.profile = state.profiles[targetLang] || JSON.parse(JSON.stringify(state.profiles.es));

  // Toggle active button style
  document.getElementById('btn-lang-es').className = targetLang === 'es' 
    ? 'px-3 py-1.5 text-xs font-bold rounded-md bg-sky-600 text-white shadow-sm' 
    : 'px-3 py-1.5 text-xs font-medium rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200';
  
  document.getElementById('btn-lang-en').className = targetLang === 'en' 
    ? 'px-3 py-1.5 text-xs font-bold rounded-md bg-sky-600 text-white shadow-sm' 
    : 'px-3 py-1.5 text-xs font-medium rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200';

  populateFormFromState();
  renderPreview();
  showToast(targetLang === 'en' ? 'Switched to English' : 'Cambiado a Español');
}

// Read inputs from DOM into state.profile
function readFormIntoState() {
  state.profile.fullName = document.getElementById('field-fullName').value;
  state.profile.headline = document.getElementById('field-headline').value;
  state.profile.contact.location = document.getElementById('field-location').value;
  state.profile.contact.email = document.getElementById('field-email').value;
  state.profile.contact.phone = document.getElementById('field-phone').value;
  state.profile.contact.linkedin = document.getElementById('field-linkedin').value;
  state.profile.contact.github = document.getElementById('field-github').value;
  state.profile.about = document.getElementById('field-about').value;
}

// Populate form controls from state.profile
function populateFormFromState() {
  document.getElementById('field-fullName').value = state.profile.fullName || '';
  document.getElementById('field-headline').value = state.profile.headline || '';
  document.getElementById('field-location').value = state.profile.contact?.location || '';
  document.getElementById('field-email').value = state.profile.contact?.email || '';
  document.getElementById('field-phone').value = state.profile.contact?.phone || '';
  document.getElementById('field-linkedin').value = state.profile.contact?.linkedin || '';
  document.getElementById('field-github').value = state.profile.contact?.github || '';
  document.getElementById('field-about').value = state.profile.about || '';

  renderExperienceFormList();
  renderEducationFormList();
  renderSkillsFormList();
  renderHackathonsFormList();
}

// Setup real-time input change listeners
function initFormBindings() {
  populateFormFromState();

  const textInputIds = ['field-fullName', 'field-headline', 'field-location', 'field-email', 'field-phone', 'field-linkedin', 'field-github', 'field-about'];
  textInputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        readFormIntoState();
        renderPreview();
      });
    }
  });

  // Buttons for adding items
  document.getElementById('btn-add-exp')?.addEventListener('click', addExperienceItem);
  document.getElementById('btn-add-edu')?.addEventListener('click', addEducationItem);
  document.getElementById('btn-add-hack')?.addEventListener('click', addHackathonItem);
  document.getElementById('btn-add-skill')?.addEventListener('click', addSkillCategoryItem);
}

// Render Experience inputs in editor
function renderExperienceFormList() {
  const container = document.getElementById('exp-list-container');
  if (!container) return;
  container.innerHTML = '';

  state.profile.experience.forEach((exp, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-3 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1} - ${exp.company || 'Empresa'}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeExperienceItem(${idx})">Eliminar</button>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-[11px] font-semibold text-slate-600">Puesto / Rol</label>
          <input type="text" value="${escapeHtml(exp.role)}" oninput="updateExpField(${idx}, 'role', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
        <div>
          <label class="block text-[11px] font-semibold text-slate-600">Empresa / Proyecto</label>
          <input type="text" value="${escapeHtml(exp.company)}" oninput="updateExpField(${idx}, 'company', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Periodo & Ubicación</label>
        <input type="text" value="${escapeHtml(exp.period)}" oninput="updateExpField(${idx}, 'period', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Logros Cuantificables (uno por línea)</label>
        <textarea rows="3" oninput="updateExpBullets(${idx}, this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white leading-relaxed">${escapeHtml(exp.bullets.join('\n'))}</textarea>
      </div>
    `;
    container.appendChild(card);
  });
}

function updateExpField(idx, field, val) {
  state.profile.experience[idx][field] = val;
  renderPreview();
}

function updateExpBullets(idx, val) {
  state.profile.experience[idx].bullets = val.split('\n').filter(b => b.trim().length > 0);
  renderPreview();
}

function addExperienceItem() {
  state.profile.experience.unshift({
    role: "Nuevo Rol",
    company: "Nueva Empresa / Startup",
    period: "2025 – Presente | Guadalajara, MX",
    bullets: [
      "Diseñé e implementé [solución técnica] reduciendo tiempos operativos en un 40%."
    ]
  });
  renderExperienceFormList();
  renderPreview();
}

window.removeExperienceItem = function(idx) {
  state.profile.experience.splice(idx, 1);
  renderExperienceFormList();
  renderPreview();
};

// Render Education inputs
function renderEducationFormList() {
  const container = document.getElementById('edu-list-container');
  if (!container) return;
  container.innerHTML = '';

  state.profile.education.forEach((edu, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-3 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1} - ${edu.degree || 'Grado'}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeEducationItem(${idx})">Eliminar</button>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-[11px] font-semibold text-slate-600">Grado / Título</label>
          <input type="text" value="${escapeHtml(edu.degree)}" oninput="updateEduField(${idx}, 'degree', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
        <div>
          <label class="block text-[11px] font-semibold text-slate-600">Institución</label>
          <input type="text" value="${escapeHtml(edu.school)}" oninput="updateEduField(${idx}, 'school', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-[11px] font-semibold text-slate-600">Periodo / Estatus</label>
          <input type="text" value="${escapeHtml(edu.period)}" oninput="updateEduField(${idx}, 'period', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
        <div>
          <label class="block text-[11px] font-semibold text-slate-600">Badge (Promedio o Cédula)</label>
          <input type="text" value="${escapeHtml(edu.badge || '')}" oninput="updateEduField(${idx}, 'badge', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Detalles clave / Especialización</label>
        <input type="text" value="${escapeHtml(edu.details || '')}" oninput="updateEduField(${idx}, 'details', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
    `;
    container.appendChild(card);
  });
}

function updateEduField(idx, field, val) {
  state.profile.education[idx][field] = val;
  renderPreview();
}

function addEducationItem() {
  state.profile.education.push({
    degree: "Nueva Licenciatura / Maestría",
    school: "Universidad de Guadalajara",
    period: "2024 – En curso",
    badge: "Promedio: 98/100",
    details: "Enfoque en desarrollo tecnológico y ciencia de datos."
  });
  renderEducationFormList();
  renderPreview();
}

window.removeEducationItem = function(idx) {
  state.profile.education.splice(idx, 1);
  renderEducationFormList();
  renderPreview();
};

// Render Hackathons inputs
function renderHackathonsFormList() {
  const container = document.getElementById('hack-list-container');
  if (!container) return;
  container.innerHTML = '';

  state.profile.hackathons.forEach((h, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-2 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeHackItem(${idx})">Eliminar</button>
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Nombre del Hackathon / Aceleradora / Comunidad</label>
        <input type="text" value="${escapeHtml(h.title)}" oninput="updateHackField(${idx}, 'title', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Descripción & Tecnologías</label>
        <input type="text" value="${escapeHtml(h.desc)}" oninput="updateHackField(${idx}, 'desc', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
    `;
    container.appendChild(card);
  });
}

function updateHackField(idx, field, val) {
  state.profile.hackathons[idx][field] = val;
  renderPreview();
}

function addHackathonItem() {
  state.profile.hackathons.push({
    title: "Hackathon de Innovación",
    desc: "Desarrollo de prototipo MVP con tecnologías de vanguardia."
  });
  renderHackathonsFormList();
  renderPreview();
}

window.removeHackItem = function(idx) {
  state.profile.hackathons.splice(idx, 1);
  renderHackathonsFormList();
  renderPreview();
};

// Render Skills inputs
function renderSkillsFormList() {
  const container = document.getElementById('skills-list-container');
  if (!container) return;
  container.innerHTML = '';

  state.profile.skills.forEach((s, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-2 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1} - ${s.title || 'Categoría'}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeSkillItem(${idx})">Eliminar</button>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div class="col-span-1">
          <label class="block text-[11px] font-semibold text-slate-600">Categoría</label>
          <input type="text" value="${escapeHtml(s.title)}" oninput="updateSkillField(${idx}, 'title', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
        <div class="col-span-2">
          <label class="block text-[11px] font-semibold text-slate-600">Herramientas & Tecnologías</label>
          <input type="text" value="${escapeHtml(s.desc)}" oninput="updateSkillField(${idx}, 'desc', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function updateSkillField(idx, field, val) {
  state.profile.skills[idx][field] = val;
  renderPreview();
}

function addSkillCategoryItem() {
  state.profile.skills.push({
    title: "Nueva Categoría",
    desc: "Herramienta 1, Herramienta 2, Herramienta 3."
  });
  renderSkillsFormList();
  renderPreview();
}

window.removeSkillItem = function(idx) {
  state.profile.skills.splice(idx, 1);
  renderSkillsFormList();
  renderPreview();
};

// RENDER REAL-TIME PREVIEW IN THE 2-COLUMN LAYOUT
function renderPreview() {
  const container = document.getElementById('cv-preview-render');
  if (!container) return;

  const p = state.profile;
  const isEn = state.lang === 'en';

  const labels = isEn ? {
    contact: "Contact",
    techSkills: "Technical Skills",
    coreComp: "Core Competencies",
    execTraining: "Executive Training",
    languages: "Languages",
    community: "Community & Culture",
    aboutMe: "About Me",
    experience: "Professional Experience & Entrepreneurship",
    hackathons: "Hackathons, Accelerators & Innovation",
    education: "Formal Education"
  } : {
    contact: "Contacto",
    techSkills: "Habilidades Técnicas",
    coreComp: "Competencias Clave",
    execTraining: "Formación de Vanguardia",
    languages: "Idiomas",
    community: "Comunidad & Cultura",
    aboutMe: "Sobre Mí",
    experience: "Experiencia Profesional & Emprendimiento",
    hackathons: "Hackatones, Aceleradoras & Innovación",
    education: "Educación Formal"
  };

  const skillsHtml = (p.skills || []).map(s => `
    <div class="cv-skill-category">
      <div class="cv-skill-title">${escapeHtml(s.title)}</div>
      <div class="cv-skill-desc">${escapeHtml(s.desc)}</div>
    </div>
  `).join('');

  const softSkillsHtml = (p.softSkills || []).map(s => `
    <li class="cv-soft-item">
      <strong>${escapeHtml(s.name)}</strong>
      <span>${escapeHtml(s.desc)}</span>
    </li>
  `).join('');

  const trainingHtml = (p.executiveTraining || []).map(t => `
    <div class="text-[11px] text-slate-700 leading-snug mb-1.5">• ${escapeHtml(t)}</div>
  `).join('');

  const languagesHtml = (p.languages || []).map(l => `
    <div class="text-[11px] text-slate-700 leading-snug mb-1">
      <strong>${escapeHtml(l.name)}:</strong> ${escapeHtml(l.level)}
    </div>
  `).join('');

  const communityHtml = (p.community || []).map(c => `
    <div class="mb-2 text-[11px] leading-snug">
      <strong class="text-slate-900 block">${escapeHtml(c.name)}</strong>
      <span class="text-slate-600">${escapeHtml(c.desc)}</span>
    </div>
  `).join('');

  const experienceHtml = (p.experience || []).map(exp => `
    <div class="cv-entry">
      <div class="cv-entry-header">
        <div>
          <span class="cv-entry-title">${escapeHtml(exp.role)}</span>
          <span class="cv-entry-company"> — ${escapeHtml(exp.company)}</span>
        </div>
        <span class="cv-entry-meta">${escapeHtml(exp.period)}</span>
      </div>
      <ul class="cv-bullets">
        ${(exp.bullets || []).map(b => `<li>${formatBulletText(b)}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const hackathonsHtml = (p.hackathons || []).map(h => `
    <li class="mb-1.5 leading-snug text-[11px] text-slate-700">
      <strong class="text-slate-900">${escapeHtml(h.title)}:</strong> ${escapeHtml(h.desc)}
    </li>
  `).join('');

  const educationHtml = (p.education || []).map(edu => `
    <div class="cv-entry mb-2">
      <div class="cv-entry-header">
        <div>
          <span class="cv-entry-title">${escapeHtml(edu.degree)}</span>
          ${edu.badge ? `<span class="badge-gpa">${escapeHtml(edu.badge)}</span>` : ''}
        </div>
        <span class="cv-entry-meta">${escapeHtml(edu.period)}</span>
      </div>
      <div class="text-[11.5px] font-semibold text-slate-700">${escapeHtml(edu.school)}</div>
      ${edu.details ? `<div class="text-[11px] text-slate-600 mt-0.5 leading-relaxed">${escapeHtml(edu.details)}</div>` : ''}
    </div>
  `).join('');

  container.innerHTML = `
    <div class="cv-sheet">
      <!-- SIDEBAR -->
      <aside class="cv-sidebar">
        <!-- Contact -->
        <div class="cv-sidebar-section">
          <h3>${labels.contact}</h3>
          <ul class="cv-contact-list">
            ${p.contact.location ? `<li class="cv-contact-item"><span>📍</span><span>${escapeHtml(p.contact.location)}</span></li>` : ''}
            ${p.contact.email ? `<li class="cv-contact-item"><span>✉️</span><a href="mailto:${escapeHtml(p.contact.email)}">${escapeHtml(p.contact.email)}</a></li>` : ''}
            ${p.contact.phone ? `<li class="cv-contact-item"><span>📞</span><span>${escapeHtml(p.contact.phone)}</span></li>` : ''}
            ${p.contact.linkedin ? `<li class="cv-contact-item"><span>🔗</span><a href="${escapeHtml(p.contact.linkedin)}" target="_blank">${escapeHtml(p.contact.linkedinUser || p.contact.linkedin)}</a></li>` : ''}
            ${p.contact.github ? `<li class="cv-contact-item"><span>💻</span><a href="${escapeHtml(p.contact.github)}" target="_blank">${escapeHtml(p.contact.githubUser || p.contact.github)}</a></li>` : ''}
          </ul>
        </div>

        <!-- Skills -->
        <div class="cv-sidebar-section">
          <h3>${labels.techSkills}</h3>
          ${skillsHtml}
        </div>

        <!-- Soft Skills -->
        <div class="cv-sidebar-section">
          <h3>${labels.coreComp}</h3>
          <ul class="cv-soft-list">
            ${softSkillsHtml}
          </ul>
        </div>

        <!-- Training -->
        ${(p.executiveTraining && p.executiveTraining.length > 0) ? `
          <div class="cv-sidebar-section">
            <h3>${labels.execTraining}</h3>
            ${trainingHtml}
          </div>
        ` : ''}

        <!-- Languages -->
        <div class="cv-sidebar-section">
          <h3>${labels.languages}</h3>
          ${languagesHtml}
        </div>

        <!-- Community -->
        ${(p.community && p.community.length > 0) ? `
          <div class="cv-sidebar-section">
            <h3>${labels.community}</h3>
            ${communityHtml}
          </div>
        ` : ''}
      </aside>

      <!-- MAIN CONTENT -->
      <main class="cv-main">
        <!-- Header -->
        <header class="cv-header">
          <h1 class="cv-name">${escapeHtml(p.fullName)}</h1>
          <div class="cv-headline">${escapeHtml(p.headline)}</div>
        </header>

        <!-- About Me -->
        <section class="cv-section">
          <h2>${labels.aboutMe}</h2>
          <p class="cv-about-text">${escapeHtml(p.about)}</p>
        </section>

        <!-- Experience -->
        <section class="cv-section">
          <h2>${labels.experience}</h2>
          ${experienceHtml}
        </section>

        <!-- Hackathons -->
        ${(p.hackathons && p.hackathons.length > 0) ? `
          <section class="cv-section">
            <h2>${labels.hackathons}</h2>
            <ul class="cv-bullets">
              ${hackathonsHtml}
            </ul>
          </section>
        ` : ''}

        <!-- Education -->
        <section class="cv-section">
          <h2>${labels.education}</h2>
          ${educationHtml}
        </section>
      </main>
    </div>
  `;
}

// Format bullet text highlighting first action phrases
function formatBulletText(text) {
  const clean = escapeHtml(text);
  const commaIdx = clean.indexOf(',');
  if (commaIdx > 5 && commaIdx < 45) {
    return `<strong>${clean.substring(0, commaIdx)}</strong>${clean.substring(commaIdx)}`;
  }
  return clean;
}

// Download complete self-contained HTML
function downloadHTML() {
  const container = document.getElementById('cv-preview-render');
  if (!container) return;

  const htmlContent = `<!DOCTYPE html>
<html lang="${state.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume - ${escapeHtml(state.profile.fullName)}</title>
  <style>
    ${document.querySelector('link[href*="styles.css"]') ? '' : ''}
    /* Embed critical styles */
    ${getCSSRules()}
  </style>
</head>
<body style="background:#f1f5f9; padding:20px 0;">
  ${container.innerHTML}
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `CV_${state.profile.fullName.replace(/\s+/g, '_')}_${state.lang.toUpperCase()}.html`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Archivo HTML descargado');
}

// Extract CSS rules from stylesheet
function getCSSRules() {
  let cssText = '';
  for (const sheet of document.styleSheets) {
    try {
      if (sheet.href && sheet.href.includes('styles.css')) {
        for (const rule of sheet.cssRules) {
          cssText += rule.cssText + '\n';
        }
      }
    } catch (e) {}
  }
  return cssText;
}

// Copy Markdown version to clipboard
function copyMarkdown() {
  const p = state.profile;
  const isEn = state.lang === 'en';

  let md = `# ${p.fullName.toUpperCase()}\n`;
  md += `**${p.headline}**\n`;
  md += `${p.contact.location} · ${p.contact.email} · ${p.contact.phone}\n`;
  md += `[LinkedIn](${p.contact.linkedin}) · [GitHub](${p.contact.github})\n\n---\n\n`;

  md += `## ${isEn ? 'ABOUT ME' : 'SOBRE MÍ'}\n${p.about}\n\n---\n\n`;

  md += `## ${isEn ? 'PROFESSIONAL EXPERIENCE & ENTREPRENEURSHIP' : 'EXPERIENCIA PROFESIONAL & EMPRENDIMIENTO'}\n\n`;
  p.experience.forEach(exp => {
    md += `### ${exp.role} — ${exp.company}\n`;
    md += `*${exp.period}*\n`;
    exp.bullets.forEach(b => {
      md += `- ${b}\n`;
    });
    md += `\n`;
  });

  md += `---\n\n## ${isEn ? 'HACKATHONS & INNOVATION' : 'HACKATONES & INNOVACIÓN'}\n\n`;
  p.hackathons.forEach(h => {
    md += `- **${h.title}:** ${h.desc}\n`;
  });

  md += `\n---\n\n## ${isEn ? 'FORMAL EDUCATION' : 'EDUCACIÓN FORMAL'}\n\n`;
  p.education.forEach(edu => {
    md += `### ${edu.degree} — ${edu.school}\n`;
    md += `*${edu.period}* ${edu.badge ? `· **${edu.badge}**` : ''}\n`;
    if (edu.details) md += `${edu.details}\n`;
    md += `\n`;
  });

  md += `---\n\n## ${isEn ? 'TECHNICAL SKILLS' : 'HABILIDADES TÉCNICAS'}\n\n`;
  p.skills.forEach(s => {
    md += `- **${s.title}:** ${s.desc}\n`;
  });

  navigator.clipboard.writeText(md).then(() => {
    showToast('📋 Markdown copiado al portapapeles');
  });
}

// Save profile state to JSON file
function saveJSON() {
  readFormIntoState();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.profile, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `perfil_cv_${state.profile.fullName.replace(/\s+/g, '_')}_${state.lang}.json`);
  dlAnchor.click();
  showToast('💾 Perfil guardado en archivo JSON');
}

// Load profile state from JSON file
function loadJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      state.profile = parsed;
      state.profiles[state.lang] = parsed;
      populateFormFromState();
      renderPreview();
      showToast('📂 Perfil cargado exitosamente');
    } catch (err) {
      alert('Error al leer el archivo JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// Helper to escape HTML characters
function escapeHtml(text) {
  if (!text) return '';
  return text
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Toast notification helper
function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-5 right-5 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl text-xs font-semibold z-50 transition-opacity duration-300 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');
  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 2500);
}
