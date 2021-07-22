import {map} from './map.js';
import './data.js';
import './form.js';
import {createNewOffer} from './similar-flat-creating.js';
import {getData} from './data.js';
import {showSuccess} from './utils.js';
import {setUserFormSubmit} from './form.js';
import {compareOffers} from './similar-flat-creating.js';
import {setOfferTypeClick} from './form.js';

getData((offers) => {
  offers.sort(compareOffers).slice(0,10).forEach((offer) => {
    const {lat, lng} = offer.location;
    const icon = L.icon({
      iconUrl: './img/pin.svg',
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
    setOfferTypeClick(() => marker.addTo(map).bindPopup(createNewOffer(offer)));
  });
  setOfferTypeClick(() => {offers.sort(compareOffers).slice(0,10).forEach((offer) => {
    const {lat, lng} = offer.location;
    const icon = L.icon({
      iconUrl: './img/pin.svg',
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
    map.removeLayer(marker);
    marker.addTo(map).bindPopup(createNewOffer(offer));
    setOfferTypeClick(() => marker.addTo(map).bindPopup(createNewOffer(offer)));
  });
  });
});
setUserFormSubmit(showSuccess);
