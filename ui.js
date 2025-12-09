// UI helper functions for No Limits Tech Repair site

export function initUI() {
  setupNavToggle();
  setupScrollSpy();
  setupThemeToggle();
  setupRevealObserver();
}

function setupNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  // Close nav on link click (mobile)
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (entry.isIntersecting && link) {
          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0.1,
    }
  );
  sections.forEach((section) => observer.observe(section));
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  // initial mode from localStorage
  const savedMode = localStorage.getItem('theme');
  if (savedMode === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
  toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    document.documentElement.classList.toggle('dark');
    const mode = document.documentElement.classList.contains('light')
      ? 'light'
      : 'dark';
    localStorage.setItem('theme', mode);
  });
}

function setupRevealObserver() {
  const elements = document.querySelectorAll('.reveal, .card, .pricing-card, .portfolio-item, .faq-item, .process-step, .about-text, .about-highlights, .contact-form, .contact-info');
  if (!elements.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.dataset.revealed = entry.isIntersecting;
      });
    },
    {
      threshold: 0.1,
    }
  );
  elements.forEach((el) => {
    el.dataset.revealed = false;
    observer.observe(el);
  });
}