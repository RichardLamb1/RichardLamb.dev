// Fix for the buttons not easing over hover when animated
var animationDuration = 800;

AOS.init({
    once: true,
    duration: animationDuration,
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Wait for the animation to occur then nuke all the AOS stuff from the element
async function waitForAOS(detail) {
    await sleep(animationDuration);
    if (detail.tagName == "A") {
        delete detail.dataset.aos;
        detail.classList.remove("aos-init");
        detail.classList.remove("aos-animate");
    }
}

document.addEventListener('aos:in', ({ detail }) => {
    waitForAOS(detail);
});