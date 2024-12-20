// food-brand 전역 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';

// MenuItem 컴포넌트 - 이름 및 가격
export const MenuItem = ({ name, price }) => (
  <div className="detail__container">
    <div className="detail__Menu">{name}</div>
    <div className="point"></div>
    <div className="detail__price">{price}</div>
  </div>
);

// MenuSection 컴포넌트 - title 및 아이템 관리
export const MenuSection = ({ title, items }) => (
  <div className="detail__main">
    <div className="detail__mainmenu">{title}</div>
    {items.map((menu, index) => (
      <MenuItem key={index} name={menu.name} price={menu.price} />
    ))}
  </div>
);

// MenuBottom 컴포넌트 - 메뉴 바텀 부품화
export const MenuBottom = () => (
  <div className="detail__main">
    <div className="list__bar"></div>
    <div className="list__back">
      <Link to="/">다른 식당은 어때요?</Link>
    </div>
    <div className="list__cat"></div>
  </div>
);
