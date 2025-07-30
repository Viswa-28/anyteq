 gsap.registerPlugin(ScrollTrigger);

  gsap.from(".cube", {
    duration: 5,
    x: -300,
    opacity: 0,
    ease: "power1.inOut",


   
    scrollTrigger: {
        trigger: ".navb",
      start: " top",
      end: "+=100",
      scrub: true,
     
    }
  });
    gsap.from(".cube2", {
        duration: 5,
        x: 300,
        opacity: 0,
        ease: "power1.inOut",
        
        scrollTrigger: {
            trigger: ".navbar",
        start: " top",
        end: "+=100",
        scrub: true,
       
        }
    });