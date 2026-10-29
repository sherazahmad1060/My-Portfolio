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
    location: "Islamabad, Pakistan",
    email: "sheraz.dev@example.com",
    phone: "+92 300 1234567",
    availability: "Available for High-Impact Roles & Architecture",
    languages: "English (Professional), Urdu (Native)",
    resumeUrl: "resume.pdf",
    avatarUrl: "hero-portrait.jpg",
    experienceYears: "3+",
    projectsShipped: "25+",
    clientSatisfaction: "100%"
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
      title: "Junior Full-Stack Developer",
      company: "Nexus Technologies",
      location: "Islamabad, Pakistan (Hybrid)",
      dates: "2023 - Present",
      responsibilities: [
        "Led architecture and frontend engineering for three flagship enterprise web products using React, Next.js, and TypeScript.",
        "Designed and implemented high-throughput REST and GraphQL microservices, reducing p99 API response latencies by 32%.",
        "Mentored 4 junior engineers, instituted peer code review best practices, and authored engineering onboarding standards.",
        "Orchestrated cloud migration to containerized AWS ECS and automated continuous deployment workflows via GitHub Actions."
      ]
    },
    {
      title: "Software Engineer",
      company: "DevSync Solutions",
      location: "Islamabad, Pakistan",
      dates: "2021 - 2023",
      responsibilities: [
        "Developed reusable UI component libraries with Vanilla CSS and React, improving feature development velocity across teams by 25%.",
        "Implemented end-to-end authentication, role-based authorization, and automated unit/integration tests with Jest and Cypress.",
        "Managed cloud deployments, continuous integration pipelines (GitHub Actions), and production container environments.",
        "Refactored legacy relational SQL queries and introduced Redis caching, boosting page throughput by 45%."
      ]
    },
    {
      title: "Junior Web Developer Intern",
      company: "PixelCraft Digital",
      location: "Remote",
      dates: "2020 - 2021",
      responsibilities: [
        "Built responsive, accessible landing pages and client dashboards adhering to WCAG 2.1 accessibility criteria.",
        "Collaborated closely with UI/UX designers to translate Figma design mockups into pixel-perfect web interfaces.",
        "Assisted in troubleshooting cross-browser rendering quirks and mobile touch performance bottlenecks."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BS CS)",
      institution: "National University of Sciences & Technology (NUST)",
      location: "Islamabad, Pakistan",
      dates: "2017 - 2021",
      cgpa: "3.78 / 4.00",
      coursework: [
        "Data Structures & Algorithms", "Operating Systems", "Database Management Systems",
        "Object-Oriented Analysis & Design", "Distributed Computing", "Software Architecture"
      ]
    },
    {
      degree: "Higher Secondary Certificate (FSc Pre-Engineering)",
      institution: "Army Public College",
      location: "Rawalpindi, Pakistan",
      dates: "2015 - 2017",
      cgpa: "Grade: A+ (89%)",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
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
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (via Coursera)",
      date: "Issued Aug 2023",
      credentialUrl: "https://coursera.org/verify/professional-cert",
      badgeIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
    },
    {
      name: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation",
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
      role: "Junior Product Manager",
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

/* ==========================================================================
   AUDIO SYNTHESIS FEEDBACK (Native Web Audio API)
   ========================================================================== */
class AudioFeedback {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  }
  playClick(freq = 640, duration = 0.04) {
    if (!this.enabled || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.ctx.currentTime + duration);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) { /* ignore */ }
  }
  toggle() {
    this.init();
    this.enabled = !this.enabled;
    if (this.enabled) this.playClick(880, 0.06);
    return this.enabled;
  }
}
const audioSynth = new AudioFeedback();

/* ==========================================================================
   PAGE INITIALIZATION ON DOM READY
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 0. Start Preloader Animation
  initPreloader();

  // 1. Initialize Ambient Particle Canvas
  initAmbientCanvas();

  // 2. Populate Personal, Hero & SEO Info
  applyPersonalData();

  // 3. Render About section paragraphs & quick facts
  renderAboutSection();

  // 4. Render Skills & Setup Filter Tabs
  renderSkillsSection();
  setupSkillsFilter();

  // 5. Render Projects with Search & Filter Bar
  renderProjectsSection();
  setupProjectSearchAndFilters();

  // 6. Render Career & Education Timelines
  renderTimelineSection();
  setupTimelineToggle();

  // 7. Render Certifications
  renderCertificationsSection();

  // 8. Render Interactive Testimonials Carousel
  renderTestimonialsCarousel();

  // 9. Render Social Media Icons
  renderSocials();

  // 10. Start Interactive Typewriter
  initTypewriter();

  // 11. Initialize Core Interactivity
  initThemeToggle();
  initAudioToggle();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
  initContactForm();
  initScrollAnimations();
  initCounters();
  init3DTilt();
  initHeroParallax();
  initHeroLiveLatency();
  initLiveClock();
  initCustomCursor();
  initCommandPalette();
  initResumeModal();
  initTerminalSimulator();
});

/* Preloader / Splash Screen */
function initPreloader() {
  const preloader = document.getElementById('page-preloader');
  const progressBar = document.getElementById('preloader-progress');
  if (!preloader) return;

  const steps = [15, 30, 50, 70, 85, 95, 100];
  let stepIndex = 0;

  function advanceProgress() {
    if (stepIndex < steps.length) {
      progressBar.style.width = steps[stepIndex] + '%';
      stepIndex++;
      const delay = stepIndex < 3 ? 200 : stepIndex < 5 ? 300 : 250;
      setTimeout(advanceProgress, delay);
    }
  }

  advanceProgress();

  const minimumDisplayTime = 1800;
  const startTime = Date.now();

  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minimumDisplayTime - elapsed);

    setTimeout(() => {
      progressBar.style.width = '100%';
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.classList.remove('is-loading');
        const heroEl = document.getElementById('hero');
        if (heroEl) heroEl.classList.add('is-visible');
        setTimeout(() => preloader.remove(), 700);
      }, 300);
    }, remaining);
  });
}

