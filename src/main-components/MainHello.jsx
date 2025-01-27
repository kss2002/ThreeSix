import React from 'react';
import iPhone from '../assets/img/iPhone.png';

const MainHello = () => {
  return (
    <div className="Mainheader__background-pc">
      <div className="MainHeader__title-pc">
        안녕하세요! <br />
        삼식아는 <br />
        삼육대학교 후문 식당을 <br />
        소개하는 서비스입니다! <br />
      </div>
      <img className="Mainheader__img" src={iPhone} alt="삼식아" />

      <div className="Mainheader__title-mobile">
        삼식아로 삼육대 후문에 위치한
        <br />
        다양한 식당을 찾아보세요!
      </div>
    </div>
  );
};

export default MainHello;
