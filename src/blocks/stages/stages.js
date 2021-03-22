document.addEventListener('DOMContentLoaded', function(){
  const width = document.documentElement.clientWidth
  const stagesSlider = new Swiper('.stages', {
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  })
  const captions = document.querySelectorAll('.stages__caption')
  if (width >= 1024){
    for (let i = 0; i < captions.length; i++){
      captions[i].addEventListener('click', function(){
        removeActiveClass()
          let activeClassName = 'stages__caption_' + (i+1) + '_active'
          captions[i].classList.add(activeClassName)
          stagesSlider.slideTo(i, 1000)
        })
      } 
  } else {
    stagesSlider.on('activeIndexChange', function(){
      let index = stagesSlider.activeIndex
      console.log(index)
      removeActiveClass()
      let activeClassName = 'stages__caption_' + (index + 1) + '_active'
      captions[index].classList.add(activeClassName)
    })
  }
  function removeActiveClass(){
    for (let elem of captions){
      const classList = elem.classList
      for (let cl of classList){
          if (cl.indexOf('_active') !== -1){
            elem.classList.remove(cl)
          }
        }
      }
  }
})