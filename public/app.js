/**
 * CV Alto Impacto - Application Engine v2.0
 * Generador Estratégico de CVs Bilingües (ES / EN) basado en Metodologías de Alto Impacto.
 * 100% Gratuito, Local-first, Privacy-first (Zero datos enviados al servidor).
 */

// ==========================================
// 1. ARQUETIPOS PEDAGÓGICOS (SIN DATOS PERSONALES)
// ==========================================

const ARCHETYPES = {
  // 1. ESTUDIANTE / PRIMER EMPLEO
  student: {
    es: {
      fullName: "Sofía Valeria Morales",
      headline: "Estudiante de Ingeniería de Software · Desarrollo Web & Cloud · Búsqueda de Prácticas",
      contact: {
        location: "Guadalajara, Jalisco, México",
        email: "sofia.morales.dev@email.com",
        phone: "+52 33 1234 5678",
        linkedin: "https://linkedin.com/in/sofia-morales-dev",
        linkedinUser: "in/sofia-morales-dev",
        github: "https://github.com/sofiamorales-dev",
        githubUser: "github.com/sofiamorales-dev"
      },
      about: "Estudiante de 7° semestre de Ingeniería de Software con alto rendimiento académico. Apasionada por el desarrollo de aplicaciones web full-stack, arquitecturas cloud y computación distribuida. Experiencia práctica en proyectos universitarios y retos hackathon aplicando Scrum, control de versiones con Git y pruebas unitarias. Mi objetivo es integrarme a un equipo dinámico como practicante de desarrollo de software, donde pueda aplicar mis bases en JavaScript, Python y bases de datos para resolver problemas reales mientras acelero mi crecimiento técnico.",
      skills: [
        { title: "Frontend & UI", desc: "HTML5 semántico, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Responsive Design." },
        { title: "Backend & APIs", desc: "Node.js, Express, Python (FastAPI), Creación y consumo de RESTful APIs, JWT Auth." },
        { title: "Bases de Datos", desc: "PostgreSQL, MySQL, MongoDB, Modelado Entidad-Relación, Consultas SQL optimizadas." },
        { title: "Herramientas & DevOps", desc: "Git & GitHub, Docker básico, Postman, Linux (bash), Despliegues en Vercel y Railway." }
      ],
      softSkills: [
        { name: "Autonomía de Aprendizaje", desc: "Capacidad de dominar nuevas herramientas y documentación técnica de forma ágil." },
        { name: "Trabajo Colaborativo", desc: "Coordinación efectiva en sprints universitarios y dinámicas de pair programming." },
        { name: "Comunicación Asertiva", desc: "Presentación clara de avances técnicos a profesores y compañeros no técnicos." },
        { name: "Resolución Estructurada", desc: "Desglose algorítmico y depuración sistemática de bugs y casos de uso." }
      ],
      executiveTraining: [
        "Platzi: Escuela de Desarrollo Web & JavaScript (Frontend Architecture).",
        "Certificación CS50: Introduction to Computer Science (Harvard Online)."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2 Profesional Técnico (Lectura fluida de documentación y redacción)." }
      ],
      community: [
        { name: "Club de Programación Competitiva", desc: "Miembro activo; resolución semanal de retos algorítmicos en LeetCode/HackerRank." },
        { name: "Voluntariado en Alfabetización Digital", desc: "Facilitadora en talleres de computación básica para adultos mayores." }
      ],
      experience: [
        {
          role: "Líder Técnica & Desarrolladora Frontend (Proyecto de Titulación)",
          company: "Plataforma Universitaria de Gestión de Tutorías",
          period: "2025 – Presente | Proyecto Académico",
          bullets: [
            "Diseñé y programé la interfaz web responsiva en React y Tailwind CSS, utilizada en pruebas piloto por más de 180 estudiantes.",
            "Construí componentes reutilizables y formularios dinámicos con validación en tiempo real, reduciendo la tasa de errores en un 35%.",
            "Colaboré en la integración con el backend RESTful en Node.js mediante endpoints seguros con autenticación JWT."
          ]
        },
        {
          role: "Desarrolladora Web & Soporte (Servicio Social)",
          company: "Laboratorio de Innovación Educativa",
          period: "2024 – 2025 | Guadalajara, MX",
          bullets: [
            "Automaticé el sistema de reservación de laboratorios mediante un script en Python y SQLite, eliminando cruces de horarios en un 100%.",
            "Elaboré manuales de usuario y documentación técnica de arquitectura para facilitar el mantenimiento por futuros estudiantes."
          ]
        }
      ],
      hackathons: [
        {
          title: "Hackathon de Innovación Abierta (2° Lugar)",
          desc: "Desarrollo en equipo de 4 personas de un prototipo de asistente escolar con IA en 36 horas continuas."
        }
      ],
      education: [
        {
          degree: "Licenciatura en Ingeniería de Software",
          school: "Universidad de Guadalajara — CUCEI",
          period: "2022 – 2026 (7° Semestre)",
          badge: "Promedio: 94.5 / 100",
          details: "Materias clave: Estructuras de Datos, Algoritmos Avanzados, Arquitectura de Software, Bases de Datos y Redes."
        }
      ]
    },
    en: {
      fullName: "Sofia Valeria Morales",
      headline: "Software Engineering Student · Web & Cloud Development · Seeking Internship",
      contact: {
        location: "Guadalajara, Jalisco, Mexico",
        email: "sofia.morales.dev@email.com",
        phone: "+52 33 1234 5678",
        linkedin: "https://linkedin.com/in/sofia-morales-dev",
        linkedinUser: "in/sofia-morales-dev",
        github: "https://github.com/sofiamorales-dev",
        githubUser: "github.com/sofiamorales-dev"
      },
      about: "Senior Software Engineering student with high academic standing. Passionate about full-stack web development, cloud architectures, and distributed systems. Hands-on experience developing collaborative academic projects and competing in hackathons using Agile (Scrum), Git version control, and automated testing. Seeking a Software Engineering Internship to apply solid fundamentals in JavaScript, Python, and SQL databases while contributing immediately to production software and accelerating technical growth.",
      skills: [
        { title: "Frontend & UI", desc: "Semantic HTML5, CSS3, Modern JavaScript (ES6+), React.js, Tailwind CSS, Responsive Design." },
        { title: "Backend & APIs", desc: "Node.js, Express, Python (FastAPI), RESTful API Design & Consumption, JWT Auth." },
        { title: "Databases", desc: "PostgreSQL, MySQL, MongoDB, Relational Data Modeling, SQL Query Optimization." },
        { title: "Tools & DevOps", desc: "Git & GitHub, Docker fundamentals, Postman, Linux (bash), Deployments on Vercel and Railway." }
      ],
      softSkills: [
        { name: "Continuous Learning", desc: "Proven ability to rapidly master new frameworks, libraries, and technical documentation." },
        { name: "Team Collaboration", desc: "Effective coordination in academic sprints, active listener in code reviews." },
        { name: "Clear Communication", desc: "Translating technical milestones into clear summaries for non-technical stakeholders." },
        { name: "Structured Debugging", desc: "Algorithmic thinking and systematic root-cause debugging of edge cases." }
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
          role: "Tech Lead & Frontend Developer (Capstone Project)",
          company: "University Tutoring Management Platform",
          period: "2025 – Present | Academic Project",
          bullets: [
            "Architected and developed a responsive web interface in React and Tailwind CSS, piloted across 180+ university students.",
            "Engineered reusable UI components and dynamic forms with real-time validation, cutting submission error rates by 35%.",
            "Collaborated on RESTful backend integration with Node.js endpoints secured via JWT token authentication."
          ]
        },
        {
          role: "Web Developer & Project Assistant (Social Service)",
          company: "Educational Innovation Laboratory",
          period: "2024 – 2025 | Guadalajara, MX",
          bullets: [
            "Automated laboratory resource scheduling using a Python automation script and SQLite database, eliminating conflicts by 100%.",
            "Authored comprehensive user documentation and architectural guides to ensure seamless handoff to future students."
          ]
        }
      ],
      hackathons: [
        {
          title: "University Open Innovation Hackathon (2nd Place)",
          desc: "Built an AI-assisted campus study guide prototype with a 4-person team within a 36-hour sprint."
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

  // 2. DESARROLLADOR TECH & AI
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
      about: "Ingeniero de Software con más de 3 años de experiencia diseñando y desplegando aplicaciones web escalables, arquitecturas de microservicios y APIs de alto tráfico en entornos cloud. Especialista en TypeScript, Node.js, React, Docker y bases de datos relacionales y NoSQL. Historial probado de optimización de rendimiento: he reducido tiempos de respuesta de APIs en un 40% y disminuido costos de infraestructura en un 25% mediante caching inteligente y refactorización orientada a buenas prácticas. Apasionado por la integración de modelos de lenguaje e inteligencia artificial para automatizar procesos empresariales.",
      skills: [
        { title: "Frontend & Frameworks", desc: "TypeScript, React.js, Next.js, Redux Toolkit, Tailwind CSS, Jest, Cypress, Microfrontends." },
        { title: "Backend & Microservicios", desc: "Node.js, Express, NestJS, Python, RESTful APIs, GraphQL, gRPC, Arquitectura Hexagonal." },
        { title: "Bases de Datos & Caching", desc: "PostgreSQL, MongoDB, Redis (estrategias de caching), Prisma ORM, Indexación y Tuning SQL." },
        { title: "Cloud & DevOps", desc: "AWS (S3, ECS, Lambda), Docker, CI/CD con GitHub Actions, Nginx, Monitoreo con Datadog/CloudWatch." },
        { title: "IA Aplicada & Agentes", desc: "Integración de OpenAI API, Anthropic, LangChain, embeddings vectoriales (Pinecone), automatizaciones agénticas." }
      ],
      softSkills: [
        { name: "Resolución Root-Cause", desc: "Diagnóstico profundo y solución eficaz de incidentes críticos en producción." },
        { name: "Orientación a Producto", desc: "Priorización de deuda técnica vs features basada en métricas de retención y valor de negocio." },
        { name: "Liderazgo Técnico", desc: "Capacitación a desarrolladores junior y facilitación de revisiones de código exhaustivas." },
        { name: "Colaboración Ágil", desc: "Gestión rigurosa de sprints (Scrum), estimaciones precisas y entregas continuas sin fricciones." }
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
            "Optimicé consultas complejas en PostgreSQL mediante reindexación estratégica y particionamiento, disminuyendo el tiempo de reportes diarios en un 60%."
          ]
        }
      ],
      hackathons: [
        {
          title: "Global AI Hackathon (Top 5 Finalist)",
          desc: "Creación de un copiloto agéntico para análisis predictivo de fraudes bancarios en 48 horas."
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
      about: "Software Engineer with 3+ years of experience designing and deploying scalable web applications, microservices architectures, and high-throughput APIs in cloud environments. Specialist in TypeScript, Node.js, React, Docker, and relational/NoSQL databases. Proven track record of performance engineering: reduced API response latency by 40% and cut cloud infrastructure costs by 25% through distributed caching and clean architecture refactoring. Passionate about LLM integration and agentic workflows.",
      skills: [
        { title: "Frontend & Frameworks", desc: "TypeScript, React.js, Next.js, Redux Toolkit, Tailwind CSS, Jest, Cypress, Microfrontends." },
        { title: "Backend & Microservices", desc: "Node.js, Express, NestJS, Python, RESTful APIs, GraphQL, gRPC, Hexagonal Architecture." },
        { title: "Databases & Caching", desc: "PostgreSQL, MongoDB, Redis (caching strategies), Prisma ORM, Indexing and SQL Query Tuning." },
        { title: "Cloud & DevOps", desc: "AWS (S3, ECS, Lambda), Docker, CI/CD with GitHub Actions, Nginx, Datadog/CloudWatch Monitoring." },
        { title: "Applied AI & Agents", desc: "OpenAI API integration, Anthropic, LangChain, vector embeddings (Pinecone), autonomous agent workflows." }
      ],
      softSkills: [
        { name: "Root-Cause Analysis", desc: "Deep diagnostic skill and rapid resolution of critical production outages." },
        { name: "Product Ownership", desc: "Prioritizing technical debt vs features according to customer retention metrics." },
        { name: "Technical Mentorship", desc: "Mentoring junior engineers and conducting high-standard, constructive code reviews." },
        { name: "Agile Ownership", desc: "Disciplined sprint delivery (Scrum), accurate time estimation, and reliable production releases." }
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
            "Optimized high-volume PostgreSQL queries via strategic partial indexing and table partitioning, slashing daily reporting execution time by 60%."
          ]
        }
      ],
      hackathons: [
        {
          title: "Global AI Hackathon (Top 5 Finalist)",
          desc: "Engineered an agentic copilot for predictive fraud detection on streaming financial transactions in 48 hours."
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

  // 3. CAMBIO DE CARRERA / HÍBRIDO
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
      about: "Profesional analítica con sólida trayectoria previa en finanzas corporativas y administración de negocios, complementada con formación rigurosa en ciencia de datos, SQL analítico, Python y visualización estratégica con Power BI. Mi valor diferencial radica en tender un puente natural entre la profundidad técnica de los datos y las decisiones ejecutivas de negocio: no solo construyo modelos y tableros, sino que identifico las palancas exactas de rentabilidad y reducción de costos.",
      skills: [
        { title: "Análisis de Datos & Programación", desc: "Python (Pandas, NumPy, Scikit-Learn), SQL Analítico avanzado (Window functions, CTEs), R básico." },
        { title: "Business Intelligence & Tableros", desc: "Power BI (DAX, Power Query), Tableau, Google Data Studio, Storytelling de Datos, Diseño UX para directivos." },
        { title: "Modelado & Estrategia Financiera", desc: "Modelación financiera en Excel (VBA, Power Pivot), Cálculo de KPIs de rendimiento (ROI, LTV, CAC, Churn)." },
        { title: "Bases de Datos & ETLs", desc: "PostgreSQL, BigQuery, Snowflake, Automatización de pipelines de extracción y limpieza de datos." }
      ],
      softSkills: [
        { name: "Storytelling con Datos", desc: "Facilidad para comunicar insights analíticos complejos a comités ejecutivos y directores." },
        { name: "Pensamiento Comercial", desc: "Comprensión integral de cuentas de resultados (P&L), flujos de caja y márgenes de utilidad." },
        { name: "Gestión del Cambio", desc: "Capacidad demostrada de reinvención profesional y adopción acelerada de tecnologías emergentes." },
        { name: "Alineación de Stakeholders", desc: "Alineación de expectativas entre áreas de tecnología, ventas, finanzas y operaciones." }
      ],
      executiveTraining: [
        "Bootcamp de Data Analytics & Machine Learning (450 horas prácticas con proyectos reales).",
        "Certificación Microsoft Certified: Power BI Data Analyst Associate (PL-300)."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2+ Profesional (Negociación comercial y presentaciones ejecutivas)." }
      ],
      community: [
        { name: "Comunidad Women in Data / PyLadies", desc: "Participante activa y mentora en talleres introductorios de análisis de datos con Python." }
      ],
      experience: [
        {
          role: "Analista de Business Intelligence & Datos",
          company: "FinTech & Analytics Consulting Group",
          period: "2024 – Presente | Guadalajara, MX",
          bullets: [
            "Construí y automaticé el pipeline de reportes financieros en SQL y Power BI, reduciendo el tiempo de generación de informes mensuales de 5 días a 15 minutos.",
            "Diseñé un modelo analítico de segmentación de clientes con Python (clustering k-means) que incrementó la tasa de conversión de campañas en un 28%."
          ]
        },
        {
          role: "Coordinadora de Estrategia y Control Financiero",
          company: "Corporativo Inmobiliario & Servicios",
          period: "2020 – 2024 | Guadalajara, MX",
          bullets: [
            "Gestioné presupuestos anuales superiores a $35M MXN, identificando desviaciones operativas y generando ahorros en compras del 12%.",
            "Lideré la transición de hojas de cálculo manuales dispersas a un ERP consolidado, capacitando a más de 25 colaboradores."
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
          degree: "Diploma Especializado en Data Science & BI",
          school: "Tech Institute & Platzi",
          period: "2024",
          badge: "Acreditado con Excelencia",
          details: "Formación intensiva en extracción de datos con SQL, análisis exploratorio con Python y visualización ejecutiva."
        },
        {
          degree: "Licenciatura en Administración y Finanzas",
          school: "Universidad de Guadalajara",
          period: "2016 – 2020",
          badge: "Titulada",
          details: "Enfoque en finanzas corporativas, auditoría interna, microeconomía y proyectos de inversión."
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
      about: "Analytical professional blending a solid foundation in corporate finance and business administration with rigorous training in data science, advanced SQL, Python, and strategic Power BI visualization. My core differentiator is building a seamless bridge between technical data depth and executive decision-making: I translate raw tabular datasets into high-impact operational dashboards and predictive insights that directly drive profitability and cost savings.",
      skills: [
        { title: "Data Analysis & Programming", desc: "Python (Pandas, NumPy, Scikit-Learn), Advanced Analytical SQL (Window functions, CTEs), basic R." },
        { title: "Business Intelligence & Dashboards", desc: "Power BI (DAX, Power Query), Tableau, Google Looker Studio, Executive Data Storytelling, UX." },
        { title: "Financial Modeling & KPIs", desc: "Advanced Excel (VBA, Power Pivot), Financial performance metrics (ROI, LTV, CAC, Net Churn, P&L)." },
        { title: "Databases & ETL Pipelines", desc: "PostgreSQL, BigQuery, Snowflake, Automated ingestion and data hygiene pipelines." }
      ],
      softSkills: [
        { name: "Executive Storytelling", desc: "Synthesizing complex quantitative conclusions into crisp, actionable executive decisions." },
        { name: "Strategic Acumen", desc: "Holistic understanding of balance sheets, operating margins, and profit levers." },
        { name: "Career Adaptability", desc: "Demonstrated capacity for rapid technical reinvention and mastering modern data stacks." },
        { name: "Stakeholder Alignment", desc: "Fostering alignment between engineering, finance, marketing, and business operations." }
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
        { name: "Women in Data & PyLadies Chapter", desc: "Active member and mentor in introductory data analysis workshops with Python." }
      ],
      experience: [
        {
          role: "Business Intelligence & Data Analyst",
          company: "FinTech & Analytics Consulting Group",
          period: "2024 – Present | Guadalajara, MX",
          bullets: [
            "Architected and automated financial reporting pipelines in SQL and Power BI, reducing monthly executive report delivery from 5 business days to under 15 minutes.",
            "Designed a predictive customer segmentation model in Python (k-means clustering), lifting target marketing conversion rates by 28%."
          ]
        },
        {
          role: "Financial Strategy & Controller Lead",
          company: "Commercial Real Estate & Services Group",
          period: "2020 – 2024 | Guadalajara, MX",
          bullets: [
            "Supervised annual operating budgets exceeding $2M USD, isolating vendor cost overruns and securing 12% in procurement savings.",
            "Spearheaded enterprise migration from legacy disconnected spreadsheets to an ERP system, training 25+ cross-department users."
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
          degree: "Applied Data Science & BI Diploma",
          school: "Tech Institute & Platzi",
          period: "2024",
          badge: "Graduated with Honors",
          details: "Intensive training in SQL data engineering, exploratory data analysis with Python, and executive dashboards."
        },
        {
          degree: "B.S. in Business Administration & Finance",
          school: "Universidad de Guadalajara",
          period: "2016 – 2020",
          badge: "Licensed & Graduated",
          details: "Core focus in corporate finance, financial audits, microeconomics, and capital expenditure analysis."
        }
      ]
    }
  },

  // 4. ADMINISTRACIÓN & VENTAS
  admin_sales: {
    es: {
      fullName: "Alejandro Torres Navarro",
      headline: "Coordinador de Operaciones Comerciales & Ventas B2B · CRM HubSpot · Gestión de Cuentas",
      contact: {
        location: "Zapopan, Jalisco, México",
        email: "alejandro.torres.sales@email.com",
        phone: "+52 33 7654 3210",
        linkedin: "https://linkedin.com/in/alejandro-torres-sales",
        linkedinUser: "in/alejandro-torres-sales"
      },
      about: "Profesional en administración y operaciones comerciales con 4 años de experiencia liderando procesos de ventas B2B, atención a clientes corporativos y optimización de flujos de trabajo en CRM. Especialista en prospección consultiva, seguimiento de embudos comerciales y negociación de contratos. Historial probado de superación de metas trimestrales en un 120% promedio y reducción de tiempos de ciclo de venta mediante automatización de propuestas y cotizaciones.",
      skills: [
        { title: "Gestión Comercial & CRM", desc: "HubSpot CRM, Salesforce, PipeDrive, Gestión de Pipeline, Lead Scoring, Prospección Consultiva." },
        { title: "Herramientas de Productividad", desc: "Excel Avanzado (Tablas Dinámicas, BuscarV, Macros), Google Workspace, Notion, Slack." },
        { title: "Contratos & Facturación", desc: "Facturación electrónica CFDI 4.0, Cobranza preventiva, Control presupuestal y conciliación." }
      ],
      softSkills: [
        { name: "Negociación & Cierre", desc: "Cierre efectivo de cuentas clave con ticket promedio de $150K MXN anuales." },
        { name: "Escucha Activa", desc: "Detección precisa de puntos de dolor del cliente para formular propuestas personalizadas." },
        { name: "Orientación a Metas", desc: "Superación constante de cuotas trimestrales de facturación durante 8 periodos consecutivos." }
      ],
      executiveTraining: [
        "Certificación HubSpot: Inbound Sales & Pipeline Management.",
        "Diplomado en Finanzas para No Financieros (Cámara de Comercio)."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2 Profesional (Capaz de sostener negociaciones y redactar correos ejecutivos)." }
      ],
      community: [
        { name: "Cámara de Comercio de Guadalajara", desc: "Participante habitual en encuentros de networking y comisiones de jóvenes empresarios." }
      ],
      experience: [
        {
          role: "Coordinador de Ventas B2B & Cuentas Clave",
          company: "Distribuidora Industrial del Bajío",
          period: "2023 – Presente | Zapopan, MX",
          bullets: [
            "Lideré el equipo comercial de 4 ejecutivos, alcanzando un incremento en ventas netas del 27% interanual mediante reestructuración del embudo.",
            "Implementé la migración a HubSpot CRM para más de 1,200 contactos, reduciendo el tiempo de seguimiento de cotizaciones de 48 horas a 3 horas.",
            "Negocié y cerré acuerdos marco con 14 empresas medianas, aportando una cartera recurrente de $4.8M MXN anuales."
          ]
        },
        {
          role: "Ejecutivo de Atención a Clientes & Administración",
          company: "Soluciones Logísticas Integrales",
          period: "2021 – 2023 | Guadalajara, MX",
          bullets: [
            "Atendí una cartera de 65 clientes empresariales, elevando el índice de satisfacción (CSAT) del 82% al 96% en 12 meses.",
            "Automaticé la emisión de reportes diarios de embarques, ahorrando 8 horas semanales de captura manual al departamento de operaciones."
          ]
        }
      ],
      education: [
        {
          degree: "Licenciatura en Administración de Empresas",
          school: "Universidad de Guadalajara — CUCEA",
          period: "2017 – 2021",
          badge: "Titulado",
          details: "Especialización en Estrategia de Mercadotecnia, Administración de Operaciones y Finanzas Corporativas."
        }
      ]
    },
    en: {
      fullName: "Alejandro Torres Navarro",
      headline: "Commercial Operations & B2B Sales Coordinator · HubSpot CRM · Key Account Management",
      contact: {
        location: "Zapopan, Jalisco, Mexico",
        email: "alejandro.torres.sales@email.com",
        phone: "+52 33 7654 3210",
        linkedin: "https://linkedin.com/in/alejandro-torres-sales",
        linkedinUser: "in/alejandro-torres-sales"
      },
      about: "Business administration professional with 4 years of experience driving B2B sales cycles, corporate client relationships, and CRM pipeline automation. Expert in consultative prospecting, proposal negotiation, and sales funnel velocity. Proven track record of exceeding quarterly quotas by an average of 120% and reducing contract closing cycles through streamlined quoting workflows.",
      skills: [
        { title: "Sales Management & CRM", desc: "HubSpot CRM, Salesforce, PipeDrive, Pipeline Management, Lead Scoring, Consultative Selling." },
        { title: "Productivity & Operations", desc: "Advanced Excel (Pivot Tables, VLOOKUP, Automation), Google Workspace, Notion, Slack." },
        { title: "Contracts & Invoicing", desc: "Corporate Invoicing, Accounts Receivable management, Budget tracking and audits." }
      ],
      softSkills: [
        { name: "Deal Negotiation & Closing", desc: "Consistent closure of key accounts with average annual contract value of $10K+ USD." },
        { name: "Active Client Listening", desc: "Uncovering operational bottlenecks to deliver customized commercial proposals." },
        { name: "Quota-Driven Mindset", desc: "Consistently exceeded quarterly revenue targets for 8 consecutive quarters." }
      ],
      executiveTraining: [
        "HubSpot Certified: Inbound Sales & Pipeline Management.",
        "Certificate in Corporate Finance for Business Leaders (Chamber of Commerce)."
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B2 Professional (Executive emails, presentations, and contract negotiations)." }
      ],
      community: [
        { name: "Chamber of Commerce Business Circle", desc: "Active participant in regional B2B networking forums and youth entrepreneurship councils." }
      ],
      experience: [
        {
          role: "B2B Sales & Key Account Coordinator",
          company: "Industrial Logistics & Supply Co.",
          period: "2023 – Present | Zapopan, MX",
          bullets: [
            "Led a commercial squad of 4 account executives, lifting net regional revenue by 27% year-over-year through pipeline re-engineering.",
            "Spearheaded HubSpot CRM migration across 1,200 enterprise contacts, cutting quote turnaround time from 48 hours to under 3 hours.",
            "Negotiated long-term service level agreements with 14 corporate clients, generating $250K+ USD in recurring annual revenue."
          ]
        },
        {
          role: "Corporate Customer Success Specialist",
          company: "Integrated Logistics Solutions",
          period: "2021 – 2023 | Guadalajara, MX",
          bullets: [
            "Managed dedicated support for 65 corporate accounts, elevating Customer Satisfaction (CSAT) score from 82% to 96% in 12 months.",
            "Automated daily shipment status reporting, saving 8 hours of manual weekly data entry across dispatch operations."
          ]
        }
      ],
      education: [
        {
          degree: "B.S. in Business Administration",
          school: "Universidad de Guadalajara — CUCEA",
          period: "2017 – 2021",
          badge: "Licensed & Graduated",
          details: "Specialization in Marketing Strategy, Operations Management, and Corporate Financial Planning."
        }
      ]
    }
  },

  // 5. OFICIOS & SERVICIOS
  trades: {
    es: {
      fullName: "Roberto Sánchez Gómez",
      headline: "Técnico en Mantenimiento Industrial & Electromecánica · Certificación DC-3 · Seguridad Operativa",
      contact: {
        location: "El Salto, Jalisco, México",
        email: "roberto.sanchez.tec@email.com",
        phone: "+52 33 8765 4321"
      },
      about: "Técnico electromecánico con 6 años de experiencia en mantenimiento preventivo, correctivo y predictivo de líneas de producción industrial, motores trifásicos, bombas hidráulicas y sistemas neumáticos. Certificado con constancias DC-3 en trabajos en alturas, espacios confinados y seguridad eléctrica. Comprometido con la cultura de cero accidentes, la reducción de paros no programados y el cumplimiento estricto de normas NOM-STPS e ISO 9001.",
      skills: [
        { title: "Mantenimiento & Mecánica", desc: "Mantenimiento predictivo, preventivo y correctivo, Alineación láser de motores, Rodamientos, Bombas centrífugas." },
        { title: "Electricidad & Control", desc: "Subestaciones eléctricas, Tableros de control (220V/440V), Interpretación de planos eléctricos, Variadores de frecuencia (VFD)." },
        { title: "Normatividad & Seguridad", desc: "Constancias DC-3 (Trabajos en alturas, Espacios confinados, Electricidad), Protocolos LOTO (Bloqueo/Etiquetado)." }
      ],
      softSkills: [
        { name: "Respuesta Rápida a Fallas", desc: "Disminución del tiempo de respuesta ante paros críticos a menos de 10 minutos." },
        { name: "Cultura de Seguridad Cero Accidentes", desc: "Más de 1,200 días sin incidentes laborales registrables en el área asignada." },
        { name: "Trabajo en Equipo Operativo", desc: "Coordinación fluida con operadores de línea, supervisores y personal de calidad." }
      ],
      executiveTraining: [
        "Certificación DC-3: Seguridad en Trabajos con Electricidad y Alturas (STPS).",
        "Curso Especializado en Detección de Fallas mediante Termografía y Análisis de Vibraciones."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Básico Técnico (Lectura de manuales de maquinaria, diagramas y códigos de error)." }
      ],
      experience: [
        {
          role: "Técnico Electromecánico de Mantenimiento",
          company: "Planta Manufacturera del Parque Industrial El Salto",
          period: "2022 – Presente | El Salto, MX",
          bullets: [
            "Ejecuté programas de mantenimiento preventivo para 12 líneas de empaque automatizado, reduciendo paros no programados en un 22%.",
            "Diagnosticé y reparé fallas eléctricas y neumáticas en prensas y bandas transportadoras, manteniendo una disponibilidad de equipo del 98.5%.",
            "Lideré la inspección semanal de bloqueo y etiquetado (LOTO), asegurando 0 accidentes de trabajo durante 3 años consecutivos."
          ]
        },
        {
          role: "Técnico Mecánico de Soporte en Taller",
          company: "Servicios Industriales & Maquinados",
          period: "2019 – 2022 | Guadalajara, MX",
          bullets: [
            "Realicé el ajuste, desensamble y embobinado de motores eléctricos trifásicos de hasta 50 HP cumpliendo tolerancias de fábrica.",
            "Reconstruí más de 40 bombas centrífugas e hidráulicas logrando una reducción de costos de refaccionamiento del 30%."
          ]
        }
      ],
      education: [
        {
          degree: "Técnico Superior Universitario en Mantenimiento Industrial",
          school: "Universidad Tecnológica de Jalisco (UTJ)",
          period: "2017 – 2019",
          badge: "Titulado con Cédula",
          details: "Formación práctica en máquinas herramientas, control lógico programable (PLC básico), soldadura y neumática."
        }
      ]
    },
    en: {
      fullName: "Roberto Sanchez Gomez",
      headline: "Industrial Electromechanical Maintenance Technician · Certified DC-3 · Operational Safety",
      contact: {
        location: "El Salto, Jalisco, Mexico",
        email: "roberto.sanchez.tec@email.com",
        phone: "+52 33 8765 4321"
      },
      about: "Industrial technician with 6 years of experience in preventive, corrective, and predictive maintenance across automated manufacturing lines, three-phase motors, hydraulic pumps, and pneumatic systems. Certified in occupational safety (heights, confined spaces, and high-voltage protocols). Committed to zero-accident safety cultures, lowering unscheduled production downtime, and adhering to strict ISO 9001 and OSHA standards.",
      skills: [
        { title: "Mechanical Maintenance", desc: "Predictive, preventive and emergency repairs, Laser motor alignment, Bearings, Centrifugal pumps." },
        { title: "Electrical & Instrumentation", desc: "Industrial control panels (220V/440V), Electrical blueprints interpretation, Variable Frequency Drives (VFDs)." },
        { title: "Safety & Compliance", desc: "LOTO procedures (Lockout/Tagout), Confined Space & High-altitude work safety certified." }
      ],
      softSkills: [
        { name: "Rapid Fault Response", desc: "Reduced mean time to response during critical line outages to under 10 minutes." },
        { name: "Zero-Accident Safety Record", desc: "Over 1,200 consecutive workdays without lost-time incidents across assigned shifts." },
        { name: "Cross-Shift Teamwork", desc: "Seamless communication with line operators, shift supervisors, and quality teams." }
      ],
      executiveTraining: [
        "Certified Industrial Electrical Safety & Work-at-Heights Credential.",
        "Specialized Course in Thermal Imaging & Vibration Analysis Diagnostics."
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Technical Basic (Reading machinery equipment manuals, wiring diagrams, and error codes)." }
      ],
      experience: [
        {
          role: "Industrial Electromechanical Technician",
          company: "Manufacturing Plant — El Salto Industrial Park",
          period: "2022 – Present | El Salto, MX",
          bullets: [
            "Executed preventive maintenance plans across 12 automated packaging lines, slashing unscheduled line shutdowns by 22%.",
            "Diagnosed and repaired electrical and pneumatic defects on hydraulic presses and conveyor belts, sustaining 98.5% equipment uptime.",
            "Conducted weekly LOTO compliance audits, ensuring zero electrical safety incidents across 3 consecutive operational years."
          ]
        },
        {
          role: "Mechanical Shop Maintenance Specialist",
          company: "Industrial Machinery & Tooling Services",
          period: "2019 – 2022 | Guadalajara, MX",
          bullets: [
            "Overhauled, disassembled, and rewound three-phase electric motors up to 50 HP according to strict manufacturer tolerances.",
            "Reconditioned 40+ industrial centrifugal and hydraulic pumps, securing a 30% reduction in spare part replacement expenditure."
          ]
        }
      ],
      education: [
        {
          degree: "Associate Degree in Industrial Maintenance Engineering",
          school: "Universidad Tecnológica de Jalisco (UTJ)",
          period: "2017 – 2019",
          badge: "Licensed Technician",
          details: "Hands-on training in machine tools, fundamental PLC troubleshooting, TIG/MIG welding, and industrial pneumatics."
        }
      ]
    }
  },

  // 6. CREATIVOS & DISEÑO
  creative: {
    es: {
      fullName: "Camila Estrada Ponce",
      headline: "Diseñadora UX/UI & Product Designer · Figma, Design Systems & Prototipado Interactivo",
      contact: {
        location: "Guadalajara, Jalisco, México",
        email: "camila.estrada.design@email.com",
        phone: "+52 33 6543 2109",
        linkedin: "https://linkedin.com/in/camila-estrada-ux",
        linkedinUser: "in/camila-estrada-ux",
        github: "https://behance.net/camilaestrada",
        githubUser: "behance.net/camilaestrada"
      },
      about: "Diseñadora de producto digital y UX/UI con 3 años de experiencia creando experiencias centradas en el usuario para aplicaciones web y móviles. Especialista en investigación de usuarios, wireframing, prototipado interactivo en Figma y construcción de Sistemas de Diseño escalables. Historial de colaboración estrecha con equipos de ingeniería para elevar tasas de conversión en un 30% y reducir tiempos de diseño a desarrollo en un 40%.",
      skills: [
        { title: "Diseño UX & Research", desc: "User Research, Pruebas de usabilidad, Mapas de empatía, User Personas, Arquitectura de Información." },
        { title: "Herramientas de UI & Prototipado", desc: "Figma (Auto Layout, Tokens, Componentes con variantes), Adobe XD, Illustrator, Photoshop, Protopie." },
        { title: "Design Systems & Hand-off", desc: "Creación de Design Systems con Atomic Design, Tokens de diseño, Documentación técnica para Frontend (HTML/CSS)." }
      ],
      softSkills: [
        { name: "Empatía con el Usuario", desc: "Habilidad para traducir necesidades reales del usuario en soluciones visuales intuitivas." },
        { name: "Colaboración Interdisciplinaria", desc: "Alineación ágil y respetuosa con Product Managers y desarrolladores frontend." },
        { name: "Pensamiento Crítico Visual", desc: "Defensa fundamentada de decisiones de diseño con base en métricas y usabilidad." }
      ],
      executiveTraining: [
        "Google UX Design Professional Certificate (Coursera).",
        "Bootcamp de Diseño de Sistemas Escalables en Figma."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2+ Profesional (Presentaciones de diseño a clientes en EE.UU. y entrevistas de usuario)." }
      ],
      experience: [
        {
          role: "UX/UI Designer",
          company: "Studio Digital Creativo & Tech",
          period: "2023 – Presente | Guadalajara, MX",
          bullets: [
            "Diseñé de extremo a extremo la app móvil para una fintech de microcréditos, incrementando la retención de usuarios en un 32% en los primeros 60 días.",
            "Construí y documenté un Sistema de Diseño con más de 200 componentes en Figma, acelerando la entrega de nuevos módulos en un 40%.",
            "Coordiné 18 sesiones de pruebas de usabilidad moderadas, identificando y resolviendo 5 puntos críticos de fricción en el checkout."
          ]
        }
      ],
      education: [
        {
          degree: "Licenciatura en Diseño para la Comunicación Gráfica",
          school: "Universidad de Guadalajara — CUAAD",
          period: "2018 – 2022",
          badge: "Titulada",
          details: "Especialización en interfaces digitales, tipografía aplicada, semiótica visual y diseño de identidad de marca."
        }
      ]
    },
    en: {
      fullName: "Camila Estrada Ponce",
      headline: "UX/UI & Product Designer · Figma, Design Systems & Interactive Prototyping",
      contact: {
        location: "Guadalajara, Jalisco, Mexico",
        email: "camila.estrada.design@email.com",
        phone: "+52 33 6543 2109",
        linkedin: "https://linkedin.com/in/camila-estrada-ux",
        linkedinUser: "in/camila-estrada-ux",
        github: "https://behance.net/camilaestrada",
        githubUser: "behance.net/camilaestrada"
      },
      about: "Product and UX/UI Designer with 3 years of experience crafting intuitive, user-centered digital experiences for web and mobile products. Specialist in generative user research, wireframing, high-fidelity Figma prototyping, and multi-brand Design System architecture. Proven partner to engineering squads: boosted target conversion rates by 32% and shortened design-to-development handoff cycles by 40%.",
      skills: [
        { title: "UX Design & Research", desc: "User Research, Usability Testing, Empathy Mapping, User Journey Mapping, Information Architecture." },
        { title: "UI Tooling & Prototyping", desc: "Figma (Auto Layout, Design Tokens, Interactive Components), Adobe Creative Suite, Protopie." },
        { title: "Design Systems & Hand-off", desc: "Atomic Design methodology, Design Tokens, Developer documentation for frontend handoff (HTML/CSS basics)." }
      ],
      softSkills: [
        { name: "User-Centered Empathy", desc: "Translating ambiguous user pain points into elegant, frictionless interface solutions." },
        { name: "Cross-Functional Collaboration", desc: "Close partnership with Product Managers and software engineers under agile sprints." },
        { name: "Evidence-Based Design", desc: "Articulating design rationale backed by usability testing data and business KPIs." }
      ],
      executiveTraining: [
        "Google UX Design Professional Certificate (Coursera).",
        "Advanced Design Systems & UI Tokenization Bootcamp."
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B2+ Professional (Presenting UI specifications and conducting user interviews in English)." }
      ],
      experience: [
        {
          role: "UX/UI Designer",
          company: "Creative Digital Studio & Labs",
          period: "2023 – Present | Guadalajara, MX",
          bullets: [
            "Spearheaded end-to-end UX/UI redesign for a regional fintech mobile app, boosting 60-day user retention by 32%.",
            "Constructed and published a comprehensive Figma Design System with 200+ modular components, slashing sprint delivery times by 40%.",
            "Conducted 18 moderated usability interviews, diagnosing and eliminating 5 critical checkout dropout friction points."
          ]
        }
      ],
      education: [
        {
          degree: "B.A. in Visual Communication & Graphic Design",
          school: "Universidad de Guadalajara — CUAAD",
          period: "2018 – 2022",
          badge: "Graduated with Honors",
          details: "Specialized in digital interaction design, applied web typography, and brand identity systems."
        }
      ]
    }
  },

  // 7. SALUD & BIENESTAR
  health: {
    es: {
      fullName: "Dra. Valeria Jiménez Ramos",
      headline: "Médica General & Coordinadora de Salud Ocupacional · NOM-035 · Medicina Preventiva",
      contact: {
        location: "Guadalajara, Jalisco, México",
        email: "valeria.jimenez.med@email.com",
        phone: "+52 33 5432 1098",
        linkedin: "https://linkedin.com/in/valeria-jimenez-med",
        linkedinUser: "in/valeria-jimenez-med"
      },
      about: "Médica titulada con Cédula Profesional y 4 años de experiencia en consulta de primer contacto, medicina preventiva y coordinación de programas de salud ocupacional en el sector industrial. Experta en evaluación médica periódica, cumplimiento de normas de la Secretaría de Salud y STPS (NOM-030, NOM-035), diseño de campañas de bienestar y gestión de emergencias médicas en sitio.",
      skills: [
        { title: "Medicina Clínica & Preventiva", desc: "Consulta médica general, Manejo de enfermedades crónico-degenerativas, Urgencias básicas y triage." },
        { title: "Salud Ocupacional & Normativa", desc: "NOM-030-STPS, NOM-035-STPS, Exámenes médicos de ingreso y periódicos, Dictámenes de aptitud laboral." },
        { title: "Gestión Hospitalaria & Expedientes", desc: "Expediente clínico electrónico (NOM-004), Control epidemiológico, Campañas de vacunación masivas." }
      ],
      softSkills: [
        { name: "Empatía Clínica", desc: "Trato cálido, respetuoso y ético a más de 20 pacientes atendidos por turno." },
        { name: "Manejo de Crisis", desc: "Control de situaciones de urgencia médica en planta con apego a protocolos BLS." },
        { name: "Liderazgo en Salud", desc: "Capacitación continua en primeros auxilios a brigadas internas de protección civil." }
      ],
      executiveTraining: [
        "Certificación BLS (Basic Life Support) por la American Heart Association (AHA).",
        "Diplomado en Toxicología y Salud en el Trabajo."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2 Médico Profesional (Lectura de literatura clínica indexada en PubMed y consulta médica)." }
      ],
      experience: [
        {
          role: "Médica Encargada de Salud Ocupacional",
          company: "Grupo Industrial Manufacturero",
          period: "2023 – Presente | Guadalajara, MX",
          bullets: [
            "Coordiné el programa de salud para 450 colaboradores, reduciendo el índice de ausentismo médico en un 24% a través de prevención activa.",
            "Realicé más de 380 exámenes médicos periódicos anuales con 100% de cumplimiento ante auditorías de inspección de la STPS.",
            "Diseñé e impartí talleres de ergonomía y salud psicosocial que disminuyeron en 40% las consultas por fatiga muscular."
          ]
        }
      ],
      education: [
        {
          degree: "Médica Cirujana y Partera",
          school: "Universidad de Guadalajara — CUCS",
          period: "2016 – 2022",
          badge: "Cédula Profesional Registrada",
          details: "Internado médico de pregrado y servicio social acreditados con mención honorífica en hospital público de segundo nivel."
        }
      ]
    },
    en: {
      fullName: "Dr. Valeria Jimenez Ramos",
      headline: "General Physician & Occupational Health Lead · Preventive Medicine · Worksite Safety",
      contact: {
        location: "Guadalajara, Jalisco, Mexico",
        email: "valeria.jimenez.med@email.com",
        phone: "+52 33 5432 1098",
        linkedin: "https://linkedin.com/in/valeria-jimenez-med",
        linkedinUser: "in/valeria-jimenez-med"
      },
      about: "Licensed Medical Doctor with 4 years of clinical experience in outpatient care, preventive medicine, and industrial occupational health programs. Specialist in employee health evaluations, public health regulatory compliance (OSHA/STPS), workplace wellness initiatives, and emergency triage. Proven success reducing workplace absenteeism by 24% through proactive health screenings and ergonomic interventions.",
      skills: [
        { title: "Clinical & Preventive Medicine", desc: "Primary care consultation, Chronic disease management (hypertension/diabetes), Emergency triage, First Aid." },
        { title: "Occupational Health Standards", desc: "Pre-employment and periodic physical evaluations, Fitness-for-duty certificates, Industrial hygiene protocols." },
        { title: "Health Information & Records", desc: "Electronic Health Record (EHR) governance, Epidemiological tracking, Workplace immunization drives." }
      ],
      softSkills: [
        { name: "Clinical Empathy", desc: "Patient-centered compassionate care delivered to 20+ consultations per shift." },
        { name: "Emergency Crisis Management", desc: "Rapid, composed response to workplace medical emergencies under BLS protocols." },
        { name: "Preventive Education", desc: "Designing and leading hands-on CPR and first-responder training for workplace emergency brigades." }
      ],
      executiveTraining: [
        "AHA Basic Life Support (BLS) Certification (American Heart Association).",
        "Postgraduate Diploma in Occupational Health & Toxicology."
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B2 Medical English (Reading clinical research in PubMed and conducting patient consultations)." }
      ],
      experience: [
        {
          role: "Occupational Health Physician Lead",
          company: "Manufacturing Industrial Enterprise",
          period: "2023 – Present | Guadalajara, MX",
          bullets: [
            "Administered dedicated on-site healthcare operations for 450 plant workers, cutting medical absenteeism by 24% via preventive screenings.",
            "Conducted 380+ annual comprehensive physical examinations, sustaining 100% regulatory audit compliance.",
            "Instituted ergonomic assessment workshops, achieving a 40% reduction in muscular strain complaints on manufacturing lines."
          ]
        }
      ],
      education: [
        {
          degree: "Doctor of Medicine (M.D.)",
          school: "Universidad de Guadalajara — CUCS",
          period: "2016 – 2022",
          badge: "Licensed Medical Practitioner",
          details: "Clinical internship and community medical service completed with honors at a recognized regional hospital."
        }
      ]
    }
  },

  // 8. EDUCACIÓN & DOCENCIA
  education: {
    es: {
      fullName: "Mtro. Fernando Navarro Ruiz",
      headline: "Docente Universitario & Diseñador Curricular · Pedagogía Activa · Tecnologías Educativas (EdTech)",
      contact: {
        location: "Guadalajara, Jalisco, México",
        email: "fernando.navarro.edu@email.com",
        phone: "+52 33 4321 0987",
        linkedin: "https://linkedin.com/in/fernando-navarro-edu",
        linkedinUser: "in/fernando-navarro-edu"
      },
      about: "Docente e investigador universitario con 5 años de experiencia impartiendo cátedra en educación superior, diseño de programas académicos por competencias y gestión de aulas virtuales. Especialista en metodologías activas (Aprendizaje Basado en Proyectos, Aula Invertida) e integración de plataformas EdTech. Con un récord probado de retención estudiantil superior al 95% y evaluaciones docentes de excelencia institucional.",
      skills: [
        { title: "Metodologías de Aprendizaje", desc: "Aprendizaje Basado en Proyectos (ABP), Gamificación educativa, Aula Invertida, Rúbricas analíticas." },
        { title: "Plataformas EdTech & LMS", desc: "Canvas LMS, Moodle, Google Classroom, Edpuzzle, Genially, H5P, Creación de Objetos de Aprendizaje." },
        { title: "Diseño Curricular & Evaluación", desc: "Planeación didáctica institucional, Diseño de reactivos bajo estándares CENEVAL, Tutoría académica." }
      ],
      softSkills: [
        { name: "Comunicación Pedagógica", desc: "Transmisión clara, motivante y empática de conceptos complejos a grupos de 40+ alumnos." },
        { name: "Adaptabilidad Docente", desc: "Ajuste dinámico de estrategias según los estilos de aprendizaje detectados en el aula." },
        { name: "Mentoría Vocacional", desc: "Acompañamiento personalizado a estudiantes en riesgo de deserción, recuperando el 85% de los casos." }
      ],
      executiveTraining: [
        "Diplomado en Docencia Universitaria basada en Competencias (UdeG).",
        "Certificación Educador Google Nivel 1 y 2."
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "C1 Avanzado (Docencia bilingüe, publicación de papers y ponencias internacionales)." }
      ],
      experience: [
        {
          role: "Profesor de Asignatura (Nivel Licenciatura)",
          company: "Universidad de Guadalajara",
          period: "2021 – Presente | Guadalajara, MX",
          bullets: [
            "Diseñé e impartí 4 cursos semestrales para más de 160 alumnos, obteniendo una evaluación de satisfacción docente promedio de 98/100.",
            "Transformé la asignatura a modalidad híbrida utilizando Canvas LMS, elevando la tasa de acreditación en primer intento del 78% al 93%.",
            "Coordiné el coloquio estudiantil de proyectos de titulación, asesorando con éxito a 12 tesis de licenciatura."
          ]
        }
      ],
      education: [
        {
          degree: "Maestría en Educación con Enfoque en Innovación",
          school: "Universidad de Guadalajara",
          period: "2019 – 2021",
          badge: "Titulado con Mención Honorífica",
          details: "Investigación sobre el impacto del aprendizaje activo en el rendimiento de estudiantes de primer ingreso."
        },
        {
          degree: "Licenciatura en Pedagogía y Ciencias de la Educación",
          school: "Universidad de Guadalajara",
          period: "2014 – 2018",
          badge: "Titulado",
          details: "Formación en psicología del aprendizaje, didáctica general, estadística educativa y diseño curricular."
        }
      ]
    },
    en: {
      fullName: "Prof. Fernando Navarro Ruiz",
      headline: "University Lecturer & Curriculum Designer · Active Learning · Educational Technology (EdTech)",
      contact: {
        location: "Guadalajara, Jalisco, Mexico",
        email: "fernando.navarro.edu@email.com",
        phone: "+52 33 4321 0987",
        linkedin: "https://linkedin.com/in/fernando-navarro-edu",
        linkedinUser: "in/fernando-navarro-edu"
      },
      about: "Higher education lecturer and curriculum designer with 5 years of university teaching experience, competency-based course authoring, and virtual learning environment administration. Expert in active learning methodologies (Project-Based Learning, Flipped Classroom) and EdTech integration. Track record of sustaining 95%+ student retention rates and top-percentile peer and student teaching evaluation scores.",
      skills: [
        { title: "Pedagogical Methodologies", desc: "Project-Based Learning (PBL), Educational Gamification, Flipped Classroom, Analytic Rubrics." },
        { title: "LMS & EdTech Tooling", desc: "Canvas LMS, Moodle, Google Classroom, Edpuzzle, Genially, Interactive Learning Objects (H5P)." },
        { title: "Curriculum Design & Assessment", desc: "Syllabus engineering, Formative/Summative assessment, Standardized testing design, Academic Advising." }
      ],
      softSkills: [
        { name: "Instructional Clarity", desc: "Engaging delivery of complex intellectual frameworks to large lecture halls of 40+ students." },
        { name: "Differentiated Instruction", desc: "Modifying instructional strategies dynamically based on formative classroom feedback." },
        { name: "Student Mentorship", desc: "Personalized academic coaching for at-risk students, achieving an 85% course recovery rate." }
      ],
      executiveTraining: [
        "Diploma in Higher Education Competency-Based Pedagogy (UdeG).",
        "Google Certified Educator Level 1 & 2."
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "C1 Advanced (Bilingual course delivery, peer-reviewed publications, and conference talks)." }
      ],
      experience: [
        {
          role: "Adjunct Professor (Undergraduate Level)",
          company: "Universidad de Guadalajara",
          period: "2021 – Present | Guadalajara, MX",
          bullets: [
            "Authored and delivered 4 semester-long courses for 160+ students, earning a cumulative student evaluation score of 98/100.",
            "Converted course modules into blended learning paths in Canvas LMS, raising first-attempt pass rates from 78% to 93%.",
            "Directed the annual undergraduate research symposium, mentoring 12 senior capstone theses to successful defense."
          ]
        }
      ],
      education: [
        {
          degree: "M.Ed. in Educational Innovation",
          school: "Universidad de Guadalajara",
          period: "2019 – 2021",
          badge: "Graduated with Highest Honors",
          details: "Master's thesis focused on the measured impact of active learning on retention among freshman undergraduates."
        },
        {
          degree: "B.A. in Education Sciences",
          school: "Universidad de Guadalajara",
          period: "2014 – 2018",
          badge: "Licensed & Graduated",
          details: "Core focus in learning psychology, instructional design, educational statistics, and curriculum development."
        }
      ]
    }
  },

  // 9. PLANTILLA EN BLANCO
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
      about: "Escribe aquí tu perfil profesional en primera persona (5 a 7 líneas). Explica quién eres, tus fortalezas técnicas y humanas clave, y qué valor tangible aportarás al equipo o empresa a la que aplicas. Según la metodología Platzi, sé conciso y demuestra tus capacidades con ejemplos concretos.",
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
// 2. BIBLIOTECA DE VIÑETAS PRE-ESCRITAS
// ==========================================

const SNIPPETS_LIBRARY = {
  tech: [
    { text: "Diseñé e implementé APIs RESTful seguras en Node.js, reduciendo los tiempos de respuesta en un 35%.", role: "Backend Developer" },
    { text: "Construí componentes reutilizables en React con Tailwind CSS, aumentando la velocidad de carga de página en un 40%.", role: "Frontend Developer" },
    { text: "Automaticé pipelines de integración y despliegue continuo (CI/CD) con GitHub Actions, reduciendo el ciclo de release a 10 minutos.", role: "DevOps / Cloud" },
    { text: "Optimicé consultas analíticas en PostgreSQL mediante indexación estratégica, disminuyendo el tiempo de ejecución en un 60%.", role: "Database Engineer" },
    { text: "Integré modelos de lenguaje (LLMs) y flujos agénticos para automatizar la extracción de datos, ahorrando 15 horas de trabajo manual semanal.", role: "AI / Machine Learning" }
  ],
  sales: [
    { text: "Superé la cuota de ventas trimestral en un 125% promedio durante 6 trimestres consecutivos mediante prospección consultiva.", role: "Ejecutivo Comercial" },
    { text: "Implementé la automatización de seguimiento de prospectos en CRM HubSpot, reduciendo el tiempo de primera respuesta de 24 horas a 20 minutos.", role: "Operaciones de Ventas" },
    { text: "Negocié y cerré acuerdos comerciales con 12 cuentas corporativas clave con un ticket promedio de $200K MXN anuales.", role: "Key Account Manager" },
    { text: "Automaticé la conciliación de reportes de facturación y cobranza en Excel mediante tablas dinámicas, ahorrando 6 horas semanales.", role: "Administración / Finanzas" }
  ],
  trades: [
    { text: "Ejecuté programas de mantenimiento preventivo y correctivo en 8 líneas de producción, reduciendo paros no programados en un 25%.", role: "Mantenimiento Industrial" },
    { text: "Diagnostiqué y reparé fallas eléctricas y neumáticas en maquinaria pesada con 0 incidentes de seguridad laboral durante 2 años.", role: "Electromecánico" },
    { text: "Supervisé el control de inventarios de refacciones e insumos críticos, reduciendo el tiempo de espera por piezas en un 30%.", role: "Almacén y Logística" },
    { text: "Coordiné rutas de entrega y logística de última milla alcanzando una tasa de entregas a tiempo (OTD) del 98.5%.", role: "Transporte y Logística" }
  ],
  health: [
    { text: "Coordiné programas de medicina preventiva para más de 400 colaboradores, disminuyendo el ausentismo laboral por enfermedad en un 20%.", role: "Salud Ocupacional" },
    { text: "Atendí más de 25 consultas clínicas diarias manteniendo un índice de satisfacción de pacientes superior al 95%.", role: "Atención Médica" },
    { text: "Implementé protocolos de triaje y respuesta a emergencias médicas en sitio, asegurando atención en menos de 5 minutos.", role: "Urgencias / Paramédico" },
    { text: "Diseñé planes de intervención nutricional y acondicionamiento personalizados para 80 pacientes con 85% de adherencia.", role: "Nutrición y Bienestar" }
  ],
  education: [
    { text: "Diseñé e impartí programas académicos en modalidad híbrida para 140 alumnos, elevando la tasa de acreditación del 75% al 92%.", role: "Docente Universitario" },
    { text: "Integré herramientas EdTech y gamificación interactiva en el aula, aumentando la participación activa de los estudiantes en un 45%.", role: "Innovación Educativa" },
    { text: "Elaboré rúbricas de evaluación analíticas por competencias alineadas a estándares institucionales para 6 asignaturas.", role: "Diseño Curricular" }
  ],
  creative: [
    { text: "Diseñé la interfaz móvil y web de extremo a extremo en Figma, incrementando la conversión del embudo de registro en un 28%.", role: "Product / UX Designer" },
    { text: "Construí y documenté un Sistema de Diseño con más de 150 componentes escalables, acelerando las entregas de frontend en un 35%.", role: "UI Designer" },
    { text: "Creé y gestioné campañas de contenido digital multicanal que aumentaron el engagement orgánico de la marca en un 120% en 6 meses.", role: "Marketing Digital" }
  ]
};

// ==========================================
// 3. ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================

const LOCAL_STORAGE_KEY = 'cv_alto_impacto_v2_draft';

let currentArchetype = 'student';
let currentLang = 'es';
let currentTheme = 'corporate';
let currentFont = 'inter';
let qrEnabled = true;
let qrTarget = 'portal';
let customQrUrl = '';

let currentCvId = localStorage.getItem('current_cv_id') || '';
let currentEditToken = localStorage.getItem('current_cv_edit_token') || '';
let publicCvUrl = currentCvId ? `${window.location.origin}/cv/${currentCvId}` : '';
let editCvUrl = currentCvId && currentEditToken ? `${window.location.origin}/?edit=${currentCvId}&key=${currentEditToken}` : '';
let isCloudSyncing = false;
let cloudSaveTimeout = null;

let state = {
  lang: currentLang,
  archetype: currentArchetype,
  theme: currentTheme,
  font: currentFont,
  profile: JSON.parse(JSON.stringify(ARCHETYPES[currentArchetype][currentLang]))
};

// ==========================================
// 4. INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Check for URL query params: ?edit=<id>&key=<token>
  const urlParams = new URLSearchParams(window.location.search);
  const editId = urlParams.get('edit');
  const editKey = urlParams.get('key');

  if (editId && editKey) {
    currentCvId = editId;
    currentEditToken = editKey;
    localStorage.setItem('current_cv_id', editId);
    localStorage.setItem('current_cv_edit_token', editKey);
    localStorage.setItem(`cv_edit_token_${editId}`, editKey);
    await loadFromCloud(editId);
  } else {
    loadFromLocalStorage();
  }

  setupArchetypeSelector();
  setupThemeSelector();
  setupFontSelector();
  setupEventListeners();
  initFormBindings();
  renderPreview();
  updateCompletenessScore();
  filterSnippets('tech');
  setupConfettiCanvas();
  setupCloudShareModal();

  // If already has cvId, update modal URLs
  if (currentCvId) {
    updateCloudModalInfo();
    updateCloudIndicator('saved');
  }
});

// ==========================================
// 5. LOCAL STORAGE & PERSISTENCIA CLOUD
// ==========================================

async function loadFromCloud(id) {
  try {
    updateCloudIndicator('syncing');
    const res = await fetch(`/api/cv/${encodeURIComponent(id)}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.cv) {
        const cv = data.cv;
        if (cv.profileData) {
          state.profile = cv.profileData;
        }
        if (cv.visualConfig) {
          if (cv.visualConfig.colorScheme) {
            currentTheme = cv.visualConfig.colorScheme;
            state.theme = currentTheme;
            applyTheme(currentTheme);
            const themeSel = document.getElementById('select-theme');
            if (themeSel) themeSel.value = currentTheme;
          }
          if (cv.visualConfig.fontPairing) {
            currentFont = cv.visualConfig.fontPairing;
            state.font = currentFont;
            applyFont(currentFont);
            const fontSel = document.getElementById('select-font');
            if (fontSel) fontSel.value = currentFont;
          }
        }
        if (cv.qrSettings) {
          qrEnabled = cv.qrSettings.enabled !== false;
          qrTarget = cv.qrSettings.target || 'portal';
          customQrUrl = cv.qrSettings.customUrl || '';
          const qrCheck = document.getElementById('check-enable-qr');
          if (qrCheck) qrCheck.checked = qrEnabled;
          const qrSelect = document.getElementById('select-qr-target');
          if (qrSelect) qrSelect.value = qrTarget;
        }

        publicCvUrl = `${window.location.origin}/cv/${cv.slug || id}`;
        editCvUrl = `${window.location.origin}/?edit=${id}&key=${currentEditToken}`;
        updateCloudModalInfo();
        updateCloudIndicator('saved');
        populateFormFromState();
        showToast('☁️ Perfil sincronizado desde Railway');
        return;
      }
    }
  } catch (err) {
    console.warn('Could not load from cloud:', err);
  }
  // Fallback to local
  loadFromLocalStorage();
}

async function saveToCloud() {
  if (isCloudSyncing) return;
  readFormIntoState();

  if (!state.profile || !state.profile.fullName || state.profile.fullName.trim() === '') {
    return;
  }

  isCloudSyncing = true;
  updateCloudIndicator('syncing');

  try {
    const payload = {
      cvId: currentCvId || undefined,
      editToken: currentEditToken || undefined,
      profile: state.profile,
      visualConfig: {
        colorScheme: currentTheme,
        fontPairing: currentFont,
        lang: currentLang,
        archetype: currentArchetype
      },
      qrSettings: {
        enabled: qrEnabled,
        target: qrTarget,
        customUrl: customQrUrl
      }
    };

    const res = await fetch('/api/cv/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const data = await res.json();
      currentCvId = data.cvId;
      currentEditToken = data.editToken;
      publicCvUrl = data.publicUrl;
      editCvUrl = data.editUrl;

      localStorage.setItem('current_cv_id', currentCvId);
      localStorage.setItem('current_cv_edit_token', currentEditToken);
      localStorage.setItem(`cv_edit_token_${currentCvId}`, currentEditToken);

      if (!window.location.search.includes(currentCvId)) {
        window.history.replaceState({}, '', `/?edit=${encodeURIComponent(currentCvId)}&key=${encodeURIComponent(currentEditToken)}`);
      }

      updateCloudModalInfo();
      updateCloudIndicator('saved');

      // Update preview if QR is set to portal
      if (qrTarget === 'portal') {
        renderPreview();
      }
    } else {
      updateCloudIndicator('error');
    }
  } catch (err) {
    console.warn('Error saving to cloud:', err);
    updateCloudIndicator('error');
  } finally {
    isCloudSyncing = false;
  }
}

function triggerCloudSaveDebounced() {
  clearTimeout(cloudSaveTimeout);
  cloudSaveTimeout = setTimeout(() => {
    saveToCloud();
  }, 1200);
}

function updateCloudIndicator(status) {
  const icon = document.getElementById('cloud-status-icon');
  const text = document.getElementById('cloud-status-text');
  if (!icon || !text) return;

  if (status === 'syncing') {
    icon.textContent = '⏳';
    text.textContent = 'Guardando...';
  } else if (status === 'saved') {
    icon.textContent = '🟢';
    text.textContent = 'En la Nube';
  } else if (status === 'error') {
    icon.textContent = '⚠️';
    text.textContent = 'Reintentar';
  }
}

function updateCloudModalInfo() {
  const publicInput = document.getElementById('share-public-url');
  const editInput = document.getElementById('share-edit-url');
  const publicBtn = document.getElementById('share-public-link-btn');
  const qrImg = document.getElementById('share-qr-img');
  const downloadQrBtn = document.getElementById('btn-download-qr');

  const pubUrl = publicCvUrl || (currentCvId ? `${window.location.origin}/cv/${currentCvId}` : `${window.location.origin}/cv/`);
  const edUrl = editCvUrl || (currentCvId && currentEditToken ? `${window.location.origin}/?edit=${currentCvId}&key=${currentEditToken}` : '');

  if (publicInput) publicInput.value = pubUrl;
  if (editInput) editInput.value = edUrl;
  if (publicBtn) publicBtn.href = pubUrl;

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pubUrl)}&margin=2`;
  if (qrImg) qrImg.src = qrSrc;
  if (downloadQrBtn) downloadQrBtn.href = qrSrc;
}

function setupCloudShareModal() {
  document.getElementById('btn-cloud-share')?.addEventListener('click', () => {
    updateCloudModalInfo();
    document.getElementById('share-links-modal')?.classList.remove('hidden');
    // Ensure saved
    if (!currentCvId) {
      saveToCloud();
    }
  });
}

function saveToLocalStorage() {
  readFormIntoState();
  const payload = {
    state,
    timestamp: new Date().toISOString()
  };
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
    updateSaveIndicator(true);
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.state && parsed.state.profile) {
      state = parsed.state;
      currentLang = state.lang || 'es';
      currentArchetype = state.archetype || 'student';
      currentTheme = state.theme || 'corporate';
      currentFont = state.font || 'inter';

      applyTheme(currentTheme);
      applyFont(currentFont);
      
      const archetypeSelect = document.getElementById('select-archetype');
      if (archetypeSelect) archetypeSelect.value = currentArchetype;

      const themeSelect = document.getElementById('select-theme');
      if (themeSelect) themeSelect.value = currentTheme;

      const fontSelect = document.getElementById('select-font');
      if (fontSelect) fontSelect.value = currentFont;

      showToast('⚡ Borrador local restaurado');
    }
  } catch (e) {
    console.warn('Could not restore draft:', e);
  }
}

function updateSaveIndicator(saved) {
  const textEl = document.getElementById('save-status-text');
  if (!textEl) return;
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  textEl.textContent = saved ? `Guardado (${timeStr})` : 'Guardando...';
}

// Debounce helper
let saveTimeout = null;
function debouncedSave() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    saveToLocalStorage();
    triggerCloudSaveDebounced();
  }, 400);
}

