gsap.registerPlugin(ScrollTrigger);



gsap.from(".icon", {
    // x: 100,
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".icon",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        // markers: true
    }
});