gsap.registerPlugin(ScrollTrigger) 

ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    endTrigger: ".catalogue",
    end: "bottom bottom",
    pin: "#projects-title",
})