// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button, .logo');

document.addEventListener('mousemove', (e) => {
    // Check if on mobile (cursor will be hidden via css, but we can prevent JS errors/overhead)
    if(window.innerWidth > 768) {
        cursor.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
        follower.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
    }
});

// Cursor hover effect
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        if(window.innerWidth > 768) {
            cursor.style.transform += ' scale(2)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.border = '1px solid var(--accent-color)';
            follower.style.transform += ' scale(1.5)';
            follower.style.backgroundColor = 'rgba(0, 255, 204, 0.1)';
        }
    });
    
    link.addEventListener('mouseleave', () => {
        if(window.innerWidth > 768) {
            cursor.style.backgroundColor = 'var(--accent-color)';
            cursor.style.border = 'none';
            follower.style.backgroundColor = 'transparent';
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    alert('Mobile menu clicked! (Can be expanded later)');
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide navbar on scroll down, show on scroll up
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.fade-up');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
