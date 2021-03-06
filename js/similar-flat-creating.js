/* eslint-disable no-unused-vars */
/* eslint-disable id-length */

const template = document.querySelector('#card').content.querySelector('.popup');

const getOfferRank = (offer) => {
  const filterType = document.querySelector('#housing-type');
  const filterPrice = document.querySelector('#housing-price');
  const filterRooms = document.querySelector('#housing-rooms');
  const filterGuests = document.querySelector('#housing-guests');
  const filterWifi = document.querySelector('#filter-wifi');
  const filterDishwasher = document.querySelector('#filter-dishwasher');
  const filterParking = document.querySelector('#filter-parking');
  const filterWasher = document.querySelector('#filter-washer');
  const filterElevator = document.querySelector('#filter-elevator');
  const filterConditioner = document.querySelector('#filter-conditioner');

  const priceRange = {
    low: {
      start: 0,
      end: 10000,
    },
    middle: {
      start: 10000,
      end: 50000,
    },
    high: {
      start: 50000,
      end: 1000000,
    },
  };

  let rank = 0;

  const checkType = () => {
    if (filterType.value === 'any') { return; }
    if (offer.offer.type === filterType.value) {
      rank += 5;
    }
  };
  checkType();

  const checkPrice = () => {
    if (filterPrice.value === 'any') { return; }
    if ((offer.offer.price >= priceRange[filterPrice.value].start) && (offer.offer.price <= priceRange[filterPrice.value].end)) {
      rank += 4;
    }
  };
  checkPrice();

  const checkRooms = () => {
    if (filterRooms.value === 'any') { return; }
    if (offer.offer.rooms === +filterRooms.value) {
      rank += 3;
    }
  };
  checkRooms();

  const checkGuests = () => {
    if (filterGuests.value === 'any') { return; }
    if (offer.offer.guests === +filterGuests.value) {
      rank += 2;
    }
  };
  checkGuests();

  if (offer.offer.features && filterWifi.checked) {
    offer.offer.features.some((feature) => feature === filterWifi.value) ? rank += 1 : rank;
  }
  if (offer.offer.features && filterDishwasher.checked) {
    offer.offer.features.some((feature) => feature === filterDishwasher.value) ? rank += 1 : rank;
  }
  if (offer.offer.features && filterParking.checked) {
    offer.offer.features.some((feature) => feature === filterParking.value) ? rank += 1 : rank;
  }
  if (offer.offer.features && filterWasher.checked) {
    offer.offer.features.some((feature) => feature === filterWasher.value) ? rank += 1 : rank;
  }
  if (offer.offer.features && filterElevator.checked) {
    offer.offer.features.some((feature) => feature === filterElevator.value) ? rank += 1 : rank;
  }
  if (offer.offer.features && filterConditioner.checked) {
    offer.offer.features.some((feature) => feature === filterConditioner.value) ? rank += 1 : rank;
  }

  return rank;
};

const compareOffers = (offerA, offerB) => {
  const rankA = getOfferRank(offerA);
  const rankB = getOfferRank(offerB);
  return rankB - rankA;
};

const createNewOffer = function (flat) {
  //???????? ???????????????? ???? ????????????
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

  //?????????????????????? ???????????????? ??????????????????
  title.textContent = flat.offer.title;
  address.textContent = flat.offer.address;
  price.textContent = `${flat.offer.price} ???/????????`;
  switch (flat.offer.type) {
    case 'flat':
      type.textContent = '????????????????';
      break;
    case 'bungalow':
      type.textContent = '??????????????';
      break;
    case 'house':
      type.textContent = '??????';
      break;
    case 'palace':
      type.textContent = '????????????';
      break;
    case 'hotel':
      type.textContent = '??????????';
      break;
  }
  capacity.textContent = `${flat.offer.rooms} ?????????????? ?????? ${flat.offer.guests} ????????????`;
  time.textContent = `?????????? ?????????? ${flat.offer.checkin} ?????????? ???? ${flat.offer.checkout}`;
  if (flat.offer.features === undefined) {
    features.classList.add('hidden');
  } else {
    for (let i = 0; i < flat.offer.features.length; i++) {
      if (flat.offer.features[i] !== 'wifi') {
        feature[i].classList.remove('popup__feature');
        feature[i].classList.remove('popup__feature--wifi');
      }
      if (flat.offer.features[i] !== 'parking') {
        feature[i].classList.remove('popup__feature');
        feature[i].classList.remove('popup__feature--parking');
      }
      if (flat.offer.features[i] !== 'dishwasher') {
        feature[i].classList.remove('popup__feature');
        feature[i].classList.remove('popup__feature--dishwasher');
      }
      if (flat.offer.features[i] !== 'washer') {
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
  }
  description.textContent = flat.offer.description;
  avatar.src = flat.author.avatar;
  if (flat.offer.photos === undefined) {
    photos.classList.add('hidden');
  } else {
    photo[0].src = flat.offer.photos[0];
    for (let i = 1; i < flat.offer.photos.length; i++) {
      if (flat.offer.photos[i] !== undefined) {
        const PICTURE = document.createElement('img');
        PICTURE.classList.add('popup__photo');
        PICTURE.alt = '???????????????????? ??????????';
        PICTURE.width = '45';
        PICTURE.height = '40';
        PICTURE.src = flat.offer.photos[i];
        photos.appendChild(PICTURE);
      }
    }
  }
  return copy;
};

export { compareOffers, createNewOffer };
