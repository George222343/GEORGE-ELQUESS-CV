document.addEventListener("DOMContentLoaded", () => {
    // 1. Trigger introduction entry animations
    const heroContent = document.querySelector('.hero-content');
    if(heroContent) {
        setTimeout(() => {
            heroContent.classList.remove('hidden');
            heroContent.classList.add('show');
        }, 150);
    }

    // 2. High-performance observer scroll triggers for dynamic reveals
    const revealSections = document.querySelectorAll('.scroll-reveal');
    const revealOptions = { threshold: 0.08, rootMargin: "0px 0px -40px 0px" };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealSections.forEach(section => { revealObserver.observe(section); });
});