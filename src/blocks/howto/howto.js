document.addEventListener('DOMContentLoaded', function(){
  setTimeout(() => {
    const howtoSlider = new Swiper('.howto', {
    loop: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  })
  }, 1000);
})