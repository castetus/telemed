document.addEventListener('DOMContentLoaded', function(){
  const openButton = document.querySelector('#dropdown')
  const menu = document.querySelector('#menu')
  const mask = document.querySelector('#mask')
  const closeButton = document.querySelector('#close-menu')

  openButton.addEventListener('click', () => {
      menuOpen()
  })
  closeButton.addEventListener('click', () => {
      menuClose()
  })
  mask.addEventListener('click', () => {
      menuClose()
  })
  function menuOpen(){
      if (!menu.classList.contains('menu_visible')){
          menu.classList.remove('menu_hidden')
          menu.style.display = 'block'
          menu.classList.add('menu_visible')
          mask.classList.add('mask_visible')
      }
  }
  function menuClose(){
      if (menu.classList.contains('menu_visible')){
          menu.classList.add('menu_hidden')
          menu.classList.remove('menu_visible')
          mask.classList.remove('mask_visible')
          setTimeout(() => {
              menu.style.display = 'none'
          }, 400);
      }
  }
})
