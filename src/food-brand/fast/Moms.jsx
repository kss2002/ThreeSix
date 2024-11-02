import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const MomsList__burger = [
  {
    name: '싸이플렉스 버거',
    price: '8,300원',
  },
  {
    name: '아라비아따치즈 버거',
    price: '7,400원',
  },
  {
    name: '인크레더블 버거',
    price: '6,000원',
  },
  {
    name: '싸이 버거',
    price: '4,900원',
  },
  {
    name: '언빌리버블 버거',
    price: '6,500원',
  },
  {
    name: '화이트갈릭 버거',
    price: '5,500원',
  },
  {
    name: '새우불고기 버거',
    price: '6,300원',
  },
];

const MomsList__chicken = [
  {
    name: '후라이드빅싸이순살',
    price: '11,900원',
  },
  {
    name: '후라이드빅싸이순살맥스',
    price: '19,900원',
  },
];

const MomsList__rest = [
  {
    name: '케이준양념감자(중)',
    price: '2,100원',
  },
  {
    name: '바삭크림치즈볼(4조각)',
    price: '3,800원',
  },
  {
    name: '코오슬로',
    price: '1,900원',
  },
  {
    name: '콘샐러드',
    price: '1,900원',
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
const Moms = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">맘스터치</div>
      </header>
      <main>
        <MenuSection title="버거" items={MomsList__burger} />
        <MenuSection title="치킨" items={MomsList__chicken} />
        <MenuSection title="사이드" items={MomsList__rest} />
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

export default Moms;
