/*
  Be.Live — Landing Page Script
  Version : v1.0.0
  Date    : 2026-10-15
  Author  : House of Sahoo
  -----------------------------------------------
  v1.0.0 | 2026-10-15 | Initial release
           - Navbar scroll / frosted glass effect
           - Logo & tagline entrance animations
           - Floating leaf particles
           - Logo mouse parallax
           - Scroll cue interaction
  v1.1.0 | 2026-10-16 | No script changes (philosophy is static content)
*/

// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Entrance animations via IntersectionObserver ──
const logoWrapper = document.getElementById('logo-wrapper');
const taglinePills = document.getElementById('tagline-pills');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

[logoWrapper, taglinePills].forEach(el => el && observer.observe(el));

// Trigger immediately if already in viewport
setTimeout(() => {
    logoWrapper?.classList.add('visible');
    setTimeout(() => taglinePills?.classList.add('visible'), 350);
}, 200);

// ── Scroll cue click ──────────────────────────
document.getElementById('scroll-cue')?.addEventListener('click', () => {
    document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
});

// ── Floating leaf particles ───────────────────
const LEAF_EMOJIS = ['🍃', '🌿', '☘️', '🌱'];
const container = document.getElementById('particles');
const PARTICLE_COUNT = 14;

function createLeaf() {
    const el = document.createElement('div');
    el.classList.add('leaf-particle');
    el.textContent = LEAF_EMOJIS[Math.floor(Math.random() * LEAF_EMOJIS.length)];

    const left = Math.random() * 100;          // % across screen
    const duration = 22 + Math.random() * 20;      // 22-42s fall — slow, unhurried
    const delay = Math.random() * 20;            // stagger
    const size = 0.7 + Math.random() * 0.8;    // 0.7–1.5rem

    el.style.cssText = `
    left: ${left}%;
    font-size: ${size}rem;
    animation-duration: ${duration}s;
    animation-delay: -${delay}s;
  `;
    return el;
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
    container.appendChild(createLeaf());
}

// ── Subtle logo parallax on mouse move ────────
const logoImg = document.getElementById('main-logo');
document.addEventListener('mousemove', (e) => {
    if (!logoImg) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;   // -1 to +1
    const dy = (e.clientY - cy) / cy;
    logoImg.style.transform = `
    translate(${dx * 6}px, ${dy * 6}px) scale(1)
  `;
});

// Reset on mouse leave
document.addEventListener('mouseleave', () => {
    if (logoImg) logoImg.style.transform = '';
});
