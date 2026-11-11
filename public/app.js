/**
 * CV Alto Impacto - Application Engine
 * Generador Estratégico de CVs Bilingües (ES / EN) basado en la Metodología Platzi.
 * Flexible, configurable y adaptado para diversos perfiles estudiantiles y profesionales.
 */

// ==========================================
// ARQUETIPOS PEDAGÓGICOS (SIN DATOS PERSONALES)
// ==========================================

const ARCHETYPES = {
  // ARQUETIPO 1: ESTUDIANTE / PRIMER EMPLEO / PRÁCTICAS
  student: {
    es: {
      fullName: "Sofía Valeria Morales",
      headline: "Estudiante de Ingeniería de Software · Desarrollo Web & Cloud · Prácticas Profesionales",
      contact: {
        location: "Guadalajara, Jalisco, México",
        email: "sofia.morales.dev@email.com",
        phone: "+52 33 1234 5678",
        linkedin: "https://linkedin.com/in/sofia-morales-dev",
        linkedinUser: "in/sofia-morales-dev",
        github: "https://github.com/sofiamorales-dev",
        githubUser: "github.com/sofiamorales-dev"
      },
      about: "Estudiante destacada de 7° semestre de Ingeniería de Software con alto rendimiento académico. Apasionada por el desarrollo de aplicaciones web full-stack, arquitecturas cloud y computación distribuida. Experiencia práctica en proyectos universitarios interdisciplinarios y retos hackathon aplicando metodologías ágiles (Scrum), control de versiones con Git y pruebas unitarias. Mi objetivo es integrarme a un equipo dinámico como becaria o practicante de desarrollo de software, donde pueda aplicar mis bases en JavaScript, Python y bases de datos para resolver problemas reales mientras acelero mi crecimiento técnico.",
      skills: [
        { title: "Frontend & UI", desc: "HTML5 semántico, CSS3, JavaScript moderno (ES6+), React.js, Tailwind CSS, Responsive Design." },
        { title: "Backend & APIs", desc: "Node.js, Express, Python (FastAPI), Creación y consumo de RESTful APIs, JWT Auth." },
        { title: "Bases de Datos", desc: "PostgreSQL, MySQL, MongoDB, Modelado Entidad-Relación, Consultas optimizadas con SQL." },
        { title: "Herramientas & DevOps", desc: "Git & GitHub, Docker básico, Postman, Linux (bash), Despliegues en Vercel y Railway." }
      ],
      softSkills: [
        { name: "Autonomía & Curiosidad de Aprendizaje", desc: "Capacidad de dominar nuevas herramientas y documentación técnica de forma ágil." },
        { name: "Trabajo Colaborativo", desc: "Coordinación efectiva en sprints universitarios y dinámicas de pair programming." },
        { name: "Comunicación Asertiva", desc: "Presentación clara de avances técnicos a profesores y compañeros no técnicos." },
        { name: "Resolución Estructurada de Problemas", desc: "Desglose algorítmico y depuración sistemática de bugs y casos de uso." }
      ],
      executiveTraining: [
        "Platzi: Escuela de Desarrollo Web & JavaScript (Fundamentos y Arquitectura Frontend).",
        "Certificación CS50: Introduction to Computer Science (Harvard Online)."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2 Profesional Técnico (Lectura fluida de documentación técnica y redacción)." }
      ],
      community: [
        { name: "Club Universitario de Programación Competitiva", desc: "Miembro activo; resolución semanal de retos algorítmicos en LeetCode/HackerRank." },
        { name: "Voluntariado en Alfabetización Digital", desc: "Facilitadora en talleres comunitarios de computación básica para adultos mayores." }
      ],
      experience: [
        {
          role: "Líder Técnica & Desarrolladora Frontend (Proyecto de Titulación / Práctica)",
          company: "Plataforma Universitaria de Gestión de Tutorías",
          period: "2025 – Presente | Proyecto Académico",
          bullets: [
            "Diseñé y programé la interfaz web responsiva en React y Tailwind CSS, utilizada en pruebas piloto por más de 180 estudiantes y docentes.",
            "Construí componentes reutilizables y formularios dinámicos con validación en tiempo real, reduciendo la tasa de errores de captura en un 35%.",
            "Colaboré en la integración con el backend RESTful en Node.js mediante endpoints seguros con autenticación JWT."
          ]
        },
        {
          role: "Desarrolladora Web & Soporte a Proyectos (Servicio Social / Freelance)",
          company: "Laboratorio de Innovación Educativa",
          period: "2024 – 2025 | Guadalajara, MX",
          bullets: [
            "Automaticé el sistema de reservación de laboratorios mediante un script en Python y base de datos SQLite, eliminando cruces de horarios en un 100%.",
            "Elaboré manuales de usuario y documentación técnica de arquitectura para facilitar el mantenimiento por futuros estudiantes."
          ]
        }
      ],
      hackathons: [
        {
          title: "Hackathon Universitario de Innovación Abierta (2° Lugar)",
          desc: "Desarrollo en equipo de 4 personas de un prototipo de asistente escolar con IA en 36 horas continuas."
        },
        {
          title: "Taller Intensivo de Desarrollo Ágil (Scrum Alliance)",
          desc: "Certificación práctica simulando ceremonias ágiles, historias de usuario y estimación por story points."
        }
      ],
      education: [
        {
          degree: "Licenciatura en Ingeniería de Software",
          school: "Universidad de Guadalajara — CUCEI",
          period: "2022 – 2026 (7° Semestre)",
          badge: "Promedio: 94.5 / 100",
          details: "Materias clave: Estructuras de Datos, Algoritmos Avanzados, Arquitectura de Software, Bases de Datos Relacionales y Redes."
        }
      ]
    },
    en: {
      fullName: "Sofia Valeria Morales",
      headline: "Software Engineering Student · Web & Cloud Development · Seeking Software Engineering Internship",
      contact: {
        location: "Guadalajara, Jalisco, Mexico",
        email: "sofia.morales.dev@email.com",
        phone: "+52 33 1234 5678",
        linkedin: "https://linkedin.com/in/sofia-morales-dev",
        linkedinUser: "in/sofia-morales-dev",
        github: "https://github.com/sofiamorales-dev",
        githubUser: "github.com/sofiamorales-dev"
      },
      about: "Senior Software Engineering student with high academic standing. Passionate about full-stack web development, cloud architectures, and distributed systems. Hands-on experience developing collaborative academic projects and competing in hackathons using Agile (Scrum), Git version control, and automated unit testing. Seeking a Software Engineering Internship to apply solid fundamentals in JavaScript, Python, and SQL databases while contributing immediately to production software and accelerating technical growth.",
      skills: [
        { title: "Frontend & UI", desc: "Semantic HTML5, CSS3, Modern JavaScript (ES6+), React.js, Tailwind CSS, Responsive Design." },
        { title: "Backend & APIs", desc: "Node.js, Express, Python (FastAPI), RESTful API Design & Consumption, JWT Authentication." },
        { title: "Databases", desc: "PostgreSQL, MySQL, MongoDB, Relational Data Modeling, Query Optimization with SQL." },
        { title: "Tools & DevOps", desc: "Git & GitHub, Docker fundamentals, Postman, Linux (bash), Deployments on Vercel and Railway." }
      ],
      softSkills: [
        { name: "Continuous Learning & Curiosity", desc: "Proven ability to rapidly master new frameworks, libraries, and technical documentation." },
        { name: "Team Collaboration & Pair Programming", desc: "Effective coordination in academic sprints, active listener in code reviews." },
        { name: "Clear Communication", desc: "Translating technical milestones into clear summaries for non-technical stakeholders." },
        { name: "Structured Problem Solving", desc: "Algorithmic thinking and systematic debugging of edge cases and defects." }
      ],
      executiveTraining: [
        "Platzi: Web Development & JavaScript Academy (Frontend Architecture & Standards).",
        "CS50 Certification: Introduction to Computer Science (Harvard Online)."
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B2 Professional Working Proficiency (Technical reading, documentation, and interviews)." }
      ],
      community: [
        { name: "Competitive Programming Club", desc: "Active member; weekly problem-solving sessions on LeetCode and HackerRank." },
        { name: "Digital Literacy Volunteer", desc: "Instructor in community workshops teaching foundational computer skills to senior citizens." }
      ],
      experience: [
        {
          role: "Tech Lead & Frontend Developer (Capstone Project / Internship)",
          company: "University Tutoring Management Platform",
          period: "2025 – Present | Academic Project",
          bullets: [
            "Architected and developed a responsive web interface in React and Tailwind CSS, piloted across 180+ university students and faculty members.",
            "Engineered reusable UI components and dynamic forms with real-time validation, cutting form submission error rates by 35%.",
            "Collaborated on RESTful backend integration with Node.js endpoints secured via JWT token authentication."
          ]
        },
        {
          role: "Web Developer & Project Assistant (Social Service / Freelance)",
          company: "Educational Innovation Laboratory",
          period: "2024 – 2025 | Guadalajara, MX",
          bullets: [
            "Automated laboratory resource scheduling using a Python automation script and SQLite database, eliminating schedule conflicts by 100%.",
            "Authored comprehensive user documentation and architectural guides to ensure seamless handoff to future students."
          ]
        }
      ],
      hackathons: [
        {
          title: "University Open Innovation Hackathon (2nd Place)",
          desc: "Built an AI-assisted campus study guide prototype with a 4-person team within a 36-hour sprint."
        },
        {
          title: "Intensive Agile Software Workshop (Scrum Alliance)",
          desc: "Hands-on simulation covering sprint planning, user story decomposition, and story point velocity estimation."
        }
      ],
      education: [
        {
          degree: "B.S. in Software Engineering",
          school: "Universidad de Guadalajara — CUCEI",
          period: "2022 – 2026 (Senior Year)",
          badge: "GPA: 94.5 / 100",
          details: "Key Coursework: Data Structures, Advanced Algorithms, Software Architecture, Relational Databases, and Computer Networks."
        }
      ]
    }
  },

  // ARQUETIPO 2: DESARROLLADOR DE SOFTWARE / TECH & AI (MID / JUNIOR)
  tech: {
    es: {
      fullName: "Carlos Eduardo Mendoza",
      headline: "Full Stack Software Engineer · TypeScript, Node.js & React · Cloud Architecture & Microservices",
      contact: {
        location: "Guadalajara, Jalisco, México",
        email: "carlos.mendoza.code@email.com",
        phone: "+52 33 9876 5432",
        linkedin: "https://linkedin.com/in/carlos-mendoza-dev",
        linkedinUser: "in/carlos-mendoza-dev",
        github: "https://github.com/carlosmendoza-code",
        githubUser: "github.com/carlosmendoza-code"
      },
      about: "Ingeniero de Software con más de 3 años de experiencia diseñando y desplegando aplicaciones web escalables, arquitecturas de microservicios y APIs de alto tráfico en entornos cloud. Especialista en TypeScript, Node.js, React, Docker y bases de datos relacionales y NoSQL. Historial probado de optimización de rendimiento: he reducido tiempos de respuesta de APIs en un 40% y disminuido costos de infraestructura en un 25% mediante caching inteligente y refactorización orientada a buenas prácticas. Apasionado por la integración de modelos de lenguaje e inteligencia artificial para automatizar procesos empresariales. Enfocado en aportar código limpio, mantenible y valor directo al negocio bajo metodologías ágiles.",
      skills: [
        { title: "Frontend & Frameworks", desc: "TypeScript, React.js, Next.js, Redux Toolkit, Tailwind CSS, Jest, Cypress, Microfrontends." },
        { title: "Backend & Microservicios", desc: "Node.js, Express, NestJS, Python, RESTful APIs, GraphQL, gRPC, Arquitectura Hexagonal." },
        { title: "Bases de Datos & Caching", desc: "PostgreSQL, MongoDB, Redis (estrategias de caching), Prisma ORM, Indexación y Tuning SQL." },
        { title: "Cloud & DevOps", desc: "AWS (S3, ECS, Lambda), Docker, CI/CD con GitHub Actions, Nginx, Monitoreo con Datadog/CloudWatch." },
        { title: "IA Aplicada & Agentes", desc: "Integración de OpenAI API, Anthropic, LangChain, embeddings vectoriales (Pinecone), automatizaciones agénticas." }
      ],
      softSkills: [
        { name: "Resolución Metódica & Root-Cause Analysis", desc: "Diagnóstico profundo y solución eficaz de incidentes críticos en producción." },
        { name: "Mentalidad Orientada a Producto", desc: "Priorización de características técnicas basada en métricas de retención y valor de negocio." },
        { name: "Liderazgo Técnico & Mentoring", desc: "Capacitación a desarrolladores junior y facilitación de revisiones de código exhaustivas." },
        { name: "Colaboración Ágil (Scrum/Kanban)", desc: "Gestión rigurosa de sprints, estimaciones precisas y entregas continuas sin fricciones." }
      ],
      executiveTraining: [
        "AWS Certified Solutions Architect – Associate (Credencial Oficial).",
        "Diplomado Avanzado en Arquitectura de Microservicios & Clean Architecture."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "C1 Avanzado Profesional (Trabajo diario con equipos remotos en EE.UU. y Europa)." }
      ],
      community: [
        { name: "Comunidad Tech Guadalajara", desc: "Speaker ocasional en meetups locales sobre optimización de rendimiento en Node.js." },
        { name: "Contribuidor Open Source", desc: "Pull requests aprobados en librerías de componentes UI y utilidades para React en GitHub." }
      ],
      experience: [
        {
          role: "Mid Full Stack Software Engineer",
          company: "Novatech Digital Solutions (SaaS Fintech)",
          period: "2023 – Presente | Guadalajara, MX",
          bullets: [
            "Arquitecté y desarrollé módulos transaccionales críticos en NestJS y TypeScript, procesando más de 120,000 operaciones mensuales con un uptime de 99.95%.",
            "Reduje la latencia promedio de respuesta de las APIs principales de 450ms a menos de 120ms implementando Redis como capa distribuida de caching.",
            "Lideré la migración del frontend monolítico a Next.js 14 con Server Components, mejorando el puntaje de Google Core Web Vitals en un 42%.",
            "Automaticé los flujos de integración y despliegue continuo (CI/CD) en GitHub Actions, recortando los tiempos de entrega a producción de 45 a 12 minutos."
          ]
        },
        {
          role: "Junior Software Developer",
          company: "Apex Consulting Labs",
          period: "2021 – 2023 | Guadalajara, MX",
          bullets: [
            "Construí más de 15 paneles administrativos dinámicos con React y REST APIs en Node.js para clientes de e-commerce y logística.",
            "Optimicé consultas complejas en PostgreSQL mediante reindexación estratégica y particionamiento, disminuyendo el tiempo de reportes diarios en un 60%.",
            "Implementé suites de pruebas unitarias y de integración alcanzando 85% de cobertura en componentes centrales del sistema."
          ]
        }
      ],
      hackathons: [
        {
          title: "Global AI Hackathon (Top 5 Finalist)",
          desc: "Creación de un copiloto agéntico para análisis predictivo de fraudes bancarios en 48 horas."
        },
        {
          title: "Reto de Ciberseguridad & Resiliencia Cloud",
          desc: "Auditoría automatizada de vulnerabilidades OWASP en arquitecturas contenerizadas."
        }
      ],
      education: [
        {
          degree: "Licenciatura en Ingeniería en Computación",
          school: "Universidad de Guadalajara",
          period: "2017 – 2021",
          badge: "Titulado con Honores",
          details: "Especialización en Sistemas Distribuidos, Redes de Comunicación y Bases de Datos Avanzadas."
        }
      ]
    },
    en: {
      fullName: "Carlos Eduardo Mendoza",
      headline: "Full Stack Software Engineer · TypeScript, Node.js & React · Cloud Architecture & Microservices",
      contact: {
        location: "Guadalajara, Jalisco, Mexico",
        email: "carlos.mendoza.code@email.com",
        phone: "+52 33 9876 5432",
        linkedin: "https://linkedin.com/in/carlos-mendoza-dev",
        linkedinUser: "in/carlos-mendoza-dev",
        github: "https://github.com/carlosmendoza-code",
        githubUser: "github.com/carlosmendoza-code"
      },
      about: "Software Engineer with 3+ years of experience designing and deploying scalable web applications, microservices architectures, and high-throughput APIs in cloud environments. Specialist in TypeScript, Node.js, React, Docker, and relational/NoSQL databases. Proven track record of performance engineering: reduced API response latency by 40% and cut cloud infrastructure costs by 25% through distributed caching and clean architecture refactoring. Passionate about LLM integration and agentic workflows to automate mission-critical business processes. Dedicated to writing clean, maintainable code delivering direct business value within Agile teams.",
      skills: [
        { title: "Frontend & Frameworks", desc: "TypeScript, React.js, Next.js, Redux Toolkit, Tailwind CSS, Jest, Cypress, Microfrontends." },
        { title: "Backend & Microservices", desc: "Node.js, Express, NestJS, Python, RESTful APIs, GraphQL, gRPC, Hexagonal Architecture." },
        { title: "Databases & Caching", desc: "PostgreSQL, MongoDB, Redis (caching strategies), Prisma ORM, Indexing and SQL Query Tuning." },
        { title: "Cloud & DevOps", desc: "AWS (S3, ECS, Lambda), Docker, CI/CD with GitHub Actions, Nginx, Datadog/CloudWatch Monitoring." },
        { title: "Applied AI & Agents", desc: "OpenAI API integration, Anthropic, LangChain, vector embeddings (Pinecone), autonomous agent workflows." }
      ],
      softSkills: [
        { name: "Root-Cause Analysis & Debugging", desc: "Deep diagnostic skill and rapid resolution of critical production outages." },
        { name: "Product-Driven Engineering", desc: "Prioritizing technical debt vs features according to customer retention metrics." },
        { name: "Technical Mentorship", desc: "Mentoring junior engineers and conducting high-standard, constructive code reviews." },
        { name: "Agile Ownership (Scrum/Kanban)", desc: "Disciplined sprint delivery, accurate time estimation, and reliable production releases." }
      ],
      executiveTraining: [
        "AWS Certified Solutions Architect – Associate (Official Credential).",
        "Advanced Diploma in Microservices Architecture & Clean Code."
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "C1 Advanced Professional (Daily cross-border collaboration with US & European distributed teams)." }
      ],
      community: [
        { name: "Guadalajara Tech Community", desc: "Occasional speaker at local meetups on Node.js performance optimization." },
        { name: "Open Source Contributor", desc: "Merged PRs in popular React component libraries and developer tooling on GitHub." }
      ],
      experience: [
        {
          role: "Mid Full Stack Software Engineer",
          company: "Novatech Digital Solutions (Fintech SaaS)",
          period: "2023 – Present | Guadalajara, MX",
          bullets: [
            "Architected and implemented mission-critical transaction modules in NestJS and TypeScript, processing 120,000+ monthly events at 99.95% uptime.",
            "Reduced core API response latency from 450ms down to sub-120ms by introducing Redis as an elastic distributed caching tier.",
            "Spearheaded monolithic frontend migration to Next.js 14 with React Server Components, boosting Google Core Web Vitals score by 42%.",
            "Automated continuous integration and delivery (CI/CD) pipelines in GitHub Actions, shortening release deployment cycles from 45 to 12 minutes."
          ]
        },
        {
          role: "Junior Software Developer",
          company: "Apex Consulting Labs",
          period: "2021 – 2023 | Guadalajara, MX",
          bullets: [
            "Constructed 15+ dynamic enterprise admin dashboards with React and Node.js REST APIs for e-commerce and logistics clients.",
            "Optimized high-volume PostgreSQL queries via strategic partial indexing and table partitioning, slashing daily reporting execution time by 60%.",
            "Instituted comprehensive unit and integration test suites, raising test coverage across core system services to 85%."
          ]
        }
      ],
      hackathons: [
        {
          title: "Global AI Hackathon (Top 5 Finalist)",
          desc: "Engineered an agentic copilot for predictive fraud detection on streaming financial transactions in 48 hours."
        },
        {
          title: "Cybersecurity & Cloud Resilience Challenge",
          desc: "Automated vulnerability scanning pipeline targeting OWASP Top 10 exploits across containerized microservices."
        }
      ],
      education: [
        {
          degree: "B.S. in Computer Engineering",
          school: "Universidad de Guadalajara",
          period: "2017 – 2021",
          badge: "Graduated with Honors",
          details: "Specialized in Distributed Systems, Telecommunications Networks, and Advanced Relational Databases."
        }
      ]
    }
  },

  // ARQUETIPO 3: CAMBIO DE CARRERA / PERFIL HÍBRIDO MULTIDISCIPLINARIO
  career_change: {
    es: {
      fullName: "Mariana Ruiz Delgado",
      headline: "Data Analyst & Business Intelligence · Background en Estrategia Financiera · Python & SQL",
      contact: {
        location: "Guadalajara, Jalisco, México",
        email: "mariana.ruiz.analytics@email.com",
        phone: "+52 33 4567 8901",
        linkedin: "https://linkedin.com/in/mariana-ruiz-bi",
        linkedinUser: "in/mariana-ruiz-bi",
        github: "https://github.com/marianaruiz-data",
        githubUser: "github.com/marianaruiz-data"
      },
      about: "Profesional analítica con sólida trayectoria previa en finanzas corporativas y administración de negocios, complementada con formación rigurosa en ciencia de datos, SQL analítico, Python y visualización estratégica con Power BI. Mi valor diferencial radica en tender un puente natural entre la profundidad técnica de los datos y las decisiones ejecutivas de negocio: no solo construyo modelos y tableros, sino que identifico las palancas exactas de rentabilidad y reducción de costos. Experiencia comprobada transformando millones de registros dispersos en dashboards automatizados que ahorran más de 20 horas semanales de reportería manual y permiten proyecciones financieras fiables.",
      skills: [
        { title: "Análisis de Datos & Programación", desc: "Python (Pandas, NumPy, Scikit-Learn), SQL Analítico avanzado (Window functions, CTEs), R básico." },
        { title: "Business Intelligence & Tableros", desc: "Power BI (DAX, Power Query), Tableau, Google Data Studio, Storytelling de Datos, Diseño UX para directivos." },
        { title: "Modelado & Estrategia Financiera", desc: "Modelación financiera en Excel (VBA, Power Pivot), Cálculo de KPIs de rendimiento (ROI, LTV, CAC, Churn)." },
        { title: "Bases de Datos & ETLs", desc: "PostgreSQL, BigQuery, Snowflake, Automatización de pipelines de extracción y limpieza de datos." }
      ],
      softSkills: [
        { name: "Traducción de Datos a Negocio (Storytelling)", desc: "Facilidad para comunicar insights analíticos complejos a comités ejecutivos y directores." },
        { name: "Pensamiento Estratégico & Comercial", desc: "Comprensión integral de cuentas de resultados (P&L), flujos de caja y márgenes de utilidad." },
        { name: "Gestión del Cambio & Adaptabilidad", desc: "Capacidad demostrada de reinvención profesional y adopción acelerada de tecnologías emergentes." },
        { name: "Negociación con Stakeholders", desc: "Alineación de expectativas entre áreas de tecnología, ventas, finanzas y operaciones." }
      ],
      executiveTraining: [
        "Bootcamp de Data Analytics & Machine Learning (450 horas prácticas con proyectos reales).",
        "Certificación Microsoft Certified: Power BI Data Analyst Associate (PL-300)."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2+ Profesional (Negociación comercial y presentaciones ejecutivas internacionales)." }
      ],
      community: [
        { name: "Comunidad Women in Data / PyLadies", desc: "Participante activa y mentora en talleres introductorios de análisis de datos con Python." },
        { name: "Club de Inversiones & Finanzas Personales", desc: "Co-organizadora de sesiones mensuales sobre evaluación de activos e indicadores macroeconómicos." }
      ],
      experience: [
        {
          role: "Analista de Business Intelligence & Datos (Transición Tecnológica)",
          company: "FinTech & Analytics Consulting Group",
          period: "2024 – Presente | Guadalajara, MX",
          bullets: [
            "Construí y automaticé el pipeline de reportes financieros en SQL y Power BI, reduciendo el tiempo de generación de informes mensuales de 5 días a 15 minutos.",
            "Diseñé un modelo analítico de segmentación de clientes con Python (clustering k-means) que incrementó la tasa de conversión de campañas en un 28%.",
            "Estandaricé los diccionarios de métricas clave (MRR, churn rate, retention cohorts) para alinear a los equipos de Marketing y Finanzas."
          ]
        },
        {
          role: "Coordinadora de Estrategia y Control Financiero",
          company: "Corporativo Inmobiliario & Servicios",
          period: "2020 – 2024 | Guadalajara, MX",
          bullets: [
            "Gestioné presupuestos anuales superiores a $35M MXN, identificando desviaciones operativas y generando ahorros en compras del 12%.",
            "Lideré la transición de hojas de cálculo manuales dispersas a un ERP consolidado, capacitando a más de 25 colaboradores de diferentes departamentos.",
            "Elaboré análisis de sensibilidad y proyecciones de flujo de caja para comités directivos de toma de decisiones de inversión."
          ]
        }
      ],
      hackathons: [
        {
          title: "Datathon de Inclusión Financiera con IA",
          desc: "Desarrollo de un modelo de scoring alternativo de crédito para pymes no bancarizadas utilizando datos abiertos."
        }
      ],
      education: [
        {
          degree: "Diploma Especializado en Data Science & Business Intelligence",
          school: "Tech Institute & Platzi",
          period: "2024",
          badge: "Acreditado con Excelencia",
          details: "Formación intensiva en extracción de datos con SQL, análisis exploratorio con Python y visualización ejecutiva."
        },
        {
          degree: "Licenciatura en Administración de Empresas y Finanzas",
          school: "Universidad de Guadalajara",
          period: "2016 – 2020",
          badge: "Titulada",
          details: "Enfoque en finanzas corporativas, auditoría interna, microeconomía y formulación de proyectos de inversión."
        }
      ]
    },
    en: {
      fullName: "Mariana Ruiz Delgado",
      headline: "Data Analyst & Business Intelligence · Background in Financial Strategy · Python & SQL",
      contact: {
        location: "Guadalajara, Jalisco, Mexico",
        email: "mariana.ruiz.analytics@email.com",
        phone: "+52 33 4567 8901",
        linkedin: "https://linkedin.com/in/mariana-ruiz-bi",
        linkedinUser: "in/mariana-ruiz-bi",
        github: "https://github.com/marianaruiz-data",
        githubUser: "github.com/marianaruiz-data"
      },
      about: "Analytical professional blending a solid foundation in corporate finance and business administration with rigorous training in data science, advanced SQL, Python, and strategic Power BI visualization. My core differentiator is building a seamless bridge between technical data depth and executive decision-making: I translate raw tabular datasets into high-impact operational dashboards and predictive insights that directly drive profitability and cost savings. Proven record of transforming fragmented enterprise databases into automated reporting systems that save 20+ hours of manual reporting per week while enabling reliable cash flow forecasting.",
      skills: [
        { title: "Data Analysis & Programming", desc: "Python (Pandas, NumPy, Scikit-Learn), Advanced Analytical SQL (Window functions, CTEs), basic R." },
        { title: "Business Intelligence & Dashboards", desc: "Power BI (DAX, Power Query), Tableau, Google Looker Studio, Executive Data Storytelling, UX." },
        { title: "Financial Modeling & KPIs", desc: "Advanced Excel (VBA, Power Pivot), Financial performance metrics (ROI, LTV, CAC, Net Churn, P&L)." },
        { title: "Databases & ETL Pipelines", desc: "PostgreSQL, BigQuery, Snowflake, Automated ingestion and data hygiene pipelines." }
      ],
      softSkills: [
        { name: "Executive Data Storytelling", desc: "Synthesizing complex quantitative conclusions into crisp, actionable executive decisions." },
        { name: "Strategic Business Acumen", desc: "Holistic understanding of balance sheets, operating margins, and profit levers." },
        { name: "Career Adaptability & Resilience", desc: "Demonstrated capacity for rapid technical reinvention and mastering modern data stacks." },
        { name: "Cross-Functional Stakeholder Alignment", desc: "Fostering alignment between engineering, finance, marketing, and business operations." }
      ],
      executiveTraining: [
        "Data Analytics & Machine Learning Bootcamp (450 intensive project hours).",
        "Microsoft Certified: Power BI Data Analyst Associate (Exam PL-300 Official Credential)."
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B2+ Full Professional (Executive business negotiation and cross-border client presentations)." }
      ],
      community: [
        { name: "Women in Data & PyLadies Chapter", desc: "Active member and mentor in introductory data analysis workshops with Python." },
        { name: "Investment & Economics Club", desc: "Co-host of monthly sessions dissecting macroeconomic trends and valuation models." }
      ],
      experience: [
        {
          role: "Business Intelligence & Data Analyst (Tech Career Transition)",
          company: "FinTech & Analytics Consulting Group",
          period: "2024 – Present | Guadalajara, MX",
          bullets: [
            "Architected and automated financial reporting pipelines in SQL and Power BI, reducing monthly executive report delivery from 5 business days to under 15 minutes.",
            "Designed a predictive customer segmentation model in Python (k-means clustering), lifting target marketing conversion rates by 28%.",
            "Standardized enterprise metric dictionaries (MRR, net churn rate, retention cohorts) across marketing and finance leadership teams."
          ]
        },
        {
          role: "Financial Strategy & Controller Lead",
          company: "Commercial Real Estate & Services Group",
          period: "2020 – 2024 | Guadalajara, MX",
          bullets: [
            "Supervised annual operating budgets exceeding $2M USD, isolating vendor cost overruns and securing 12% in procurement savings.",
            "Spearheaded enterprise migration from legacy disconnected spreadsheets to an ERP system, training 25+ cross-department users.",
            "Built sensitivity analysis and discounted cash flow models for executive board investment reviews."
          ]
        }
      ],
      hackathons: [
        {
          title: "AI Financial Inclusion Datathon",
          desc: "Engineered an alternative credit scoring model for unbanked micro-enterprises leveraging public open datasets."
        }
      ],
      education: [
        {
          degree: "Applied Data Science & Business Intelligence Diploma",
          school: "Tech Institute & Platzi",
          period: "2024",
          badge: "Graduated with Honors",
          details: "Intensive training in SQL data engineering, exploratory data analysis with Python, and executive dashboards."
        },
        {
          degree: "B.S. in Business Administration & Corporate Finance",
          school: "Universidad de Guadalajara",
          period: "2016 – 2020",
          badge: "Licensed & Graduated",
          details: "Core focus in corporate finance, financial audits, microeconomics, and capital expenditure analysis."
        }
      ]
    }
  },

  // ARQUETIPO 4: PLANTILLA EN BLANCO (BLANK / CUSTOM)
  blank: {
    es: {
      fullName: "Tu Nombre Completo",
      headline: "Tu Profesión Principal · Especialidad en Demanda · Rol Objetivo",
      contact: {
        location: "Tu Ciudad, Estado, País",
        email: "tu.correo@ejemplo.com",
        phone: "+52 33 0000 0000",
        linkedin: "https://linkedin.com/in/tu-usuario",
        linkedinUser: "in/tu-usuario",
        github: "https://github.com/tu-usuario",
        githubUser: "github.com/tu-usuario"
      },
      about: "Escribe aquí tu perfil profesional en primera persona (5 a 7 líneas). Explica quién eres, tus fortalezas técnicas y humanas clave, y qué valor tangible aportarás al equipo o empresa a la que aplicas. Según la metodología Platzi, sé conciso y evita frases genéricas como 'orientado a resultados'; mejor demuestra tus capacidades con ejemplos concretos.",
      skills: [
        { title: "Área Técnica Principal", desc: "Herramienta 1, Herramienta 2, Herramienta 3, Lenguaje o Framework clave." },
        { title: "Herramientas de Soporte", desc: "Software, bases de datos o plataformas que dominas con solvencia." }
      ],
      softSkills: [
        { name: "Habilidad Blanda Destacada", desc: "Breve evidencia práctica de cómo aplicas esta habilidad con tu equipo." },
        { name: "Trabajo en Equipo", desc: "Capacidad de coordinarte con otros para alcanzar metas en tiempo y forma." }
      ],
      executiveTraining: [
        "Curso o Certificación Relevante (Institución o Plataforma)."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Nivel (A2 / B1 / B2 / C1)" }
      ],
      community: [
        { name: "Comunidad o Voluntariado", desc: "Participación en grupos de estudio, retos técnicos o proyectos comunitarios." }
      ],
      experience: [
        {
          role: "Tu Puesto o Rol en el Proyecto",
          company: "Empresa, Startup o Proyecto Universitario",
          period: "Año Inicio – Año Fin | Ciudad, País",
          bullets: [
            "Fórmula Platzi: [Verbo de Acción] + [Herramienta o Contexto] + [Impacto Cuantificable en %, $ o tiempo].",
            "Diseñé e implementé [solución técnica] reduciendo tiempos operativos en un 40%."
          ]
        }
      ],
      hackathons: [
        {
          title: "Hackathon, Reto o Reconocimiento",
          desc: "Breve descripción de lo desarrollado y tecnologías involucradas."
        }
      ],
      education: [
        {
          degree: "Nombre de tu Carrera o Grado Académico",
          school: "Nombre de tu Universidad o Institución",
          period: "Año Inicio – Año Fin",
          badge: "Promedio o Estatus",
          details: "Menciona materias clave, proyectos destacados o especializaciones relevantes para el rol que buscas."
        }
      ]
    },
    en: {
      fullName: "Your Full Name",
      headline: "Core Profession · In-Demand Specialty · Target Role",
      contact: {
        location: "City, State, Country",
        email: "your.email@example.com",
        phone: "+1 555 123 4567",
        linkedin: "https://linkedin.com/in/your-profile",
        linkedinUser: "in/your-profile",
        github: "https://github.com/your-username",
        githubUser: "github.com/your-username"
      },
      about: "Write your professional summary in the first person (5 to 7 lines). Highlight your unique background, core technical capabilities, and the exact value you deliver to a target engineering or business team. Follow the Platzi formula: avoid vague clichés and demonstrate impact with concrete achievements.",
      skills: [
        { title: "Core Technical Domain", desc: "Key Tool 1, Tool 2, Framework, Programming Language." },
        { title: "Secondary Tooling & Cloud", desc: "Databases, version control, platforms, or CI/CD pipelines." }
      ],
      softSkills: [
        { name: "Core Competency", desc: "Concrete workplace evidence showing how you collaborate with peers." },
        { name: "Team Ownership", desc: "Demonstrated reliability in meeting milestones under agile sprints." }
      ],
      executiveTraining: [
        "Relevant Course or Certification (Issuing Academy or Platform)."
      ],
      languages: [
        { name: "Spanish", level: "Native / Bilingual" },
        { name: "English", level: "CEFR Level (B1 / B2 / C1 / Fluent)" }
      ],
      community: [
        { name: "Community or Volunteering", desc: "Involvement in developer clubs, open-source projects, or tech hackathons." }
      ],
      experience: [
        {
          role: "Your Job Title or Project Role",
          company: "Company, Startup or University Capstone Project",
          period: "Start Year – End Year | City, Country",
          bullets: [
            "Formula: [Action Verb] + [Tool or Context] + [Measurable Impact in %, $ or time saved].",
            "Engineered [technical solution] reducing operational latency by 40%."
          ]
        }
      ],
      hackathons: [
        {
          title: "Hackathon, Challenge, or Award",
          desc: "Brief summary of solution engineered and tech stack utilized."
        }
      ],
      education: [
        {
          degree: "Degree / Major Name",
          school: "University / Educational Institution",
          period: "Start Year – End Year",
          badge: "GPA or Status",
          details: "Highlight core technical coursework, research focus, or academic honors."
        }
      ]
    }
  }
};