/* Apply Personal & Hero info */
function applyPersonalData() {
  const p = PORTFOLIO_DATA.personal;

  document.title = `${p.name} | ${p.titles[0]} Portfolio`;
  const metaTitle = document.getElementById("meta-title");
  if (metaTitle) metaTitle.textContent = `${p.name} | ${p.titles[0]} Portfolio`;

  const metaAuthor = document.getElementById("meta-author");
  if (metaAuthor) metaAuthor.setAttribute("content", p.name);

  document.getElementById("hero-name-span").textContent = p.name;
  document.getElementById("hero-bio-p").textContent = p.shortIntro;
  document.getElementById("hero-availability").textContent = p.availability;

  // Stats counters data-target
  const expEl = document.getElementById("stat-experience");
  const projEl = document.getElementById("stat-projects");
  const satEl = document.getElementById("stat-satisfaction");

  expEl.setAttribute("data-target", parseInt(p.experienceYears) || 3);
  projEl.setAttribute("data-target", parseInt(p.projectsShipped) || 25);
  satEl.setAttribute("data-target", parseInt(p.clientSatisfaction) || 100);

  const avatar = document.getElementById("hero-avatar-img");
  if (avatar) {
    avatar.src = p.avatarUrl;
    avatar.alt = p.name;
  }

  const firstName = p.name.split(" ")[0];
  document.getElementById("brand-logo").innerHTML = `${firstName}<span class="logo-dot">.</span><span class="logo-badge">DEV</span>`;
  document.getElementById("footer-logo").innerHTML = `${firstName}<span class="logo-dot">.</span><span class="logo-badge">DEV</span>`;
  document.getElementById("footer-author-name").textContent = p.name;
  document.getElementById("current-year").textContent = new Date().getFullYear();

  document.getElementById("contact-email-text").textContent = p.email;
  document.getElementById("contact-phone-text").textContent = p.phone;
  document.getElementById("contact-location-text").textContent = p.location;
}

/* Ambient Particle Canvas Engine */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 140 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const particleColor = isLight ? "rgba(124, 58, 237, 0.45)" : "rgba(139, 92, 246, 0.65)";
    const lineColor = isLight ? "rgba(124, 58, 237, " : "rgba(139, 92, 246, ";

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse proximity reaction
      if (mouse.x !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.fill();

      // Connective lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          const alpha = (1 - dist / 115) * 0.22;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `${lineColor}${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
}

/* Typewriter animation */
function initTypewriter() {
  const titles = PORTFOLIO_DATA.personal.titles;
  const el = document.getElementById("typewriter");
  if (!titles || titles.length === 0 || !el) return;

  let titleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseDuration = 2000;

  function tick() {
    const currentTitle = titles[titleIdx];

    if (isDeleting) {
      el.textContent = currentTitle.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentTitle.substring(0, charIdx + 1);
      charIdx++;
    }

    let delta = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentTitle.length) {
      delta = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
      delta = 380;
    }

    setTimeout(tick, delta);
  }

  tick();
}

/* Render About Section */
function renderAboutSection() {
  const p = PORTFOLIO_DATA.personal;
  const container = document.getElementById("about-paragraphs-container");
  container.innerHTML = p.aboutParagraphs.map(text => `<p>${text}</p>`).join("");

  const factsContainer = document.getElementById("quick-facts-container");
  const facts = [
    {
      label: "Based In",
      value: p.location,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
    },
    {
      label: "Primary Email",
      value: p.email,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
    },
    {
      label: "Phone / Contact",
      value: p.phone,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
    },
    {
      label: "Availability",
      value: p.availability,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
    },
    {
      label: "Languages Spoken",
      value: p.languages,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
    }
  ];

  factsContainer.innerHTML = facts.map(f => `
    <div class="quick-fact-item">
      <div class="quick-fact-icon">${f.icon}</div>
      <div>
        <div class="quick-fact-label">${f.label}</div>
        <div class="quick-fact-value">${f.value}</div>
      </div>
    </div>
  `).join("");
}