// ==========================================
// 6. THEMES & FONTS
// ==========================================

function setupThemeSelector() {
  const select = document.getElementById('select-theme');
  if (!select) return;
  select.value = currentTheme;
  select.addEventListener('change', (e) => {
    currentTheme = e.target.value;
    state.theme = currentTheme;
    applyTheme(currentTheme);
    debouncedSave();
  });
}

function applyTheme(themeName) {
  document.body.setAttribute('data-theme', themeName);
  const sheet = document.querySelector('.cv-sheet');
  if (sheet) sheet.setAttribute('data-theme', themeName);
}

function setupFontSelector() {
  const select = document.getElementById('select-font');
  if (!select) return;
  select.value = currentFont;
  select.addEventListener('change', (e) => {
    currentFont = e.target.value;
    state.font = currentFont;
    applyFont(currentFont);
    debouncedSave();
  });
}

function applyFont(fontName) {
  document.body.setAttribute('data-font', fontName);
  const sheet = document.querySelector('.cv-sheet');
  if (sheet) sheet.setAttribute('data-font', fontName);
}

// ==========================================
// 7. ARQUETIPOS & SELECTOR
// ==========================================

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
  updateCompletenessScore();
  debouncedSave();
  showToast(`✨ Plantilla de rol cargada`);
}

