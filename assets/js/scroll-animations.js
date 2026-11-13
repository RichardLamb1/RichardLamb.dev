(() => {
    'use strict';
    if (!window.AOS) return;

    // Commit the starting transforms so above-the-fold content slides on the initial load.
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('scroll-aos-enabled');
        document.querySelectorAll('[data-aos]').forEach((element) => {
            window.getComputedStyle(element).transform;
        });
    }

    window.AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        offset: 60,
        once: true,
        disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
})();
