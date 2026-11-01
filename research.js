/* Be.Live — Research Page Script */

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Scroll progress bar ── */
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    progressBar.style.width = Math.min((scrolled / total) * 100, 100) + '%';
});

/* ── Reveal on scroll ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in-view'), i * 80);
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

/* ── Soil bars trigger on view ── */
const bars = document.querySelectorAll('.soil-bar');
const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.animationPlayState = 'running';
            barObs.unobserve(e.target);
        }
    });
}, { threshold: 0.2 });
bars.forEach(b => { b.style.animationPlayState = 'paused'; barObs.observe(b); });

/* ── Chapter nav active state (scroll-spy) ── */
const sections = ['ancient', 'green-rev', 'stlterm', 'techniques', 'multilayer', 'pioneers', 'urbanrural', 'hydro'];
const chBtns = document.querySelectorAll('.ch-btn');

const chapterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const id = e.target.id;
            chBtns.forEach(b => {
                b.classList.toggle('active', b.dataset.target === id);
            });
        }
    });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => {
    const el = document.getElementById(s);
    if (el) chapterObs.observe(el);
});

/* ── Chapter nav click → scroll ── */
chBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

/* ── Stat counter animation ── */
function animateCounter(el) {
    const raw = el.getAttribute('data-val');
    if (!raw) return;
    const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
    const suffix = raw.replace(/[0-9.]/g, '');
    let start = null;
    const duration = 1600;
    function step(ts) {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - prog, 3);
        el.textContent = Math.floor(eased * num) + suffix;
        if (prog < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}
const statNums = document.querySelectorAll('.stat-num[data-val]');
const statObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { animateCounter(e.target); statObs.unobserve(e.target); }
    });
}, { threshold: 0.5 });
statNums.forEach(el => statObs.observe(el));
