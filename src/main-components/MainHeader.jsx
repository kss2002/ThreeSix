import React from 'react';
import Lottie from 'lottie-react';
import MainAni from '../lottie/MainAni.json';

// TypeIt 라이브러리
import TypeIt from 'typeit-react';

const MainHeader = () => {
  return (
    <header>
      <div className="Mainheader__samslka">
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type('SAM SIKA')
              .pause(700)
              .delete(8)
              .pause(600)
              .type('하루를 맛있게')
              .pause(700)
              .delete(7)
              .pause(600)
              .type('삼식아')
              .pause(1600);

            return instance;
          }}
          options={{
            cursor: false,
            loop: true,
            waitUntilVisible: true,
            breakLines: true,

            afterComplete: function (instance) {
              instance.destroy();
            },
            //무한 루프 제어
          }}
        />
      </div>
      <div className="Mainheader__background">
        <div className="MainHeader__contain">
          <p className="MainHeader__title-pc">
            삼식아는 삼육대 후문에 위치한 카페와 식당의 <br />
            메뉴 및 메뉴의 가격을 알려주는 사이트입니다.
          </p>
          <div className="Mainheader__title-mobile">
            삼식아로 삼육대 후문에 위치한
            <br />
            다양한 식당을 찾아보세요!
          </div>
          <div className="MainAni">
            <Lottie animationData={MainAni} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
