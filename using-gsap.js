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

gsap.from("about-me__socials-icon", {
    x: 100,
    opacity: 0,
})