import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const TorikokoroList__menu = [
  {
    name: '쇼유 라멘',
    price: '9,000원',
  },
  {
    name: '시오 라멘',
    price: '9,000원',
  },
];

const TorikokoroList__main = [
  {
    name: '쇼유 라멘',
    price: '9,000원',
  },
  {
    name: '시오 라멘',
    price: '9,000원',
  },
  {
    name: '카라이 미소라멘',
    price: '9,000원',
  },
  {
    name: '마제 소바',
    price: '9,000원',
  },
  {
    name: '시루나시 탄탄멘',
    price: '9,000원',
  },
];

const TorikokoroList__drink = [
  {
    name: '코카콜라',
    price: '2,000원',
  },
  {
    name: '코카콜라 제로',
    price: '2,000원',
  },
  {
    name: '스프라이트',
    price: '2,000원',
  },
  {
    name: '라무네',
    price: '3,000원',
  },
  {
    name: '우롱차',
    price: '3,000원',
  },
  {
    name: '멜론 소다',
    price: '4,000원',
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
const Torikokoro = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">토리코코로</div>
      </header>
      <main>
        <MenuSection title="사장님 추천 메뉴" items={TorikokoroList__menu} />
        <MenuSection title="라멘" items={TorikokoroList__main} />
        <MenuSection title="음료" items={TorikokoroList__drink} />
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

export default Torikokoro;
