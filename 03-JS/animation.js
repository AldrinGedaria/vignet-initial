//smooth scrolling
const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

//hero-reveal
const splitType = document.querySelectorAll('.hero-title h1')

  splitType.forEach((char,i) => {
      const text = new SplitType(char, { types: 'chars'})

  gsap.from(".char", 1, {
        start: "top bottom",
        y: '100%',
        ease: "power4.inOut",
        stagger:{
            amount: .5,
        },
        })
    });
    
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".video",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      }
    });
  
    tl.to(".main-video", {
      scale: 1,
      ease: "power4.inOut"
    });

//title-aniamtion