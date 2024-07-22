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

  // Автоматический рассчет высоты .header для margin-top .main__hero

  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const mainHero = document.querySelector('.main__hero');

    if (header && mainHero) {
      const headerHeight = header.offsetHeight;
      mainHero.style.marginTop = `${headerHeight}px`;
    }
  });

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

  // Табы секции discount

  const tabControls = document.querySelector('.tab-controls')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()

    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)

    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl)
      activeControl.classList.remove('tab-controls__link--active')

    if (activeContent)
      activeContent.classList.remove('tab-content--show')

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
  }

  // Табы секции program

  const tabProgram = document.querySelector('.tab-program')

  tabProgram.addEventListener('click', toggleTabs)

  function toggleTabs(e) {

    const tabProgramLink = e.target.closest('.tab-program__link')

    if (!tabProgramLink) return
    e.preventDefault()

    if (tabProgramLink.classList.contains('tab-program__link--active')) return

    const ProgramTabContentID = tabProgramLink.getAttribute('href')
    const ProgramTabContent = document.querySelector(ProgramTabContentID)

    const activeProgram = document.querySelector('.tab-program__link--active')
    const activeContentProgram = document.querySelector('.program-content--show')

    if (activeProgram)
      activeProgram.classList.remove('tab-program__link--active')

    if (activeContentProgram)
      activeContentProgram.classList.remove('program-content--show')

    tabProgramLink.classList.add('tab-program__link--active')
    ProgramTabContent.classList.add('program-content--show')
  }

  
  // Табы inside внутри табов секции program

  const tabInsideLinks = document.querySelectorAll('.tab-inside__link[data="tab_listin_1"], .tab-inside__link[data="tab_listin_2"], .tab-inside__link[data="tab_listin_3"], .tab-inside__link[data="tab_listin_4"], .tab-inside__link[data="tab_listin_5"]');

  tabInsideLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      tabInsideLinks.forEach(item => {
        item.classList.remove('tab-inside__link--active');
      });

      link.classList.add('tab-inside__link--active');

      const contentId = link.getAttribute('href');

      const allContent = document.querySelectorAll('.inside__tab-content');
      allContent.forEach(content => {
        content.classList.remove('inside-content--show');
      });

      const targetContent = document.querySelector(contentId);
      targetContent.classList.add('inside-content--show');
    });
  });

  //Слайдер секции "Акции"

  const swiperDiscount = new Swiper('.discount__slider', {

    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {
      el: '.discount__pagination',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.discount__next',
      prevEl: '.discount__prev',
    },

    breakpoints: {
      101: {
        slidesPerView: 1,
      },
      451: {
        slidesPerView: 1.5,
      },
      601: {
        slidesPerView: 2,
      },
      901: {
        slidesPerView: 2.5,
      },

      1001: {
        slidesPerView: 3,
      },

      1101: {
        spaceBetween: 30,
      }
    }

  });

  //Слайдер секции "Все, что нужно..."

  const swiperAllYouNeed = new Swiper('.allyouneed__slider', {

    slidesPerView: 1,
    
    pagination: {
      el: '.allyouneed__pagination',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.allyouneed__next',
      prevEl: '.allyouneed__prev',
    },

  });


  // Маска для телефона

  const telInputs = document.querySelectorAll('input[type="tel"]')

  // telInputs.forEach(el => console.log(el))

  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInputs)

})()
