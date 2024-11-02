import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const GawanList__meal = [
  {
    name: '짜장면',
    price: '5,000원',
  },
  {
    name: '쟁반볶음짜장(2인 기준)',
    price: '15,000원',
  },
  {
    name: '간짜장',
    price: '6,500원',
  },
  {
    name: '짬 뽕',
    price: '6,500원',
  },
  {
    name: '쟁반볶음짬뽕(2인 기준)',
    price: '15,000원',
  },
  {
    name: '우 동',
    price: '6,500원',
  },
  {
    name: '울 면',
    price: '6,500원',
  },
  {
    name: '볶음밥',
    price: '7,000원',
  },
  {
    name: '매운볶음밥',
    price: '7,000원',
  },
  {
    name: '짜장밥',
    price: '6,000원',
  },
  {
    name: '잡채밥',
    price: '8,000원',
  },
  {
    name: '소고기덮밥',
    price: '8,000원',
  },
  {
    name: '고추덮밥',
    price: '8,000원',
  },
  {
    name: '버섯덮밥',
    price: '8,000원',
  },
  {
    name: '짬뽕밥',
    price: '7,000원',
  },
  {
    name: '우동밥',
    price: '7,000원',
  },
];

const GawanList__cook = [
  {
    name: '치킨탕수육(대)',
    price: '20,000원',
  },
  {
    name: '치킨탕수육(중)',
    price: '15,000원',
  },
  {
    name: '치킨탕수육(소)',
    price: '10,000원',
  },
  {
    name: '버섯탕수육(대)',
    price: '20,000원',
  },
  {
    name: '버섯탕수육(중)',
    price: '15,000원',
  },
  {
    name: '버섯탕수육(소)',
    price: '10,000원',
  },
  {
    name: '소고기탕수육(대)',
    price: '20,000원',
  },
  {
    name: '소고기탕수육(중)',
    price: '15,000원',
  },
  {
    name: '소고기탕수육(소)',
    price: '10,000원',
  },
  {
    name: '깐풍기',
    price: '20,000원',
  },
  {
    name: '라조기',
    price: '20,000원',
  },
];

const GawanList__dumpling = [
  {
    name: '군만두',
    price: '3,000원',
  },
  {
    name: '야채춘권',
    price: '3,000원',
  },
  {
    name: '지마구',
    price: '3,000원',
  },
  {
    name: '사모사',
    price: '3,000원',
  },
];

const GawanList__season = [
  {
    name: '양지쌀국수',
    price: '8,000원',
  },
  {
    name: '빙수냉면',
    price: '7,000원',
  },
  {
    name: '콩국수',
    price: '8,000원',
  },
];

const GawanList__rest = [
  {
    name: '공기밥',
    price: '1,000원',
  },
  {
    name: '음료수',
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
const Gawan = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">중국관</div>
      </header>
      <main>
        <MenuSection title="식사부" items={GawanList__meal} />
        <MenuSection title="요리부" items={GawanList__cook} />
        <MenuSection title="만두나라" items={GawanList__dumpling} />
        <MenuSection title="계절메뉴" items={GawanList__season} />
        <MenuSection title="기타" items={GawanList__rest} />
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

export default Gawan;
