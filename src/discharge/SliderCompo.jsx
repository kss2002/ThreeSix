import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SliderCompo = ({ images, settings }) => {
  if (!images || images.length === 0) {
    return <div>이미지가 어디간거야??</div>; // 이미지가 없을 경우 메시지 출력
  }

  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={settings.infinite}
        speed={settings.speed}
        slidesPerView={settings.slidesToShow}
        autoplay={
          settings.autoplay
            ? {
                delay: settings.autoplaySpeed,
                disableOnInteraction: false,
              }
            : false
        }
        spaceBetween={20}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slick-slider">
              <p className="slider__title">{image.title}</p>
              <p className="slider__num">{image.num}</p>
              <p className="slider__time">{image.time}</p>
              <div>
                <Link to={image.path || '#'} rel="noopener noreferrer">
                  <img
                    className="slider-img"
                    src={image.src}
                    alt={image.alt || `Slide ${index}`}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderCompo;
