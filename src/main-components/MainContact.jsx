import React, { useState } from 'react';
// icon
import { AiFillCaretUp } from 'react-icons/ai';
import { SiGoogleforms } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';

const MainContact = () => {
  const [hoveredButton, setHoveredButton] = useState(null); // 현재 호버된 버튼을 추적

  return (
    <main>
      {/* 모바일 */}
      <section className="Maincontact-mobile">
        <div className="Maincontact__contain">
          <div className="Maincontact__move">
            <a
              href="https://open.kakao.com/o/sPWbNkXg"
              target="_blank"
              rel="noreferrer"
            >
              카카오톡으로
              <br />
              편하게 문의,상담하기
            </a>
          </div>
        </div>
        <div className="Maincontact__google">
          <div className="Maincontact__move">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe5HpFp-58eZoKZhgUd-VtSV8S2H-_ZMIik3auOzwi0_NflTw/viewform?usp=preview"
              target="_blank"
              rel="noreferrer"
            >
              가게 사장님이 <br />
              구글폼으로 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* pc */}
      <section className="Maincontact-pc">
        {hoveredButton === 'google' && (
          <div className="tooltip-google">
            사장님은 구글폼으로 문의해주세요!
          </div>
        )}
        <button
          className="googleform"
          onMouseEnter={() => setHoveredButton('google')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5HpFp-58eZoKZhgUd-VtSV8S2H-_ZMIik3auOzwi0_NflTw/viewform?usp=preview"
            target="_blank"
            rel="noreferrer"
          >
            <SiGoogleforms className="MainContact__icon" />
          </a>
        </button>
        {hoveredButton === 'kakao' && (
          <div className="tooltip-kakao">
            카카톡으로 편하게 문의 및 상담하세요!
          </div>
        )}
        <button
          className="kakaoTalkfrom"
          onMouseEnter={() => setHoveredButton('kakao')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <a
            href="https://open.kakao.com/o/sPWbNkXg"
            target="_blank"
            rel="noreferrer"
          >
            <RiKakaoTalkFill className="MainContact__icon" />
          </a>
        </button>
        <button id="mainScreen" className="upArrow">
          <a href="#mainScreen">
            <AiFillCaretUp className="MainContact__icon" />
          </a>
        </button>
      </section>
    </main>
  );
};

export default MainContact;
