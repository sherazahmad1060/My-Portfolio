/* ==========================================================================
   PORTFOLIO CONFIGURATION DATA
   ========================================================================== */
const PORTFOLIO_DATA = {
  personal: {
    name: "Sheraz Ahmad",
    titles: [
      "Junior Full-Stack Engineer",
      "Cloud Software Architect",
      "Frontend Systems Specialist",
      "Distributed Systems Builder"
    ],
    shortIntro: "Junior Full-Stack Engineer and Software Architect dedicated to engineering resilient, blazing-fast web platforms and elegant digital interfaces. Converting complex system design challenges into production-grade software.",
    aboutParagraphs: [
      "I am a passionate Junior Full-Stack Engineer and Software Architect with a relentless curiosity for how systems scale and a deep commitment to clean software craftsmanship.",
      "Over the past several years, I have architected and deployed responsive web apps, high-throughput REST and GraphQL APIs, and high-performance frontend interfaces. I thrive on translating abstract product requirements into intuitive, reliable, and delightful user experiences.",
      "My primary goal is to contribute to ambitious engineering teams where performance, accessibility, and resilient architecture are celebrated. Outside of coding, I enjoy mentoring junior developers, exploring distributed systems, and following emerging AI breakthroughs."
    ],
    location: "Lahore, Pakistan",
    timeZone: "Asia/Karachi",
    timeZoneLabel: "PKT",
    email: "sherazahmad1060@gmail.com",
    phone: "+92 3286400787",
    availability: "Available for High-Impact Roles & Architecture",
    languages: "English (Professional), Urdu (Native)",
    resumeUrl: "Sheraz_Ahmad_Resume.pdf",
    avatarUrl: "hero-portrait.jpg",
    experienceYears: "3+",
    projectsShipped: "25+",
    clientSatisfaction: "100%"
  },

  resume: {
    summary: "BS-IT student at Superior University with skills in full stack web development and UI/UX design, plus hands-on experience in production and retail sales. Seeking a job to learn, support the team, and apply technical and communication skills to build useful technology solutions.",
    address: "Hawali Azmat, Wattna, Raiwind, Lahore, Pakistan",
    projects: [
      {
        name: "E-commerce Website",
        category: "Web Development",
        description: "Designed and developed an online shopping website using HTML, CSS, and JavaScript, with a focus on a clean, user-friendly layout."
      },
      {
        name: "Calculator Application",
        category: "Programming Project",
        description: "Designed and coded the algorithm for a functional calculator application."
      }
    ],
    skills: [
      { category: "Web and Programming", items: ["JavaScript", "HTML", "CSS", "Python", "C++"] },
      { category: "Databases", items: ["MySQL", "NoSQL"] },
      { category: "Design", items: ["UI/UX Design", "Full-Stack Development"] },
      { category: "Tools", items: ["Microsoft Word", "PowerPoint", "Excel"] },
      { category: "Soft Skills", items: ["Communication", "Leadership", "Decision Making", "Teamwork"] }
    ],
    certifications: [
      "AWS Certification",
      "Claude Certification",
      "Microsoft Word Certification",
      "Introduction to MySQL",
      "Python Certification"
    ]
  },

  skills: [
    {
      category: "Programming Languages",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      type: "progress",
      items: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Python", level: 88 },
        { name: "Java", level: 78 },
        { name: "HTML5 & CSS3 / SCSS", level: 96 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
      type: "tags",
      items: [
        "React.js", "Next.js", "Node.js", "Express.js",
        "Django", "FastAPI", "Tailwind CSS", "Redux Toolkit", "Vue.js", "WebSockets"
      ]
    },
    {
      category: "Databases & Storage",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      type: "tags",
      items: [
        "PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase", "DynamoDB"
      ]
    },
    {
      category: "Tools & Platforms",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      type: "tags",
      items: [
        "AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "Git & GitHub", "CI/CD Actions", "Vercel", "Figma", "Postman"
      ]
    },
    {
      category: "Soft Skills & Principles",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      type: "tags",
      items: [
        "System Architecture", "Problem Solving", "Agile & Scrum", "Technical Mentorship", "Code Reviews", "Cross-Functional Collaboration"
      ]
    }
  ],

  projects: [
    {
      id: "pulseai",
      title: "PulseAI Cloud Studio",
      year: "2024",
      category: "AI/ML",
      description: "An AI-powered development playground that assists software developers in creating micro-services and testing REST APIs. Reduced API prototyping turnaround time by 40% across initial beta users.",
      technologies: ["React", "TypeScript", "Node.js", "OpenAI API", "Tailwind CSS"],
      liveUrl: "https://example.com/pulseai",
      githubUrl: "https://github.com/example/pulseai",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      caseStudy: {
        problem: "Engineers spend over 30% of sprint time manually writing repetitive boilerplate endpoints, type definitions, and mocking data for API contract testing.",
        architecture: "Built on Next.js 14 with Edge functions streaming completions directly from OpenAI. Synchronized with a sandboxed Node.js VM worker pool for real-time payload execution and schema validation.",
        metrics: ["-40% API prototyping turnaround time", "5,000+ active beta developers", "99.9% uptime across US-East regions"]
      }
    },
    {
      id: "omnicart",
      title: "OmniCart Enterprise E-Commerce",
      year: "2023",
      category: "Web",
      description: "A full-stack, headless e-commerce platform with real-time stock management, Stripe payment processing, and an administrative analytics dashboard. Scaled seamlessly to 10k+ daily transactions.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "Redis"],
      liveUrl: "https://example.com/omnicart",
      githubUrl: "https://github.com/example/omnicart",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      caseStudy: {
        problem: "Legacy monolithic e-commerce platforms suffered from database lockups during flash sales and slow mobile page render speeds.",
        architecture: "Separated headless frontend built with Next.js Server Components, backed by a cluster of Node.js services with Redis distributed locking for atomic inventory reservations.",
        metrics: ["10k+ daily transactions processed", "Sub-200ms catalog search queries", "0 oversell events during Black Friday"]
      }
    },
    {
      id: "apexfit",
      title: "Apex Fitness Mobile Companion",
      year: "2023",
      category: "Mobile",
      description: "A cross-platform mobile tracking app featuring personalized workout metrics, synchronized calorie monitoring, and social challenge boards. Rated 4.8 stars by early testers.",
      technologies: ["React Native", "Expo", "Firebase", "Redux Toolkit"],
      liveUrl: "https://example.com/apex-fit",
      githubUrl: "https://github.com/example/apex-fit",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
      caseStudy: {
        problem: "Users struggled to maintain consistency due to fragmented workout logging apps that lacked offline caching and reliable sensor syncing.",
        architecture: "Engineered offline-first local SQLite replication syncing seamlessly to Cloud Firestore when network connects. Implemented custom health sensor drivers for Apple HealthKit & Google Fit.",
        metrics: ["4.8★ app store rating", "84% 30-day user retention rate", "Over 500,000 workouts logged"]
      }
    },
    {
      id: "datastream",
      title: "DataStream Analytics Engine",
      year: "2022",
      category: "Data",
      description: "An interactive business intelligence pipeline and dashboard processing aggregated telemetry data into actionable conversion metrics and automated weekly reports.",
      technologies: ["Python", "Django", "Chart.js", "PostgreSQL", "Docker"],
      liveUrl: "https://example.com/datastream",
      githubUrl: "https://github.com/example/datastream",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      caseStudy: {
        problem: "Marketing teams waited 48 hours for batch data warehouse queries to understand product funnel conversion drops.",
        architecture: "Streaming telemetry ingestion via Celery workers into optimized timescale PostgreSQL hypertables, summarized with Canvas-based client analytics rendering millions of datapoints.",
        metrics: ["Real-time funnel latency (< 2 sec)", "10M+ events ingested daily", "45 hours saved per sprint for data analysts"]
      }
    },
    {
      id: "taskflow",
      title: "TaskFlow Collaborative Kanban",
      year: "2022",
      category: "Web",
      description: "A real-time workspace productivity tool with live drag-and-drop collaboration, custom workflow automations, and Markdown documentation boards.",
      technologies: ["Vue.js", "Socket.io", "Express", "MongoDB"],
      liveUrl: "https://example.com/taskflow",
      githubUrl: "https://github.com/example/taskflow",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
      caseStudy: {
        problem: "Remote engineering squads struggled with laggy task boards that caused conflicting edits and lost state during synchronous sprint planning.",
        architecture: "Operational Transformation and WebSocket broadcast rooms ensuring instant zero-conflict card dragging and real-time cursor presence.",
        metrics: ["50ms collaboration sync latency", "Used across 40+ engineering squads", "Zero state collision incidents"]
      }
    },
    {
      id: "visionscan",
      title: "VisionScan Document OCR",
      year: "2021",
      category: "AI/ML",
      description: "A computer vision utility that extracts tabular financial data from scanned PDF invoices and exports sanitized CSV records with 98.4% OCR precision.",
      technologies: ["Python", "FastAPI", "OpenCV", "Tesseract OCR"],
      liveUrl: "https://example.com/visionscan",
      githubUrl: "https://github.com/example/visionscan",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      caseStudy: {
        problem: "Manual financial invoice entry introduced human errors and incurred 15 hours of repetitive entry per accounting cycle.",
        architecture: "Automated preprocessing pipeline leveraging adaptive thresholding and deskewing in OpenCV prior to heuristic table structure parsing with Tesseract OCR.",
        metrics: ["98.4% character precision rate", "8x faster invoice reconciliation", "Saved 60+ man-hours per financial quarter"]
      }
    }
  ],

  experience: [
    {
      title: "Production Staff",
      company: "Ravi Autos, Okla EV",
      dates: "6 months - Present",
      responsibilities: [
        "Followed set procedures and quality standards on the automotive production line.",
        "Helped meet production targets by coordinating closely with team members and supervisors.",
        "Solved practical problems quickly to keep production running smoothly."
      ]
    },
    {
      title: "Retail Sales Person",
      company: "Retail Store",
      dates: "3 months",
      responsibilities: [
        "Assisted customers, recommended products, and completed sales.",
        "Communicated clearly to understand customer needs and resolve concerns.",
        "Built confidence in sales and customer service."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology (BS-IT)",
      institution: "Superior University, Gold Campus",
      location: "Lahore, Pakistan",
      dates: "2023 - 2027 (Expected)",
      focus: "Web development, UI/UX design, databases, and programming",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "C++", "MySQL"]
    },
    {
      degree: "Intermediate in Computer Science (ICS)",
      institution: "Cambridge College, Raiwind",
      location: "Raiwind, Lahore, Pakistan",
      dates: "2021 - 2023"
    }
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "Issued Dec 2023",
      credentialUrl: "https://aws.amazon.com/verification",
      badgeIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
    },
    {
      name: "Introduction to SQL",
      issuer: "Superior University (via online platform)",
      date: "Issued Aug 2024",
      credentialUrl: "https://coursera.org/verify/professional-cert",
      badgeIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
    },
    {
      name: "Certified in Microsoft MsDocs",
      issuer: "Private Certification Authority",
      date: "Issued May 2022",
      credentialUrl: "https://cncf.io/certification/ckad",
      badgeIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
    }
  ],

  testimonials: [
    {
      quote: "Sheraz is one of those rare engineers who effortlessly bridges technical depth with thoughtful product instinct. His contribution to our frontend architecture was exceptional and set a new benchmark for our team.",
      name: "Hamza Malik",
      role: "Lead Architect",
      company: "Nexus Technologies"
    },
    {
      quote: "A dedicated problem solver who consistently delivers clean, high-quality code on time. His attention to detail regarding accessibility and loading speeds set a new high bar for our squad.",
      name: "Ayesha Tariq",
      role: "Senior Product Manager",
      company: "DevSync Solutions"
    },
    {
      quote: "Working with Sheraz was inspiring. His clear communication, proactive attitude, and mastery of both frontend and backend made solving complex full-stack challenges feel seamless.",
      name: "Bilal Farooq",
      role: "Engineering Manager",
      company: "PixelCraft Digital"
    }
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: `<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
    },
    {
      name: "X (Twitter)",
      url: "https://x.com",
      icon: `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com",
      icon: `<svg viewBox="0 0 24 24"><path d="M18.986 21.865v-6.408h2.134V24H2.88v-8.543h2.134v6.408h13.972zM6.92 14.12l10.02 2.1 0.44-2.09-10.02-2.1-0.44 2.09zm1.74-5.23l9.04 4.73 0.99-1.9-9.04-4.73-0.99 1.9zm3.5-5.26l7.46 7.14 1.45-1.52-7.46-7.14-1.45 1.52zm7.65-3.63l-1.83 1.05 5.34 9.3 1.83-1.05-5.34-9.3zM7.13 19.5h10.25v-2.13H7.13v2.13z"/></svg>`
    }
  ]
};
