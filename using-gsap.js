// Snapping to sections
let sections = gsap.utils.toArray("section");
gsap.to(sections, {
    scrollTrigger: {
        scrub: 1,
        snap: 1 / (sections.length - 1),
    }
});

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

setInterval(function(){
    document.querySelector(".line-2-black").style.display = "none"; 
}, 8200);

setInterval(function(){
    document.querySelector(".line-1-black").style.display = "none"; 
}, 6700);

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

gsap.from('.skills-arrow', {
    scrollTrigger: {
        trigger: ".skills-container__box",
        start: "top center",
        end: "50%"
    },
    x: -300,
    scale: 0,
    rotate: 180,
    opacity: 0,
    duration: 3,
})

gsap.fromTo('.skills-arrow', {
    scrollTrigger: {
        trigger: ".skills-container__box",
        start: "top center",
        end: "50%"
    },
    x: 0,
}, {
    x: 100,
    repeat: -1,
    delay: 3,
    duration: 2,
    yoyo: true,
})

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".projects",
    pin: true,
    scrub: 1,
    snap: directionalSnap(1 / (sections.length - 1)),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500"
  }
});

function directionalSnap(increment) {
    let snapFunc = gsap.utils.snap(increment);
    return (raw, self) => {
      let n = snapFunc(raw);
      return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
    };
  }

gsap.from(".projects-images-image", {
    scrollTrigger: {
        trigger: ".projects-text",
        start: "top center",
    },
    y: 500,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
})