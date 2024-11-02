import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const GamjatangList__none = [
  {
    name: '메뉴를 찾을 수 없었습니다😱',
    price: '0원',
  },
];

/* 상태관리 */

// MenuItem 컴포넌트 - 이름 및 가격
const MenuItem = ({ name, price }) => (
  <div className="detail__container">
    <div className="detail__Menu">{name}</div>
    <div className="point">• • • • •</div>
    <div className="detail__price">{price}</div>
  </div>
);

// MenuSection 컴포넌트 - title 및 아이템 관리
const MenuSection = ({ title, items }) => (
  <div className="detail__main">
    <div className="detail__mainmenu">{title}</div>
    {items.map((menu, index) => (
      <MenuItem key={index} name={menu.name} price={menu.price} />
    ))}
  </div>
);

// 메인 컴포넌트

const Gamjatang = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">세상만사 감자탕</div>
      </header>
      <main>
        <MenuSection title="카페, 디저트" items={GamjatangList__none} />
        <div className="detail__main">
          <div className="list__bar"></div>
          <div className="list__back">
            <Link to="/">다른 식당은 어때요?</Link>
          </div>
          <div className="list__cat"></div>
        </div>
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Gamjatang;