// ==========================================
// 8. EVENTOS DE LA BARRA SUPERIOR
// ==========================================

function setupEventListeners() {
  // Idioma
  document.getElementById('btn-lang-es')?.addEventListener('click', () => switchLanguage('es'));
  document.getElementById('btn-lang-en')?.addEventListener('click', () => switchLanguage('en'));

  // Exportaciones
  document.getElementById('btn-print')?.addEventListener('click', () => window.print());
  document.getElementById('btn-download-html')?.addEventListener('click', downloadHTML);
  document.getElementById('btn-copy-md')?.addEventListener('click', copyMarkdown);
  document.getElementById('btn-save-json')?.addEventListener('click', saveJSON);
  document.getElementById('input-load-json')?.addEventListener('change', loadJSON);

  // Modales
  document.getElementById('btn-platzi-guide')?.addEventListener('click', () => {
    document.getElementById('platzi-modal')?.classList.remove('hidden');
  });
  document.getElementById('btn-close-modal')?.addEventListener('click', () => {
    document.getElementById('platzi-modal')?.classList.add('hidden');
  });

  document.getElementById('btn-open-snippets')?.addEventListener('click', () => {
    document.getElementById('snippets-modal')?.classList.remove('hidden');
  });

  document.getElementById('btn-open-ats')?.addEventListener('click', () => {
    document.getElementById('ats-modal')?.classList.remove('hidden');
  });
  document.getElementById('btn-run-ats')?.addEventListener('click', runATSAnalysis);

  document.getElementById('btn-open-qr')?.addEventListener('click', () => {
    document.getElementById('qr-modal')?.classList.remove('hidden');
  });

  document.getElementById('check-enable-qr')?.addEventListener('change', (e) => {
    qrEnabled = e.target.checked;
    renderPreview();
    debouncedSave();
  });

  document.getElementById('select-qr-target')?.addEventListener('change', (e) => {
    qrTarget = e.target.value;
    const customInput = document.getElementById('field-custom-qr-url');
    if (customInput) {
      if (qrTarget === 'custom') customInput.classList.remove('hidden');
      else customInput.classList.add('hidden');
    }
    renderPreview();
    debouncedSave();
  });

  document.getElementById('field-custom-qr-url')?.addEventListener('input', (e) => {
    customQrUrl = e.target.value;
    renderPreview();
    debouncedSave();
  });

  // Confetti Test
  document.getElementById('btn-test-confetti')?.addEventListener('click', () => {
    triggerConfetti();
    showToast('🎉 ¡Felicitaciones por avanzar en tu CV!');
  });

  // Limpiar
  document.getElementById('btn-reset-form')?.addEventListener('click', () => {
    if (confirm(state.lang === 'en' ? 'Reset form to a clean template?' : '¿Reiniciar formulario a una plantilla limpia?')) {
      const selectEl = document.getElementById('select-archetype');
      if (selectEl) selectEl.value = 'blank';
      loadArchetype('blank');
    }
  });

  // Mobile Toggle Button
  const mobileToggleBtn = document.getElementById('btn-mobile-toggle');
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('mobile-preview-active');
      const isActive = document.body.classList.contains('mobile-preview-active');
      const textEl = document.getElementById('mobile-toggle-text');
      const iconEl = document.getElementById('mobile-toggle-icon');
      if (isActive) {
        textEl.textContent = 'Editar Formulario';
        iconEl.textContent = '✏️';
      } else {
        textEl.textContent = 'Ver Vista Previa';
        iconEl.textContent = '👁️';
      }
    });
  }
}

