/* ============================================
   DIVYA MAKEUP STUDIO — ANIMATIONS JS
   ============================================ */

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target; clearInterval(timer); return; }
    el.textContent = Math.floor(current);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// ── 3D TILT on .tilt-card ──
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(600px) rotateY(${x / 18}deg) rotateX(${-y / 18}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateY(0) rotateX(0) translateY(0)';
  });
});

// ── PARALLAX HERO ──
const heroSection = document.querySelector('.hero-parallax');
if (heroSection) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrolled * 0.3}px`;
  });
}