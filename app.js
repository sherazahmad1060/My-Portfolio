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
  initPortraitGlare();
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
  const pageTitle = `${p.name} | ${p.titles[0]} Portfolio`;
  const pageDescription = `${p.name} - ${p.shortIntro}`;

  document.title = pageTitle;
  const metaTitle = document.getElementById("meta-title");
  if (metaTitle) metaTitle.textContent = pageTitle;

  const metaAuthor = document.getElementById("meta-author");
  if (metaAuthor) metaAuthor.setAttribute("content", p.name);
  ["meta-desc", "og-desc", "tw-desc"].forEach(id => {
    const meta = document.getElementById(id);
    if (meta) meta.setAttribute("content", pageDescription);
  });
  ["og-title", "tw-title"].forEach(id => {
    const meta = document.getElementById(id);
    if (meta) meta.setAttribute("content", pageTitle);
  });

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
  document.getElementById("brand-logo").innerHTML = `${escapeHtml(firstName)}<span class="logo-dot">.</span><span class="logo-badge">DEV</span>`;
  document.getElementById("brand-logo").setAttribute("aria-label", `${p.name} Home`);
  document.getElementById("footer-logo").innerHTML = `${escapeHtml(firstName)}<span class="logo-dot">.</span><span class="logo-badge">DEV</span>`;
  document.getElementById("footer-author-name").textContent = p.name;
  document.getElementById("current-year").textContent = new Date().getFullYear();

  document.getElementById("contact-email-text").textContent = p.email;
  document.getElementById("contact-phone-text").textContent = p.phone;
  document.getElementById("contact-location-text").textContent = p.location;
  const contactAvailability = document.getElementById("contact-availability-text");
  if (contactAvailability) contactAvailability.textContent = p.availability;

  const resumeTitle = document.getElementById("resume-modal-title");
  if (resumeTitle) resumeTitle.textContent = `${p.name} - Curriculum Vitae`;
  const resumeRole = document.getElementById("resume-role");
  if (resumeRole) resumeRole.textContent = "BS-IT Student | Web Development & UI/UX Design";
  const resumeSummary = document.getElementById("resume-summary");
  if (resumeSummary) resumeSummary.textContent = PORTFOLIO_DATA.resume.summary;
  const resumeContact = document.getElementById("resume-contact");
  if (resumeContact) {
    resumeContact.textContent = `Email: ${p.email} | Phone: ${p.phone} | Address: ${PORTFOLIO_DATA.resume.address}`;
  }
  const resumeDownload = document.getElementById("resume-download-link");
  if (resumeDownload) {
    resumeDownload.href = p.resumeUrl;
    resumeDownload.download = p.resumeUrl.split("/").pop();
  }
  renderResumeDetails();
}

