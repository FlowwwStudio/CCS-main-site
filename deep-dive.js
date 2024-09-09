import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
document.addEventListener('DOMContentLoaded', function() {

  const mainWrapper = document.querySelector(".main-wrapper");
  const pageWrapper = document.querySelector(".page-wrapper");
  const triggers = ([
    trigger1,
    trigger2,
    trigger3,
    trigger4,
    trigger5,
    trigger6,
    trigger7,
    trigger8,
    trigger9,
    trigger10,
  ] = Array.from(document.querySelectorAll("[fs-deep-dive-id^='trigger-']")));
  const openButtons = ([
    openButton1,
    openButton2,
    openButton3,
    openButton4,
    openButton5,
    openButton6,
    openButton7,
    openButton8,
    openButton9,
    openButton10,
  ] = Array.from(document.querySelectorAll("[fs-deep-dive-id^='button-']")));
  const closeButton = document.querySelectorAll(
    "[fs-deep-dive-id='close-button']"
  );
  const ddModals = document.querySelectorAll("[fs-deep-dive-id='modals']");
  const deepDiveContainers = document.querySelectorAll(".deep-dive-container");
  const contentX = document.querySelectorAll(".deep-dive-content-x");
  const deepDiveContents = document.querySelectorAll(".deep-dive-content");

  let originalY = null;
  let windowWidth = window.innerWidth;
  const openingDuration = 0.8;
  const closingDuration = 0.8;
  let scrollTriggerInstance;

  gsap.set(deepDiveContainers, { x: 0, xPercent: 105 });
  gsap.set(deepDiveContents, { x: 0, xPercent: 105, opacity: 0 });

  function openDeepDive(trigger, button) {
    const container = trigger.closest(".deep-dive-container");
    const deepDiveContent = container.querySelector(".deep-dive-content");
    const scrollWrapper = container.querySelector(".scrolling-content");
    const contentY = container.querySelector(".deep-dive-content-y");
    const contentX = container.querySelector(".deep-dive-content-x");
    let children = scrollWrapper.children;
    let totalWidth = 0;

    deepDiveContainers.forEach((container) => {
      if (container !== trigger.closest(".deep-dive-container")) {
        container.style.position = "absolute";
      }
    });

    for (let i = 0; i < children.length; i++) {
      totalWidth += children[i].clientWidth;
    }
    gsap.set(contentY, { height: totalWidth });

    if (totalWidth < windowWidth) {
      let movement = 0;
      gsap.to(contentX, {
        x: movement,
        ease: "none",
        scrollTrigger: {
          trigger: contentY,
          scrub: 0.1,
          markers: false,
          start: "top top",
          end: "bottom top",
        },
      });
    } else {
      let movement = (totalWidth / windowWidth) * 100;
      let tl = gsap.timeline();

      gsap.set(contentX, { x: 0 });

      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill(); // Remove the previous scrollTrigger instance
      }

      scrollTriggerInstance = ScrollTrigger.create({
        trigger: pageWrapper,
        scrub: true,
        markers: true,
        start: "top top",
        end: "+=" + movement * 1.1 + "%",
        onUpdate: (self) => {
          gsap.set(contentX, { xPercent: -movement * self.progress });
        },
      });
    }
    const open = gsap.timeline({ ease: "power3.inOut" });
    open
      .to(container, {
        xPercent: 0,
        zIndex: "2",
        pointerEvents: "auto",
        duration: openingDuration,
      })
      .to(
        mainWrapper,
        {
          xPercent: -105,
          duration: openingDuration,
        },
        "<"
      )
      .to(
        deepDiveContent,
        {
          xPercent: 0,
          duration: openingDuration * 1.25,
        },
        "-= 0.15"
      )
      .to(
        window,
        {
          scrollTo: 0,
          duration: 0,
          ease: "none",
        },
        "<=+" + openingDuration * 0.95
      )
      .to(
        deepDiveContent,
        {
          opacity: 1,
          duration: openingDuration,
        },
        "<=+ 0.25"
      )
      .to(
        deepDiveContent,
        {
          opacity: 1,
          duration: openingDuration,
        },
        "<"
      )
      .to(ddModals, {
        pointerEvents: "auto",
      });
    button.addEventListener("click", function () {
      trigger.click();
    });
  }

  openButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      openDeepDive(triggers[index], button);
      originalY =
        this.closest("section").getBoundingClientRect().top +
        window.pageYOffset;
      gsap.to(mainWrapper, {
        position: "fixed",
        marginTop: -originalY,
        duration: 0,
        delay: openingDuration,
        ease: "none",
      });
    });
  });

  closeButton.forEach((button) => {
    button.addEventListener("click", function () {
      const close = gsap.timeline({ ease: "power1.inOut" });
      const container = this.closest(".deep-dive-container");
      const deepDiveContent = container.querySelector(".deep-dive-content");

      close
        .to(contentX, {
          xPercent: 0,
          duration: closingDuration,
        })
        .to(
          deepDiveContent,
          {
            opacity: 0,
            duration: closingDuration,
          },
          "<=+ 0.25"
        )
        .to(
          container,
          {
            xPercent: 105,
            pointerEvents: "none",
            duration: closingDuration,
          },
          "<"
        )
        .to(
          mainWrapper,
          {
            position: "static",
            marginTop: 0,
            duration: 0,
          },
          "<"
        )
        .to(
          ddModals,
          {
            pointerEvents: "none",
          },
          "<"
        )
        .to(
          mainWrapper,
          {
            xPercent: 0,
            duration: closingDuration,
          },
          "<"
        )
        .to(
          window,
          {
            duration: 0,
            scrollTo: originalY,
            ease: "none",
          },
          "-=" + (closingDuration - 0.15)
        );
    });
  });
});
