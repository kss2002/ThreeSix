import React from 'react';
//사진
import port01 from '../assets/img/Animation/port01.png';
import port02 from '../assets/img/Animation/port02.png';
import port03 from '../assets/img/Animation/port03.png';
import port04 from '../assets/img/Animation/port04.png';
import port05 from '../assets/img/Animation/port05.png';
import port06 from '../assets/img/Animation/port06.png';
import port07 from '../assets/img/Animation/port07.png';
import port08 from '../assets/img/Animation/port08.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/scss';

const wrapper__images = [
  { src: port01, alt: '사진 1' },
  { src: port02, alt: '사진 2' },
  { src: port03, alt: '사진 3' },
  { src: port04, alt: '사진 4' },
  { src: port05, alt: '사진 5' },
  { src: port06, alt: '사진 6' },
  { src: port07, alt: '사진 7' },
  { src: port08, alt: '사진 8' },
];

const ImageWrapperMobile = ({ className }) => (
  <div className={className}>
    {wrapper__images.map((image, index) => (
      <div key={index} className={`Mainintro__item item${index + 1}`}>
        <img className="ani" src={image.src} alt={image.alt} />
      </div>
    ))}
  </div>
);

const ImageWrapperTablet = () => {
  return (
    <main id="WrapperTablet-id" className="Maintro__background">
      <p className="Mainintro__text">
        이젠 먹고 싶은 메뉴를 쉽게 찾아보며
        <br />
        시간을 아껴 보세요!
      </p>
      <div className="WrapperTablet" dir="ltr">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0, //딜레이
            disableOnInteraction: false, //슬라이드 만지면 슬라이드가 멈추는 기능
          }}
          speed={2000}
          slidesPerView={3}
          spaceBetween={60}
          loop={true}
        >
          {wrapper__images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiperAni">
                <img
                  className="PC-ani"
                  src={image.src}
                  alt={image.alt || `Slide ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="wrapper-bottom" dir="rtl">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, //슬라이드 만지면 슬라이드가 멈추는 기능
          }}
          speed={2000}
          slidesPerView={3}
          spaceBetween={60}
          loop={true}
        >
          {wrapper__images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiperAni">
                <img
                  className="PC-ani-rtl"
                  src={image.src}
                  alt={image.alt || `Slide ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

const ImageWrapperPC = () => (
  <main id="WrapperPC-id" className="Maintro__background">
    <p className="Mainintro__text">
      이젠 먹고 싶은 메뉴를 쉽게 찾아보며
      <br />
      시간을 아껴 보세요!
    </p>
    <section>
      <div dir="ltr">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0, //딜레이
            disableOnInteraction: false, //슬라이드 만지면 슬라이드가 멈추는 기능
          }}
          speed={2000}
          slidesPerView={5}
          spaceBetween={60}
          loop={true}
        >
          {wrapper__images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiperAni">
                <img
                  className="PC-ani"
                  src={image.src}
                  alt={image.alt || `Slide ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="wrapper-bottom" dir="rtl">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, //슬라이드 만지면 슬라이드가 멈추는 기능
          }}
          speed={2000}
          slidesPerView={5}
          spaceBetween={60}
          loop={true}
        >
          {wrapper__images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiperAni">
                <img
                  className="PC-ani-rtl"
                  src={image.src}
                  alt={image.alt || `Slide ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  </main>
);

const MainIntro = () => {
  return (
    <section>
      <ImageWrapperMobile className="wrapper-mobile" />
      <ImageWrapperPC />
      <ImageWrapperTablet />
    </section>
  );
};

export default MainIntro;
