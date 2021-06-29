/* eslint-disable id-length */
const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.getElementsByTagName('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.getElementsByTagName('select');

const getInactiveState = function () {
  //скрываем форму заполнения
  adForm.classList.add('ad-form--disabled');
  for (let i = 0; i<adFormElements.length; i++) {
    adFormElements[i].setAttribute('disabled', 'disabled');
  }

  //скрываем фильтры карты
  mapFilters.classList.add('map__filters--disabled');
  for (let i = 0; i<mapFiltersElements.length; i++) {
    mapFiltersElements[i].setAttribute('disabled', 'disabled');
  }
};


const getActiveState = function () {
  //отображаем форму заполнения
  adForm.classList.remove('ad-form--disabled');
  for (let i = 0; i<adFormElements.length; i++) {
    adFormElements[i].removeAttribute('disabled', 'disabled');
  }

  //отображаем фильтры карты
  mapFilters.classList.remove('map__filters--disabled');
  for (let i = 0; i<mapFiltersElements.length; i++) {
    mapFiltersElements[i].removeAttribute('disabled', 'disabled');
  }
};

getInactiveState();
getActiveState();
