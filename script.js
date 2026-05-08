// Mobile nav
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i % 4) * 0.08 + 's';
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const h = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollY >= top && scrollY < top + h) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + id ? '#f5f5f0' : '';
      });
    }
  });
});