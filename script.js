// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.boxShadow = window.scrollY > 40
        ? '0 4px 24px rgba(0,0,0,0.4)'
        : 'none';
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(
    '.timeline-item, .cert-card, .project-card, .skill-category, .stat'
).forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    observer.observe(el);
});