/* Render Skills Section */
function renderSkillsSection() {
  const container = document.getElementById("skills-grid-container");
  container.innerHTML = PORTFOLIO_DATA.skills.map(group => {
    let contentHtml = "";

    if (group.type === "progress") {
      contentHtml = group.items.map(item => `
        <div class="skill-bar-wrapper">
          <div class="skill-bar-info">
            <span>${item.name}</span>
            <span class="skill-percentage-pill">${item.level}%</span>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" data-progress="${item.level}"></div>
          </div>
        </div>
      `).join("");
    } else {
      contentHtml = `
        <div class="skill-tags-list">
          ${group.items.map(tag => `<span class="skill-tag-pill">${tag}</span>`).join("")}
        </div>
      `;
    }

    return `
      <div class="skill-category-card" data-category="${group.category}">
        <div class="skill-category-header">
          <div class="skill-category-icon">${group.icon}</div>
          <h3>${group.category}</h3>
        </div>
        ${contentHtml}
      </div>
    `;
  }).join("");

  animateSkillBars();
}

/* Skills Filter Tabs */
function setupSkillsFilter() {
  const tabs = document.querySelectorAll(".skills-tab-btn");
  const cards = document.querySelectorAll(".skill-category-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      audioSynth.playClick(720);
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const cat = tab.getAttribute("data-category");
      cards.forEach(card => {
        if (cat === "all" || card.getAttribute("data-category") === cat) {
          card.style.display = "block";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* Animate skill progress bars on viewport intersection */
function animateSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll(".skill-progress-fill");
        fills.forEach(bar => {
          const target = bar.getAttribute("data-progress");
          bar.style.width = target + "%";
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".skill-category-card").forEach(card => observer.observe(card));
}

/* Render Projects Section */
function renderProjectsSection() {
  const projects = PORTFOLIO_DATA.projects;
  const filterBar = document.getElementById("project-filters");
  const grid = document.getElementById("projects-grid-container");

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  filterBar.innerHTML = categories.map((cat, idx) => {
    const count = cat === "All" ? projects.length : projects.filter(p => p.category === cat).length;
    return `
      <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-category="${cat}">
        <span>${cat}</span>
        <span class="filter-count-badge">${count}</span>
      </button>
    `;
  }).join("");

  displayProjects("All", "");
}

/* Display Projects with category & keyword filters */
function displayProjects(selectedCategory, query) {
  const grid = document.getElementById("projects-grid-container");
  let filtered = PORTFOLIO_DATA.projects;

  if (selectedCategory && selectedCategory !== "All") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (query && query.trim() !== "") {
    const q = query.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.5;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0.4rem;">No matching projects found</h3>
        <p>Try searching for another keyword or selecting "All" categories.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((p, idx) => `
    <article class="project-card" data-project-id="${p.id}" style="animation: fadeIn 0.4s ease ${idx * 0.08}s both;">
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.title} preview" class="project-img" loading="lazy" />
        <span class="project-category-badge">${p.category}</span>
        <span class="project-year-badge">${p.year}</span>
        <div class="project-overlay-action">
          <button class="btn btn-primary btn-sm view-case-btn" data-project-id="${p.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            View Case Study
          </button>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech-list">
          ${p.technologies.map(tech => `<span class="project-tech-item">${tech}</span>`).join("")}
        </div>
        <div class="project-actions">
          <button class="project-case-btn view-case-btn" data-project-id="${p.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Case Study
          </button>
          <div style="display: flex; gap: 0.8rem; align-items: center;">
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" class="project-link-btn" target="_blank" rel="noopener" title="Source Code">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
            ` : ''}
            ${p.liveUrl ? `
              <a href="${p.liveUrl}" class="project-link-btn" target="_blank" rel="noopener" title="Live Demo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </article>
  `).join("");

  // Bind Case Study buttons
  document.querySelectorAll(".view-case-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      audioSynth.playClick(840);
      const pid = btn.getAttribute("data-project-id");
      openCaseStudyModal(pid);
    });
  });
}

/* Setup Project Search & Filter listeners */
function setupProjectSearchAndFilters() {
  const filterBar = document.getElementById("project-filters");
  const searchInput = document.getElementById("project-search-input");
  const clearBtn = document.getElementById("project-search-clear");

  let currentCategory = "All";

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    audioSynth.playClick(680);
    filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-category");
    displayProjects(currentCategory, searchInput.value);
  });

  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim().length > 0) {
      clearBtn.style.display = "block";
    } else {
      clearBtn.style.display = "none";
    }
    displayProjects(currentCategory, searchInput.value);
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    searchInput.focus();
    displayProjects(currentCategory, "");
  });
}

