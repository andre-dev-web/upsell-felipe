document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  new Swiper(".tranding-slider", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
    loop: true,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
});