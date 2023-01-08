//parallax

gsap.to("#red", {
  scrollTrigger: {
    trigger: "#yellow",
    start: "top 45%",
    end: "+=1000",
    scrub: 10,
    markers: false,
    scroller: ".smooth-scroll",
  },

  y: 900,
  rotation: 180,
  ease: "slow(0.2, 0.90)",
  delay: 2,
}); //WORKING -> Animate CSS makes problem +  Locomotive scroll -> Scroll doesnt move

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
