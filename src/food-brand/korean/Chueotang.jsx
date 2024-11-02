import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const ChueotangList__main = [
  {
    name: '통추',
    price: '13,000원',
  },
  {
    name: '갈추',
    price: '13,000원',
  },
];

const ChueotangList__fried = [
  {
    name: '한개',
    price: '16,000원',
  },
  {
    name: '반개',
    price: '9,000원',
  },
];

const ChueotangList__noodle = [
  {
    name: '비빔',
    price: '8,000원',
  },
  {
    name: '잔치',
    price: '8,000원',
  },
  {
    name: '곱빼기',
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
const Chueotang = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">담터추어탕</div>
      </header>
      <main>
        <MenuSection title="담터추어탕" items={ChueotangList__main} />
        <MenuSection title="추어튀김" items={ChueotangList__fried} />
        <MenuSection title="국수" items={ChueotangList__noodle} />
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

export default Chueotang;