// ==========================================
// 9. IDIOMA (ES / EN)
// ==========================================

function switchLanguage(targetLang) {
  if (state.lang === targetLang) return;
  
  readFormIntoState();
  state.lang = targetLang;
  currentLang = targetLang;

  if (ARCHETYPES[currentArchetype] && ARCHETYPES[currentArchetype][targetLang]) {
    state.profile = JSON.parse(JSON.stringify(ARCHETYPES[currentArchetype][targetLang]));
  }

  const btnEs = document.getElementById('btn-lang-es');
  const btnEn = document.getElementById('btn-lang-en');

  if (targetLang === 'es') {
    btnEs.className = 'px-2.5 py-1 text-xs font-bold rounded-md bg-sky-600 text-white shadow-sm';
    btnEn.className = 'px-2.5 py-1 text-xs font-medium rounded-md text-slate-300 hover:text-white';
  } else {
    btnEn.className = 'px-2.5 py-1 text-xs font-bold rounded-md bg-sky-600 text-white shadow-sm';
    btnEs.className = 'px-2.5 py-1 text-xs font-medium rounded-md text-slate-300 hover:text-white';
  }

  populateFormFromState();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
  showToast(targetLang === 'en' ? 'Switched to English 🇺🇸' : 'Cambiado a Español 🇪🇸');
}