// ==========================================
// ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================

let currentArchetype = 'student'; // 'student', 'tech', 'career_change', 'blank'
let currentLang = 'es';          // 'es' or 'en'

// Load initial archetype
let state = {
  lang: currentLang,
  archetype: currentArchetype,
  profile: JSON.parse(JSON.stringify(ARCHETYPES[currentArchetype][currentLang]))
};

// ==========================================
// INICIALIZACIÓN AL CARGAR EL DOM
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  setupArchetypeSelector();
  initFormBindings();
  renderPreview();
  setupEventListeners();
});

// Selector de Arquetipos
function setupArchetypeSelector() {
  const selectEl = document.getElementById('select-archetype');
  if (selectEl) {
    selectEl.value = currentArchetype;
    selectEl.addEventListener('change', (e) => {
      loadArchetype(e.target.value);
    });
  }
}

function loadArchetype(archetypeKey) {
  if (!ARCHETYPES[archetypeKey]) return;
  currentArchetype = archetypeKey;
  state.archetype = archetypeKey;
  state.profile = JSON.parse(JSON.stringify(ARCHETYPES[archetypeKey][state.lang]));
  
  populateFormFromState();
  renderPreview();
  
  const archetypeNames = {
    student: state.lang === 'en' ? 'Student / Entry-Level Template' : 'Plantilla: Estudiante / Primer Empleo',
    tech: state.lang === 'en' ? 'Tech Developer & AI Template' : 'Plantilla: Desarrollador / Perfil Tech & AI',
    career_change: state.lang === 'en' ? 'Career Transition Template' : 'Plantilla: Cambio de Carrera / Híbrido',
    blank: state.lang === 'en' ? 'Blank Clean Template' : 'Plantilla en Blanco'
  };
  showToast(`✨ ${archetypeNames[archetypeKey] || 'Plantilla cargada'}`);
}

