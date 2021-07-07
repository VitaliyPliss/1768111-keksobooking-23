/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable id-length */
import {similarFlat} from './flat-creating.js';

const popup = document.querySelector('#map-canvas');
const template = document.querySelector('#card').content;
const NEW_OFFER = similarFlat();
const FIRST_OFFER = NEW_OFFER[0];
const createNewOffer = function (flat){
  //ищем элементы по классу
  const copy = template.cloneNode(true);
  const title = copy.querySelector('.popup__title');
  const address = copy.querySelector('.popup__text--address');
  const price = copy.querySelector('.popup__text--price');
  const type = copy.querySelector('.popup__type');
  const capacity = copy.querySelector('.popup__text--capacity');
  const time = copy.querySelector('.popup__text--time');
  const features = copy.querySelector('.popup__features');
  const feature = copy.querySelectorAll('.popup__feature');
  const description = copy.querySelector('.popup__description');
  const photos = copy.querySelector('.popup__photos');
  const photo = copy.querySelectorAll('.popup__photo');
  const avatar = copy.querySelector('.popup__avatar');

  //присваеваем значения элементам
  title.textContent = flat.offer.title;
  address.textContent = flat.offer.address;
  price.textContent = `${flat.offer.price  } ₽/ночь`;
  switch (flat.offer.type) {
    case 'flat':
      type.textContent = 'Квартира';
      break;
    case 'bungalow':
      type.textContent = 'Бунгало';
      break;
    case 'house':
      type.textContent = 'Дом';
      break;
    case 'palace':
      type.textContent = 'Дворец';
      break;
    case 'hotel':
      type.textContent = 'Отель';
      break;
  }
  capacity.textContent = `${flat.offer.rooms  } комнаты для ${  flat.offer.guests  } гостей`;
  time.textContent = `Заезд после ${  flat.offer.checkin  } выезд до ${  flat.offer.checkout}`;
  for (let i = 0; i<flat.offer.features.length; i++) {
    if (flat.offer.features[i] !== 'wifi') {
      feature[i].classList.remove('popup__feature');
      feature[i].classList.remove('popup__feature--wifi');
    }
    if (flat.offer.features[i] !== 'parking') {
      feature[i].classList.remove('popup__feature');
      feature[i].classList.remove('popup__feature--parking');
    }
    if (flat.offer.features[i] !== 'dishwasher' ) {
      feature[i].classList.remove('popup__feature');
      feature[i].classList.remove('popup__feature--dishwasher');
    }
    if (flat.offer.features[i] !== 'washer' ) {
      feature[i].classList.remove('popup__feature');
      feature[i].classList.remove('popup__feature--washer');
    }
    if (flat.offer.features[i] !== 'elevator') {
      feature[i].classList.remove('popup__feature');
      feature[i].classList.remove('popup__feature--elevator');
    }
    if (flat.offer.features[i] !== 'conditioner') {
      feature[i].classList.remove('popup__feature');
      feature[i].classList.remove('popup__feature--conditioner');
    }
  }
  description.textContent = flat.offer.description;
  avatar.src = flat.author.avatar;
  photo[0].src = flat.offer.photos[0];
  for(let i = 1; i<flat.offer.photos.length; i++) {
    if(flat.offer.photos[i] !== undefined) {
      const PICTURE = document.createElement('img');
      PICTURE.classList.add('popup__photo');
      PICTURE.alt = 'Фотография жилья';
      PICTURE.width = '45';
      PICTURE.height = '40';
      PICTURE.src = flat.offer.photos[i];
      photos.appendChild(PICTURE);
    }
  }

  // Скрываем блоки при отсутствии информации
  const ELEMENTS = [title, address, price, type, capacity, time, features, description, avatar, photos];
  for(let i = 0; i<ELEMENTS.length; i++) {
    if(ELEMENTS[i].textContent === 0 || null || '' || undefined) {
      ELEMENTS[i].classList.add('hidden');
    }
  }
  return copy;
};

export{NEW_OFFER};
export {createNewOffer};
