document.addEventListener('DOMContentLoaded', function(){
  const titles = document.querySelectorAll('.faq__title')
  for (let title of titles){
    title.addEventListener('click', function(){

      if (title.classList.contains('faq__title_active')){
        title.classList.remove('faq__title_active')
        title.nextElementSibling.classList.remove('faq__content_active')
      } else {
        for (let elem of titles){
          elem.classList.remove('faq__title_active')
          elem.nextElementSibling.classList.remove('faq__content_active')
        }
        title.classList.add('faq__title_active')
        title.nextElementSibling.classList.add('faq__content_active')
      }
    })
  }
})