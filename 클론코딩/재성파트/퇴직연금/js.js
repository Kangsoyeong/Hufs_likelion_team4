    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
	  autoplay: {
        delay: 5000,//�ð�����
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
    });