/* eslint-disable no-nested-ternary */

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

getRandomPositiveInteger(1,2);
getRandomPositiveFloat(1,2);

export {getRandomPositiveInteger};
export {getRandomPositiveFloat};