// Configuración de botones y eventos de la barra superior
function setupEventListeners() {
  // Cambio de Idioma
  document.getElementById('btn-lang-es')?.addEventListener('click', () => switchLanguage('es'));
  document.getElementById('btn-lang-en')?.addEventListener('click', () => switchLanguage('en'));

  // Botón Imprimir / PDF
  document.getElementById('btn-print')?.addEventListener('click', () => {
    window.print();
  });

  // Exportar HTML, Copiar MD, Guardar/Cargar JSON
  document.getElementById('btn-download-html')?.addEventListener('click', downloadHTML);
  document.getElementById('btn-copy-md')?.addEventListener('click', copyMarkdown);
  document.getElementById('btn-save-json')?.addEventListener('click', saveJSON);
  document.getElementById('input-load-json')?.addEventListener('change', loadJSON);

  // Modal Guía Platzi
  const btnModal = document.getElementById('btn-platzi-guide');
  const modal = document.getElementById('platzi-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');

  btnModal?.addEventListener('click', () => {
    modal?.classList.remove('hidden');
  });
  btnCloseModal?.addEventListener('click', () => {
    modal?.classList.add('hidden');
  });
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  // Limpiar Formulario
  document.getElementById('btn-reset-form')?.addEventListener('click', () => {
    if (confirm(state.lang === 'en' ? 'Are you sure you want to load a blank template?' : '¿Deseas reiniciar el formulario a una plantilla limpia?')) {
      const selectEl = document.getElementById('select-archetype');
      if (selectEl) selectEl.value = 'blank';
      loadArchetype('blank');
    }
  });
}

