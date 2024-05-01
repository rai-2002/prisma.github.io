 gsap.registerPlugin(ScrollTrigger);

 gsap.to("#projects-title", {
     scrollTrigger: {
         trigger: ".start-trig",
         pin: "#projects-title",
         pinSpacing: false,
         start: "top top",
         endTrigger: ".end-trigger", 
         end: "bottom bottom",
     //    markers: true
     }
 });