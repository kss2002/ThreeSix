// 지도 컴포넌트
import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MapComponent = ({ markers }) => {
  return (
    <Map
      center={{ lat: 37.64398229999981, lng: 127.11030229999939 }}
      className="Map__scss"
      level={2}
    >
      {markers.map((marker, index) => (
        <MapMarker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}
    </Map>
  );
};

export default MapComponent;
