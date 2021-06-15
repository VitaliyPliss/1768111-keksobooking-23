/* eslint-disable no-nested-ternary */

// Генератор случайных чисел в диапазоне, исключает отрицательные значения, мин значение не должно быть больше макс
function getRandomNumber(min, max) {
  return (max < min) ? 'Ошибка: минимальное значение не должно быть больше максимального' : (min < 0 || max < 0) ?
    'Ошибка: нельзя использовать отрицательные значения':
    Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(1,2);

export{getRandomNumber};
