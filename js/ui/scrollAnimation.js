gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const runChat = () => {
  const introTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "0 0",
      end: "+=1500",
      scrub: 3,
      pin: true,
      anticipatePin: 1,
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
      duration: 2,
      delay: index * 0.3,
    });
  });
  gsap.utils.toArray(".hor-wrap .line").forEach((selector, index) => {
    introTimeLine.to(selector, {
      opacity: 0,
      scaleX: 0,
      duration: 2,
      delay: index * 0.3,
    });
  });
  introTimeLine
    .to(".name-wrap .l1", { height: "100%", opacity: 1, duration: 1 })
    .to(".name-wrap .l2", { width: "100%", opacity: 1, duration: 1 })
    .to(".name-wrap .l3", { height: "100%", opacity: 1, duration: 1.5 })
    .to(".name-wrap .l4", { width: "100%", opacity: 1, duration: 2 })
    .to(".scroll-indicator", { display: "none" })
    .to(".name-wrap", { opacity: 0, duration: 10, delay: 3, ease: "none" })
    .add("fade")
    .fromTo(
      "header",
      { opacity: 0, duration: 5, y: "-100%" },
      { opacity: 1, duration: 5, y: 0, delay: 2 },
      "fade"
    )
    .fromTo(
      ".utility",
      { y: 100, opacity: 0, duration: 5 },
      { y: 0, opacity: 1, duration: 5, delay: 2 },
      "fade"
    );
};

export const titleAni = () => {
  const getTitleY = () => {
    const project = document.querySelector("#projects");
    const title = document.querySelector("#projects .section-title");
    return project.offsetHeight - title.offsetHeight;
  };

  const projectsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects",
      start: "0% 15%",
      end: "100% 100%",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  projectsTimeline.to("#projects .section-title", {
    y: () => getTitleY(),
    ease: "none", //ease 'none' 하는게 중요함
  });
};

export const aboutAni = () => {
  const attitudeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      once: true,
    },
  });

  gsap.utils.toArray(".attitude p").forEach((text, i) => {
    attitudeTimeline.from(
      text,
      {
        yPercent: 130,
        duration: 1.5,
        onStart: () => text.classList.add("active"),
      },
      i * 1
    );
  });
  attitudeTimeline.fromTo(
    ".qualifications",
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5 }
  );
};

export const puzzleAni = () => {
  gsap.utils.toArray('[class*="piece"]').forEach((piece, i, array) => {
    const pieceTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: piece,
        start: "0% 70%",
        end: "0% 70%",
        invalidateOnRefresh: true, // 화면 크기 변경 시 애니메이션 초기화
        once: true,
      },
    });

    if (i % 2 === 0) {
      pieceTimeline
        .set(piece, {
          x: -150,
          y: -100,
          rotationX: "-35deg",
          opacity: 0,
          scale: 0.5,
          transformOrigin: "left",
        })
        .to(piece, {
          x: 0,
          y: 0,
          rotationX: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
        });
    } else if (i % 2 === 1) {
      pieceTimeline
        .set(piece, { 
          x: 200, 
          opacity: 0, 
          rotation: -15, 
          scale: 0.8 
        })
        .to(piece, {
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1.5,
          delay: 0.2,
          zIndex: array.length - i,
        });
    }
  });
};

export const contactAni = () =>{
  const contactTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "bottom bottom",
    }
  })

  contactTimeline.add("contact", "+=0.5");

  gsap.utils.toArray(".contact-container p").forEach((selector, i) => {
    contactTimeline.fromTo(selector, {
      y: 40,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: i + 1
    }, "contact")
  })
}