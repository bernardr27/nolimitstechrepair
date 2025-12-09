// Entry point for No Limits Tech Repair site
import { initUI } from './ui.js';
import { initContactForm } from './plugins.js';

// Update copyright year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Initialize user interface (nav toggle, scroll spy, theme toggle, reveal)
initUI();

// Initialize contact form interactions (copy message & mailto)
initContactForm();