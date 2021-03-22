document.addEventListener('DOMContentLoaded', function(){
  const popupOpenButtons = document.querySelectorAll('.btn_popup')
  
  const closeButtons = document.querySelectorAll('.btn_close')
  for (let button of popupOpenButtons){
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const target = button.dataset.target
      const licenceOpen = new Event('licence')
      if (document.querySelector('.popup_visible')){
        popupClose()
      }
      popupOpen(target)
      if (target === '#licence'){
        this.dispatchEvent(licenceOpen)
      }
      if (target === '#policy'){
        document.querySelector(target).classList.add('popup_wide')
        document.querySelector('iframe').style.height = '700px'
      }
    })
  }
  for (let closeButton of closeButtons){
    closeButton.addEventListener('click', popupClose)
  }
  
  mask.addEventListener('click', popupClose)
})

function popupOpen(target){
  const elem = document.querySelector(target)
  elem.classList.add('popup_visible')
  mask.classList.add('mask_visible') 
}
function popupClose(){
  const popup = document.querySelector('.popup_visible')
  popup.classList.remove('popup_visible')
  mask.classList.remove('mask_visible')
}