function renderResumeDetails() {
  const experienceContainer = document.getElementById("resume-experience");
  if (experienceContainer) {
    experienceContainer.innerHTML = PORTFOLIO_DATA.experience.map(job => `
      <article class="resume-entry">
        <div class="resume-entry-heading">
          <strong>${escapeHtml(job.title)}</strong>
          <span>${escapeHtml(job.dates)}</span>
        </div>
        <div class="resume-entry-subtitle">${escapeHtml(job.company)}</div>
        <ul>${job.responsibilities.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
    `).join("");
  }

  const educationContainer = document.getElementById("resume-education");
  if (educationContainer) {
    educationContainer.innerHTML = PORTFOLIO_DATA.education.map(edu => `
      <article class="resume-entry">
        <div class="resume-entry-heading">
          <strong>${escapeHtml(edu.degree)}</strong>
          <span>${escapeHtml(edu.dates)}</span>
        </div>
        <div class="resume-entry-subtitle">${escapeHtml(edu.institution)} · ${escapeHtml(edu.location)}</div>
        ${edu.focus ? `<p>${escapeHtml(edu.focus)}</p>` : ""}
        ${edu.technologies ? `<p><strong>Technologies:</strong> ${edu.technologies.map(escapeHtml).join(", ")}</p>` : ""}
      </article>
    `).join("");
  }

  const projectsContainer = document.getElementById("resume-projects");
  if (projectsContainer) {
    projectsContainer.innerHTML = PORTFOLIO_DATA.resume.projects.map(project => `
      <article class="resume-entry">
        <div class="resume-entry-heading">
          <strong>${escapeHtml(project.name)}</strong>
          <span>${escapeHtml(project.category)}</span>
        </div>
        <p>${escapeHtml(project.description)}</p>
      </article>
    `).join("");
  }

  const skillsContainer = document.getElementById("resume-skills");
  if (skillsContainer) {
    skillsContainer.innerHTML = PORTFOLIO_DATA.resume.skills.map(group => `
      <p><strong>${escapeHtml(group.category)}:</strong> ${group.items.map(escapeHtml).join(", ")}</p>
    `).join("");
  }

  const certificationsContainer = document.getElementById("resume-certifications");
  if (certificationsContainer) {
    certificationsContainer.innerHTML = PORTFOLIO_DATA.resume.certifications
      .map(certification => `<li>${escapeHtml(certification)}</li>`)
      .join("");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
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

  const reservedCharacterCount = Math.max(...titles.map(title => title.length)) + 1;
  el.style.width = `${reservedCharacterCount}ch`;

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
  const experience = Array.isArray(PORTFOLIO_DATA.experience) ? PORTFOLIO_DATA.experience : [];
  const education = Array.isArray(PORTFOLIO_DATA.education) ? PORTFOLIO_DATA.education : [];
  expContainer.innerHTML = experience.length ? experience.map(job => `
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
        ${job.location ? `<div class="timeline-meta">
          <span class="timeline-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${escapeHtml(job.location)}
          </span>
        </div>` : ""}
        <ul class="timeline-bullets">
          ${job.responsibilities.map(resp => `<li>${resp}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("") : '<p class="timeline-empty">No experience records added yet.</p>';

  const eduContainer = document.getElementById("education-timeline-container");
  eduContainer.innerHTML = education.map(edu => `
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
            ${escapeHtml(edu.location)}
          </span>
          ${edu.cgpa ? `<span class="timeline-meta-item" style="color: var(--accent); font-weight: 600;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            ${escapeHtml(edu.cgpa)}
          </span>` : ""}
        </div>
        ${edu.coursework ? `
          <div class="coursework-tags">
            <strong style="font-size: 0.84rem; color: var(--text-primary); margin-right: 0.4rem; align-self: center;">Key Coursework:</strong>
            ${edu.coursework.map(c => `<span class="coursework-tag">${escapeHtml(c)}</span>`).join("")}
          </div>
        ` : ''}
        ${edu.focus ? `<p class="timeline-focus"><strong>Focus areas:</strong> ${escapeHtml(edu.focus)}</p>` : ""}
        ${edu.technologies ? `<p class="timeline-focus"><strong>Technologies:</strong> ${edu.technologies.map(escapeHtml).join(", ")}</p>` : ""}
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

/* Portrait glare follows the pointer without moving the portrait. */
function initPortraitGlare() {
  const card = document.getElementById("portrait-3d-card");
  const glare = document.getElementById("portrait-glare");
  if (!card || window.matchMedia("(pointer: coarse)").matches) return;

  card.addEventListener("mousemove", (e) => {
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    if (glare) {
      const glareX = (x / cardRect.width) * 100;
      const glareY = (y / cardRect.height) * 100;
      card.style.setProperty("--glare-x", `${glareX.toFixed(1)}%`);
      card.style.setProperty("--glare-y", `${glareY.toFixed(1)}%`);
    }
  }, { passive: true });
}

/* Hero Interactive Ambient Spotlight */
function initHeroParallax() {
  const hero = document.getElementById("hero");
  const spotlight = document.getElementById("hero-spotlight");
  if (!hero || window.matchMedia("(pointer: coarse)").matches) return;

  if (!spotlight) return;
  hero.addEventListener("mousemove", (e) => {
    const heroRect = hero.getBoundingClientRect();
    const mouseX = e.clientX - heroRect.left;
    const mouseY = e.clientY - heroRect.top;
    spotlight.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });
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

/* Live Localized Clock */
function initLiveClock() {
  const display = document.getElementById("live-time-display");
  if (!display) return;
  const p = PORTFOLIO_DATA.personal;

  function update() {
    const now = new Date();
    const options = {
      timeZone: p.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    display.innerHTML = `📍 ${escapeHtml(p.location)} • Local Time: <strong>${formatter.format(now)} ${escapeHtml(p.timeZoneLabel)}</strong>`;
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
  const p = PORTFOLIO_DATA.personal;
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
  <span class="code-prop">name</span>: <span class="code-string">${escapeHtml(JSON.stringify(p.name))}</span>,
  <span class="code-prop">role</span>: <span class="code-string">${escapeHtml(JSON.stringify(p.titles[0]))}</span>,
  <span class="code-prop">email</span>: <span class="code-string">${escapeHtml(JSON.stringify(p.email))}</span>,
  <span class="code-prop">phone</span>: <span class="code-string">${escapeHtml(JSON.stringify(p.phone))}</span>,
  <span class="code-prop">location</span>: <span class="code-string">${escapeHtml(JSON.stringify(p.location))}</span>,
  <span class="code-prop">status</span>: <span class="code-string">${escapeHtml(JSON.stringify(p.availability))}</span>,
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
  function renderCodeSnippet(tabKey) {
    const data = codeSnippets[tabKey];
    if (data && codeContent && lineNums) {
      lineNums.innerHTML = Array.from({ length: data.lines }, (_, i) => `<span>${i + 1}</span>`).join("");
      codeContent.innerHTML = data.content;
    }
  }

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

    renderCodeSnippet(tabKey);
  }

  renderCodeSnippet(activeTab);
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
      { time: timeStr, tag: "info", tagText: "AWS-EDGE", msg: `Ping verified: ${escapeHtml(p.location)} Edge Node active (31ms)` },
      { time: timeStr, tag: "success", tagText: "READY", msg: `🚀 ${escapeHtml(p.name)} is ready to architect your next flagship project!` }
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

    const body = [
      `Name: ${nameInput.value.trim()}`,
      `Email: ${emailInput.value.trim()}`,
      "",
      messageInput.value.trim()
    ].join("\n");
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(subjectInput.value.trim())}&body=${encodeURIComponent(body)}`;

    audioSynth.playClick(600);
    showToast("Your email app should open with the message ready to send.");
    window.location.href = mailtoUrl;
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
