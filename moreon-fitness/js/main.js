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

  //Слайдеры секции "Акции"

  const swiperAqua = new Swiper('.discount__slider--aqua', {

    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {
      el: '.discount__pagination--aqua',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.discount__next--aqua',
      prevEl: '.discount__prev--aqua',
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

  const swiperBaths = new Swiper('.discount__slider--baths', {

    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {
      el: '.discount__pagination--baths',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.discount__next--baths',
      prevEl: '.discount__prev--baths',
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

  const swiperSpa = new Swiper('.discount__slider--spa', {

    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {
      el: '.discount__pagination--spa',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.discount__next--spa',
      prevEl: '.discount__prev--spa',
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


  const swiperHolidays = new Swiper('.discount__slider--holidays', {

    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {
      el: '.discount__pagination--holidays',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.discount__next--holidays',
      prevEl: '.discount__prev--holidays',
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

  const swiperFitness = new Swiper('.discount__slider--fitness', {

    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {
      el: '.discount__pagination--fitness',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.discount__next--fitness',
      prevEl: '.discount__prev--fitness',
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

  const swiperBowling = new Swiper('.discount__slider--bowling', {

    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {
      el: '.discount__pagination--bowling',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.discount__next--bowling',
      prevEl: '.discount__prev--bowling',
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

  //Слайдеры секции "Все, что нужно..."

  const swiperSpaCenter = new Swiper('.allyouneed__slider--spacenter', {

    slidesPerView: 1,
    
    pagination: {
      el: '.allyouneed__pagination--spacenter',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.allyouneed__next--spacenter',
      prevEl: '.allyouneed__prev--spacenter',
    },

  });

  const swiperCafe = new Swiper('.allyouneed__slider--cafe', {

    slidesPerView: 1,
    
    pagination: {
      el: '.allyouneed__pagination--cafe',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.allyouneed__next--cafe',
      prevEl: '.allyouneed__prev--cafe',
    },

  });

  const swiperReception = new Swiper('.allyouneed__slider--reception', {

    slidesPerView: 1,
    
    pagination: {
      el: '.allyouneed__pagination--reception',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.allyouneed__next--reception',
      prevEl: '.allyouneed__prev--reception',
    },

  });

  const swiperSale = new Swiper('.allyouneed__slider--sale', {

    slidesPerView: 1,
    
    pagination: {
      el: '.allyouneed__pagination--sale',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.allyouneed__next--sale',
      prevEl: '.allyouneed__prev--sale',
    },

  });

  //Слайдер секции "Команда"

  const swiperTeam = new Swiper('.team__slider', {

    slidesPerView: 1,
    
    pagination: {
      el: '.team__pagination',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.team__next',
      prevEl: '.team__prev',
    },

  });


  // Маска для телефона

  const telInputs = document.querySelectorAll('input[type="tel"]')

  // telInputs.forEach(el => console.log(el))

  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInputs)

})()
