import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const DaramiList__main = [
  {
    name: '도토리 쟁반국수(2인)',
    price: '22,000원',
  },
  {
    name: '도토리 임자탕',
    price: '10,000원',
  },
  {
    name: '국산콩 청국장',
    price: '9,000원',
  },
  {
    name: '국산콩 비지찌개',
    price: '9,000원',
  },
  {
    name: '도토리전',
    price: '7,000원',
  },
  {
    name: '보리밥',
    price: '9,000원',
  },
  {
    name: '공기밥',
    price: '1,000원',
  },
];

const DaramiList__summer = [
  {
    name: '콩국수',
    price: '9,000원',
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
const Darami = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">다람이임자탕</div>
      </header>
      <main>
        <MenuSection title="다람이임자탕 차림표" items={DaramiList__main} />
        <MenuSection title="하절기" items={DaramiList__summer} />
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

export default Darami;
