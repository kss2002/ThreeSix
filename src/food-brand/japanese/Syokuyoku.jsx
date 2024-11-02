import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const SyokuyokuList__ramen = [
  {
    name: '돈코츠 라멘',
    price: '9,000원',
  },
  {
    name: '카라이 미소라멘',
    price: '9,000원',
  },
  {
    name: '미소 라멘',
    price: '9,000원',
  },
  {
    name: '소유 라멘',
    price: '9,000원',
  },
  {
    name: '삼육식 라멘(매운맛 가능)',
    price: '9,000원',
  },
  {
    name: '+ 면 추가',
    price: '+2,000원',
  },
];

const SyokuyokuList__rice = [
  {
    name: '오므라이스',
    price: '10,000원',
  },
  {
    name: '카레오므라이스',
    price: '10,500원',
  },
  {
    name: '사케동',
    price: '10,500원',
  },
  {
    name: '사케도로동',
    price: '12,000원',
  },
  {
    name: '마제메시',
    price: '9,000원',
  },
  {
    name: '오야꼬동',
    price: '7,500원',
  },
  {
    name: '매운오야꼬동',
    price: '9,000원',
  },
  {
    name: '규동',
    price: '8,500원',
  },
  {
    name: '규동 +(매콤 추가)',
    price: '9,000원',
  },
  {
    name: '일본식 카레',
    price: '8,500원',
  },
];

const SyokuyokuList__fried = [
  {
    name: '로스카츠',
    price: '9,000원',
  },
  {
    name: '히레카츠',
    price: '9,500원',
  },
  {
    name: '매운 돈카츠 / \n매운 토리노 가라아게',
    price: '9,500원',
  },
  {
    name: '토리노 가라아게 정식',
    price: '7,500원',
  },
  {
    name: '치즈카츠',
    price: '10,500원',
  },
];

const SyokuyokuList__warm = [
  {
    name: '스키야끼',
    price: '11,500원',
  },
  {
    name: '가쯔나베',
    price: '9,500원',
  },
  {
    name: '김치 가쯔나베',
    price: '10,500원',
  },
  {
    name: '돈카츠동 /\n(곱빼기는 천원 추가)',
    price: '9,500원',
  },
  {
    name: '가라아게동',
    price: '8,500원',
  },
];

const SyokuyokuList__cotton = [
  {
    name: '마제소바',
    price: '9,500원',
  },
  {
    name: '가케우동',
    price: '7,000원',
  },
  {
    name: '붓가케우동',
    price: '8,500원',
  },
  {
    name: '돈카츠 야끼우동',
    price: '10,000원',
  },
  {
    name: '가라아게 야끼우동',
    price: '10,000원',
  },
  {
    name: '치즈 돈카츠 야끼우동',
    price: '10,500원',
  },
  {
    name: '냉모밀',
    price: '8,500원',
  },
  {
    name: '온모밀',
    price: '8,500원',
  },
  {
    name: '카레우동',
    price: '8,500원',
  },
];

const SyokuyokuList__side = [
  {
    name: '연어 사시미',
    price: '15,000원',
  },
  {
    name: '카레',
    price: '4,500원',
  },
  {
    name: '토리노 가라아가게',
    price: '4,000원',
  },
  {
    name: '로스카츠',
    price: '8,000원',
  },
  {
    name: '치즈카츠',
    price: '5,000원',
  },
  {
    name: '히레카츠',
    price: '4,500원',
  },
];

const SyokuyokuList__drink = [
  {
    name: '콜라',
    price: '2,000원',
  },
  {
    name: '제로콜라',
    price: '2,000원',
  },
  {
    name: '사이다',
    price: '2,000원',
  },
  {
    name: '환타(오렌지)',
    price: '2,000원',
  },
  {
    name: '라무네',
    price: '3,000원',
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
const Syokuyoku = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">쇼쿠요쿠</div>
      </header>
      <main>
        <MenuSection title="라멘" items={SyokuyokuList__ramen} />
        <MenuSection title="든든한 밥" items={SyokuyokuList__rice} />
        <MenuSection title="바삭한 튀김" items={SyokuyokuList__fried} />
        <MenuSection title="따뜻한 국물" items={SyokuyokuList__warm} />
        <MenuSection title="호로록 면" items={SyokuyokuList__cotton} />
        <MenuSection title="곁들임" items={SyokuyokuList__side} />
        <MenuSection title="음료" items={SyokuyokuList__drink} />
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

export default Syokuyoku;
