import React from "react";

import { Map, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const MapComponent = () => {
  return (
    <Map
      center={[28.622003, 77.214005]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 350, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.622003, 77.214005]}>
        <Popup>
          Shri Balaji Global <br /> PVT LTD.
        </Popup>
      </Marker>
    </Map>
  );
};
export default MapComponent;
