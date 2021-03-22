document.addEventListener('DOMContentLoaded', function(){
  const width = document.documentElement.clientWidth
  if (width >= 768){
    const slides = document.querySelectorAll('.opps__item')
    for (let elem of slides){
      elem.classList.remove('swiper-slide')
    }
    return
  }
  const oppsSlider = new Swiper('.opps__slider', {
    loop: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  })
})