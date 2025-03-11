let  swiper = new Swiper(".mySwiper", {
  loop: true, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, 
  },
  mousewheel: {
    invert: false, 
  },
  keyboard: {
    enabled: true, 
  },
  grabCursor: true, 

  
});

let swiper2 = new Swiper(".slider2", {
  loop: true,
  navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
  
  pagination: {
          el: ".swiper-pagination",
          clickable: true,
  },
});

