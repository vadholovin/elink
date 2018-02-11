$(document).ready(function() {
  $('.portfolio-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    image: {
      titleSrc: 'title'
    }
  });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayTimeout: 5000,
  });
});


/* NAVIGATION */
(function() {
  const nav = document.querySelector('.nav'),
        navList = document.querySelector('.nav-list-hide'),
        navHamburger = document.querySelector('.nav-hamburger');

  navHamburger.addEventListener('click', function() {
    setTimeout(function() {
      navList.classList.toggle('is-hidden');
    }, 150);
  });

  navList.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-list-hide__item')) {
      setTimeout(function() {
        navList.classList.add('is-hidden');
      }, 50);
    }
  });
})();

/* SELECT LIST FOR INPUT */
(function() {
  const select = document.querySelector('.service-select'),
        selectInput = document.querySelector('#service'),
        container = document.querySelector('#input-wrapper');

  container.addEventListener('click', function() {
    setTimeout(function () {
      select.classList.toggle('is-hidden');
    }, 100);
    
  });

  select.addEventListener('click', function(e) {
    selectInput.value = e.target.textContent;
  });

  window.addEventListener('click', function(e) {
    if (e.target != select) {
      if (!select.classList.contains('is-hidden')) {
        setTimeout(function () {
          select.classList.add('is-hidden');
        }, 100);
      }
    }
  });
})();


/* SHOW/HIDE MODAL FORM */
(function() {
  const btn1 = document.querySelector('#contact-btn-1'),
        btn2 = document.querySelector('#contact-btn-2'),
        btn3 = document.querySelector('#contact-btn-3'),
        btn4 = document.querySelector('#contact-btn-4'),
        btn5 = document.querySelector('#contact-btn-5'),
        btn6 = document.querySelector('#contact-btn-6'),
        btn7 = document.querySelector('#contact-btn-7'),
        btn8 = document.querySelector('#contact-btn-8'),
        form = document.querySelector('.modal-form'),
        background = document.querySelector('.modal-form .modal-background'),
        closeBtn = document.querySelector('.modal-form .modal-content__close');

  btn1.addEventListener('click', openForm);
  btn2.addEventListener('click', openForm);
  btn3.addEventListener('click', openForm);
  btn4.addEventListener('click', openForm);
  btn5.addEventListener('click', openForm);
  btn6.addEventListener('click', openForm);
  btn7.addEventListener('click', openForm);
  btn8.addEventListener('click', openForm);

  background.addEventListener('click', hideModalBox);
  closeBtn.addEventListener('click', hideModalBox);

  function openForm(e)  {
    e.preventDefault();
    form.classList.remove('is-hidden');
  }

  function hideModalBox() {
    form.classList.add('is-hidden');
  }

})();


/* SHOW/HIDE MODAL BOX */
(function() {
  const modalBox = document.querySelector('.modal-box'),
        background = document.querySelector('.modal-background'),
        closeBtn = document.querySelector('.modal-content__close');

  background.addEventListener('click', hideModalBox);

  closeBtn.addEventListener('click', hideModalBox);

  function hideModalBox() {
    modalBox.classList.add('is-hidden');
  }
})();

/* SHOW/HIDE MODAL CALCULATOR */
(function() {
  const modalCalc = document.querySelector('.modal-calc'),
        background = document.querySelector('.modal-calc .modal-background'),
        openBtn = document.querySelector('#calc-trigger'),
        closeBtn1 = document.querySelector('.modal-calc .modal-content__close'),
        closeBtn2 = document.querySelector('#calc-btn');

  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modalCalc.classList.remove('is-hidden');
  });

  background.addEventListener('click', hideModalCalc);
  closeBtn1.addEventListener('click', hideModalCalc);
  closeBtn2.addEventListener('click', hideModalCalc);
  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 27 && !modalCalc.classList.contains('is-hidden')) {
      modalCalc.classList.add('is-hidden');
    }
  });

  function hideModalCalc() {
    modalCalc.classList.add('is-hidden');
  }
})();


$(document).ready(function() {
  $(".nav-item, .nav-list-hide__item, .to-id").mPageScroll2id();
});