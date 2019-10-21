(function () {
  let mainBlock = document.querySelector(`.main-section`);

  if (!mainBlock) {
    return;
  }

  let menu = mainBlock.querySelector(`.main-section__list`);
  let menuActiveBlock = mainBlock.querySelector(`.main-section__list li.active`);

  // Уведение мыши с блока меню
  function onMenuBlockOut(e) {
    let target = e.target;

    if (target != menuActiveBlock) {
      target.classList.remove(`active`);
    }
  }

  // Наведение на блок меню
  function onMenuBlockHover(e) {
    let target = e.target;
    let menuBlock = target.closest(`li`);

    if (target = target.closest(`.main-section__block`)) {
      menuBlock.classList.add(`active`);
      menuBlock.addEventListener(`mouseleave`, onMenuBlockOut);
    }
  }

  // Клик на блок меню
  function onMenuBlockClick(e) {
    let target = e.target;

    if (target = target.closest(`.main-section__block`)) {
      menuActiveBlock.classList.remove(`active`);
      target.closest(`li`).classList.add(`active`);
      menuActiveBlock = target.closest(`li`); 
    }

    menuActiveBlock.removeEventListener(`mouseleave`, onMenuBlockOut);
  }

  // Ресайз
  function addHover() {
    if (window.matchMedia(`(min-width: 768px)`).matches) {
      menu.addEventListener(`mouseover`, onMenuBlockHover, true);
    }
  }

  addHover();

  // Обработчики событий
  window.addEventListener(`resize`, addHover);
  menu.addEventListener(`click`, onMenuBlockClick, true);

})();
