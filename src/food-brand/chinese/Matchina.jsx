import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const MatchinaList__cotton = [
  {
    name: '우육면',
    price: '8,000원',
  },
  {
    name: '우육면(고수없음)',
    price: '8,000원',
  },
  {
    name: '마라우육면',
    price: '8,000원',
  },
  {
    name: '마라우육면(고수없음)',
    price: '8,000원',
  },
  {
    name: '마라면',
    price: '6,500원',
  },
  {
    name: '마라면(고수없음)',
    price: '6,500원',
  },
  {
    name: '차돌마라우육면',
    price: '9,000원',
  },
  {
    name: '차돌마라우육면(고수없음)',
    price: '9,000원',
  },
  {
    name: '명가명품우육면',
    price: '12,000원',
  },
  {
    name: '명가명품우육면(고수없음)',
    price: '12,000원',
  },
];

const MatchinaList__topping = [
  {
    name: '야채추가',
    price: '1,000원',
  },
  {
    name: '면추가',
    price: '1,000원',
  },
  {
    name: '로계란추가',
    price: '1,000원',
  },
  {
    name: '고기추가',
    price: '3,000원',
  },
  {
    name: '공기밥',
    price: '1,000원',
  },
];

const MatchinaList__side = [
  {
    name: '수좌병',
    price: '2,000원',
  },
  {
    name: '오이무침',
    price: '3,000원',
  },
];

const MatchinaList__special = [
  {
    name: '명가수제생면',
    price: '1,000원',
  },
  {
    name: '명가비법고추기름',
    price: '8,000원',
  },
];

const MatchinaList__drink = [
  {
    name: '차파이',
    price: '2,000원',
  },
  {
    name: '사이다',
    price: '1,500원',
  },
  {
    name: '콜라',
    price: '1,500원',
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
const Matchina = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">맛차이나</div>
      </header>
      <main>
        <MenuSection title="면류" items={MatchinaList__cotton} />
        <MenuSection title="토핑" items={MatchinaList__topping} />
        <MenuSection title="사이드" items={MatchinaList__side} />
        <MenuSection title="특별수제상품" items={MatchinaList__special} />
        <MenuSection title="음료수" items={MatchinaList__drink} />
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

export default Matchina;
