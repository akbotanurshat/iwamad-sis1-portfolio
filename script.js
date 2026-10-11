/* =====================================================
   1. THEME TOGGLE (Dark / Light)
   ===================================================== */
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

// Сақталған тақырыпты жүктеу (localStorage)
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
    theme === 'dark' ? 'Жарық тақырыпқа ауысу' : 'Қараңғы тақырыпқа ауысу'
  );
}

/* =====================================================
   2. MOBILE NAV TOGGLE (бургер-мәзір)
   ===================================================== */
const navToggle = document.getElementById('nav-toggle');
const primaryNav = document.getElementById('primary-nav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.textContent = isOpen ? '✕' : '☰';
});

// Сілтеме басқанда мәзірді жабу (мобильде)
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
  event.preventDefault(); // беттің қайта жүктелуін болдырмау

  // Алдыңғы хабарламаны тазалау
  status.textContent = '';
  status.className = 'form-status';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // --- 1) Бос өрістерді тексеру ---
  if (!name) {
    showError('Атыңызды енгізіңіз — бос өріс.');
    form.name.focus();
    return;
  }
  if (!email) {
    showError('Email енгізіңіз — бос өріс.');
    form.email.focus();
    return;
  }
  if (!message) {
    showError('Хабарлама жазыңыз — бос өріс.');
    form.message.focus();
    return;
  }

  // --- 2) Email форматын тексеру ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('Email форматы дұрыс емес (мысалы: abc@mail.com).');
    form.email.focus();
    return;
  }

  // --- 3) Сәтті жағдай ---
  status.textContent = 'Рахмет! Хабарламаңыз сәтті қабылданды. ✅';
  status.classList.add('success');
  form.reset();
});

function showError(msg) {
  status.textContent = msg;
  status.classList.add('error');
}
