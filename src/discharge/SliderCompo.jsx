import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SliderCompo = ({ images, settings }) => {
  // 이미지 배열을 useMemo로 캐싱하여 불필요한 재렌더링 방지
  const swiperMemoizedImages = useMemo(() => images || [], [images]);

  if (!swiperMemoizedImages.length) {
    return <div>이미지가 없음</div>; // 이미지가 없을 경우 메시지 출력
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
        {swiperMemoizedImages.map((image, index) => (
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
                    loading="lazy"
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
