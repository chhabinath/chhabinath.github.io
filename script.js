// Custom Cursor Logic
document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with lag
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });
    }

    // Hover effects (Text/Buttons -> Hexagon)
    const textElements = document.querySelectorAll('a, button, input, textarea, .social-icon, h1, h2, h3, h4, h5, h6, p, li, span');
    
    textElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('cursor-locked');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-locked');
        });
    });

    // Hide cursor when typing
    let typeTimer;
    document.addEventListener('keydown', () => {
        document.body.classList.add('is-typing');
        
        clearTimeout(typeTimer);
        typeTimer = setTimeout(() => {
            document.body.classList.remove('is-typing'); 
        }, 1000);
    });

    document.addEventListener('mousemove', () => {
        document.body.classList.remove('is-typing');
    });

    // Parallax Effect
// Initialize Lenis Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Tilt Effect for Depth Cards (Images -> Bubble Burst)
    const depthCards = document.querySelectorAll('.depth-card');
    
    depthCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('cursor-image-active');
        });
        card.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-image-active');
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            const img = card.querySelector('img');
            img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
});

// Animate skill bars on scroll
        document.addEventListener('DOMContentLoaded', function() {
            // Skill bar animation using Intersection Observer
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the bar is visible
            };
            
            const skillBarObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    
                    if (entry.isIntersecting) {
                        bar.style.width = width + '%'; // Animate in
                    } else {
                        bar.style.width = '0%'; // Reset when out of view
                    }
                });
            }, observerOptions);
            
            skillBars.forEach(bar => {
                skillBarObserver.observe(bar);
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Navbar background on scroll
            // Navbar background on scroll
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 100) {
                    navbar.style.backgroundColor = 'rgba(238, 242, 245, 0.98)'; // Matches --bg-primary
                    navbar.style.boxShadow = '0 5px 20px rgba(0, 168, 255, 0.15)'; // Blue glow
                } else {
                    navbar.style.backgroundColor = 'rgba(238, 242, 245, 0.95)';
                    navbar.style.boxShadow = 'none';
                }
            });
            // Contact Form Mailto Redirect
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                console.log('Contact form found, attaching listener');
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    console.log('Form submitted');
                    
                    const nameInput = document.getElementById('contactName');
                    const emailInput = document.getElementById('contactEmail');
                    const subjectInput = document.getElementById('contactSubject');
                    const messageInput = document.getElementById('contactMessage');

                    if (!nameInput || !emailInput || !subjectInput || !messageInput) {
                        console.error('One or more form inputs not found');
                        return;
                    }

                    const name = nameInput.value;
                    const email = emailInput.value;
                    const subject = subjectInput.value;
                    const message = messageInput.value;
                    
                    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                    const mailtoLink = `mailto:chhabinath1519@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                    
                    console.log('Redirecting to:', mailtoLink);
                    window.location.href = mailtoLink;
                });
            } else {
                console.error('Contact form not found');
            }
        });