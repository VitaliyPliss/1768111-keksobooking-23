/* eslint-disable no-redeclare */
import {getActiveState, address} from './form.js';

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
  iconUrl: './img/main-pin.svg',
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

export {map, mainPinMarker};
