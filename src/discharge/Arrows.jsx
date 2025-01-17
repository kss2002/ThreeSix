// 커스텀 화살표 컴포넌트
import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        display: 'block',
        top: '360px',
        left: 'calc(50% + 70px)',
        zIndex: 10,
        fontSize: '54px',
        color: 'black',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        display: 'block',
        top: '360px',
        left: 'calc(50% - 120px)',
        zIndex: 10,
        fontSize: '54px',
        color: 'black',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
};