/* Open Case Study Modal */
function openCaseStudyModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("case-study-modal");
  const body = document.getElementById("modal-case-body");

  body.innerHTML = `
    <div style="margin-bottom: 1.4rem;">
      <div style="display: flex; gap: 0.65rem; margin-bottom: 0.8rem; align-items: center;">
        <span class="project-category-badge" style="position: static;">${project.category}</span>
        <span class="project-year-badge" style="position: static;">${project.year}</span>
      </div>
      <h2 id="modal-project-title" style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; margin-bottom: 0.6rem;">${project.title}</h2>
      <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7;">${project.description}</p>
    </div>

    <div style="border-radius: var(--radius-lg); overflow: hidden; height: 260px; margin-bottom: 1.8rem; background: var(--bg-secondary);">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>

    ${project.caseStudy ? `
      <div style="margin-bottom: 1.8rem;">
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin-bottom: 0.6rem; color: var(--accent);">Problem Statement</h3>
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.4rem;">${project.caseStudy.problem}</p>

        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin-bottom: 0.6rem; color: var(--accent);">Architectural Approach</h3>
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.4rem;">${project.caseStudy.architecture}</p>

        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin-bottom: 0.6rem; color: var(--accent);">Key Results & Impact Metrics</h3>
        <ul style="list-style-type: none; margin-bottom: 1.4rem;">
          ${project.caseStudy.metrics.map(m => `
            <li style="position: relative; padding-left: 1.4rem; margin-bottom: 0.45rem; color: var(--text-primary);">
              <span style="position: absolute; left: 0; color: #10b981; font-weight: bold;">✓</span>
              ${m}
            </li>
          `).join("")}
        </ul>
      </div>
    ` : ''}

    <div style="margin-bottom: 1.8rem;">
      <h4 style="font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.65rem;">Technologies Deployed</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.55rem;">
        ${project.technologies.map(t => `<span class="project-tech-item" style="font-size: 0.85rem; padding: 0.35rem 0.85rem;">${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.4rem; flex-wrap: wrap;">
      ${project.liveUrl ? `
        <a href="${project.liveUrl}" class="btn btn-primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Launch Live App
        </a>
      ` : ''}
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          GitHub Repository
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

document.getElementById("close-case-modal-btn").addEventListener("click", () => {
  document.getElementById("case-study-modal").classList.remove("open");
  document.body.style.overflow = "";
});

document.getElementById("case-study-modal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("case-study-modal")) {
    document.getElementById("case-study-modal").classList.remove("open");
    document.body.style.overflow = "";
  }
});

/* Render Timeline: Experience & Education */
function renderTimelineSection() {
  const expContainer = document.getElementById("experience-timeline-container");
  expContainer.innerHTML = PORTFOLIO_DATA.experience.map(job => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${job.title}</h3>
            <div class="timeline-org">${job.company}</div>
          </div>
          <span class="timeline-date-badge">${job.dates}</span>
        </div>
        <div class="timeline-meta">
          <span class="timeline-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${job.location}
          </span>
        </div>
        <ul class="timeline-bullets">
          ${job.responsibilities.map(resp => `<li>${resp}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");

  const eduContainer = document.getElementById("education-timeline-container");
  eduContainer.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${edu.degree}</h3>
            <div class="timeline-org">${edu.institution}</div>
          </div>
          <span class="timeline-date-badge">${edu.dates}</span>
        </div>
        <div class="timeline-meta">
          <span class="timeline-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${edu.location}
          </span>
          <span class="timeline-meta-item" style="color: var(--accent); font-weight: 600;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            ${edu.cgpa}
          </span>
        </div>
        ${edu.coursework ? `
          <div class="coursework-tags">
            <strong style="font-size: 0.84rem; color: var(--text-primary); margin-right: 0.4rem; align-self: center;">Key Coursework:</strong>
            ${edu.coursework.map(c => `<span class="coursework-tag">${c}</span>`).join("")}
          </div>
        ` : ''}
      </div>
    </div>
  `).join("");
}

/* Timeline Switcher Buttons */
function setupTimelineToggle() {
  const expBtn = document.getElementById("tab-experience-btn");
  const eduBtn = document.getElementById("tab-education-btn");
  const expContainer = document.getElementById("experience-timeline-container");
  const eduContainer = document.getElementById("education-timeline-container");

  expBtn.addEventListener("click", () => {
    audioSynth.playClick(750);
    expBtn.classList.add("active");
    eduBtn.classList.remove("active");
    expContainer.style.display = "block";
    eduContainer.style.display = "none";
  });

  eduBtn.addEventListener("click", () => {
    audioSynth.playClick(750);
    eduBtn.classList.add("active");
    expBtn.classList.remove("active");
    expContainer.style.display = "none";
    eduContainer.style.display = "block";
  });
}

/* Render Certifications */
function renderCertificationsSection() {
  const container = document.getElementById("certifications-grid-container");
  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="cert-card">
      <div class="cert-icon-badge">${cert.badgeIcon}</div>
      <h3 class="cert-name">${cert.name}</h3>
      <div class="cert-org">${cert.issuer}</div>
      <div class="cert-date">${cert.date}</div>
      <div class="cert-footer">
        <a href="${cert.credentialUrl}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener">
          Verify Credential
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
    </div>
  `).join("");
}

/* Render Testimonials Carousel */
function renderTestimonialsCarousel() {
  const track = document.getElementById("testimonials-track");
  const dotsContainer = document.getElementById("carousel-dots");
  const items = PORTFOLIO_DATA.testimonials;

  track.innerHTML = items.map(item => `
    <div class="testimonial-slide">
      <div class="testimonial-card">
        <div>
          <div class="testimonial-quote-icon">“</div>
          <p class="testimonial-text">${item.quote}</p>
        </div>
        <div class="testimonial-author">
          <div class="testimonial-avatar">
            ${item.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div class="testimonial-meta">
            <h4>${item.name}</h4>
            <p>${item.role}, ${item.company}</p>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  dotsContainer.innerHTML = items.map((_, i) => `
    <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
  `).join("");

  let currentIndex = 0;
  let autoplayTimer = null;

  function goToSlide(index) {
    currentIndex = (index + items.length) % items.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5500);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  document.getElementById("carousel-prev-btn").addEventListener("click", () => {
    audioSynth.playClick(600);
    goToSlide(currentIndex - 1);
    startAutoplay();
  });

  document.getElementById("carousel-next-btn").addEventListener("click", () => {
    audioSynth.playClick(600);
    goToSlide(currentIndex + 1);
    startAutoplay();
  });

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("carousel-dot")) {
      audioSynth.playClick(600);
      const idx = parseInt(e.target.getAttribute("data-index"));
      goToSlide(idx);
      startAutoplay();
    }
  });

  const carouselEl = document.getElementById("testimonials-carousel");
  carouselEl.addEventListener("mouseenter", stopAutoplay);
  carouselEl.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
}