// ==========================================
// 10. LECTURA Y POBLADO DE FORMULARIO
// ==========================================

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
        updateCompletenessScore();
        debouncedSave();
      });
    }
  });

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
// 11. GAMIFIED COMPLETENESS SCORE & "NEXT ACTION"
// ==========================================

let lastScore = 0;

function updateCompletenessScore() {
  const p = state.profile;
  if (!p) return;

  let score = 0;
  let nextAction = { title: "¡Excelente!", text: "Tu CV tiene un nivel de alto impacto listo para postular." };

  // 1. Contact (Max 15)
  let contactScore = 0;
  if (p.fullName && p.fullName.trim().length > 3) contactScore += 5;
  if (p.headline && p.headline.trim().length > 5) contactScore += 4;
  if (p.contact?.email && p.contact.email.includes('@')) contactScore += 3;
  if (p.contact?.phone && p.contact.phone.trim().length > 6) contactScore += 3;
  score += contactScore;

  // 2. About Me (Max 15)
  let aboutScore = 0;
  if (p.about && p.about.trim().length >= 80) aboutScore = 15;
  else if (p.about && p.about.trim().length > 20) aboutScore = 8;
  score += aboutScore;

  // 3. Experience & Metrics (Max 30)
  let expScore = 0;
  if (p.experience && p.experience.length > 0) {
    expScore += 10;
    // Check for metrics/numbers in bullets (% / $ / numbers / hours / metrics)
    const hasMetrics = p.experience.some(e => 
      (e.bullets || []).some(b => /[\d%$\+]/.test(b))
    );
    if (hasMetrics) expScore += 15;
    if (p.experience.length >= 2) expScore += 5;
  }
  score += expScore;

  // 4. Education (Max 15)
  let eduScore = 0;
  if (p.education && p.education.length > 0) {
    eduScore += 10;
    if (p.education.some(e => e.badge || e.details)) eduScore += 5;
  }
  score += eduScore;

  // 5. Skills (Max 15)
  let skillsScore = 0;
  if (p.skills && p.skills.length >= 2) skillsScore = 15;
  else if (p.skills && p.skills.length === 1) skillsScore = 8;
  score += skillsScore;

  // 6. Languages / Extras (Max 10)
  let extraScore = 0;
  if (p.languages && p.languages.length >= 1) extraScore += 5;
  if (p.softSkills && p.softSkills.length >= 2) extraScore += 5;
  score += extraScore;

  score = Math.min(100, Math.round(score));

  // Determine Next Best Action
  if (contactScore < 12) {
    nextAction = {
      title: "Completa tus Datos de Contacto",
      text: "Agrega tu correo profesional, teléfono y enlace de LinkedIn para que los reclutadores puedan contactarte."
    };
  } else if (aboutScore < 10) {
    nextAction = {
      title: "Fortalece tu 'Sobre Mí'",
      text: "Escribe de 5 a 7 líneas en primera persona destacando tus fortalezas técnicas y qué valor aportas al equipo."
    };
  } else if (expScore < 20) {
    nextAction = {
      title: "Agrega Métricas Cuantificables",
      text: "Incluye números (%, $, horas ahorradas o usuarios) en las viñetas de tu experiencia según la fórmula Platzi."
    };
  } else if (skillsScore < 10) {
    nextAction = {
      title: "Categoriza tus Habilidades Técnicas",
      text: "Agrega al menos 2 categorías de herramientas clave que domines (ej. Frontend, Bases de Datos, CRM)."
    };
  } else if (eduScore < 10) {
    nextAction = {
      title: "Añade tu Educación Formal",
      text: "Registra tu carrera, universidad y periodo o promedio sobresaliente."
    };
  } else if (score < 90) {
    nextAction = {
      title: "Agrega Idiomas y Certificaciones",
      text: "Incluye tu nivel de inglés (ej. B2) y cursos recientes para llegar a la categoría de Alto Impacto."
    };
  }

  // Update DOM elements
  const scoreNumEl = document.getElementById('score-number');
  const scoreBarEl = document.getElementById('score-circle-bar');
  const badgeEl = document.getElementById('score-badge');
  const actionTitleEl = document.getElementById('next-action-title');
  const actionTextEl = document.getElementById('next-action-text');

  if (scoreNumEl) scoreNumEl.textContent = `${score}%`;
  if (scoreBarEl) {
    // Circumference: 2 * PI * 15.9155 = 100
    const offset = 100 - score;
    scoreBarEl.style.strokeDashoffset = offset;
    
    // Color gradient based on score
    if (score < 35) scoreBarEl.style.stroke = '#94a3b8'; // Slate
    else if (score < 65) scoreBarEl.style.stroke = '#f59e0b'; // Amber
    else if (score < 90) scoreBarEl.style.stroke = '#0ea5e9'; // Sky
    else scoreBarEl.style.stroke = '#10b981'; // Emerald
  }

  if (badgeEl) {
    if (score < 30) {
      badgeEl.textContent = 'Borrador';
      badgeEl.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 uppercase';
    } else if (score < 60) {
      badgeEl.textContent = 'En Construcción';
      badgeEl.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 uppercase';
    } else if (score < 85) {
      badgeEl.textContent = 'Competitivo';
      badgeEl.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800 uppercase';
    } else {
      badgeEl.textContent = 'Alto Impacto 🌟';
      badgeEl.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase';
    }
  }

  if (actionTitleEl) actionTitleEl.textContent = nextAction.title;
  if (actionTextEl) actionTextEl.textContent = nextAction.text;

  // Mini checks
  updateCheckIndicator('check-contact', contactScore >= 12);
  updateCheckIndicator('check-about', aboutScore >= 10);
  updateCheckIndicator('check-exp', expScore >= 20);
  updateCheckIndicator('check-edu', eduScore >= 10);
  updateCheckIndicator('check-skills', skillsScore >= 10);
  updateCheckIndicator('check-lang', extraScore >= 5);

  // Trigger celebration on crossing 90%
  if (score >= 90 && lastScore < 90) {
    triggerConfetti();
    showToast('🎉 ¡Felicidades! Tu CV alcanzó el nivel de Alto Impacto');
  }
  lastScore = score;
}

