(function () {

  // Бургер

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }

  }

  // Модалка "Узнать подробнее"

  const modal = document.querySelector('.modal-about')
  const modalButton = document.querySelector('.hero__button-about')

  modalButton.addEventListener('click', openModalAbout)
  modal.addEventListener('click', closeModalAbout)

  function openModalAbout(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal-about')
  }

  function closeModalAbout(e) {
    // e.preventDefault()

    const target = e.target

    if (target.closest('.modal-cancel') || target.classList.contains('modal-about__button')) {
      document.body.classList.remove('body--opened-modal-about')
    }
  }

  // Модалка "Рассчитать стоимость"

  const modalCalc = document.querySelector('.modal-calculator')
  const modalButtonCalc = document.querySelector('.hero__button-price')

  modalButtonCalc.addEventListener('click', openModalCalc)
  modalCalc.addEventListener('click', closeModalCalc)

  function openModalCalc(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal-calc')
  }

  function closeModalCalc(e) {
    // e.preventDefault()

    const target = e.target

    if (target.closest('.modal-cancel') || target.classList.contains('modal-calculator')) {
      document.body.classList.remove('body--opened-modal-calc')
    }
  }
  // Модалка "Контактные данные"

  const modalContact = document.querySelector('.modal-contact')
  const modalButtonContact = document.querySelector('.modal-calculator__button')

  modalButtonContact.addEventListener('click', openModalContact)
  modalContact.addEventListener('click', closeModalContact)

  function openModalContact(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal-contact')
    document.body.classList.remove('body--opened-modal-calc')
  }

  function closeModalContact(e) {
    // e.preventDefault()

    const target = e.target

    if (target.closest('.modal-cancel') || target.classList.contains('modal-contact')) {
      document.body.classList.remove('body--opened-modal-contact')
    }
  }

  // Модалка "Спасибо"

  const modalThanks = document.querySelector('.modal-thanks')
  const modalButtonThanks = document.querySelector('.modal-contact__button')

  modalButtonThanks.addEventListener('click', openModalThanks)
  modalThanks.addEventListener('click', closeModalThanks)

  function openModalThanks(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal-thanks')
    document.body.classList.remove('body--opened-modal-contact')
  }

  function closeModalThanks(e) {
    // e.preventDefault()

    const target = e.target

    if (target.closest('.modal-cancel') || target.classList.contains('modal-thanks__button')) {
      document.body.classList.remove('body--opened-modal-thanks')
    }
  }

  // Маска для телефона

  const telInputs = document.querySelectorAll('input[type="tel"]')

  // telInputs.forEach(el => console.log(el))

  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInputs)

})()
