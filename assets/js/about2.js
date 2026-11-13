(() => {
    'use strict';
    const page = document.querySelector('.about2');
    if (!page) return;

    // Recalculate scroll positions when filtering or Bootstrap accordions change layout.
    const refreshAnimations = () => {
        if (window.AOS) window.AOS.refresh();
    };
    page.addEventListener('shown.bs.collapse', refreshAnimations);
    page.addEventListener('hidden.bs.collapse', refreshAnimations);

    // Keep content available without JavaScript; reveal only working controls.
    const experienceFilters = page.querySelector('[data-filter-group="experience"]');
    experienceFilters.hidden = false;
    experienceFilters.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;
        experienceFilters.querySelectorAll('button').forEach((item) => {
            item.setAttribute('aria-pressed', String(item === button));
            item.classList.toggle('active', item === button);
        });
        page.querySelectorAll('[data-experience]').forEach((role) => {
            role.hidden = button.dataset.filter !== 'all' && role.dataset.experience !== button.dataset.filter;
        });
        refreshAnimations();
    });

    const controls = page.querySelector('.a2-tool-controls');
    const search = page.querySelector('#a2-skill-search');
    const skillFilters = page.querySelector('[data-filter-group="skills"]');
    const status = page.querySelector('#a2-skill-status');
    let category = 'all';
    controls.hidden = false;
    status.hidden = false;
    function updateSkills() {
        const query = search.value.trim().toLowerCase();
        let count = 0;
        page.querySelectorAll('[data-skill-group]').forEach((group) => {
            const matchesCategory = category === 'all' || group.dataset.skillGroup === category;
            let visible = 0;
            group.querySelectorAll('[data-skill]').forEach((skill) => {
                skill.hidden = !matchesCategory || !skill.dataset.skill.includes(query);
                if (!skill.hidden) visible++;
            });
            group.hidden = visible === 0;
            count += visible;
        });
        refreshAnimations();
        status.textContent = count ? `${count} skill${count === 1 ? '' : 's'} shown` : 'No matching skills. Try another search or choose All skills.';
    }
    skillFilters.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;
        category = button.dataset.filter;
        skillFilters.querySelectorAll('button').forEach((item) => {
            item.setAttribute('aria-pressed', String(item === button));
            item.classList.toggle('active', item === button);
        });
        updateSkills();
    });
    search.addEventListener('input', updateSkills);
    updateSkills();

    if (window.AOS) {
        // Commit AOS's translated starting positions before it adds aos-animate.
        // Otherwise Chrome can combine both changes and skip the hero's slide.
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            page.classList.add('a2-aos-enabled');
            page.querySelectorAll('[data-aos]').forEach((element) => {
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
    }
})();