/* Render Social Media Links */
function renderSocials() {
  const contactSocials = document.getElementById("contact-social-icons");
  const footerSocials = document.getElementById("footer-social-icons");
  const mobileSocials = document.getElementById("mobile-social-icons");

  const socialHtml = PORTFOLIO_DATA.socials.map(s => `
    <a href="${s.url}" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="${s.name}" title="${s.name}">
      ${s.icon}
    </a>
  `).join("");

  if (contactSocials) contactSocials.innerHTML = socialHtml;
  if (footerSocials) footerSocials.innerHTML = socialHtml;
  if (mobileSocials) mobileSocials.innerHTML = socialHtml;
}

/* Theme Toggle */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  applyTheme(savedTheme);

  toggleBtn.addEventListener("click", () => {
    audioSynth.playClick(880);
    const currentTheme = htmlEl.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    showToast(`Switched to ${nextTheme === "dark" ? "Dark" : "Light"} theme`);
  });

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", theme === "dark" ? "#090b11" : "#f8fafc");
    }
    if (theme === "dark") {
      moonIcon.style.display = "block";
      sunIcon.style.display = "none";
    } else {
      moonIcon.style.display = "none";
      sunIcon.style.display = "block";
    }
  }
}

/* Audio Toggle */
function initAudioToggle() {
  const btn = document.getElementById("audio-toggle");
  const onIcon = document.getElementById("sound-on-icon");
  const offIcon = document.getElementById("sound-off-icon");

  btn.addEventListener("click", () => {
    const isEnabled = audioSynth.toggle();
    if (isEnabled) {
      onIcon.style.display = "block";
      offIcon.style.display = "none";
      showToast("Sound effects enabled 🔊");
    } else {
      onIcon.style.display = "none";
      offIcon.style.display = "block";
      showToast("Sound effects muted 🔇");
    }
  });
}

/* Mobile Drawer Menu */
function initMobileMenu() {
  const menuBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const links = mobileMenu.querySelectorAll(".mobile-nav-link");
  const mobileResumeBtn = document.getElementById("mobile-resume-btn");

  menuBtn.addEventListener("click", () => {
    audioSynth.playClick(600);
    const isOpen = mobileMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", false);
    });
  });

  if (mobileResumeBtn) {
    mobileResumeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", false);
      document.getElementById("resume-modal").classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
}

/* ScrollSpy, Header Shrink & Reading Progress */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const progressBar = document.getElementById("scroll-progress");
  const header = document.getElementById("main-header");

  window.addEventListener("scroll", () => {
    // Header height shrink on scroll
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Top reading progress bar
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;

    // Active navigation link tracking
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 220;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    mobileNavLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
}

/* Back to Top Floating Button */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    audioSynth.playClick(900);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* Animated Counter numbers */
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target")) || 0;
        const suffix = el.id === "stat-satisfaction" ? "%" : "+";
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = `${target}${suffix}`;
            clearInterval(interval);
          } else {
            el.textContent = `${current}${suffix}`;
          }
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* 3D Realistic Specular Tilt with Physics Interpolation & Glare */
function init3DTilt() {
  const card = document.getElementById("portrait-3d-card");
  const glare = document.getElementById("portrait-glare");
  if (!card || window.matchMedia("(pointer: coarse)").matches) return;

  let currentX = 0, currentY = 0;
  let targetX = 0, targetY = 0;
  let isHovered = false;
  let rafId = null;
  let cardRect = null;

  function updateCardRect() {
    cardRect = card.getBoundingClientRect();
  }

  function updatePhysics() {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    card.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

    if (isHovered || Math.abs(targetX - currentX) > 0.04 || Math.abs(targetY - currentY) > 0.04) {
      rafId = requestAnimationFrame(updatePhysics);
    } else {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      rafId = null;
    }
  }

  card.addEventListener("mouseenter", () => {
    updateCardRect();
    isHovered = true;
    if (!rafId) rafId = requestAnimationFrame(updatePhysics);
  }, { passive: true });

  card.addEventListener("mousemove", (e) => {
    if (!cardRect) updateCardRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;

    targetX = (-(y - centerY) / centerY) * 12;
    targetY = ((x - centerX) / centerX) * 12;

    if (glare) {
      const glareX = (x / cardRect.width) * 100;
      const glareY = (y / cardRect.height) * 100;
      card.style.setProperty("--glare-x", `${glareX.toFixed(1)}%`);
      card.style.setProperty("--glare-y", `${glareY.toFixed(1)}%`);
    }

    if (!rafId) {
      isHovered = true;
      rafId = requestAnimationFrame(updatePhysics);
    }
  }, { passive: true });

  card.addEventListener("mouseleave", () => {
    isHovered = false;
    targetX = 0;
    targetY = 0;
    cardRect = null;
    if (!rafId) rafId = requestAnimationFrame(updatePhysics);
  });
}

