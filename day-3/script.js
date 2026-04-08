document.addEventListener("DOMContentLoaded", () => {

// TITLE ANIMATION
anime({
targets: '#title',
opacity: [0, 1],
translateY: [-20, 0],
duration: 1500,
easing: 'easeOutExpo'
});

// PROFILE IMAGE
anime({
targets: '.pfp',
scale: [0.9, 1],
opacity: [0, 1],
duration: 1200,
easing: 'easeOutExpo'
});

// CARDS FADE IN
anime({
targets: '.card',
opacity: [0, 1],
translateY: [30, 0],
delay: anime.stagger(200),
easing: 'easeOutQuad'
});

// PARTICLES
tsParticles.load("particles-js", {
particles: {
number: { value: 50 },
size: { value: 2 },
move: { speed: 0.6 },
opacity: { value: 0.3 },
links: {
enable: true,
distance: 140,
opacity: 0.2
}
}
});

});
