const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});

 //gsap not working when this is enabled 
 locoScroll.on('scroll', ScrollTrigger.update);

 // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy('.smooth-scroll', {
   scrollTop(value) {
     return arguments.length
       ? locoScroll.scrollTo(value, 0, 0)
       : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
     return {
       top: 0,
       left: 0,
       width: window.innerWidth,
       height: window.innerHeight,
     };
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector('.smooth-scroll').style.transform
     ? 'transform'
     : 'fixed',
 });
 

ScrollTrigger.refresh();

gsap.to("#red", {

  scrollTrigger: {
    trigger: "#red",
    start: "top center",
    end: "top 100px",
    scrub:false, //when scrub 
    markers: true,
  },
  
    y:600,
    ease:"none",
    duration:5,
    delay:2,
  }); //WORKING -> Animate CSS makes problem +  Locomotive scroll -> Scroll doesnt move 

