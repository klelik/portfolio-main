const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  smartphone: {
    smooth: true,
 }
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed",
});

// let lottieAnim = lottie.loadAnimation({
//   container: document.querySelector(".lottie"),
//   renderer: "svg",
//   loop: false,
//   autoplay: false,
//   path: "https://assets6.lottiefiles.com/packages/lf20_abqysclq.json"
// });

// lot=document.getElementById("firstLottie");
// console.log(lot);
// scroll.on("scroll", (obj) => {
//   const vProgress = (obj.scroll.y / obj.limit.y) * 100;
//   lottieAnim.goToAndStop((vProgress * lottieAnim.totalFrames) / 100, true);
// });

