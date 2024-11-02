import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const CheoneList__main = [
  {
    name: '모듬 세트',
    price: '58,000원',
  },
  {
    name: '한우소머리전골(대)',
    price: '49,000원',
  },
  {
    name: '한우소머리전골(중)',
    price: '38,000원',
  },
  {
    name: '한우소머리설렁탕',
    price: '13,000원',
  },
  {
    name: '한우소머리곰탕',
    price: '13,000원',
  },
  {
    name: '청와설렁탕',
    price: '10,000원',
  },
  {
    name: '청와곰탕',
    price: '10,000원',
  },
  {
    name: '한방족발',
    price: '40,000원',
  },
  {
    name: '매운양념족발',
    price: '42,000원',
  },
  {
    name: '명이마늘보쌈',
    price: '39,000원',
  },
  {
    name: '뚝배기닭볶음탕',
    price: '10,000원',
  },
  {
    name: '소고기국밥',
    price: '10,000원',
  },
  {
    name: '청와칼국수',
    price: '9,000원',
  },
  {
    name: '홍와칼국수',
    price: '9,000원',
  },
  {
    name: '들깨칼국수',
    price: '9,000원',
  },
  {
    name: '콩국수',
    price: '9,000원',
  },
  {
    name: '메밀막국수(비빔)',
    price: '9,000원',
  },
  {
    name: '보쌈정식',
    price: '11,000원',
  },
  {
    name: '사골떡만두국',
    price: '9,000원',
  },
  {
    name: '낙지만두',
    price: '7,000원',
  },
  {
    name: '투명감자만두',
    price: '6,000원',
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
const Cheone = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">청와삼대</div>
      </header>
      <main>
        <MenuSection title="청와삼대 메뉴" items={CheoneList__main} />
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

export default Cheone;
