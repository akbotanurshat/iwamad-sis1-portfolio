/* =====================================================
   1. THEME TOGGLE (Dark / Light)
   ===================================================== */
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme') || 'light';
html.dataset.theme = savedTheme;
updateToggleIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const newTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
  );
}

/* =====================================================
   2. MOBILE NAV TOGGLE
   ===================================================== */
const navToggle = document.getElementById('nav-toggle');
const primaryNav = document.getElementById('primary-nav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.textContent = isOpen ? '✕' : '☰';
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.textContent = '☰';
  });
});

/* =====================================================
   3. CONTACT FORM VALIDATION
   ===================================================== */
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  status.textContent = '';
  status.className = 'form-status';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // --- 1) Empty required fields ---
  if (!name) {
    showError('Please enter your name — this field is required.');
    form.name.focus();
    return;
  }
  if (!email) {
    showError('Please enter your email — this field is required.');
    form.email.focus();
    return;
  }
  if (!message) {
    showError('Please enter a message — this field is required.');
    form.message.focus();
    return;
  }

  // --- 2) Email format ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('Invalid email format (example: abc@mail.com).');
    form.email.focus();
    return;
  }

  // --- 3) Success ---
  status.textContent = 'Thank you! Your message was sent successfully. ✅';
  status.classList.add('success');
  form.reset();
});

function showError(msg) {
  status.textContent = msg;
  status.classList.add('error');
}
