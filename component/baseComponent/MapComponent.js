import React, { Component, useEffect, useRef, useState } from "react";

import { Map, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const MapComponent = () => {
  // const dataState = {
  //   greenIcon: {
  //     lat: 28.664591,
  //     lng: 77.122093,
  //   },
  //   zoom: 10,
  // };
  // const [state, setstate] = useState(dataState);
  // const [icon, seticon] = useState();
  // const locationMap = useRef(null);

  // useEffect(() => {
  //   seticon(
  //     L.icon({
  //       iconUrl: "/images/leaf-green.png",
  //       shadowUrl: "/images/leaf-shadow.png",
  //       iconSize: [38, 95], // size of the icon
  //       shadowSize: [50, 64], // size of the shadow
  //       iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  //       shadowAnchor: [4, 62], // the same for the shadow
  //       popupAnchor: [-3, -76],
  //     })
  //   );
  // }, []);
  // const positionGreenIcon = [state.greenIcon.lat, state.greenIcon.lng];
  return (
    // <Map
    //   className="map"
    //   ref={locationMap}
    //   center={positionGreenIcon}
    //   zoom={state.zoom}
    // >
    //   <TileLayer
    //     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />

    //   {icon && (
    //     <Marker position={positionGreenIcon} icon={icon}>
    //       <Popup>Shri Balaji</Popup>
    //     </Marker>
    //   )}
    // </Map>
    <Map
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 350, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          Shri Balaji Global <br /> PVT LTD.
        </Popup>
      </Marker>
    </Map>
  );
};
export default MapComponent;

// class MapComponent extends Component {
//   state = {
//     greenIcon: {
//       lat: 28.664591,
//       lng: 77.122093,
//     },
//     zoom: 10,
//   };

//   grenIcon = L.icon({
//     iconUrl: "/images/leaf-green.png",
//     shadowUrl: "/images/leaf-shadow.png",
//     iconSize: [38, 95], // size of the icon
//     shadowSize: [50, 64], // size of the shadow
//     iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62], // the same for the shadow
//     popupAnchor: [-3, -76],
//   });

//   render() {
//     const positionGreenIcon = [
//       this.state.greenIcon.lat,
//       this.state.greenIcon.lng,
//     ];

//     return (
//       <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={positionGreenIcon} icon={this.grenIcon}>
//           <Popup>Shri Balaji</Popup>
//         </Marker>
//       </Map>
//     );
//   }
// }

// export default MapComponent;
