/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement} from './utils.js';

const FLAT_TITLES = ['Уютное место','Ламповая обстановка','Хороший вид'];
const FLAT_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const SIMILAR_FLAT_COUNT = 10;

const getLocationLat = () => getRandomPositiveFloat(35.65, 35.7, 5);
const getLocationLng = () => getRandomPositiveFloat(139.7, 139.8, 5);

const createFlat = () => {
  const ADDRESS_LAT = getLocationLat();
  const ADDRESS_LNG = getLocationLng();
  return({
    author: {
      avatar: ((getRandomPositiveInteger(1,10) >= 10) ?
        ('img/avatars/user10.png')
        :
        (`img/avatars/user0${getRandomPositiveInteger(1,9)}.png`)),
    },
    offer:{
      title: FLAT_TITLES[getRandomPositiveInteger(0,2)],
      address: (`${ADDRESS_LAT}, ${ADDRESS_LNG}`),
      price: getRandomPositiveInteger(5000,10000),
      type: FLAT_TYPES[getRandomPositiveInteger(0,4)],
      rooms: getRandomPositiveInteger(1,5),
      guests: getRandomPositiveInteger(3,15),
      checkin: CHECK_TIMES[getRandomPositiveInteger(0,2)],
      checkout: CHECK_TIMES[getRandomPositiveInteger(0,2)],
      features: getRandomArrayElement(FEATURES, 6),
      description: 'example of description',
      photos: getRandomArrayElement(PHOTOS, 3),
    },
    location: {
      lat: ADDRESS_LAT,
      lng: ADDRESS_LNG,
    },
  });};

const createSimilarFlat = () => new Array(SIMILAR_FLAT_COUNT).fill(null).map(() => createFlat());

export {createFlat};
