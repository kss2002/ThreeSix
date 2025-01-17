import React from 'react';

// TypeIt 라이브러리
import TypeIt from 'typeit-react';

const MainHeader = () => {
  return (
    <header>
      <div id="mainScreen" className="Mainheader">
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
        <nav>
          <ul className="Mainheader__nav">
            <li>
              <a href="#restaurant">식당</a>
            </li>
            <li>
              <a href="#researchMap">지도</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
