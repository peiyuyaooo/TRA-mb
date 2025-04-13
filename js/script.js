 new Swiper('.info-card-container', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination Bullets
    pagination: {
      el: '.swiper-pagination',
       clickable: true,
      //  dynamicBullets: true, 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
  }); 


  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('active');
    document.querySelector('.main-menu2').classList.toggle('active');
});