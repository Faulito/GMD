/* ===================================================
   GMD GROUP & SOLUTIONS — Script v2.0
   Animaciones, interacciones y mejoras de UX
   =================================================== */

'use strict';

// ===== LOADER DE PÁGINA =====
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 400);
    }
    document.body.classList.add('loaded');
});

// ===== MENÚ HAMBURGUESA =====
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu    = document.getElementById('navMenu');
    const header     = document.getElementById('header');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Cerrar al hacer clic en link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', e => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // ===== NAVBAR SCROLL =====
    if (header) {
        const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 60);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // estado inicial
    }
});

// ===== ANIMACIONES AL DESPLAZAR (REVEAL) =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    // Observar todos los elementos reveal y las tarjetas
    const targets = document.querySelectorAll(
        '.reveal, .servicio-card, .producto-card, .galeria-item, .info-item, .valor'
    );
    targets.forEach(el => {
        // Agregar clase reveal si no la tiene aún
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
        revealObserver.observe(el);
    });

    // Animar el texto del hero con delay
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) heroContent.style.opacity = '1';
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = document.querySelector('.header')?.offsetHeight || 72;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    });
});

// ===== ACTIVE NAV LINK AL SCROLLEAR =====
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-menu a');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle(
                    'nav-active',
                    link.getAttribute('href') === `#${id}`
                );
            });
        }
    });
}, {
    rootMargin: '-40% 0px -50% 0px',
    threshold: 0
});

sections.forEach(s => sectionObserver.observe(s));

// ===== EFECTO PARALLAX SUTIL EN HERO =====
const heroBackground = document.querySelector('.hero-background');
if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.25}px)`;
        }
    }, { passive: true });
}

// ===== EFECTO RIPPLE EN BOTONES =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x    = e.clientX - rect.left;
        const y    = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position:absolute; border-radius:50%;
            transform:scale(0); animation:rippleAnim .55s linear;
            background:rgba(255,255,255,.25);
            width:80px; height:80px;
            left:${x - 40}px; top:${y - 40}px;
            pointer-events:none;
        `;
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });
});

// Inyectar keyframe para ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleAnim {
        to { transform: scale(4); opacity: 0; }
    }
    .nav-menu a.nav-active {
        color: #d4af37 !important;
    }
    .nav-menu a.nav-active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(rippleStyle);

// ===== CONTADOR ANIMADO EN SECCIÓN NOSOTROS =====
function animateValue(el, start, end, duration) {
    const range   = end - start;
    const startTs = performance.now();
    const step = (ts) => {
        const progress = Math.min((ts - startTs) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
        el.textContent = Math.floor(start + range * eased) + '+';
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

// ===== EFECTO DE LUZ EN TARJETAS AL MOVER EL MOUSE =====
document.querySelectorAll('.servicio-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width)  * 100;
        const y = ((e.clientY - rect.top)  / rect.height) * 100;
        this.style.setProperty('--mouse-x', `${x}%`);
        this.style.setProperty('--mouse-y', `${y}%`);
    });
    card.addEventListener('mouseleave', function() {
        this.style.removeProperty('--mouse-x');
        this.style.removeProperty('--mouse-y');
    });
});

// Inyectar estilos del efecto de luz en tarjetas
const cardLightStyle = document.createElement('style');
cardLightStyle.textContent = `
    .servicio-card {
        --mouse-x: 50%;
        --mouse-y: 50%;
    }
    .servicio-card:hover::after {
        background: radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            rgba(212,175,55,.10) 0%,
            transparent 55%
        ) !important;
        opacity: 1 !important;
    }
`;
document.head.appendChild(cardLightStyle);

// ===== TRACKING WHATSAPP CLICKS =====
document.querySelectorAll('.btn-whatsapp, .whatsapp-float').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('[GMD] WhatsApp contacto iniciado');
        // Google Analytics placeholder:
        // if (window.gtag) gtag('event', 'whatsapp_click', { event_category: 'contact' });
    });
});

// ===== DEBOUNCE RESIZE =====
function debounce(fn, delay) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), delay);
    };
}

window.addEventListener('resize', debounce(() => {
    // Recalcular en resize si es necesario
}, 200));

// ===== ACCESIBILIDAD: NAVEGACIÓN POR TECLADO =====
document.addEventListener('keydown', e => {
    if (e.key === 'Tab') document.body.classList.add('keyboard-nav');
});
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', () => {
    if (window.performance?.timing) {
        const t = window.performance.timing;
        const loadTime = t.loadEventEnd - t.navigationStart;
        console.log(`[GMD] Página cargada en ${loadTime}ms`);
    }
});

console.log('[GMD GROUP & SOLUTIONS] Script v2.0 — Listo ✓');
