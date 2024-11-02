import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const SsalguksuList__ricenoodle = [
  {
    name: '소고기쌀국수',
    price: '8,900원',
  },
  {
    name: '짬뽕소기기쌀국수',
    price: '9,900원',
  },
  {
    name: '소곱창쌀국수',
    price: '12,900원',
  },
];

const SsalguksuList__katsu = [
  {
    name: '[안심]히레카츠정식',
    price: '11,900원',
  },
  {
    name: '치즈듬뿍카츠정식',
    price: '12,900원',
  },
  {
    name: '등심카츠(돈까스)정식',
    price: '10,900원',
  },
  {
    name: '치킨카츠정식',
    price: '9,900원',
  },
];

const SsalguksuList__rice = [
  {
    name: '치킨마요덮밥',
    price: '8,000원',
  },
  {
    name: '리얼스팸마요덮밥',
    price: '7,500원',
  },
  {
    name: '떡갈비마요덮밥',
    price: '8,000원',
  },
];

const SsalguksuList__soup = [
  {
    name: '인생돼지국밥',
    price: '9,500원',
  },
  {
    name: '병천순대국밥',
    price: '9,500원',
  },
  {
    name: '순대만국밥',
    price: '9,500원',
  },
  {
    name: '수육국밥',
    price: '10,000원',
  },
  {
    name: '장터소고기국밥',
    price: '11,000원',
  },
];

const SsalguksuList__side = [
  {
    name: '빅야채춘권2p',
    price: '3,000원',
  },
  {
    name: '새우튀김2p',
    price: '3,000원',
  },
  {
    name: '치킨가라아게4p',
    price: '3,500원',
  },
  {
    name: '짜조3p',
    price: '6,900원',
  },
  {
    name: '갈비만두튀김4p',
    price: '3,500원',
  },
  {
    name: '함박스테이크2p',
    price: '3,500원',
  },
  {
    name: '연유꽃빵튀김2p',
    price: '3,000원',
  },
];

const SsalguksuList__drink = [
  {
    name: '펩시 뚱캔',
    price: '2,000원',
  },
  {
    name: '제로펩시 뚱캔',
    price: '2,000원',
  },
  {
    name: '웰치스 뚱캔',
    price: '2,000원',
  },
  {
    name: '환타 뚱캔',
    price: '2,000원',
  },
  {
    name: '칠성사이다 뚱캔',
    price: '2,000원',
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
const Ssalguksu = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">쌀국수공방</div>
      </header>
      <main>
        <MenuSection title="쌀국수" items={SsalguksuList__ricenoodle} />
        <MenuSection title="카츠" items={SsalguksuList__katsu} />
        <MenuSection title="덮밥" items={SsalguksuList__rice} />
        <MenuSection title="국밥" items={SsalguksuList__soup} />
        <MenuSection title="사이드" items={SsalguksuList__side} />
        <MenuSection title="음료수" items={SsalguksuList__drink} />
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

export default Ssalguksu;
