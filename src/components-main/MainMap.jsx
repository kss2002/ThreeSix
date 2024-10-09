import React, { useState, useEffect } from 'react';

const { kakao } = window; // kakao 전역 객체 - 윈도우 인식

const MainMap = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // state Manage
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.64401089999978, 127.11004580000017), // 위도 경도
      level: 2, // Scale Level (Smaller magnifies)
    };
    const kakaoMap = new kakao.maps.Map(container, options); // id - Get .. latlng - Get

    // Scale Level Limit
    kakaoMap.setMinLevel(1); // min scale level
    kakaoMap.setMaxLevel(4); // max scale level

    // Set map range Limit
    const bounds = new kakao.maps.LatLngBounds(
      new kakao.maps.LatLng(37.64367250000025, 127.10923179999932), // 남서쪽 좌표 (latitude, longitude)
      new kakao.maps.LatLng(37.644037799999644, 127.11147940000015) // 북동쪽 좌표 (latitude, longitude)
    );
    kakaoMap.setBounds(bounds); // 설정된 경계를 지도에 적용

    setMap(kakaoMap); // 상태 업데이트
  }, []);

  // map이 null이 아닐 때 사용
  useEffect(() => {
    if (map) {
      console.log('map is ready', map);
    }
  }, [map]); // map이 실행될 때마다 실헹

  return (
    <section className="Mainmap__section">
      <div id="map" className="Mainmap__map"></div>
    </section>
  );
};

export default MainMap;
