document.addEventListener('DOMContentLoaded', function(){
  let width = window.innerWidth
  if (width <= 575){
      countSlides = 1
  } else if (width > 575 && width <= 768){
      countSlides = 2
  } else {
      countSlides = 3
  }
  const specsSlider = new Swiper('.specs', {
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    slidesPerView: countSlides,
    spaceBetween: 30,
    loop: true
  })
})