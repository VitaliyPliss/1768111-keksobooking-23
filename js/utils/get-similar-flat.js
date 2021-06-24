/* eslint-disable eqeqeq */
/* eslint-disable id-length */
import {similarFlat} from './get-flat.js';

const POPUP = document.querySelector('#map-canvas');
const TEMPLATE = document.querySelector('#card').content;
const NEW_OFFER = similarFlat();

NEW_OFFER.forEach((flat) => {
  //ищем элементы по классу
  const COPY = TEMPLATE.cloneNode(true);
  const TITLE = COPY.querySelector('.popup__title');
  const ADDRESS = COPY.querySelector('.popup__text--address');
  const PRICE = COPY.querySelector('.popup__text--price');
  const TYPE = COPY.querySelector('.popup__type');
  const CAPACITY = COPY.querySelector('.popup__text--capacity');
  const TIME = COPY.querySelector('.popup__text--time');
  const FEATURES = COPY.querySelector('.popup__features');
  const DESCRIPTION = COPY.querySelector('.popup__description');
  const PHOTOS = COPY.querySelector('.popup__photos');
  const PHOTO = COPY.querySelectorAll('.popup__photo');
  const AVATAR = COPY.querySelector('.popup__avatar');

  //присваеваем значения элементам
  TITLE.textContent = flat.offer.title;
  ADDRESS.textContent = flat.offer.address;
  PRICE.textContent = `${flat.offer.price  } ₽/ночь`;
  switch (flat.offer.type) {
    case 'flat':
      TYPE.textContent = 'Квартира';
      break;
    case 'bungalow':
      TYPE.textContent = 'Бунгало';
      break;
    case 'house':
      TYPE.textContent = 'Дом';
      break;
    case 'palace':
      TYPE.textContent = 'Дворец';
      break;
    case 'hotel':
      TYPE.textContent = 'Отель';
      break;
  }
  CAPACITY.textContent = `${flat.offer.rooms  } комнаты для ${  flat.offer.guests  } гостей`;
  TIME.textContent = `Заезд после ${  flat.offer.checkin  } выезд до ${  flat.offer.checkout}`;
  FEATURES.textContent = flat.offer.features;
  DESCRIPTION.textContent = flat.offer.description;
  AVATAR.src = flat.author.avatar;
  PHOTO[0].src = flat.offer.photos[0];
  for(let i = 1; i<flat.offer.photos.length; i++) {
    if(flat.offer.photos[i] !== undefined) {
      const PICTURE = document.createElement('img');
      PICTURE.classList.add('popup__photo');
      PICTURE.alt = 'Фотография жилья';
      PICTURE.width = '45';
      PICTURE.height = '40';
      PICTURE.src = flat.offer.photos[i];
      PHOTOS.appendChild(PICTURE);
    }
  }
  // Скрываем блоки при отсутствии информации
  const ELEMENTS = [TITLE, ADDRESS, PRICE, TYPE, CAPACITY, TIME, FEATURES, DESCRIPTION, AVATAR, PHOTOS];
  for(let i = 0; i<ELEMENTS.length; i++) {
    if(ELEMENTS[i].textContent === 0 || null || '' || undefined) {
      ELEMENTS[i].classList.add('hidden');
    }
  }
  POPUP.appendChild(COPY);
});