function updateCheckIndicator(elementId, isComplete) {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (isComplete) {
    el.className = 'p-1 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200';
  } else {
    el.className = 'p-1 rounded bg-slate-50 text-slate-400';
  }
}

// ==========================================
// 12. PURE CANVAS CONFETTI (ZERO-DEPENDENCY)
// ==========================================

let confettiCanvas = null;
let confettiCtx = null;
let confettiParticles = [];
let confettiAnimationId = null;

function setupConfettiCanvas() {
  confettiCanvas = document.getElementById('confetti-canvas');
  if (!confettiCanvas) return;
  confettiCtx = confettiCanvas.getContext('2d');
  resizeConfettiCanvas();
  window.addEventListener('resize', resizeConfettiCanvas);
}

function resizeConfettiCanvas() {
  if (!confettiCanvas) return;
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

function triggerConfetti() {
  if (!confettiCanvas || !confettiCtx) return;
  resizeConfettiCanvas();
  
  const colors = ['#0284c7', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#3b82f6'];
  confettiParticles = [];
  
  for (let i = 0; i < 90; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2 - 50,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.8) * 16,
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
  renderConfettiFrame();
}

function renderConfettiFrame() {
  if (!confettiCtx) return;
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  let active = 0;
  confettiParticles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.35; // Gravity
    p.vx *= 0.98; // Drag
    p.rotation += p.vRotation;
    p.opacity -= 0.009;

    if (p.opacity > 0) {
      active++;
      confettiCtx.save();
      confettiCtx.globalAlpha = Math.max(0, p.opacity);
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      confettiCtx.restore();
    }
  });

  if (active > 0) {
    confettiAnimationId = requestAnimationFrame(renderConfettiFrame);
  } else {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

// ==========================================
// 13. BIBLIOTECA DE VIÑETAS (SNIPPETS MODAL)
// ==========================================

window.openSnippetsModal = function(category) {
  filterSnippets(category || 'tech');
  document.getElementById('snippets-modal')?.classList.remove('hidden');
};

window.filterSnippets = function(category) {
  const container = document.getElementById('snippets-list-container');
  if (!container) return;
  
  // Highlight tab
  const tabs = document.querySelectorAll('#snippets-category-tabs button');
  tabs.forEach(t => {
    t.className = 'px-3 py-1 font-medium rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700';
  });
  event?.target?.classList?.remove('bg-slate-100', 'text-slate-700');
  event?.target?.classList?.add('bg-sky-600', 'text-white', 'font-bold');

  const items = SNIPPETS_LIBRARY[category] || SNIPPETS_LIBRARY['tech'];
  container.innerHTML = items.map((item, idx) => `
    <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-sky-300 transition flex items-start justify-between gap-3">
      <div>
        <span class="text-[10px] font-bold uppercase text-sky-700 block mb-0.5">${escapeHtml(item.role)}</span>
        <p class="text-slate-800 leading-snug">${escapeHtml(item.text)}</p>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0">
        <button onclick="insertSnippetText('${escapeHtml(item.text)}')" class="px-2 py-1 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded text-[11px] shadow-sm">
          + Insertar
        </button>
      </div>
    </div>
  `).join('');
};

window.insertSnippetText = function(text) {
  if (!state.profile.experience || state.profile.experience.length === 0) {
    addExperienceItem();
  }
  // Append to first experience bullets
  if (!state.profile.experience[0].bullets) state.profile.experience[0].bullets = [];
  state.profile.experience[0].bullets.push(text);
  renderExperienceFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
  showToast('✅ Viñeta insertada en tu experiencia');
  document.getElementById('snippets-modal')?.classList.add('hidden');
};

// ==========================================
// 14. CLIENT-SIDE ATS KEYWORD CHECKER
// ==========================================

const STOP_WORDS = new Set([
  'de', 'la', 'que', 'el', 'en', 'y', 'a', 'los', 'del', 'se', 'las', 'por', 'un', 'para', 'con', 'no', 'una', 'su',
  'al', 'lo', 'como', 'más', 'pero', 'sus', 'le', 'ya', 'o', 'este', 'sí', 'porque', 'esta', 'son', 'entre', 'está',
  'the', 'and', 'to', 'of', 'a', 'in', 'is', 'that', 'for', 'it', 'as', 'was', 'with', 'on', 'be', 'at', 'by', 'this',
  'we', 'you', 'or', 'an', 'are', 'from', 'at', 'our', 'will', 'your', 'all', 'can', 'has', 'have', 'more', 'work'
]);

function runATSAnalysis() {
  const jdText = document.getElementById('ats-job-desc')?.value || '';
  if (jdText.trim().length < 40) {
    alert('Por favor pega una descripción de vacante de al menos 40 caracteres.');
    return;
  }

  // Tokenize JD
  const jdTokens = jdText.toLowerCase()
    .replace(/[^\wáéíóúüñ\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3 && !STOP_WORDS.has(w));

  // Word frequency
  const freq = {};
  jdTokens.forEach(w => { freq[w] = (freq[w] || 0) + 1; });

  // Top 20 keywords from JD
  const topKeywords = Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .slice(0, 20);

  // Combine entire CV text
  const cvText = [
    state.profile.headline,
    state.profile.about,
    ...(state.profile.skills || []).map(s => s.title + ' ' + s.desc),
    ...(state.profile.experience || []).flatMap(e => [e.role, e.company, ...(e.bullets || [])]),
    ...(state.profile.education || []).map(e => e.degree + ' ' + (e.details || ''))
  ].join(' ').toLowerCase();

  const found = [];
  const missing = [];

  topKeywords.forEach(kw => {
    if (cvText.includes(kw)) {
      found.push(kw);
    } else {
      missing.push(kw);
    }
  });

  const matchPercent = Math.round((found.length / topKeywords.length) * 100);

  // Render results
  const resultsBox = document.getElementById('ats-results-box');
  const scoreBadge = document.getElementById('ats-score-badge');
  const foundContainer = document.getElementById('ats-found-keywords');
  const missingContainer = document.getElementById('ats-missing-keywords');

  if (resultsBox) resultsBox.classList.remove('hidden');
  if (scoreBadge) {
    scoreBadge.textContent = `${matchPercent}%`;
    scoreBadge.className = matchPercent >= 70 ? 'text-2xl font-black text-emerald-600' : 'text-2xl font-black text-amber-600';
  }

  if (foundContainer) {
    foundContainer.innerHTML = found.length > 0 
      ? found.map(k => `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">✓ ${escapeHtml(k)}</span>`).join('')
      : '<span class="text-slate-400">Ninguna palabra clave clave coincidente aún.</span>';
  }

  if (missingContainer) {
    missingContainer.innerHTML = missing.length > 0
      ? missing.map(k => `<button onclick="addKeywordToSkills('${escapeHtml(k)}')" class="px-2 py-0.5 rounded bg-rose-100 hover:bg-rose-200 text-rose-800 font-medium transition cursor-pointer" title="Clic para agregar a tus habilidades">+ ${escapeHtml(k)}</button>`).join('')
      : '<span class="text-emerald-600 font-bold">¡Excelente! Tu CV cubre todas las palabras clave prioritarias.</span>';
  }
}

window.addKeywordToSkills = function(word) {
  if (!state.profile.skills || state.profile.skills.length === 0) {
    addSkillCategoryItem();
  }
  state.profile.skills[0].desc += `, ${word}`;
  renderSkillsFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
  showToast(`✅ Palabra "${word}" agregada a tus habilidades`);
};

// ==========================================
// 15. CLIENT-SIDE QR GENERATOR (MINIMAL SVG)
// ==========================================

function getQrCodeUrl() {
  if (qrTarget === 'portal') {
    if (publicCvUrl) return publicCvUrl;
    if (currentCvId) return `${window.location.origin}/cv/${currentCvId}`;
    return `${window.location.origin}/cv/mi-cv`;
  }
  if (qrTarget === 'custom' && customQrUrl.trim().length > 0) {
    return customQrUrl.trim();
  }
  if (qrTarget === 'github' && state.profile.contact?.github) {
    return state.profile.contact.github;
  }
  return state.profile.contact?.linkedin || state.profile.contact?.github || `${window.location.origin}`;
}

window.copyToClipboard = function(elementId, successMsg) {
  const el = document.getElementById(elementId);
  if (!el) return;
  navigator.clipboard.writeText(el.value).then(() => {
    showToast(`✓ ${successMsg}`);
  }).catch(() => {
    el.select();
    document.execCommand('copy');
    showToast(`✓ ${successMsg}`);
  });
};

function renderQrSvgMarkup(url) {
  // Uses QuickChart or Google Chart public QR image API without heavy dependencies
  const encoded = encodeURIComponent(url);
  return `
    <div class="cv-qr-box">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encoded}&margin=2" alt="QR Contacto" loading="lazy">
      <span class="cv-qr-label">Escanear Perfil</span>
    </div>
  `;
}

// ==========================================
// 16. FORM LIST RENDERS
// ==========================================

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
  updateCompletenessScore();
  debouncedSave();
};

window.updateExpBullets = function(idx, val) {
  state.profile.experience[idx].bullets = val.split('\n').filter(b => b.trim().length > 0);
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
};

window.addExperienceItem = function() {
  if (!state.profile.experience) state.profile.experience = [];
  state.profile.experience.unshift({
    role: state.lang === 'en' ? "Professional Role" : "Puesto / Rol",
    company: state.lang === 'en' ? "Company or Project" : "Empresa o Proyecto",
    period: state.lang === 'en' ? "2024 – Present | City, Country" : "2024 – Presente | Ciudad, País",
    bullets: [
      state.lang === 'en' 
        ? "Engineered [technical solution] utilizing [key tools], boosting productivity by 35%."
        : "Diseñé e implementé [solución técnica] utilizando [herramientas], incrementando la productividad en un 35%."
    ]
  });
  renderExperienceFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
};

window.removeExperienceItem = function(idx) {
  state.profile.experience.splice(idx, 1);
  renderExperienceFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
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
  updateCompletenessScore();
  debouncedSave();
};

window.addEducationItem = function() {
  if (!state.profile.education) state.profile.education = [];
  state.profile.education.push({
    degree: state.lang === 'en' ? "Degree / Major" : "Licenciatura o Grado",
    school: state.lang === 'en' ? "University / Institute" : "Universidad / Institución",
    period: state.lang === 'en' ? "2023 – In progress" : "2023 – En curso",
    badge: state.lang === 'en' ? "GPA: 95/100" : "Promedio: 95/100",
    details: state.lang === 'en' ? "Specialized academic training." : "Especialización y materias relevantes."
  });
  renderEducationFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
};

window.removeEducationItem = function(idx) {
  state.profile.education.splice(idx, 1);
  renderEducationFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
};

// 3. HABILIDADES TÉCNICAS
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
  updateCompletenessScore();
  debouncedSave();
};

window.addSkillCategoryItem = function() {
  if (!state.profile.skills) state.profile.skills = [];
  state.profile.skills.push({
    title: state.lang === 'en' ? "Technical Category" : "Nueva Categoría",
    desc: state.lang === 'en' ? "Tool 1, Tool 2, Tool 3." : "Herramienta 1, Herramienta 2, Herramienta 3."
  });
  renderSkillsFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
};

window.removeSkillItem = function(idx) {
  state.profile.skills.splice(idx, 1);
  renderSkillsFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
};

// 4. COMPETENCIAS BLANDAS
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
  updateCompletenessScore();
  debouncedSave();
};

