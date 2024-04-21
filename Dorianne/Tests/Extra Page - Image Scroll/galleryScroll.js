var largeTL = gsap.timeline({
    scrollTrigger: { 
      trigger: '.text-reveal',
      pin: '.statement', 
      pinSpacing: false,
      start: "top top",
      markers: true,
      end: '+=200%',
    },
  })