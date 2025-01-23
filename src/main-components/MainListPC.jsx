import React, { useState } from 'react';
import SliderCompo from '../discharge/SliderCompo';
import CategoryNav from '../discharge/CategoryNav';
import MapComponent from '../discharge/MapComponent';
/* 화살표 컴포넌트 주석화
// import { NextArrow, PrevArrow } from '../discharge/Arrows';
*/
import {
  PCimagesChina,
  PCimagesDessert,
  PCimagesJapan,
  PCimagesKorea,
  PCimagesRest,
  PCimagesSchool,
  PCimagesUS,
} from '../constants/PCdata';

// map marker
const markers = [
  { lat: 37.64398229999981, lng: 127.11030229999939 },
  { lat: 37.6429594000002, lng: 127.1042267999995 },
  { lat: 37.6428473999999, lng: 127.10544689999936 },
];

const settings = {
  dots: true, // 슬라이드 하단에 점 표시
  infinite: true, // 무한 루프
  speed: 500, // 슬라이드 전환 속도 (ms)
  slidesToShow: 3, // 한 번에 보여줄 슬라이드 개수
  slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
  centerMode: true, // 현재 컨텐츠 가운데 정렬
  centerPadding: '0px', // 슬라이드 양쪽 여백 제거
  autoplay: true, // 자동 슬라이드
  autoplaySpeed: 3000, // 자동 슬라이드 속도 (ms)

  /* arrow-Del / confirmation-Designer 1/17 
  arrows: true,
  nextArrow: <NextArrow />, // 오른쪽
  prevArrow: <PrevArrow />, // 왼쪽
  */
};

const MainListPC = () => {
  const [currentCategory, setCurrentCategory] = useState('중식');

  const categories = ['중식', '일식', '양식', '한식', '분식', '후식', '기타'];

  // 카테고리별 색상 설정
  const categoryColors = {
    중식: '#46CC63',
    일식: '#46CC63',
    양식: '#46CC63',
    한식: '#46CC63',
    분식: '#46CC63',
    후식: '#46CC63',
    기타: '#46CC63',
  };

  const getCategoryImages = () => {
    switch (currentCategory) {
      case '중식':
        return PCimagesChina;
      case '일식':
        return PCimagesJapan;
      case '양식':
        return PCimagesUS;
      case '한식':
        return PCimagesKorea;
      case '분식':
        return PCimagesSchool;
      case '후식':
        return PCimagesDessert;
      case '기타':
        return PCimagesRest;
      default:
        return []; // 예외 처리
    }
  };

  return (
    <main>
      <section id="restaurant" className="Mainlist-pc">
        <div className="Mainlist-pc__top">
          <p className="Mainlist-pc__mainTitle">
            삼육대 후문 식당을 찾아보세요!
          </p>
          <CategoryNav
            categories={categories}
            currentCategory={currentCategory}
            onCategoryChange={setCurrentCategory}
          />
          <div className="Mainlist-pc__bar-container">
            {categories.map((category) => (
              <div
                key={category}
                className={`Mainlistpc__bar ${
                  currentCategory === category ? 'active' : ''
                }`}
                style={{
                  backgroundColor:
                    currentCategory === category
                      ? categoryColors[category]
                      : '#f2f2f2', // 선택된 카테고리만 색상 변경
                }}
              ></div>
            ))}
          </div>
          <SliderCompo images={getCategoryImages()} settings={settings} />
        </div>
        <div className="Mainlist-pc__bottom"></div>
      </section>

      <div id="researchMap">
        <p className="Mainmap-pc__title">
          지도로 가까운 위치의 식당을 찾아보세요!
        </p>
        <MapComponent markers={markers} />
      </div>
    </main>
  );
};

export default MainListPC;
