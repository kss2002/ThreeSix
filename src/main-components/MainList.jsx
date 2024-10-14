import React from 'react';
import { Link } from 'react-router-dom';

const Main__List__map = () => {
  return (
    <section id="MainList" className="Mainlist__section">
      <div className="Mainlist__title">원하는 메뉴를 골라보세요!</div>
      <div className="Mainlist__menu">
        <div className="Mainlist__container">
          <Link to="/western">
            <div className="main__grid-items">양식</div>
          </Link>
          <Link to="/chinese">
            <div className="main__grid-items">중식</div>
          </Link>
          <Link to="/korean">
            <div className="main__grid-items">한식</div>
          </Link>
          <Link to="/japanese">
            <div className="main__grid-items">일식</div>
          </Link>
          <Link to="/school">
            <div className="main__grid-items">분식</div>
          </Link>
          <Link to="/dessert">
            <div className="main__grid-items">후식</div>
          </Link>
        </div>
      </div>
      <div className="Mainmap__title">지도로 식당 위치를 찾아보세요!</div>
      <div className="Mainmap__main"></div>
    </section>
  );
};

export default Main__List__map;
