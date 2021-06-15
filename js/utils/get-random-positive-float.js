/* eslint-disable no-nested-ternary */

// Генератор случайных чисел с определенным количеством символов после запятой в диапазоне, исключает отрицательные значения, мин значение не должно быть больше макс
function getRandomFloat(min, max, symbols) {
  return (max < min) ? 'Ошибка: минимальное значение не должно быть больше максимального' : (min < 0 || max < 0) ?
    'Ошибка: нельзя использовать отрицательные значения':
    Number((Math.random() * (max - min) + min).toFixed(symbols));
}

getRandomFloat(1,2,3);

export {getRandomFloat};