/* Hero Interactive Ambient Spotlight & Parallax */
function initHeroParallax() {
  const hero = document.getElementById("hero");
  const spotlight = document.getElementById("hero-spotlight");
  const visualStack = document.getElementById("hero-visual-stack");
  const heroContent = document.querySelector(".hero-content");
  if (!hero || window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let isMoving = false;
  let rafId = null;
  let heroRect = null;

  function updateHeroRect() {
    heroRect = hero.getBoundingClientRect();
  }

  window.addEventListener("resize", updateHeroRect, { passive: true });
  window.addEventListener("scroll", updateHeroRect, { passive: true });

  function onLoop() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    if (spotlight) {
      spotlight.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }

    if (window.innerWidth > 992) {
      if (visualStack) {
        visualStack.style.transform = `translate3d(${(currentX * 7).toFixed(1)}px, ${(currentY * 5).toFixed(1)}px, 0)`;
      }
      if (heroContent) {
        heroContent.style.transform = `translate3d(${(-currentX * 4).toFixed(1)}px, ${(-currentY * 3).toFixed(1)}px, 0)`;
      }
    }

    if (isMoving || Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
      rafId = requestAnimationFrame(onLoop);
    } else {
      rafId = null;
    }
  }

  hero.addEventListener("mouseenter", updateHeroRect, { passive: true });

  hero.addEventListener("mousemove", (e) => {
    if (!heroRect) updateHeroRect();
    mouseX = e.clientX - heroRect.left;
    mouseY = e.clientY - heroRect.top;

    targetX = (mouseX / heroRect.width - 0.5) * 2;
    targetY = (mouseY / heroRect.height - 0.5) * 2;

    isMoving = true;
    if (!rafId) rafId = requestAnimationFrame(onLoop);
  }, { passive: true });

  hero.addEventListener("mouseleave", () => {
    isMoving = false;
    targetX = 0;
    targetY = 0;
    if (!rafId) rafId = requestAnimationFrame(onLoop);
  });
}

/* Live Telemetry Ping Simulation (Sub-50ms AWS Edge) */
function initHeroLiveLatency() {
  const latencyEl = document.getElementById("hero-live-latency");
  if (!latencyEl) return;

  const pings = [28, 31, 34, 29, 37, 42, 33, 30, 36, 32];
  let idx = 0;

  setInterval(() => {
    idx = (idx + 1) % pings.length;
    const jitter = Math.floor(Math.random() * 5) - 2;
    const value = Math.max(24, Math.min(48, pings[idx] + jitter));
    latencyEl.textContent = `${value}ms`;
  }, 3200);
}

/* Live Localized Clock (PKT / UTC+5) */
function initLiveClock() {
  const display = document.getElementById("live-time-display");
  if (!display) return;

  function update() {
    const now = new Date();
    const options = {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    display.innerHTML = `📍 Islamabad, Pakistan • Local Time: <strong>${formatter.format(now)} PKT</strong>`;
  }
  update();
  setInterval(update, 1000);
}

/* Custom Cursor Follower */
function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const glow = document.getElementById("cursor-glow");
  if (!dot || !glow || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll("a, button, input, textarea, .filter-btn, .project-card").forEach(el => {
    el.addEventListener("mouseenter", () => glow.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => glow.classList.remove("cursor-hover"));
  });
}

/* Interactive Resume Modal */
function initResumeModal() {
  const modal = document.getElementById("resume-modal");
  const openBtn = document.getElementById("open-resume-modal-btn");
  const closeBtn = document.getElementById("close-resume-modal-btn");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      audioSynth.playClick(800);
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

/* Command Palette (HUD) */
function initCommandPalette() {
  const modal = document.getElementById("cmd-palette");
  const openBtn = document.getElementById("cmd-k-open");
  const input = document.getElementById("cmd-palette-search");
  const results = document.getElementById("cmd-palette-results");

  const commands = [
    { label: "Go to Home", action: () => scrollToSection("hero") },
    { label: "Go to About Me", action: () => scrollToSection("about") },
    { label: "Go to Skills & Tech Stack", action: () => scrollToSection("skills") },
    { label: "Go to Featured Projects", action: () => scrollToSection("projects") },
    { label: "Go to Career Journey & Education", action: () => scrollToSection("timeline-section") },
    { label: "Go to Certifications & Awards", action: () => scrollToSection("certifications") },
    { label: "Go to Colleague Testimonials", action: () => scrollToSection("testimonials") },
    { label: "Go to Contact Section", action: () => scrollToSection("contact") },
    { label: "Open Interactive Resume", action: () => document.getElementById("open-resume-modal-btn").click() },
    { label: "Toggle Dark / Light Theme", action: () => document.getElementById("theme-toggle").click() },
    { label: "Toggle Audio Effects", action: () => document.getElementById("audio-toggle").click() },
    { label: "Copy Email Address", action: () => document.getElementById("copy-email-btn").click() },
    { label: "Copy Phone Number", action: () => document.getElementById("copy-phone-btn").click() }
  ];

  function renderCommands(filter = "") {
    const query = filter.toLowerCase().trim();
    const filtered = query === "" ? commands : commands.filter(c => c.label.toLowerCase().includes(query));

    if (filtered.length === 0) {
      results.innerHTML = `<div style="padding: 1.2rem; text-align: center; color: var(--text-muted);">No commands matching "${filter}"</div>`;
      return;
    }

    results.innerHTML = filtered.map((c, i) => `
      <div class="cmd-item ${i === 0 ? 'selected' : ''}" data-index="${i}">
        <div class="cmd-item-label">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span>${c.label}</span>
        </div>
        <span class="cmd-k-kbd">↵</span>
      </div>
    `).join("");

    results.querySelectorAll(".cmd-item").forEach((el, idx) => {
      el.addEventListener("click", () => {
        filtered[idx].action();
        closePalette();
      });
    });
  }

  function openPalette() {
    audioSynth.playClick(820);
    modal.classList.add("open");
    input.value = "";
    renderCommands();
    input.focus();
    document.body.style.overflow = "hidden";
  }

  function closePalette() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function scrollToSection(id) {
    const sec = document.getElementById(id);
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  }

  if (openBtn) openBtn.addEventListener("click", openPalette);

  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (modal.classList.contains("open")) closePalette();
      else openPalette();
    }
    if (e.key === "Escape") {
      closePalette();
      document.getElementById("case-study-modal").classList.remove("open");
      document.getElementById("resume-modal").classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  input.addEventListener("input", () => renderCommands(input.value));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closePalette();
  });
}

