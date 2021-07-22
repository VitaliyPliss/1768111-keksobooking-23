/* eslint-disable eqeqeq */
/* eslint-disable id-length */
import { showAlert } from './utils.js';
import { sendData } from './data.js';

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


//валидация формы
const flatType = document.getElementById('type');
const price = document.getElementById('price');
price.setAttribute('min', 1000);

flatType.addEventListener('change', () => {
  if (flatType.value === 'bungalow') {
    price.setAttribute('min', 0);
    price.setAttribute('placeholder', 0);
  }
  if (flatType.value === 'flat') {
    price.setAttribute('min', 1000);
    price.setAttribute('placeholder', 1000);
  }
  if (flatType.value === 'hotel') {
    price.setAttribute('min', 3000);
    price.setAttribute('placeholder', 3000);
  }
  if (flatType.value === 'house') {
    price.setAttribute('min', 5000);
    price.setAttribute('placeholder', 5000);
  }
  if (flatType.value === 'palace') {
    price.setAttribute('min', 10000);
    price.setAttribute('placeholder', 10000);
  }
});

const address = document.getElementById('address');
address.value = '35.68212, 139.73957';

const timeIn = document.getElementById('timein');
const timeOut = document.getElementById('timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

const rooms = document.getElementById('room_number');
const quests = document.getElementById('capacity');

quests.children[0].setAttribute('disabled', 'disabled');
quests.children[1].setAttribute('disabled', 'disabled');
quests.children[3].setAttribute('disabled', 'disabled');

rooms.addEventListener('change', () => {
  if (rooms.value == 1) {
    quests.children[0].setAttribute('disabled', 'disabled');
    quests.children[1].setAttribute('disabled', 'disabled');
    quests.children[3].setAttribute('disabled', 'disabled');
    quests.value = 1;
  }
  if (rooms.value == 2) {
    quests.children[0].setAttribute('disabled', 'disabled');
    quests.children[1].removeAttribute('disabled', 'disabled');
    quests.children[3].setAttribute('disabled', 'disabled');
    quests.value = 2;
  }
  if (rooms.value == 3) {
    quests.children[0].removeAttribute('disabled', 'disabled');
    quests.children[1].removeAttribute('disabled', 'disabled');
    quests.children[3].setAttribute('disabled', 'disabled');
    quests.value = 3;
  }
  if (rooms.value == 100) {
    quests.children[0].setAttribute('disabled', 'disabled');
    quests.children[1].setAttribute('disabled', 'disabled');
    quests.children[2].setAttribute('disabled', 'disabled');
    quests.children[3].removeAttribute('disabled', 'disabled');
    quests.value = 0;
  }
});

const title = document.getElementById('title');

title.addEventListener('input', () => {
  const valueLength = title.value.length;

  if (valueLength < 30) {
    title.setCustomValidity(`Ещё ${  30 - valueLength } симв.`);
  } else if (valueLength > 100) {
    title.setCustomValidity(`Удалите лишние ${  valueLength - 100 } симв.`);
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
});

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showAlert(),
      new FormData(evt.target),
    );
  });
};
const offerType = document.querySelector('#housing-type');
const setOfferTypeClick = (cb) => {
  offerType.addEventListener('click', () => {
    cb();
  });
};
export {setUserFormSubmit};
export {getActiveState};
export {address};
export {setOfferTypeClick};
