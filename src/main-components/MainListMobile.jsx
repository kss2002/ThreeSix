import React, { memo, useMemo, Suspense } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { Link } from 'react-router-dom';

// 메뉴 데이터를 useMemo로 최적화
const MainListMobile = () => {
  const menuItems = useMemo(
    () => [
      {
        path: '/western',
        img: new URL('../assets/img/grid/w__port.webp', import.meta.url).href,
        text: '양식',
      },
      {
        path: '/chinese',
        img: new URL('../assets/img/grid/c__port.webp', import.meta.url).href,
        text: '중식',
      },
      {
        path: '/korean',
        img: new URL('../assets/img/grid/k__port.webp', import.meta.url).href,
        text: '한식',
      },
      {
        path: '/japanese',
        img: new URL('../assets/img/grid/j__port.webp', import.meta.url).href,
        text: '일식',
      },
      {
        path: '/school',
        img: new URL('../assets/img/grid/s__port.webp', import.meta.url).href,
        text: '분식',
      },
      {
        path: '/dessert',
        img: new URL('../assets/img/grid/d__port.webp', import.meta.url).href,
        text: '후식',
      },
      {
        path: '/fast',
        img: new URL('../assets/img/grid/f__port.webp', import.meta.url).href,
        text: '기타',
      },
    ],
    []
  );

  return (
    <main>
      {/* 모바일 */}
      <section className="Mainlist-mobile">
        <div className="Mainlist__img">
          <div className="Mainlist__title">원하는 메뉴를 골라보세요!</div>
          <div className="Mainlist__menu">
            <div className="Mainlist__container">
              <Suspense fallback={<div>Loading..</div>}>
                {menuItems.map((item, index) => (
                  <Link key={index} to={item.path} rel="noopener noreferrer">
                    <div className="main__grid-items">
                      <img
                        className="Main__img"
                        src={item.img}
                        alt={item.text}
                        loading="lazy"
                      />
                      <div className="Main__text">{item.text}</div>
                    </div>
                  </Link>
                ))}
              </Suspense>
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

export default memo(MainListMobile);
