import {map} from './map.js';
import {setUserFormSubmit, setOfferTypeClick, setOfferPriceClick, setOfferRoomsClick, setOfferGuestsClick} from './form.js';
import {createNewOffer, compareOffers} from './similar-flat-creating.js';
import {showSuccess} from './utils.js';
import {getData} from './data.js';

getData((offers) => {
  const drawOffers = () => {
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
      setOfferPriceClick(() => marker.addTo(map).bindPopup(createNewOffer(offer)));
      setOfferRoomsClick(() => marker.addTo(map).bindPopup(createNewOffer(offer)));
      setOfferGuestsClick(() => marker.addTo(map).bindPopup(createNewOffer(offer)));
    });
  };

  const removeOffers = () => {
    const container = document.querySelector('.leaflet-marker-pane');
    const elems = container.querySelectorAll('img');
    elems.forEach((elem, idx) => {
      if (idx !== 0) {
        elem.remove();
      }
    });
  };

  drawOffers();

  setOfferTypeClick(() => {
    removeOffers();
  });

  setOfferTypeClick(() => {drawOffers();});

  setOfferPriceClick(() => {
    removeOffers();
  });

  setOfferPriceClick(() => {drawOffers();});

  setOfferRoomsClick(() => {
    removeOffers();
  });

  setOfferRoomsClick(() => {drawOffers();});

  setOfferGuestsClick(() => {
    removeOffers();
  });

  setOfferGuestsClick(() => {drawOffers();});
});


setUserFormSubmit(showSuccess);
