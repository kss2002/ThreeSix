import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const HaneuljigiList__menu = [
  {
    name: '떡 닭꼬치',
    price: '2,500원',
  },
  {
    name: '파 닭꼬치',
    price: '2,500원',
  },
  {
    name: '모짜렐라 치즈닭꼬치',
    price: '3,500원',
  },
  {
    name: '돈파꼬치',
    price: '3,500원',
  },
  {
    name: '염통꼬치(4개)',
    price: '5,000원',
  },
  {
    name: '닭껍질꼬치(3개)',
    price: '5,000원',
  },
  {
    name: '모듬야채구이(4꼬치)',
    price: '5,000원',
  },
  {
    name: '(마늘/버섯/가지/꽈리고추)\n1꼬치(추가)',
    price: '1,500원',
  },
  {
    name: '베이컨말이꼬치',
    price: '2,500원',
  },
  {
    name: '콘소세지',
    price: '2,000원',
  },
];

const HaneuljigiList__set = [
  {
    name: '닭꼬치 set1 \n(닭꼬치 5+염통 2)',
    price: '14,000원',
  },
  {
    name: '닭돈 set2 \n(닭꼬치 3+돈파꼬치 2\n+염통 2)',
    price: '16,000원',
  },
  {
    name: '닭치즈 set3 \n(닭꼬치 4개+치즈토핑)',
    price: '14,000원',
  },
  {
    name: '닭베이컨 set4 \n(닭꼬치 3+베이컨 2\n+염통 2)',
    price: '14,000원',
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
const Haneuljigi = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">하늘지기(수내닭꼬치)</div>
      </header>
      <main>
        <MenuSection title="꼬치단품메뉴" items={HaneuljigiList__menu} />
        <MenuSection title="꼬치 세트" items={HaneuljigiList__set} />
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

export default Haneuljigi;