// Alternar Idioma (ES / EN)
function switchLanguage(targetLang) {
  if (state.lang === targetLang) return;
  
  readFormIntoState();
  state.lang = targetLang;
  currentLang = targetLang;

  // Si existe traducción oficial del arquetipo activo, la cargamos; si el usuario modificó campos, respetamos
  if (ARCHETYPES[currentArchetype] && ARCHETYPES[currentArchetype][targetLang]) {
    state.profile = JSON.parse(JSON.stringify(ARCHETYPES[currentArchetype][targetLang]));
  }

  // Actualizar estilos de los botones de idioma
  const btnEs = document.getElementById('btn-lang-es');
  const btnEn = document.getElementById('btn-lang-en');

  if (targetLang === 'es') {
    btnEs.className = 'px-3 py-1.5 text-xs font-bold rounded-md bg-sky-600 text-white shadow-sm';
    btnEn.className = 'px-3 py-1.5 text-xs font-medium rounded-md text-slate-300 hover:text-white';
  } else {
    btnEn.className = 'px-3 py-1.5 text-xs font-bold rounded-md bg-sky-600 text-white shadow-sm';
    btnEs.className = 'px-3 py-1.5 text-xs font-medium rounded-md text-slate-300 hover:text-white';
  }

  populateFormFromState();
  renderPreview();
  showToast(targetLang === 'en' ? 'Switched to English 🇺🇸' : 'Cambiado a Español 🇪🇸');
}

