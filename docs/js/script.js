window.onload = (function () {
  var navButton = document.querySelector(".main-nav__toggle");
  var menuItem = document.querySelectorAll(".main-nav__list");
  var menu = document.querySelector(".main-nav");
  var productBtn = document.querySelector(".product__btn");
  var modal = document.querySelector(".modal");
  var catalogBtn = document.querySelectorAll('.catalog__btn-cart');

  var slides = $(".reviews__slider .reviews__slides ").children(".reviews__slide"); // Получаем массив всех слайдов
  var width = $(".reviews__slider ").width(); // Получаем ширину видимой области
  var i = slides.length; // Получаем количество слайдов
  var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
  // уменьшаем кол-во слайдов на один ( для проверки в будущем )
  //i--;
  window.onresize = function (event) {
    width = $(".reviews__slider ").width(); // Получаем ширину видимой области
    i = slides.length; // Получаем количество слайдов
    offset = i * width;
    $(".reviews__slider .reviews__slides").css('width', offset); // Задаем блоку со слайдами ширину всех слайдов
    offset = 0;
  };


  if (menu.classList.contains('main-nav--no-js')) {
    menu.classList.remove('main-nav--no-js');
  }
  navButton.addEventListener("click", function (event) {
    event.preventDefault;
    if (navButton.classList.contains('main-nav__toggle--closed')) {
      navButton.classList.remove('main-nav__toggle--closed');
      for (var c = 0; c < menuItem.length; ++c) {
        menuItem[c].classList.remove('main-nav__list--closed');
      }
    } else {
      navButton.classList.add('main-nav__toggle--closed');
      for (var b = 0; b < menuItem.length; ++b) {
        menuItem[b].classList.add('main-nav__list--closed');
      }
    }
  })
  if (productBtn) {
    productBtn.addEventListener("click", function (e) {
      e.preventDefault;
      if (modal.classList.contains('modal--none')) {
        modal.classList.remove('modal--none');
      } else {
        modal.classList.add('modal--none');
      }
    })
  }
  if (catalogBtn) {
    for (var a = 0; a < catalogBtn.length; ++a) {
      catalogBtn[a].addEventListener("click", function (e) {
        e.preventDefault;
        if (modal.classList.contains('modal--none')) {
          modal.classList.remove('modal--none');
        } else {
          modal.classList.add('modal--none');
        }
      })
    }
  }

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (!modal.classList.contains("modal--none")) {
        modal.classList.add("modal--none");
      }
    }
  })

  $(".reviews__slider .reviews__slides").css('width', offset); // Задаем блоку со слайдами ширину всех слайдов
  offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
  $("body .reviews .reviews__btn-next").click(function () { // Событие клика на кнопку "следующий слайд"

    if (offset < width * (i - 1)) { // Проверяем, дошли ли мы до конца
      console.log(offset);
      offset += width; // Увеличиваем смещение до следующего слайда
      $(".reviews__slider .reviews__slides").css("transform", "translate3d(-" + offset + "px, 0px, 0px)"); // Смещаем блок со ми к следующему
    }
  });

  $("body .reviews .reviews__btn-prew").click(function () { // Событие клика на кнопку "предыдущий слайд"

    if (offset > 0) { // Проверяем, дошли ли мы до конца
      console.log(offset);
      offset -= width; // Уменьшаем смещение до предыдущего слайда
      $(".reviews__slider .reviews__slides").css("transform", "translate3d(-" + offset + "px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
    }
  });

});
