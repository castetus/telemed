document.addEventListener('DOMContentLoaded', function(){
  const url = window.location.origin + '/mailer.php'
  const forms = document.querySelectorAll('.form')
  for (let form of forms){
    const sendButton = form.querySelector('input[type="submit"]')
    sendButton.addEventListener('click', function(e){
      e.preventDefault()
      sendForm(form)
    })
  }
  async function sendForm(form){
    const fields = form.querySelectorAll('.form__field_required')
    const formData = new FormData()
    formData.append('formType', 'consult')
    for (let field of fields){
      field.addEventListener('focus', function(){
        field.parentNode.classList.remove('form__field_error')
      })
      let valid = validate(field)
      if (!valid){
        field.parentNode.classList.add('form__field_error')
        return
      }
      formData.append(field.name, field.value)
    }
    if (document.querySelector('.popup_visible')){
      popupClose()
    }
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      })
      const result = await response.text()
      if (result === 'sent'){
        popupOpen('#thankyou')
        setTimeout(() => {
          popupClose()
        }, 2000);
      } else {
        popupOpen('#error')
      }
    } catch (error) {
      console.log(error)
    }
  }
  function validate(field){
    let fieldName = field.name 
    const reg = /^\+?\d{11,11}$/
    switch (fieldName){
      case 'name':
        if (field.value === '' || field.value.length < 2){
          return false
        }
      break
      case 'phone':
        if (!reg.test(field.value)){
          return false
        }
      break
      case 'agreement': 
        if (!field.checked){
          return false
        }
      break
    } 
    return true
  }
})