// Leer datos del formulario en el estado
function readFormIntoState() {
  if (!state.profile) return;
  state.profile.fullName = document.getElementById('field-fullName')?.value || '';
  state.profile.headline = document.getElementById('field-headline')?.value || '';
  
  if (!state.profile.contact) state.profile.contact = {};
  state.profile.contact.location = document.getElementById('field-location')?.value || '';
  state.profile.contact.email = document.getElementById('field-email')?.value || '';
  state.profile.contact.phone = document.getElementById('field-phone')?.value || '';
  state.profile.contact.linkedin = document.getElementById('field-linkedin')?.value || '';
  state.profile.contact.github = document.getElementById('field-github')?.value || '';
  
  // Format clean handles for URLs
  if (state.profile.contact.linkedin) {
    const parts = state.profile.contact.linkedin.replace(/\/$/, '').split('/');
    state.profile.contact.linkedinUser = 'in/' + parts[parts.length - 1];
  }
  if (state.profile.contact.github) {
    const parts = state.profile.contact.github.replace(/\/$/, '').split('/');
    state.profile.contact.githubUser = 'github.com/' + parts[parts.length - 1];
  }

  state.profile.about = document.getElementById('field-about')?.value || '';
}

// Llenar controles del formulario a partir del estado
function populateFormFromState() {
  const p = state.profile;
  if (!p) return;

  setInputValue('field-fullName', p.fullName || '');
  setInputValue('field-headline', p.headline || '');
  setInputValue('field-location', p.contact?.location || '');
  setInputValue('field-email', p.contact?.email || '');
  setInputValue('field-phone', p.contact?.phone || '');
  setInputValue('field-linkedin', p.contact?.linkedin || '');
  setInputValue('field-github', p.contact?.github || '');
  setInputValue('field-about', p.about || '');

  renderExperienceFormList();
  renderEducationFormList();
  renderSkillsFormList();
  renderSoftSkillsFormList();
  renderLanguagesFormList();
  renderTrainingFormList();
  renderHackathonsFormList();
  renderCommunityFormList();
}

function setInputValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

// Bindings reactivos en tiempo real
function initFormBindings() {
  populateFormFromState();

  const textInputIds = [
    'field-fullName', 'field-headline', 'field-location',
    'field-email', 'field-phone', 'field-linkedin', 'field-github', 'field-about'
  ];

  textInputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        readFormIntoState();
        renderPreview();
      });
    }
  });

  // Botones para agregar elementos dinámicos
  document.getElementById('btn-add-exp')?.addEventListener('click', addExperienceItem);
  document.getElementById('btn-add-edu')?.addEventListener('click', addEducationItem);
  document.getElementById('btn-add-skill')?.addEventListener('click', addSkillCategoryItem);
  document.getElementById('btn-add-soft')?.addEventListener('click', addSoftSkillItem);
  document.getElementById('btn-add-lang')?.addEventListener('click', addLanguageItem);
  document.getElementById('btn-add-training')?.addEventListener('click', addTrainingItem);
  document.getElementById('btn-add-hack')?.addEventListener('click', addHackathonItem);
  document.getElementById('btn-add-comm')?.addEventListener('click', addCommunityItem);
}

// ==========================================
// RENDERIZADO DE LISTAS EN EL FORMULARIO (EDITOR)
// ==========================================

// 1. EXPERIENCIA
function renderExperienceFormList() {
  const container = document.getElementById('exp-list-container');
  if (!container) return;
  container.innerHTML = '';

  (state.profile.experience || []).forEach((exp, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-3 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1} - ${escapeHtml(exp.company || 'Empresa / Proyecto')}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeExperienceItem(${idx})">✕ Eliminar</button>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-[11px] font-semibold text-slate-600">Puesto / Rol</label>
          <input type="text" value="${escapeHtml(exp.role)}" oninput="updateExpField(${idx}, 'role', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
        <div>
          <label class="block text-[11px] font-semibold text-slate-600">Empresa o Proyecto</label>
          <input type="text" value="${escapeHtml(exp.company)}" oninput="updateExpField(${idx}, 'company', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
        </div>
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Periodo & Ubicación</label>
        <input type="text" value="${escapeHtml(exp.period)}" oninput="updateExpField(${idx}, 'period', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600 flex justify-between">
          <span>Logros con Fórmula Platzi (un punto por línea)</span>
          <span class="text-[10px] text-sky-600 font-normal">Verbo + Herramienta + Métrica</span>
        </label>
        <textarea rows="3" oninput="updateExpBullets(${idx}, this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white leading-relaxed" placeholder="Desarrollé una API en Python optimizando consultas y reduciendo latencia en un 35%.">${escapeHtml((exp.bullets || []).join('\n'))}</textarea>
      </div>
    `;
    container.appendChild(card);
  });
}

window.updateExpField = function(idx, field, val) {
  state.profile.experience[idx][field] = val;
  renderPreview();
};

window.updateExpBullets = function(idx, val) {
  state.profile.experience[idx].bullets = val.split('\n').filter(b => b.trim().length > 0);
  renderPreview();
};

window.addExperienceItem = function() {
  if (!state.profile.experience) state.profile.experience = [];
  state.profile.experience.unshift({
    role: state.lang === 'en' ? "Software Developer Intern" : "Desarrollador Web / Becario",
    company: state.lang === 'en' ? "Tech Company or Capstone Project" : "Empresa o Proyecto Universitario",
    period: state.lang === 'en' ? "2025 – Present | City, Country" : "2025 – Presente | Ciudad, País",
    bullets: [
      state.lang === 'en' 
        ? "Engineered responsive web modules using React and Tailwind CSS, increasing page speed by 40%."
        : "Diseñé e implementé módulos web en React y Tailwind CSS, incrementando la velocidad de carga en un 40%."
    ]
  });
  renderExperienceFormList();
  renderPreview();
};

window.removeExperienceItem = function(idx) {
  state.profile.experience.splice(idx, 1);
  renderExperienceFormList();
  renderPreview();
};

// 2. EDUCACIÓN
function renderEducationFormList() {
  const container = document.getElementById('edu-list-container');
  if (!container) return;
  container.innerHTML = '';

  (state.profile.education || []).forEach((edu, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-3 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1} - ${escapeHtml(edu.degree || 'Grado')}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeEducationItem(${idx})">✕ Eliminar</button>
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
          <label class="block text-[11px] font-semibold text-slate-600">Badge (Promedio o Distinción)</label>
          <input type="text" value="${escapeHtml(edu.badge || '')}" oninput="updateEduField(${idx}, 'badge', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white" placeholder="Ej. Promedio: 95/100">
        </div>
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Detalles clave / Enfoque</label>
        <input type="text" value="${escapeHtml(edu.details || '')}" oninput="updateEduField(${idx}, 'details', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
    `;
    container.appendChild(card);
  });
}

window.updateEduField = function(idx, field, val) {
  state.profile.education[idx][field] = val;
  renderPreview();
};

window.addEducationItem = function() {
  if (!state.profile.education) state.profile.education = [];
  state.profile.education.push({
    degree: state.lang === 'en' ? "B.S. in Computer Science" : "Licenciatura en Ingeniería de Software",
    school: state.lang === 'en' ? "University Name" : "Universidad de Guadalajara",
    period: state.lang === 'en' ? "2023 – In progress" : "2023 – En curso",
    badge: state.lang === 'en' ? "GPA: 95/100" : "Promedio: 95/100",
    details: state.lang === 'en' ? "Core focus in software architecture, databases, and algorithms." : "Enfoque en arquitectura de software, bases de datos y algoritmos."
  });
  renderEducationFormList();
  renderPreview();
};

window.removeEducationItem = function(idx) {
  state.profile.education.splice(idx, 1);
  renderEducationFormList();
  renderPreview();
};