/* Upgraded Interactive macOS IDE Developer Terminal Simulator */
function initTerminalSimulator() {
  const runBtn = document.getElementById("terminal-run-code-btn");
  const runLabel = document.getElementById("term-run-label");
  const outputBox = document.getElementById("terminal-output-box");
  const logsStream = document.getElementById("terminal-logs-stream");
  const clearBtn = document.getElementById("term-clear-btn");
  const tabProfile = document.getElementById("term-tab-profile");
  const tabArch = document.getElementById("term-tab-arch");
  const codeContent = document.getElementById("terminal-code-content");
  const lineNums = document.getElementById("terminal-line-nums");
  const btnClose = document.getElementById("term-btn-close");
  const btnMinimize = document.getElementById("term-btn-minimize");
  const btnExpand = document.getElementById("term-btn-expand");
  const termWindow = document.getElementById("hero-terminal-window");

  if (!runBtn || !outputBox || !logsStream) return;

  let activeTab = "profile";
  let isRunning = false;

  const codeSnippets = {
    profile: {
      lines: 9,
      content: `<span class="code-comment">// High-performance full-stack engineer configuration</span>
<span class="code-var">const</span> engineer = {
  <span class="code-prop">name</span>: <span class="code-string">"Sheraz Ahmad"</span>,
  <span class="code-prop">role</span>: <span class="code-string">"Full-Stack Architect & Engineer"</span>,
  <span class="code-prop">stack</span>: [<span class="code-string">"Next.js"</span>, <span class="code-string">"TypeScript"</span>, <span class="code-string">"Node"</span>, <span class="code-string">"Python"</span>, <span class="code-string">"AWS"</span>],
  <span class="code-prop">location</span>: <span class="code-string">"Islamabad, PK"</span>,
  <span class="code-prop">status</span>: <span class="code-string">"Available for High-Impact Roles"</span>,
  <span class="code-prop">deployProduction</span>: () =&gt; <span class="code-string">"Zero downtime & blazing speed"</span>
};<span class="terminal-cursor"></span>`
    },
    arch: {
      lines: 8,
      content: `<span class="code-comment">// Production Cloud Architecture Spec</span>
{
  <span class="code-prop">"infrastructure"</span>: <span class="code-string">"AWS Serverless (Lambda, ECS, CloudFront)"</span>,
  <span class="code-prop">"globalEdgeLatency"</span>: <span class="code-string">"&lt; 40ms p99 via AWS Global Accelerator"</span>,
  <span class="code-prop">"throughput"</span>: <span class="code-string">"150k+ Concurrent Requests/sec"</span>,
  <span class="code-prop">"reliability"</span>: <span class="code-string">"99.99% Multi-Region Disaster Recovery"</span>,
  <span class="code-prop">"ciCdPipeline"</span>: <span class="code-string">"Automated Blue-Green Zero-Downtime Deploys"</span>
}<span class="terminal-cursor"></span>`
    }
  };

  // Tab switcher
  function switchTab(tabKey) {
    if (activeTab === tabKey) return;
    activeTab = tabKey;
    audioSynth.playClick(720);

    if (tabKey === "profile") {
      tabProfile.classList.add("active");
      tabArch.classList.remove("active");
    } else {
      tabArch.classList.add("active");
      tabProfile.classList.remove("active");
    }

    const data = codeSnippets[tabKey];
    if (data && codeContent && lineNums) {
      lineNums.innerHTML = Array.from({ length: data.lines }, (_, i) => `<span>${i + 1}</span>`).join("");
      codeContent.innerHTML = data.content;
    }
  }

  if (tabProfile) tabProfile.addEventListener("click", () => switchTab("profile"));
  if (tabArch) tabArch.addEventListener("click", () => switchTab("arch"));

  // macOS dot actions
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      audioSynth.playClick(600);
      outputBox.style.display = "none";
    });
  }
  if (btnMinimize) {
    btnMinimize.addEventListener("click", () => {
      audioSynth.playClick(650);
      logsStream.innerHTML = "";
      outputBox.style.display = "none";
      if (runLabel) runLabel.textContent = "Run";
    });
  }
  if (btnExpand) {
    btnExpand.addEventListener("click", () => {
      audioSynth.playClick(800);
      termWindow.classList.toggle("term-expanded");
      showToast(termWindow.classList.contains("term-expanded") ? "Terminal expanded" : "Terminal normal view");
    });
  }

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      audioSynth.playClick(600);
      logsStream.innerHTML = "";
      outputBox.style.display = "none";
      if (runLabel) runLabel.textContent = "Run";
    });
  }

  // Stream Execution
  runBtn.addEventListener("click", () => {
    if (isRunning) return;
    isRunning = true;
    audioSynth.playClick(940);

    outputBox.style.display = "block";
    logsStream.innerHTML = "";
    runBtn.classList.add("running");
    if (runLabel) runLabel.textContent = "Executing...";

    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0];

    const logSequence = activeTab === "profile" ? [
      { time: timeStr, tag: "info", tagText: "TS-EXEC", msg: "Compiling engineer.profile.ts with TypeScript v5.4.2..." },
      { time: timeStr, tag: "success", tagText: "BUILD", msg: "✓ Bundle built in 14ms (0 errors, 0 warnings)" },
      { time: timeStr, tag: "info", tagText: "AWS-EDGE", msg: "Ping verified: Islamabad Edge Node active (31ms)" },
      { time: timeStr, tag: "success", tagText: "READY", msg: "🚀 Sheraz Ahmad is ready to architect your next flagship project!" }
    ] : [
      { time: timeStr, tag: "info", tagText: "CDK", msg: "Synthesizing CloudFormation templates for Multi-Region VPC..." },
      { time: timeStr, tag: "success", tagText: "DEPLOY", msg: "✓ CloudFront Edge + Lambda@Edge deployed across 18 zones" },
      { time: timeStr, tag: "info", tagText: "HEALTH", msg: "Global health checks: 100% operational (sub-40ms latency)" },
      { time: timeStr, tag: "success", tagText: "PROD", msg: "⚡ Infrastructure active: 99.99% uptime SLA achieved!" }
    ];

    let i = 0;
    function printNextLog() {
      if (i < logSequence.length) {
        const item = logSequence[i];
        const line = document.createElement("div");
        line.className = "terminal-log-line";
        line.innerHTML = `
          <span class="log-time">[${item.time}]</span>
          <span class="log-tag tag-${item.tag}">${item.tagText}</span>
          <span class="log-msg">${item.msg}</span>
        `;
        logsStream.appendChild(line);
        audioSynth.playClick(800 + i * 80);
        i++;
        setTimeout(printNextLog, 220);
      } else {
        isRunning = false;
        runBtn.classList.remove("running");
        if (runLabel) runLabel.textContent = "Re-run ↻";
        showToast("Terminal compilation succeeded with 0 errors! 🚀");
      }
    }

    printNextLog();
  });
}

