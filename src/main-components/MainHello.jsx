import React from 'react';
import iPhone from '../assets/img/iPhone.png';

// TypeIt 라이브러리
import TypeIt from 'typeit-react';

const MainHello = () => {
  return (
    <div className="Mainheader__background-pc">
      <div className="MainHeader__title-pc">
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type('안녕하세요!<br>')
              .pause(10)
              .type('삼식아는<br>')
              .pause(10)
              .type('삼육대학교 후문 식당을<br>')
              .pause(10)
              .type('소개하는 서비스입니다!');

            return instance;
          }}
          options={{
            speed: 70,
            //cursor: false,
            waitUntilVisible: true,
            breakLines: true,
          }}
        />
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
