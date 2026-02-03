// Random WhatsApp number selector
function orderJikokoa(size, price) {
    // Array of WhatsApp numbers
    const whatsappNumbers = ['254104440055', '254788847935'];
    
    // Randomly select one number
    const randomNumber = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];
    
    // Create appropriate message based on size
    let message = '';
    if (size === 'general') {
        message = "Hi, I'm interested in ordering a Jikokoa stove";
    } else {
        const sizeCapitalized = size.charAt(0).toUpperCase() + size.slice(1);
        message = `Hi, I want to order a ${sizeCapitalized} Size Jikokoa stove (KSh ${price})`;
    }
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${randomNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
}

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Observe stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Observe steps
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.15}s`;
        step.classList.add('fade-in');
        observer.observe(step);
    });

    // Observe testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add parallax effect to hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const flameBg = document.querySelector('.flame-bg');
        
        if (hero && flameBg) {
            flameBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animate numbers on scroll
    const animateNumber = (element, target) => {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };

    // Observe stat numbers for animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (number) {
                    entry.target.textContent = '0';
                    animateNumber(entry.target, number);
                    setTimeout(() => {
                        entry.target.textContent = text;
                    }, 2000);
                }
            }
        });
    }, observerOptions);

    statNumbers.forEach(num => numberObserver.observe(num));

    // Add hover effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add active state to navigation on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.3)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.padding = '1rem 0';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.padding = '2rem 0';
        }
    });

    // Console message
    console.log('%c🔥 Jikokoa Stoves - Cook Smarter, Save More! 🔥', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
    console.log('%cWebsite built with care for Kenyan families', 'color: #4A4A4A; font-size: 14px;');
});