import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { Link } from 'react-router-dom';
//사진
import w__port from '../assets/img/grid/w__port.png';
import c__port from '../assets/img/grid/c__port.png';
import k__port from '../assets/img/grid/k__port.png';
import j__port from '../assets/img/grid/j__port.png';
import s__port from '../assets/img/grid/s__port.png';
import d__port from '../assets/img/grid/d__port.png';
import f__port from '../assets/img/grid/f__port.png';

// 지도 api

const Main__List__map = (props) => {
  return (
    <div className="Mainlist__img">
      <div className="Mainlist__title">원하는 메뉴를 골라보세요!</div>
      <div className="Mainlist__menu">
        <div className="Mainlist__container">
          <Link to="/western">
            <div className="main__grid-items">
              <img className="Main__img" src={w__port} alt="사진" />
              <div className="Main__text">양식</div>
            </div>
          </Link>
          <Link to="/chinese">
            <div className="main__grid-items">
              <img className="Main__img" src={c__port} alt="사진" />
              <div className="Main__text">중식</div>
            </div>
          </Link>
          <Link to="/korean">
            <div className="main__grid-items">
              <img className="Main__img" src={k__port} alt="사진" />
              <div className="Main__text">한식</div>
            </div>
          </Link>
          <Link to="/japanese">
            <div className="main__grid-items">
              <img className="Main__img" src={j__port} alt="사진" />
              <div className="Main__text">일식</div>
            </div>
          </Link>
          <Link to="/school">
            <div className="main__grid-items">
              <img className="Main__img" src={s__port} alt="사진" />
              <div className="Main__text">분식</div>
            </div>
          </Link>
          <Link to="/dessert">
            <div className="main__grid-items">
              <img className="Main__img" src={d__port} alt="사진" />
              <div className="Main__text">후식</div>
            </div>
          </Link>
          <Link to="/fast">
            <div className="main__grid-items">
              <img className="Main__img" src={f__port} alt="사진" />
              <div className="Main__text">기타</div>
            </div>
          </Link>
        </div>
        <div className="Mainmap__title">지도로 식당 위치를 찾아보세요!</div>
        <div id="map" className="Mainmap__main">
          <Map
            center={{ lat: 37.64398229999981, lng: 127.11030229999939 }}
            style={{ width: '280px', height: '120px' }}
            level={2}
          />
        </div>
        <div className="Mainmap__sub">삼육대학교 유니브 삼식아팀</div>
      </div>
    </div>
  );
};

export default Main__List__map;
