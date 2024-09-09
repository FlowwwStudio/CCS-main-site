$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  const trigger = Array.from(
    document.querySelectorAll("[fs-video^='trigger']")
  );
  const playVideo = Array.from(document.querySelectorAll("[fs-video^='play']"));

  trigger.forEach((trigger) => {
    const scrubVideo = trigger.querySelector("[fs-video='scrub']");
    if (scrubVideo) {
      const durationAttr = scrubVideo.getAttribute("fs-duration");
      const duration = parseFloat(durationAttr) || 0;
      scrubVideo.currentTime = 0;
      gsap.fromTo(
        scrubVideo,
        {
          currentTime: 0,
        },
        {
          currentTime: duration,
          scrollTrigger: {
            trigger: trigger,
            start: "top 10%",
            end: "bottom 85%",
            markers: false,
            scrub: 0.1,
          },
        }
      );
    }
  });
  trigger.forEach((trigger) => {
    const scrubVideo = trigger.querySelector("[fs-video='scrub-special']");
    if (scrubVideo) {
      const durationAttr = scrubVideo.getAttribute("fs-duration");
      const duration = parseFloat(durationAttr) || 0;
      scrubVideo.currentTime = 0;
      gsap.fromTo(
        scrubVideo,
        {
          currentTime: 0,
        },
        {
          currentTime: duration,
          scrollTrigger: {
            trigger: trigger,
            start: "top 5%",
            end: "bottom 55%",
            markers: false,
            scrub: 0.1,
          },
        }
      );
    }
  });
  trigger.forEach((trigger) => {
    const scrubVideo = trigger.querySelector("[fs-video='scrub-small']");
    if (scrubVideo) {
      const durationAttr = scrubVideo.getAttribute("fs-duration");
      const duration = parseFloat(durationAttr) || 0;
      scrubVideo.currentTime = 0;
      gsap.fromTo(
        scrubVideo,
        {
          currentTime: 0,
        },
        {
          currentTime: duration,
          scrollTrigger: {
            trigger: trigger,
            start: "top 35%",
            end: "center 35%",
            markers: false,
            scrub: 0.1,
          },
        }
      );
    }
  });
  trigger.forEach((trigger) => {
    const scrubVideo = trigger.querySelector("[fs-video='scrub-pump1']");
    if (scrubVideo) {
      const durationAttr = scrubVideo.getAttribute("fs-duration");
      const duration = parseFloat(durationAttr) || 0;
      scrubVideo.currentTime = 0;
      gsap.fromTo(
        scrubVideo,
        {
          currentTime: 0,
        },
        {
          currentTime: duration,
          scrollTrigger: {
            trigger: trigger,
            start: "-20% 35%",
            end: "center 35%",
            markers: false,
            ease: Power1.easeInOut,
            scrub: 0.1,
          },
        }
      );
      gsap.fromTo(
        ".pump1_image-wrapper",
        {
          yPercent: 0,
        },
        {
          yPercent: 10,
          scrollTrigger: {
            trigger: trigger,
            start: "center center",
            end: "75% center",
            markers: false,
            ease: Power1.easeInOut,
            scrub: true,
          },
        }
      );
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  });

  playVideo.forEach((video) => {
    observer.observe(video);
  });
});
