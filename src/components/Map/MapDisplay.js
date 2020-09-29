import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapDisplay.scss';

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
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapDisplay;
