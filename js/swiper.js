var swiper = new Swiper(".mySwiper", {
  loop: true, // Sonsuz loop üçün
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Pagination düymələri kliklənsin
  },
  autoplay: {
    delay: 3000, // 3 saniyədən bir avtomatik keçsin
    disableOnInteraction: false, // İstifadəçi müdaxilə etsə də autoplay işləsin
  },
  mousewheel: {
    invert: false, // Təbii sürüşdürmə effekti üçün
  },
  keyboard: {
    enabled: true, // Klaviatura ilə idarə olunsun
  },
  grabCursor: true, // İstifadəçi siçanla tutub sürüşdürə bilsin
});

