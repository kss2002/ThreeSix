import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { Link } from 'react-router-dom';

//사진 - moblie
import w__port from '../assets/img/grid/w__port.png';
import c__port from '../assets/img/grid/c__port.png';
import k__port from '../assets/img/grid/k__port.png';
import j__port from '../assets/img/grid/j__port.png';
import s__port from '../assets/img/grid/s__port.png';
import d__port from '../assets/img/grid/d__port.png';
import f__port from '../assets/img/grid/f__port.png';

// 메뉴 데이터를 배열로 구성
const menuItems = [
  { path: '/western', img: w__port, text: '양식' },
  { path: '/chinese', img: c__port, text: '중식' },
  { path: '/korean', img: k__port, text: '한식' },
  { path: '/japanese', img: j__port, text: '일식' },
  { path: '/school', img: s__port, text: '분식' },
  { path: '/dessert', img: d__port, text: '후식' },
  { path: '/fast', img: f__port, text: '기타' },
];

const MainListMobile = () => {
  return (
    <main>
      {/* 모바일 */}
      <section className="Mainlist-mobile">
        <div className="Mainlist__img">
          <div className="Mainlist__title">원하는 메뉴를 골라보세요!</div>
          <div className="Mainlist__menu">
            <div className="Mainlist__container">
              {menuItems.map((item, index) => (
                <Link key={index} to={item.path} rel="noopener noreferrer">
                  <div className="main__grid-items">
                    <img className="Main__img" src={item.img} alt={item.text} />
                    <div className="Main__text">{item.text}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div id="research-map" className="Mainmap__title">
              지도로 식당 위치를 찾아보세요!
            </div>
            <div id="map" className="Mainmap__main">
              <Map
                center={{ lat: 37.64398229999981, lng: 127.11030229999939 }}
                style={{ width: '280px', height: '140px' }}
                level={2}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainListMobile;
