(function () {
  let catalog = document.querySelector(`.catalog`);

  if (!catalog) {
    return;
  }

  let filterBlock = catalog.querySelector(`.catalog__filter`);
  let activeFilter = filterBlock.querySelector(`.active`);
  let catalogGrid = catalog.querySelector(`.catalog__grid`);
  let catalogBlocks = catalog.querySelectorAll(`.catalog__grid li`);
  let tab;

  // Клик на кнопку фильтров
  function onFilterBtnClick(e) {
    let target = e.target;

    if (target = target.closest(`button`)) {
      activeFilter.classList.remove(`active`);
      activeFilter = target;
      target.classList.toggle(`active`);
      tab = target.getAttribute(`data-tab`);

      catalogGrid.classList.add(`hidden`);

      setTimeout(function () {
        catalogGrid.classList.remove(`hidden`);
      }, 500);


      for (let i = 0; i < catalogBlocks.length; i++) {
        let block = catalogBlocks[i];

        setTimeout(function () {
          block.classList.add(`hidden`);
        }, 100);

        if (Number(tab) === 0) {
          setTimeout(function () {
            block.classList.remove(`hidden`);
          }, 200);
        }

        if (block.getAttribute(`data-tab`) === tab) {
          setTimeout(function () {
            block.classList.remove(`hidden`);
          }, 200);
        }
      }
    }
  }

  // Скроллбар
  function getScrollBar() {
    if (window.matchMedia(`(max-width: 767px)`).matches) {
      return new window.SimpleBar(filterBlock);
    }
  }

  getScrollBar();

  // Клик на ссылку
  function onCatalogBlockClick(e) {
    let target = e.target;
    e.preventDefault();

    if (target = target.closest(`a`)) {
      target.classList.toggle(`active`);
    }
  }

  // Обработчики событий
  filterBlock.addEventListener(`click`, onFilterBtnClick, true);
  catalogGrid.addEventListener(`click`, onCatalogBlockClick, true);
  window.addEventListener(`resize`, getScrollBar);
})();
