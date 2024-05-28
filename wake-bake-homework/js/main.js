(function () {

  // Бургер

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    // console.log(document.documentElement.clientWidth)
    if (!burgerIcon && !burgerNavLink) return

    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else { document.body.classList.remove('body--opened-menu') }

  }

  // Модалка

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.about__img-button')

  modal.addEventListener('click', closeModal)
  modalButton.addEventListener('click', openModal)

  function openModal(e) {
    e.preventDefault()

    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal')
    }
  }

  // Табы

  const tabControls = document.querySelector('.tab-controls')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return

    e.preventDefault()

    if (tabControl.classList.contains('tab-controls__link--active')) return

    // console.log('Сработало')

    const tabContentID = tabControl.getAttribute('href')

    // console.log(tabContentID)

    const tabContent = document.querySelector(tabContentID)
    const contentActive = document.querySelector('.tab-content--show')
    const controlActive = document.querySelector('.tab-controls__link--active')

    if (controlActive)
    controlActive.classList.remove('tab-controls__link--active')

    if (contentActive)
    contentActive.classList.remove('tab-content--show')
    
    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
    
  }

})()

