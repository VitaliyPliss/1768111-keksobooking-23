
import {map} from './map.js';
import './data.js';
import './form.js';
import {createNewOffer} from './similar-flat-creating.js';
import {getData} from './data.js';
import {showSuccess} from './utils.js';
import {setUserFormSubmit} from './form.js';

getData((offers) => {
  const OFFERS_COUNT = offers.slice(0,10);
  OFFERS_COUNT.forEach((offer) => {
    const {lat, lng} = offer.location;
    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker.addTo(map).bindPopup(createNewOffer(offer));
  });

});

setUserFormSubmit(showSuccess);

