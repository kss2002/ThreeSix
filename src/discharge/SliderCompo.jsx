// slider 컴포넌트
import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 렌더링 안전성 및 에러 회피 작업
const SliderCompo = ({ images, settings }) => {
  const sliderRef = useRef(null); // Slider DOM 참조
  const [isReady, setIsReady] = useState(false); // 초기 상태 플래그

  // 렌더링 준비 여부 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true); // 준비 완료 후 상태 업데이트
    }, 100); // 딜레이 조정 가능

    return () => clearTimeout(timer); // 클린업
  }, []);

  if (!isReady) {
    return <div>슬라이더를 불러오는 중...</div>; // 초기 상태
  }

  if (!images || images.length === 0) {
    return <div>이미지가 어디간거야??</div>; // 이미지가 없을 경우 메시지 출력
  }

  return (
    <Slider {...settings} ref={sliderRef}>
      {images.map((image, index) => (
        <div className="slick-slider" key={index}>
          <p className="slider__title">{image.title}</p>
          <p className="slider__num">{image.num}</p>
          <p className="slider__time">{image.time}</p>
          <div>
            <Link to={image.path || '#'} rel="noopener noreferrer">
              <img className="slider-img" src={image.src} alt={image.alt} />
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCompo;
