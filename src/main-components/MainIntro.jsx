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

import YouTube from 'react-youtube';

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

const ImageGrid = ({ className, reverse }) => {
  const images = reverse ? [...wrapper__images].reverse() : wrapper__images;
  return (
    <div className={className}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`item${reverse ? 'Right' : 'Left'} item${index + 1}`}
        >
          <img className="PC-ani" src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

const ImageWrapperMobile = ({ className }) => (
  <div className={className}>
    {wrapper__images.map((image, index) => (
      <div key={index} className={`Mainintro__item item${index + 1}`}>
        <img className="ani" src={image.src} alt={image.alt} />
      </div>
    ))}
  </div>
);

const ImageWrapperPC = () => (
  <main className="Maintro__background">
    <p className="Mainintro__text">
      이젠 먹고 싶은 메뉴를 쉽게 찾아보며
      <br />
      시간을 아껴 보세요!
    </p>
    <section>
      <ImageGrid className="wrapper-pc" reverse={false} />
      <div className="intro-beta"></div>
      <ImageGrid className="wrapper-bottom" reverse={true} />
    </section>
  </main>
);

const YouTubeplayer = () => {
  return (
    <main id="YOUTUBE">
      <div className="youtube-top">
        <YouTube
          className="youtube"
          videoId="FllRs5CMnHc"
          opts={{
            width: '740px',
            height: '600px',
          }}
        />
      </div>
    </main>
  );
};

const MainIntro = () => {
  return (
    <section>
      <ImageWrapperMobile className="wrapper-mobile" />
      <ImageWrapperPC />
      <YouTubeplayer />
    </section>
  );
};

export default MainIntro;
