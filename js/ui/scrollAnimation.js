gsap.registerPlugin(ScrollTrigger);

export const runChat = () => {
  const introTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "0 0",
      end: "+=1500",
      scrub: 1,
      pin: true,
      // pinSpacing: false,
      anticipatePin: 1,
      // markers: true,
      //once: true,
      onsLeave: () => {      // gsap.fromTo(
        //   ".puzzle",
        //   { yPercent: 100 },
        //   { yPercent: -10, duration: 1 },
        // );
        // gsap.to('header', { opacity: 1, duration: 1});
        // gsap.fromTo('header', { opacity: 0, duration: 5, y: "-100%"}, {opacity: 1, duration: 5, y: 0 });
      },
    },
  });

  introTimeLine
    .to(".chat", { display: "none", opacity: 0, duration: 5, delay: 2 }, 1)
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
    .to(".name-wrap .l1", { height: "100%", opacity: 1, duration: 0.8 })
    .to(".name-wrap .l2", { width: "100%", opacity: 1, duration: 0.8 })
    .to(".name-wrap .l3", { height: "100%", opacity: 1, duration: 1.2 })
    .to(".name-wrap .l4", { width: "100%", opacity: 1, duration: 1.5 })
    .to(".scroll-indicator", { display: "none" })
    .to(".name-wrap", { opacity: 0, duration: 10, delay: 3, ease: 'none' })
    // .add("fade")
    .fromTo(
      "header",
      { opacity: 0, duration: 5, y: "-100%" },
      { opacity: 1, duration: 5, y: 0, delay: 2 },
      // "fade"
    );
  // .fromTo(
  //   ".puzzle",
  //   { y: "100%", duration: 5 },
  //   { y: "-20%", duration: 5 },
  //   "fade"
  // );

  const projectsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#project",
      start: "0% 15%",
      end: "100% 100%",
      scrub: 1,
      // pin: '#project .section-title',
      // pinSpacing: false,
      markers: true,
    },
  });

  projectsTimeline.to("#project .section-title", {
    y: () => {
      const project = document.querySelector("#project");
      const title = document.querySelector("#project .section-title");
      const projectHeight = project.offsetHeight;
      const titleHeight = title.offsetHeight;
      // const centerY = window.innerHeight / 2 - titleHeight;

      // y 이동량: 중간까지 + 섹션 끝까지 이동
      return projectHeight - titleHeight;
    },
    ease: "none", //ease 'none' 하는게 중요함
  });
};
