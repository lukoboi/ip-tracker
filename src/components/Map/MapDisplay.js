import React from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapDisplay.scss';

const PointerIcon = new L.Icon({
  iconUrl: require('../../images/icon-location.svg'),
  iconRetinaUrl: require('../../images/icon-location.svg'),
  iconAnchor: [20, 55],
  popupAnchor: [0, -35],
  iconSize: [46, 56],
  shadowSize: [29, 40],
  shadowAnchor: [7, 40],
});

const MapDisplay = () => {
  const point = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };
  const position = [point.lat, point.lng];

  return (
    <Map center={position} zoom={14} className="Map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={PointerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapDisplay;
