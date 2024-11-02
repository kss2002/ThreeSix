import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const KkumList__main = [
  {
    name: '즉석 모듬(2~3인분)',
    price: '10,000원',
  },
  {
    name: '즉석 떡볶이(기본)',
    price: '7,000원',
  },
];

const KkumList__add = [
  {
    name: '라면',
    price: '1,000원',
  },
  {
    name: '우동',
    price: '1,000원',
  },
  {
    name: '쫄면',
    price: '1,000원',
  },
  {
    name: '오뎅',
    price: '1,000원',
  },
  {
    name: '야채',
    price: '1,000원',
  },
  {
    name: '당면',
    price: '1,000원',
  },
  {
    name: '떡사리',
    price: '1,000원',
  },
  {
    name: '계란',
    price: '500원',
  },
  {
    name: '모짜렐라치즈',
    price: '1,000원',
  },
  {
    name: '슬라이스치즈',
    price: '1,000원',
  },
  {
    name: '볶음밥',
    price: '1,500원',
  },
];

const KkumList__fried = [
  {
    name: '야끼만두',
    price: '400원',
  },
  {
    name: '후랑크',
    price: '400원',
  },
  {
    name: '맛살',
    price: '400원',
  },
  {
    name: '김말이',
    price: '400원',
  },
];

const KkumList__drink = [
  {
    name: '쿨피스',
    price: '1,500원',
  },
  {
    name: '환타',
    price: '1,000원',
  },
  {
    name: '콜라 500ml',
    price: '1,500원',
  },
  {
    name: '사이다 500ml',
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
const Kkum = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">꿈꾸는 떡볶이</div>
      </header>
      <main>
        <MenuSection title="메인 메뉴" items={KkumList__main} />
        <MenuSection title="추가 사리" items={KkumList__add} />
        <MenuSection title="튀김" items={KkumList__fried} />
        <MenuSection title="음료" items={KkumList__drink} />
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

export default Kkum;