// 3. HABILIDADES TÉCNICAS (HARD SKILLS)
function renderSkillsFormList() {
  const container = document.getElementById('skills-list-container');
  if (!container) return;
  container.innerHTML = '';

  (state.profile.skills || []).forEach((s, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-2 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1} - ${escapeHtml(s.title || 'Categoría')}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeSkillItem(${idx})">✕ Eliminar</button>
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

window.updateSkillField = function(idx, field, val) {
  state.profile.skills[idx][field] = val;
  renderPreview();
};

window.addSkillCategoryItem = function() {
  if (!state.profile.skills) state.profile.skills = [];
  state.profile.skills.push({
    title: state.lang === 'en' ? "Cloud & DevOps" : "Cloud & DevOps",
    desc: state.lang === 'en' ? "Docker, Git, CI/CD, Linux (bash), AWS basics." : "Docker, Git, CI/CD, Linux (bash), AWS básico."
  });
  renderSkillsFormList();
  renderPreview();
};

window.removeSkillItem = function(idx) {
  state.profile.skills.splice(idx, 1);
  renderSkillsFormList();
  renderPreview();
};

// 4. COMPETENCIAS BLANDAS (SOFT SKILLS)
function renderSoftSkillsFormList() {
  const container = document.getElementById('soft-list-container');
  if (!container) return;
  container.innerHTML = '';

  (state.profile.softSkills || []).forEach((soft, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-2 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1} - ${escapeHtml(soft.name || 'Competencia')}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeSoftSkillItem(${idx})">✕ Eliminar</button>
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Nombre de la Competencia</label>
        <input type="text" value="${escapeHtml(soft.name)}" oninput="updateSoftField(${idx}, 'name', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Evidencia o Contexto Práctico (Metodología Platzi)</label>
        <input type="text" value="${escapeHtml(soft.desc)}" oninput="updateSoftField(${idx}, 'desc', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white" placeholder="Ej. Lideré 4 sprints cumpliendo los entregables en tiempo.">
      </div>
    `;
    container.appendChild(card);
  });
}

window.updateSoftField = function(idx, field, val) {
  state.profile.softSkills[idx][field] = val;
  renderPreview();
};

window.addSoftSkillItem = function() {
  if (!state.profile.softSkills) state.profile.softSkills = [];
  state.profile.softSkills.push({
    name: state.lang === 'en' ? "Analytical Problem Solving" : "Pensamiento Analítico",
    desc: state.lang === 'en' ? "Decomposing complex requirements into manageable technical steps." : "Descomposición estructurada de requerimientos complejos en pasos técnicos."
  });
  renderSoftSkillsFormList();
  renderPreview();
};

window.removeSoftSkillItem = function(idx) {
  state.profile.softSkills.splice(idx, 1);
  renderSoftSkillsFormList();
  renderPreview();
};

// 5. IDIOMAS
function renderLanguagesFormList() {
  const container = document.getElementById('lang-list-container');
  if (!container) return;
  container.innerHTML = '';

  (state.profile.languages || []).forEach((lang, idx) => {
    const card = document.createElement('div');
    card.className = 'p-2.5 bg-slate-50 border border-slate-200 rounded-md mb-2 text-xs flex items-center justify-between gap-2';
    card.innerHTML = `
      <div class="flex-1">
        <input type="text" value="${escapeHtml(lang.name)}" oninput="updateLanguageField(${idx}, 'name', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white font-semibold" placeholder="Idioma">
      </div>
      <div class="flex-1">
        <input type="text" value="${escapeHtml(lang.level)}" oninput="updateLanguageField(${idx}, 'level', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white" placeholder="Nivel (Ej. B2 Profesional)">
      </div>
      <button type="button" class="text-rose-500 hover:text-rose-700 font-bold px-1" onclick="removeLanguageItem(${idx})">✕</button>
    `;
    container.appendChild(card);
  });
}

window.updateLanguageField = function(idx, field, val) {
  state.profile.languages[idx][field] = val;
  renderPreview();
};

window.addLanguageItem = function() {
  if (!state.profile.languages) state.profile.languages = [];
  state.profile.languages.push({
    name: state.lang === 'en' ? "English" : "Inglés",
    level: state.lang === 'en' ? "B2 Professional Proficiency" : "B2 Profesional Técnico"
  });
  renderLanguagesFormList();
  renderPreview();
};

window.removeLanguageItem = function(idx) {
  state.profile.languages.splice(idx, 1);
  renderLanguagesFormList();
  renderPreview();
};

// 6. FORMACIÓN CONTINUA & CERTIFICACIONES
function renderTrainingFormList() {
  const container = document.getElementById('training-list-container');
  if (!container) return;
  container.innerHTML = '';

  (state.profile.executiveTraining || []).forEach((t, idx) => {
    const card = document.createElement('div');
    card.className = 'p-2.5 bg-slate-50 border border-slate-200 rounded-md mb-2 text-xs flex items-center justify-between gap-2';
    card.innerHTML = `
      <div class="flex-1">
        <input type="text" value="${escapeHtml(t)}" oninput="updateTrainingField(${idx}, this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
      <button type="button" class="text-rose-500 hover:text-rose-700 font-bold px-1" onclick="removeTrainingItem(${idx})">✕</button>
    `;
    container.appendChild(card);
  });
}

window.updateTrainingField = function(idx, val) {
  state.profile.executiveTraining[idx] = val;
  renderPreview();
};

window.addTrainingItem = function() {
  if (!state.profile.executiveTraining) state.profile.executiveTraining = [];
  state.profile.executiveTraining.push(
    state.lang === 'en' 
      ? "Platzi / Cloud Academy: Certified Cloud Associate." 
      : "Platzi: Certificación en Arquitectura de Software y DevOps."
  );
  renderTrainingFormList();
  renderPreview();
};

window.removeTrainingItem = function(idx) {
  state.profile.executiveTraining.splice(idx, 1);
  renderTrainingFormList();
  renderPreview();
};

// 7. HACKATONES, RETOS & PROYECTOS
function renderHackathonsFormList() {
  const container = document.getElementById('hack-list-container');
  if (!container) return;
  container.innerHTML = '';

  (state.profile.hackathons || []).forEach((h, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-2 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1} - ${escapeHtml(h.title || 'Reto')}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeHackItem(${idx})">✕ Eliminar</button>
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Nombre del Hackathon / Reto / Proyecto</label>
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

window.updateHackField = function(idx, field, val) {
  state.profile.hackathons[idx][field] = val;
  renderPreview();
};

window.addHackathonItem = function() {
  if (!state.profile.hackathons) state.profile.hackathons = [];
  state.profile.hackathons.push({
    title: state.lang === 'en' ? "Innovation Hackathon (Finalist)" : "Hackathon de Innovación (Finalista)",
    desc: state.lang === 'en' ? "Developed an AI MVP with cloud deployment in 36 hours." : "Desarrollo de un MVP funcional con IA y despliegue en la nube en 36 horas."
  });
  renderHackathonsFormList();
  renderPreview();
};

window.removeHackItem = function(idx) {
  state.profile.hackathons.splice(idx, 1);
  renderHackathonsFormList();
  renderPreview();
};

// 8. COMUNIDAD & VOLUNTARIADO
function renderCommunityFormList() {
  const container = document.getElementById('comm-list-container');
  if (!container) return;
  container.innerHTML = '';

  (state.profile.community || []).forEach((c, idx) => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 border border-slate-200 rounded-md mb-2 text-xs space-y-2';
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-slate-800">#${idx + 1} - ${escapeHtml(c.name || 'Comunidad')}</span>
        <button type="button" class="text-rose-500 hover:text-rose-700 font-bold" onclick="removeCommunityItem(${idx})">✕ Eliminar</button>
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Nombre de la Comunidad o Voluntariado</label>
        <input type="text" value="${escapeHtml(c.name)}" oninput="updateCommunityField(${idx}, 'name', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-600">Rol & Impacto</label>
        <input type="text" value="${escapeHtml(c.desc)}" oninput="updateCommunityField(${idx}, 'desc', this.value)" class="w-full text-xs p-1.5 border border-slate-300 rounded bg-white">
      </div>
    `;
    container.appendChild(card);
  });
}

window.updateCommunityField = function(idx, field, val) {
  state.profile.community[idx][field] = val;
  renderPreview();
};

window.addCommunityItem = function() {
  if (!state.profile.community) state.profile.community = [];
  state.profile.community.push({
    name: state.lang === 'en' ? "Open Source & Student Tech Club" : "Club Tecnológico Estudiantil",
    desc: state.lang === 'en' ? "Active peer collaborator on technical workshops." : "Colaborador activo en talleres de programación y robótica."
  });
  renderCommunityFormList();
  renderPreview();
};

window.removeCommunityItem = function(idx) {
  state.profile.community.splice(idx, 1);
  renderCommunityFormList();
  renderPreview();
};

// ==========================================
// RENDERIZADO EN VIVO DE LA HOJA DEL CV
// ==========================================

function renderPreview() {
  const container = document.getElementById('cv-preview-render');
  if (!container) return;

  const p = state.profile;
  const isEn = state.lang === 'en';

  const labels = isEn ? {
    contact: "Contact",
    techSkills: "Technical Skills",
    coreComp: "Core Competencies",
    execTraining: "Continuous Learning",
    languages: "Languages",
    community: "Community & Impact",
    aboutMe: "Professional Profile",
    experience: "Experience & Projects",
    hackathons: "Hackathons & Innovation",
    education: "Formal Education"
  } : {
    contact: "Contacto",
    techSkills: "Habilidades Técnicas",
    coreComp: "Competencias Clave",
    execTraining: "Formación Continua",
    languages: "Idiomas",
    community: "Comunidad & Impacto",
    aboutMe: "Perfil Profesional",
    experience: "Experiencia & Proyectos",
    hackathons: "Hackatones & Innovación",
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
      <!-- SIDEBAR (IZQUIERDA) -->
      <aside class="cv-sidebar">
        <!-- Contact -->
        <div class="cv-sidebar-section">
          <h3>${labels.contact}</h3>
          <ul class="cv-contact-list">
            ${p.contact?.location ? `<li class="cv-contact-item"><span>📍</span><span>${escapeHtml(p.contact.location)}</span></li>` : ''}
            ${p.contact?.email ? `<li class="cv-contact-item"><span>✉️</span><a href="mailto:${escapeHtml(p.contact.email)}">${escapeHtml(p.contact.email)}</a></li>` : ''}
            ${p.contact?.phone ? `<li class="cv-contact-item"><span>📞</span><span>${escapeHtml(p.contact.phone)}</span></li>` : ''}
            ${p.contact?.linkedin ? `<li class="cv-contact-item"><span>🔗</span><a href="${escapeHtml(p.contact.linkedin)}" target="_blank">${escapeHtml(p.contact.linkedinUser || p.contact.linkedin)}</a></li>` : ''}
            ${p.contact?.github ? `<li class="cv-contact-item"><span>💻</span><a href="${escapeHtml(p.contact.github)}" target="_blank">${escapeHtml(p.contact.githubUser || p.contact.github)}</a></li>` : ''}
          </ul>
        </div>

        <!-- Hard Skills -->
        ${(p.skills && p.skills.length > 0) ? `
          <div class="cv-sidebar-section">
            <h3>${labels.techSkills}</h3>
            ${skillsHtml}
          </div>
        ` : ''}

        <!-- Soft Skills -->
        ${(p.softSkills && p.softSkills.length > 0) ? `
          <div class="cv-sidebar-section">
            <h3>${labels.coreComp}</h3>
            <ul class="cv-soft-list">
              ${softSkillsHtml}
            </ul>
          </div>
        ` : ''}

        <!-- Continuous Learning -->
        ${(p.executiveTraining && p.executiveTraining.length > 0) ? `
          <div class="cv-sidebar-section">
            <h3>${labels.execTraining}</h3>
            ${trainingHtml}
          </div>
        ` : ''}

        <!-- Languages -->
        ${(p.languages && p.languages.length > 0) ? `
          <div class="cv-sidebar-section">
            <h3>${labels.languages}</h3>
            ${languagesHtml}
          </div>
        ` : ''}

        <!-- Community -->
        ${(p.community && p.community.length > 0) ? `
          <div class="cv-sidebar-section">
            <h3>${labels.community}</h3>
            ${communityHtml}
          </div>
        ` : ''}
      </aside>

      <!-- MAIN CONTENT (DERECHA) -->
      <main class="cv-main">
        <!-- Header -->
        <header class="cv-header">
          <h1 class="cv-name">${escapeHtml(p.fullName || 'Tu Nombre')}</h1>
          <div class="cv-headline">${escapeHtml(p.headline || 'Tu Título Profesional')}</div>
        </header>

        <!-- About Me -->
        ${p.about ? `
          <section class="cv-section">
            <h2>${labels.aboutMe}</h2>
            <p class="cv-about-text">${escapeHtml(p.about)}</p>
          </section>
        ` : ''}

        <!-- Experience -->
        ${(p.experience && p.experience.length > 0) ? `
          <section class="cv-section">
            <h2>${labels.experience}</h2>
            ${experienceHtml}
          </section>
        ` : ''}

        <!-- Hackathons & Innovation -->
        ${(p.hackathons && p.hackathons.length > 0) ? `
          <section class="cv-section">
            <h2>${labels.hackathons}</h2>
            <ul class="cv-bullets">
              ${hackathonsHtml}
            </ul>
          </section>
        ` : ''}

        <!-- Education -->
        ${(p.education && p.education.length > 0) ? `
          <section class="cv-section">
            <h2>${labels.education}</h2>
            ${educationHtml}
          </section>
        ` : ''}
      </main>
    </div>
  `;
}

// Resaltar primeras palabras de acción en los bullets
function formatBulletText(text) {
  const clean = escapeHtml(text);
  const commaIdx = clean.indexOf(',');
  if (commaIdx > 5 && commaIdx < 45) {
    return `<strong>${clean.substring(0, commaIdx)}</strong>${clean.substring(commaIdx)}`;
  }
  return clean;
}

// ==========================================
// EXPORTACIÓN & DESCARGA
// ==========================================

// Descargar HTML independiente
function downloadHTML() {
  const container = document.getElementById('cv-preview-render');
  if (!container) return;

  const htmlContent = `<!DOCTYPE html>
<html lang="${state.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV - ${escapeHtml(state.profile.fullName || 'Currículum')}</title>
  <style>
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
  a.download = `CV_${(state.profile.fullName || 'Curriculum').replace(/\s+/g, '_')}_${state.lang.toUpperCase()}.html`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Archivo HTML descargado exitosamente');
}

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

// Copiar Markdown optimizado para ATS
function copyMarkdown() {
  const p = state.profile;
  const isEn = state.lang === 'en';

  let md = `# ${(p.fullName || 'CURRICULUM VITAE').toUpperCase()}\n`;
  md += `**${p.headline || ''}**\n`;
  md += `${p.contact?.location || ''} · ${p.contact?.email || ''} · ${p.contact?.phone || ''}\n`;
  if (p.contact?.linkedin) md += `[LinkedIn](${p.contact.linkedin}) `;
  if (p.contact?.github) md += `· [GitHub](${p.contact.github})\n`;
  md += `\n---\n\n`;

  if (p.about) {
    md += `## ${isEn ? 'PROFESSIONAL PROFILE' : 'PERFIL PROFESIONAL'}\n${p.about}\n\n---\n\n`;
  }

  if (p.experience && p.experience.length > 0) {
    md += `## ${isEn ? 'EXPERIENCE & PROJECTS' : 'EXPERIENCIA & PROYECTOS'}\n\n`;
    p.experience.forEach(exp => {
      md += `### ${exp.role} — ${exp.company}\n`;
      md += `*${exp.period}*\n`;
      (exp.bullets || []).forEach(b => {
        md += `- ${b}\n`;
      });
      md += `\n`;
    });
    md += `---\n\n`;
  }

  if (p.hackathons && p.hackathons.length > 0) {
    md += `## ${isEn ? 'HACKATHONS & INNOVATION' : 'HACKATONES & INNOVACIÓN'}\n\n`;
    p.hackathons.forEach(h => {
      md += `- **${h.title}:** ${h.desc}\n`;
    });
    md += `\n---\n\n`;
  }

  if (p.education && p.education.length > 0) {
    md += `## ${isEn ? 'FORMAL EDUCATION' : 'EDUCACIÓN FORMAL'}\n\n`;
    p.education.forEach(edu => {
      md += `### ${edu.degree} — ${edu.school}\n`;
      md += `*${edu.period}* ${edu.badge ? `· **${edu.badge}**` : ''}\n`;
      if (edu.details) md += `${edu.details}\n`;
      md += `\n`;
    });
    md += `---\n\n`;
  }

  if (p.skills && p.skills.length > 0) {
    md += `## ${isEn ? 'TECHNICAL SKILLS' : 'HABILIDADES TÉCNICAS'}\n\n`;
    p.skills.forEach(s => {
      md += `- **${s.title}:** ${s.desc}\n`;
    });
    md += `\n---\n\n`;
  }

  if (p.softSkills && p.softSkills.length > 0) {
    md += `## ${isEn ? 'CORE COMPETENCIES' : 'COMPETENCIAS CLAVE'}\n\n`;
    p.softSkills.forEach(s => {
      md += `- **${s.name}:** ${s.desc}\n`;
    });
    md += `\n`;
  }

  navigator.clipboard.writeText(md).then(() => {
    showToast('📋 Markdown ATS copiado al portapapeles');
  }).catch(() => {
    showToast('⚠️ No se pudo copiar al portapapeles');
  });
}

// Guardar en JSON
function saveJSON() {
  readFormIntoState();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.profile, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  const safeName = (state.profile.fullName || 'curriculum').replace(/\s+/g, '_');
  dlAnchor.setAttribute("download", `cv_${safeName}_${state.lang}.json`);
  dlAnchor.click();
  showToast('💾 Datos guardados en archivo JSON');
}

// Cargar desde JSON
function loadJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      state.profile = parsed;
      populateFormFromState();
      renderPreview();
      showToast('📂 Datos cargados exitosamente');
    } catch (err) {
      alert('Error al leer el archivo JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// Helpers
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

function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-5 right-5 bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-2xl text-xs font-semibold z-50 transition-opacity duration-300 opacity-0 pointer-events-none border border-slate-700';
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
