gsap.registerPlugin(ScrollTrigger);

export const runChat = () => {

  const introTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "0 0",
      end: "+=1500",
      scrub: 2,
      pin: true,
      anticipatePin: 1,
      markers: true,
      // once: true,
      onLeave: () => {
        gsap.to('header', { opacity: 1, duration: 1});
        // gsap.to('.pin-spacer', { display: "none", duration: 1});
        // gsap.to('.about', { display: "block", duration: 0});
        // gsap.to('.about', { opacity: 1, duration: 1, delay: 1});
      },
    },
  });

  introTimeLine
    .fromTo(
      ".chat-bottom-el.first",
      { display: "none", x: 20, opacity: 0 },
      { display: "block", x: 0, opacity: 1, duration: 5, delay: 1}, 1
    )
    .fromTo(
      ".chat-bottom-el.sec",
      { display: "none", x: -40, opacity: 0 },
      { display: "block", x: 0, opacity: 1, duration:5, delay: 3 }
    )
    .fromTo(
      ".chat-bottom-el.third",
      { display: "none", x: 60, opacity: 0 },
      { display: "block", x: 0, opacity: 1, duration: 5, delay: 5 }
    )
    .to(".chat", { display: "none", opacity: 0, duration: 5, delay: 7})
    .to(".name-wrap .m", { opacity: 1, duration: 1, delay: 0.4 })
    .to(".name-wrap .o1", { opacity: 1, duration: 0.5, delay: 0.6 })
    .to(".name-wrap .n", { opacity: 1, duration: 0.5, delay: 0.8 })
    .to(".name-wrap .i", { opacity: 1, duration: 0.5, delay: 0.9 })
    .to(".name-wrap .o2", { opacity: 1, duration: 0.5, delay: 1 })
    .to(".name-wrap .j", { opacity: 1, duration: 0.5, delay: 1.1 });

  gsap.utils.toArray(".ver-wrap .line").forEach((selector, index) => {
    introTimeLine.to(selector, {
      opacity: 0,
      scaleY: 0,
      duration: 1,
      delay: index * 0.1,
    });
  });
  gsap.utils.toArray(".hor-wrap .line").forEach((selector, index) => {
    introTimeLine.to(selector, {
      opacity: 0,
      scaleX: 0,
      duration: 1,
      delay: index * 0.1,
    });
  });
  introTimeLine
    .to('.name-wrap .l1', { height: "100%", opacity: 1, duration: 0.8})
    .to('.name-wrap .l2', { width: "100%", opacity: 1, duration: 0.8})
    .to('.name-wrap .l3', { height: "100%", opacity: 1, duration: 1.2})
    .to('.name-wrap .l4', { width: "100%", opacity: 1, duration: 1.5})
    .to('.name-wrap', { scale: 0.15, duration: 3, delay: 1})
    .to('.name-wrap', { left: 0, top: 0, duration: 4, opacity: 0.5, delay: 2})
    .to('.name-wrap', { display: "none", delay: 2})
    // .to('header', { opacity: 1, duration: 1});
};