/* Contact Form & Clipboard Copy */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const alertBox = document.getElementById("form-success-alert");
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const copyPhoneBtn = document.getElementById("copy-phone-btn");

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      audioSynth.playClick(750);
      const email = PORTFOLIO_DATA.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        document.getElementById("copy-email-label").textContent = "Copied!";
        showToast("Email copied to clipboard! 📋");
        setTimeout(() => { document.getElementById("copy-email-label").textContent = "Copy"; }, 2000);
      });
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener("click", () => {
      audioSynth.playClick(750);
      const phone = PORTFOLIO_DATA.personal.phone;
      navigator.clipboard.writeText(phone).then(() => {
        document.getElementById("copy-phone-label").textContent = "Copied!";
        showToast("Phone number copied to clipboard! 📋");
        setTimeout(() => { document.getElementById("copy-phone-label").textContent = "Copy"; }, 2000);
      });
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    if (!nameInput.value.trim() || !emailInput.value.trim() || !subjectInput.value.trim() || !messageInput.value.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const submitBtn = document.getElementById("contact-submit-btn");
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Transmitting message...</span>`;
    audioSynth.playClick(600);

    setTimeout(() => {
      alertBox.style.display = "flex";
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalContent;
      showToast("Message sent! I'll be in touch shortly.");
      audioSynth.playClick(960, 0.08);

      setTimeout(() => {
        alertBox.style.display = "none";
      }, 7000);
    }, 900);
  });
}

/* Toast Notification Helper */
function showToast(msg) {
  const toast = document.getElementById("toast-notification");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* Fade-in scroll observer */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.06,
    rootMargin: "0px 0px -40px 0px"
  });

  document.querySelectorAll(".fade-in-section").forEach(sec => observer.observe(sec));
}
