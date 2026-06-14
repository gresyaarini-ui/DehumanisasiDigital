document.documentElement.classList.add('js-ready');

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

setTimeout(() => {
  revealEls.forEach(el => el.classList.add('visible'));
}, 2500);

// Hero flip card (only on index.html)
const heroCard = document.getElementById('heroCard');
const heroHint = document.getElementById('heroHint');
if (heroCard && heroHint){
  heroCard.addEventListener('click', () => {
    const flipped = heroCard.classList.toggle('flipped');
    heroHint.textContent = flipped ? '↺ Sentuh untuk kembali ke angka' : '↻ Sentuh kartu ini';
  });
}