/* eslint-disable no-redeclare */

import {NEW_OFFER, createNewOffer} from './similar-flat-creating.js';
import {getActiveState} from './form.js';
import {address} from './form.js';

/* global L:readonly */
const map = L.map('map-canvas')
  .on('load', () => {
    getActiveState();
  })
  .setView({
    lat: 35.68212,
    lng: 139.73957,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68212,
    lng: 139.73957,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);


mainPinMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)  }, ${  evt.target.getLatLng().lng.toFixed(5)}`;
});

const POINTS = NEW_OFFER;

POINTS.forEach((point) => {
  const {lat, lng} = point.location;
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

  marker.addTo(map).bindPopup(createNewOffer(point));
});