window.addSoftSkillItem = function() {
  if (!state.profile.softSkills) state.profile.softSkills = [];
  state.profile.softSkills.push({
    name: state.lang === 'en' ? "Analytical Problem Solving" : "Pensamiento Analítico",
    desc: state.lang === 'en' ? "Decomposing complex requirements into manageable technical steps." : "Descomposición estructurada de requerimientos complejos en pasos técnicos."
  });
  renderSoftSkillsFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
};

window.removeSoftSkillItem = function(idx) {
  state.profile.softSkills.splice(idx, 1);
  renderSoftSkillsFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
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
  updateCompletenessScore();
  debouncedSave();
};

window.addLanguageItem = function() {
  if (!state.profile.languages) state.profile.languages = [];
  state.profile.languages.push({
    name: state.lang === 'en' ? "English" : "Inglés",
    level: state.lang === 'en' ? "B2 Professional Proficiency" : "B2 Profesional Técnico"
  });
  renderLanguagesFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
};

window.removeLanguageItem = function(idx) {
  state.profile.languages.splice(idx, 1);
  renderLanguagesFormList();
  renderPreview();
  updateCompletenessScore();
  debouncedSave();
};

// 6. CERTIFICACIONES
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
  debouncedSave();
};

window.addTrainingItem = function() {
  if (!state.profile.executiveTraining) state.profile.executiveTraining = [];
  state.profile.executiveTraining.push(
    state.lang === 'en' 
      ? "Academy / Institution: Professional Certificate." 
      : "Platzi: Certificación Profesional."
  );
  renderTrainingFormList();
  renderPreview();
  debouncedSave();
};

