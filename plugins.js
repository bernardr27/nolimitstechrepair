// Contact form plugin for No Limits Tech Repair site

const CONTACT_EMAIL = "info@nolimitts.tech"; // TODO: replace with your real email address

export function initContactForm() {
  const form = document.getElementById('contact-form');
  const noteEl = document.getElementById('contact-note');
  const submitBtn = document.getElementById('contact-submit');
  if (!form || !submitBtn) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const budget = document.getElementById('budget').value.trim();
    const details = document.getElementById('details').value.trim();
    if (!name || !email) {
      setNote('Please fill out your name and email.');
      return;
    }
    const subject = encodeURIComponent('New inquiry from No Limits Tech Repair');
    const bodyLines = [];
    bodyLines.push(`Name: ${name}`);
    bodyLines.push(`Email: ${email}`);
    bodyLines.push(`Service: ${service}`);
    if (budget) bodyLines.push(`Budget: ${budget}`);
    if (details) bodyLines.push('\nDetails:\n' + details);
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    // Attempt to copy to clipboard
    const clipboardText = bodyLines.join('\n');
    copyToClipboard(clipboardText)
      .then(() => {
        setNote('Copied details to clipboard and opening your email app…');
        window.location.href = mailtoUrl;
      })
      .catch(() => {
        setNote('Opening your email app…');
        window.location.href = mailtoUrl;
      });
  });

  function setNote(msg) {
    if (noteEl) noteEl.textContent = msg;
  }
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    // fallback: create hidden textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    return new Promise((resolve, reject) => {
      try {
        document.execCommand('copy');
        document.body.removeChild(textarea);
        resolve();
      } catch (err) {
        document.body.removeChild(textarea);
        reject(err);
      }
    });
  }
}