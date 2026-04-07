// =====================
// Navigation
// =====================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll-based navbar styling + active link update
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNavLink();
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// =====================
// Active Nav Link
// =====================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
}

// Set initial active link on load
updateActiveNavLink();

// =====================
// Typing Animation
// =====================
const titles = [
    'Tech Leader',
    'Software Architect',
    'Mobile Developer',
    'Cloud Engineer',
    'Innovator'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing-text');
const typingSpeed = 90;
const deletingSpeed = 55;
const pauseTime = 2000;

function typeText() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typingEl.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingEl.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentTitle.length) {
        delay = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        delay = 400;
    }

    setTimeout(typeText, delay);
}

typeText();

// =====================
// Fade-in on Scroll (Intersection Observer)
// =====================

// Add staggered transition delays to cards within each grid
document.querySelectorAll('.projects-grid').forEach(grid => {
    grid.querySelectorAll('.project-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 70}ms`;
    });
});

document.querySelectorAll('.skills-grid').forEach(grid => {
    grid.querySelectorAll('.skill-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 80}ms`;
    });
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { root: null, rootMargin: '0px', threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

