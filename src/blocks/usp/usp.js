document.addEventListener('DOMContentLoaded', function(){
  let width = window.innerWidth
  if (width <= 575){
      countSlides = 1
  } else if (width > 575 && width <= 768){
      countSlides = 2
  } else if (width > 768 && width < 1024){
      countSlides = 3
  } else {
      countSlides = 4
  }
  const uspSlider = new Swiper('.usp', {
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    slidesPerView: countSlides,
    spaceBetween: 30,
    loop: true
  })
})