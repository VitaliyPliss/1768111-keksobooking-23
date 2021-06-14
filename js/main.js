/* eslint-disable no-nested-ternary */

// Генератор случайных чисел в диапазоне, исключает отрицательные значения, мин значение не должно быть больше макс
function getRandomNumber(min, max) {
  return (max < min) ? 'Ошибка: минимальное значение не должно быть больше максимального' : (min < 0 || max < 0) ?
    'Ошибка: нельзя использовать отрицательные значения':
    Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генератор случайных чисел с определенным количеством символов после запятой в диапазоне, исключает отрицательные значения, мин значение не должно быть больше макс
function getRandomFloat(min, max, symbols) {
  return (max < min) ? 'Ошибка: минимальное значение не должно быть больше максимального' : (min < 0 || max < 0) ?
    'Ошибка: нельзя использовать отрицательные значения':
    Number((Math.random() * (max - min) + min).toFixed(symbols));
}

getRandomNumber(1,2);
getRandomFloat(1,2,3);

const FLAT_TITLES = ['Уютное место','Ламповая обстановка','Хороший вид'];
const FLAT_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const SIMILAR_FLAT_COUNT = 10;

const LOCATION_LAT = () => getRandomFloat(35.65, 35.7, 5);
const LOCATION_LNG = () => getRandomFloat(139.7, 139.8, 5);

// генератор массива со случайным количеством неповторяющихся элементов из другого массива
const getArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0],
);

const createFlat = () => {
  const ADDRESS_LAT = LOCATION_LAT();
  const ADDRESS_LNG = LOCATION_LNG();
  return({
    author: {
      avatar: ((getRandomNumber(1,10) >= 10) ?
        ('img/avatars/user10.png')
        :
        (`img/avatars/user0${getRandomNumber(1,9)}.png`)),
    },
    offer:{
      title: FLAT_TITLES[getRandomNumber(0,2)],
      address: (`${ADDRESS_LAT}, ${ADDRESS_LNG}`),
      price: getRandomNumber(5000,10000),
      type: FLAT_TYPES[getRandomNumber(0,4)],
      rooms: getRandomNumber(1,5),
      guests: getRandomNumber(3,15),
      checkin: CHECK_TIMES[getRandomNumber(0,2)],
      checkout: CHECK_TIMES[getRandomNumber(0,2)],
      features: getArr(FEATURES, 6),
      description: 'description',
      photos: getArr(PHOTOS, 3),
    },
    location: {
      lat: ADDRESS_LAT,
      lng: ADDRESS_LNG,
    },
  });};

const similarFlat = new Array(SIMILAR_FLAT_COUNT).fill(null).map(() => createFlat());
// eslint-disable-next-line no-console
console.log(similarFlat);
