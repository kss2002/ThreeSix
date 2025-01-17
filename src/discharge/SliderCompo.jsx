// slider 컴포넌트
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCompo = ({ images, settings }) => {
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div className="slick-slider" key={index}>
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
