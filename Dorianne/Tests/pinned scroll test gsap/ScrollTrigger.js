	var largeTL = gsap.timeline({
	scrollTrigger: { 
	  trigger: '.start-trig',
	  pin: '.bg', 
	  pinSpacing: false,
	  start: "top top",
	  markers: true,
	  end: '+=200%',
	},
  })
