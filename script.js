// Custom cursor
let cursor = document.querySelector('.cursor');
let cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
});

// Hide cursor on touch devices
if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
}

// Navbar functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll and back-to-top button
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    const isLightTheme = document.body.classList.contains('light-theme');
    
    if (window.scrollY > 100) {
        if (isLightTheme) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        }
    } else {
        if (isLightTheme) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        }
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Back to top functionality
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.querySelector('.back-to-top');
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect for cursor
    backToTop.addEventListener('mouseenter', () => {
        if (cursor) {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
    
    backToTop.addEventListener('mouseleave', () => {
        if (cursor) {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Special handling for skill bars
            if (entry.target.classList.contains('skill-progress')) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const elementsToAnimate = [
        '.section-header',
        '.about-text',
        '.about-stats .stat',
        '.timeline-item',
        '.project-card',
        '.skill-category',
        '.contact-info',
        '.contact-form',
        '.terminal-window',
        '.code-window'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    });
    
    // Observe skill progress bars
    document.querySelectorAll('.skill-progress').forEach(bar => {
        observer.observe(bar);
    });
});

// Typing animation for terminal
function typeText(element, text, speed = 50) {
    let index = 0;
    element.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when terminal comes into view
const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
            entry.target.classList.add('typed');
            
            const lines = entry.target.querySelectorAll('.terminal-output');
            lines.forEach((line, index) => {
                setTimeout(() => {
                    const originalText = line.textContent;
                    typeText(line, originalText, 30);
                }, index * 800);
            });
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const terminalContent = document.querySelector('.terminal-content');
    if (terminalContent) {
        terminalObserver.observe(terminalContent);
    }
});

// Form handling
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('.btn');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                contactForm.reset();
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
            }, 2000);
        }, 1000);
    });
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.innerHTML = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background-color: var(--secondary-black);
                border: 1px solid var(--white);
                color: var(--white);
                padding: 1rem;
                border-radius: var(--border-radius);
                z-index: 1000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                max-width: 300px;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification.success {
                border-color: var(--white);
            }
            
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: var(--white);
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0;
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Preloader
function showPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'loading';
    preloader.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(preloader);
    
    return preloader;
}

function hidePreloader(preloader) {
    preloader.classList.add('hidden');
    setTimeout(() => {
        if (preloader.parentNode) {
            preloader.parentNode.removeChild(preloader);
        }
    }, 500);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Show preloader
    const preloader = showPreloader();
    
    // Hide preloader when everything is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            hidePreloader(preloader);
        }, 1000);
    });
    
    // Initialize all interactive elements
    initializeInteractiveElements();
});

function initializeInteractiveElements() {
    // Add hover effects to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
    
    // Add hover effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        
        btn.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'h' to go to home
    if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.metaKey && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'c' to go to contact
    if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press Escape to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Theme toggle functionality
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '◐';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    const styles = document.createElement('style');
    styles.innerHTML = `
        .theme-toggle {
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            background: none;
            border: 2px solid var(--white);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            color: var(--white);
            cursor: pointer;
            z-index: 1000;
            transition: var(--transition-fast);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }
        
        .theme-toggle:hover {
            background-color: var(--white);
            color: var(--primary-black);
            transform: translateY(-50%) scale(1.1);
        }
        
        .theme-toggle.light {
            transform: translateY(-50%) rotate(180deg);
        }
        
        .theme-toggle.light:hover {
            transform: translateY(-50%) rotate(180deg) scale(1.1);
        }
        
        @media (max-width: 768px) {
            .theme-toggle {
                right: 10px;
                width: 40px;
                height: 40px;
            }
        }
    `;
    
    document.head.appendChild(styles);
    document.body.appendChild(themeToggle);
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.classList.add('light');
        themeToggle.innerHTML = '◑';
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        // Toggle theme
        const isLight = document.body.classList.toggle('light-theme');
        
        if (isLight) {
            themeToggle.classList.add('light');
            themeToggle.innerHTML = '◑';
            localStorage.setItem('theme', 'light');
            showNotification('Switched to light theme!', 'success');
        } else {
            themeToggle.classList.remove('light');
            themeToggle.innerHTML = '◐';
            localStorage.setItem('theme', 'dark');
            showNotification('Switched to dark theme!', 'success');
        }
        
        // Update navbar background immediately after theme switch
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                if (isLight) {
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                } else {
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
                }
            } else {
                if (isLight) {
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                } else {
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
                }
            }
        }
        
        // Visual feedback
        themeToggle.style.transform = 'translateY(-50%) scale(0.9)';
        setTimeout(() => {
            if (isLight) {
                themeToggle.style.transform = 'translateY(-50%) rotate(180deg) scale(1)';
            } else {
                themeToggle.style.transform = 'translateY(-50%) scale(1)';
            }
        }, 150);
    });
}

// Initialize theme toggle after DOM load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createThemeToggle, 2000);
});

// Easter egg - Konami code
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated
            document.body.style.animation = 'rainbow 2s linear infinite';
            showNotification('🎮 Konami Code activated! But we keep it black and white 😉', 'success');
            
            setTimeout(() => {
                document.body.style.animation = '';
                konamiIndex = 0;
            }, 5000);
        }
    } else {
        konamiIndex = 0;
    }
});

// Performance optimization - Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Console easter egg
console.log(`
  ____              _             ____              _   _                            
 / ___|  __ _ _ __  (_) __ _ _   _/ ___|  __ _ _ __ | |_| |__   __ _ _ __   __ _ _ __ ___  
 \\___ \\ / _\` | '_ \\| |/ _\` | | | \\___ \\ / _\` | '_ \\| __| '_ \\ / _\` | '_ \\ / _\` | '_ \` _ \\ 
  ___) | (_| | | | | | (_| | |_| |___) | (_| | | | | |_| | | | (_| | | | | (_| | | | | | |
 |____/ \\__,_|_| |_| |\\__,_|\\__, |____/ \\__,_|_| |_|\\__|_| |_|\\__,_|_| |_|\\__,_|_| |_| |_|
                          |___/                                                        

👨‍💻 Software Developer | 🎓 Syracuse University | ☕ Java Enthusiast

Thanks for checking out my portfolio! 
Built with vanilla HTML, CSS, and JavaScript - no frameworks needed!

Contact: ssantha2@syr.edu
LinkedIn: linkedin.com/in/sanjaysanthanam
`);

// Analytics placeholder (for future integration)
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    console.log(`Track: ${category} - ${action} - ${label}`);
}

// Track navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        trackEvent('Navigation', 'Click', e.target.textContent);
    });
});

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        trackEvent('Button', 'Click', e.target.textContent);
    });
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker would be implemented here for offline capabilities
        console.log('Service Worker support detected - ready for PWA implementation');
    });
}

// Accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--white);
        color: var(--primary-black);
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main';
    }
});

// Print styles optimization
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Final initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio loaded successfully!');
    
    // Add loading complete class after everything is ready
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1500);
});