window.removeTrainingItem = function(idx) {
  state.profile.executiveTraining.splice(idx, 1);
  renderTrainingFormList();
  renderPreview();
  debouncedSave();
};

// 7. HACKATONES
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
        <label class="block text-[11px] font-semibold text-slate-600">Nombre del Hackathon / Reto</label>
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
  debouncedSave();
};

window.addHackathonItem = function() {
  if (!state.profile.hackathons) state.profile.hackathons = [];
  state.profile.hackathons.push({
    title: state.lang === 'en' ? "Innovation Challenge (Finalist)" : "Reto de Innovación (Finalista)",
    desc: state.lang === 'en' ? "Developed a functional solution under a 36-hour sprint." : "Desarrollo de una solución funcional en un sprint de 36 horas."
  });
  renderHackathonsFormList();
  renderPreview();
  debouncedSave();
};

window.removeHackItem = function(idx) {
  state.profile.hackathons.splice(idx, 1);
  renderHackathonsFormList();
  renderPreview();
  debouncedSave();
};

// 8. COMUNIDAD
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
  debouncedSave();
};

window.addCommunityItem = function() {
  if (!state.profile.community) state.profile.community = [];
  state.profile.community.push({
    name: state.lang === 'en' ? "Professional Tech Community" : "Comunidad Profesional",
    desc: state.lang === 'en' ? "Active peer collaborator on technical workshops." : "Colaborador activo en talleres y eventos de la industria."
  });
  renderCommunityFormList();
  renderPreview();
  debouncedSave();
};

window.removeCommunityItem = function(idx) {
  state.profile.community.splice(idx, 1);
  renderCommunityFormList();
  renderPreview();
  debouncedSave();
};

// ==========================================
// 17. RENDERIZADO EN VIVO DE LA HOJA DEL CV
// ==========================================

function renderPreview() {
  const container = document.getElementById('cv-preview-render');
  if (!container) return;

  const p = state.profile;
  const isEn = state.lang === 'en';

  const labels = isEn ? {
    contact: "Contact",
    techSkills: "Core Skills",
    coreComp: "Competencies",
    execTraining: "Continuous Learning",
    languages: "Languages",
    community: "Community & Impact",
    aboutMe: "Professional Profile",
    experience: "Experience & Projects",
    hackathons: "Achievements & Innovation",
    education: "Formal Education"
  } : {
    contact: "Contacto",
    techSkills: "Habilidades Principales",
    coreComp: "Competencias Clave",
    execTraining: "Formación Continua",
    languages: "Idiomas",
    community: "Comunidad & Impacto",
    aboutMe: "Perfil Profesional",
    experience: "Experiencia & Proyectos",
    hackathons: "Logros & Innovación",
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

  const qrMarkup = qrEnabled ? renderQrSvgMarkup(getQrCodeUrl()) : '';

  container.innerHTML = `
    <div class="cv-sheet" data-theme="${currentTheme}" data-font="${currentFont}">
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

        <!-- QR Code -->
        ${qrMarkup}
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
// 18. EXPORTACIONES (HTML, MD, JSON)
// ==========================================

function downloadHTML() {
  const container = document.getElementById('cv-preview-render');
  if (!container) return;

  const htmlContent = `<!DOCTYPE html>
<html lang="${state.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV - ${escapeHtml(state.profile.fullName || 'Curriculum')}</title>
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
    md += `## ${isEn ? 'CORE SKILLS' : 'HABILIDADES'}\n\n`;
    p.skills.forEach(s => {
      md += `- **${s.title}:** ${s.desc}\n`;
    });
    md += `\n---\n\n`;
  }

  if (p.softSkills && p.softSkills.length > 0) {
    md += `## ${isEn ? 'COMPETENCIES' : 'COMPETENCIAS'}\n\n`;
    p.softSkills.forEach(s => {
      md += `- **${s.name}:** ${s.desc}\n`;
    });
    md += `\n`;
  }

  navigator.clipboard.writeText(md).then(() => {
    showToast('📋 Markdown ATS copiado al portapapeles');
  }).catch(() => {
    showToast('⚠️ No se pudo copiar');
  });
}

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
      updateCompletenessScore();
      debouncedSave();
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
