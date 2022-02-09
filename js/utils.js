/* eslint-disable no-nested-ternary */
import{mainPinMarker, map} from './map.js';
// Генератор случайных чисел в диапазоне, исключает отрицательные значения, мин значение не должно быть больше макс
function getRandomPositiveInteger(min, max) {
  return (max < min) ? 'Ошибка: минимальное значение не должно быть больше максимального' : (min < 0 || max < 0) ?
    'Ошибка: нельзя использовать отрицательные значения':
    Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генератор случайных чисел с определенным количеством символов после запятой в диапазоне, исключает отрицательные значения, мин значение не должно быть больше макс
function getRandomPositiveFloat(min, max, symbols) {
  return (max < min) ? 'Ошибка: минимальное значение не должно быть больше максимального' : (min < 0 || max < 0) ?
    'Ошибка: нельзя использовать отрицательные значения':
    Number((Math.random() * (max - min) + min).toFixed(symbols));
}

// генератор массива со случайным количеством неповторяющихся элементов из другого массива
const getRandomArrayElement = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0],
);

const setDefaultOptions = function () {
  mainPinMarker.setLatLng({
    lat: 35.68212,
    lng: 139.73957,
  });
  map.setView({
    lat: 35.68212,
    lng: 139.73957,
  }, 12);

  document.querySelector('#housing-type').value = 'any';
  document.querySelector('#housing-price').value = 'any';
  document.querySelector('#housing-rooms').value = 'any';
  document.querySelector('#housing-guests').value = 'any';
  document.querySelector('#filter-wifi').checked = false;
  document.querySelector('#filter-dishwasher').checked = false;
  document.querySelector('#filter-parking').checked = false;
  document.querySelector('#filter-washer').checked = false;
  document.querySelector('#filter-elevator').checked = false;
  document.querySelector('#filter-conditioner').checked = false;

  document.querySelector('#title').value = '';
  document.querySelector('#address').value = '35.68212, 139.73957';
  document.querySelector('#type').value = 'flat';
  document.querySelector('#price').value = '';
  document.querySelector('#price').setAttribute('min', 1000);
  document.querySelector('#price').setAttribute('placeholder', 1000);
  document.querySelector('#timein').value = '12:00';
  document.querySelector('#timeout').value = '12:00';
  document.querySelector('#room_number').value = '1';
  document.querySelector('#capacity').value = '1';
  document.querySelector('#feature-wifi').checked = false;
  document.querySelector('#feature-dishwasher').checked = false;
  document.querySelector('#feature-parking').checked = false;
  document.querySelector('#feature-washer').checked = false;
  document.querySelector('#feature-elevator').checked = false;
  document.querySelector('#feature-conditioner').checked = false;
  document.querySelector('#description').value = '';
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  setDefaultOptions();
});

const showSuccess = () => {
  const successContainer = document.querySelector('#success').content.querySelector('.success');
  const copy = successContainer.cloneNode(true);
  document.body.append(copy);
  window.addEventListener('click', () => {
    copy.classList.add('hidden');
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      copy.classList.add('hidden');
    }
  });
  setDefaultOptions();
};

const showAlert = () => {
  const alertContainer = document.querySelector('#error').content.querySelector('.error');
  const copy = alertContainer.cloneNode(true);
  document.body.append(copy);
  document.body.append(copy);
  window.addEventListener('click', () => {
    copy.classList.add('hidden');
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      copy.classList.add('hidden');
    }
  });
};

export {showSuccess, showAlert, getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement};
