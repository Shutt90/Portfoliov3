//About Section

gsap.from(".about-me", {
    x: -500,
    duration: 2,
    opacity: 0,
})

gsap.from(".about-img", {
    y: -300,
    duration: 2,
    opacity: 0,
    ease: "elastic",
    delay: 2,
})

gsap.to(`.line-1-black`, {
    x: -700,
    duration: 4,
    delay: 3,
})


gsap.to(`.line-2-black`, {
    x: 700,
    duration: 4,
    delay: 4.4,
})


// Skill Section

gsap.from('.skills-container__box__skill-right', {
    scrollTrigger: {
        trigger: ".skills-container__box",
        start: "top center",
        end: "50%"
    },
    x: -100,
    opacity: 0,
    stagger: 1,
    duration: 1,
})


gsap.from('.skills-container__box__skill-left', {
    scrollTrigger: {
        trigger: ".skills-container__box",
        start: "top center",
        end: "50%"
    },
    x: 100,
    opacity: 0,
    stagger: 1,
    duration: 1,
})