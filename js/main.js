/* ============================================
   DIVYA MAKEUP STUDIO — MAIN JS
   ============================================ */

// ── NAVBAR SCROLL EFFECT ──
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── HAMBURGER MENU ──
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
}

// Close mobile nav on link click
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── ACTIVE NAV LINK ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  link.classList.remove('active');
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── SCROLL TO TOP BUTTON ──
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── TAB SYSTEM (Services Page) ──
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => { c.classList.remove('active'); c.style.display = 'none'; });
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.target);
    if (target) { target.style.display = 'block'; setTimeout(() => target.classList.add('active'), 10); }
  });
});

// Init first tab
if (tabContents.length > 0) {
  tabContents.forEach((c, i) => { c.style.display = i === 0 ? 'block' : 'none'; });
}