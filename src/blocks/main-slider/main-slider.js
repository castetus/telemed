document.addEventListener('DOMContentLoaded', function(){
  const mainSlider = new Swiper('#main-slider', {
    loop: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet bullet',
      bulletActiveClass: 'bullet_active'
    },
    // autoplay: {
    //   delay: 5000,
    // },
  })
})