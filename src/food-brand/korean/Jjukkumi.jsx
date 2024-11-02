import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const JjukkumiList__main = [
  {
    name: '쭈꾸미볶음(1인 밥포함)',
    price: '12,000원',
  },
  {
    name: '쭈꾸미+피자세트(1인)',
    price: '13,000원',
  },
  {
    name: '쭈꾸미+연어+피자세트(1인)',
    price: '15,000원',
  },
  {
    name: '쭈꾸미+튀김+피자세트(1인)',
    price: '17,000원',
  },
  {
    name: '쭈꾸미+연어\n+튀김+피자세트(1인)',
    price: '19,000원',
  },
  {
    name: '철판쭈꾸미',
    price: '14,000원',
  },
  {
    name: '철판쭈꾸미+피자세트(1인)',
    price: '16,000원',
  },
  {
    name: '철판쭈꾸미+연어\n+피자세트(1인)',
    price: '18,000원',
  },
  {
    name: '철판쭈꾸미+튀김\n+피자세트(1인)',
    price: '20,000원',
  },
  {
    name: '철판쭈꾸미+연어+튀김\n+피자세트(1인)',
    price: '22,000원',
  },
  {
    name: '철판삼겹쭈꾸미',
    price: '16,000원',
  },
  {
    name: '철판삼겹쭈꾸미\n+피자세트(1인)',
    price: '18,000원',
  },
  {
    name: '철판삼겹쭈꾸미+연어\n+피자세트(1인)',
    price: '20,000원',
  },
  {
    name: '철판삼겹쭈꾸미+튀김\n+피자세트(1인)',
    price: '22,000원',
  },
  {
    name: '철판삼겹쭈꾸미+연어\n+튀김+피자세트(1인)',
    price: '24,000원',
  },
];

const JjukkumiList__menu = [
  {
    name: '왕새우튀김(중)',
    price: '10,000원',
  },
  {
    name: '왕새우튀김(대)',
    price: '15,000원',
  },
  {
    name: '버팔로윙&포테이토',
    price: '10,000원',
  },
  {
    name: '냉묵사발',
    price: '5,000원',
  },
  {
    name: '연어샐러드',
    price: '10,000원',
  },
  {
    name: '참치마요주먹밥',
    price: '4,000원',
  },
  {
    name: '등심돈가스',
    price: '10,000원',
  },
  {
    name: '쭈꾸미',
    price: '13,000원',
  },
  {
    name: '삼겹살',
    price: '9,000원',
  },
  {
    name: '볶음밥',
    price: '3,000원',
  },
  {
    name: '치즈볶음밥',
    price: '5,000원',
  },
];

const JjukkumiList__pizza = [
  {
    name: '9인치',
    price: '10,000원',
  },
  {
    name: '11인치',
    price: '12,000원',
  },
  {
    name: '12인치',
    price: '14,000원',
  },
];

const JjukkumiList__drink = [
  {
    name: '소주',
    price: '5,000원',
  },
  {
    name: '맥주',
    price: '5,000원',
  },
  {
    name: '청하',
    price: '6,000원',
  },
  {
    name: '콜라',
    price: '2,000원',
  },
  {
    name: '사이다',
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
const Jjukkumi = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">담터쭈꾸미</div>
      </header>
      <main>
        <MenuSection
          title="쭈꾸미볶음(2인이상주문)"
          items={JjukkumiList__main}
        />
        <MenuSection title="단품 메뉴" items={JjukkumiList__menu} />
        <MenuSection title="고르곤졸라 피자" items={JjukkumiList__pizza} />
        <MenuSection title="주류 및 음료" items={JjukkumiList__drink} />
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

export default Jjukkumi;
