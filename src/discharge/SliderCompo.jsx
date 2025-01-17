// slider 컴포넌트
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCompo = ({ images, settings }) => {
  if (!images || images.length === 0) {
    return <div>이미지가 없습니다.</div>; // 이미지가 없을 경우 메시지 출력
  }

  return (
    <Slider {...settings}>
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
