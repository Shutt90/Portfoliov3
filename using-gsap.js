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
    y: -500,
    duration: 4,
    delay: 4.4,
})

gsap.to(`.line-4-black`, {
    x: 700,
    duration: 4,
    delay: 4.4,
})
gsap.to(`.line-3-black`, {
    y: 500,
    duration: 4,
    delay: 5.8,
})

