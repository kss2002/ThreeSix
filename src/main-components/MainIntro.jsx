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

const MainIntro = () => {
  return (
    <div className="wrapper">
      <div className="Mainintro__item item1">
        <img className="ani" src={port01} alt="사진" />
      </div>
      <div className="Mainintro__item item2">
        <img className="ani" src={port02} alt="사진" />
      </div>
      <div className="Mainintro__item item3">
        <img className="ani" src={port03} alt="사진" />
      </div>
      <div className="Mainintro__item item4">
        <img className="ani" src={port04} alt="사진" />
      </div>
      <div className="Mainintro__item item5">
        <img className="ani" src={port05} alt="사진" />
      </div>
      <div className="Mainintro__item item6">
        <img className="ani" src={port06} alt="사진" />
      </div>
      <div className="Mainintro__item item7">
        <img className="ani" src={port07} alt="사진" />
      </div>
      <div className="Mainintro__item item8">
        <img className="ani" src={port08} alt="사진" />
      </div>
    </div>
  );
};

export default MainIntro;
