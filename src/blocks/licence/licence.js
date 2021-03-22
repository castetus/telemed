document.addEventListener('licence', () => {
  const licenceSlider = new Swiper('.licence', {
    loop: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  })
})