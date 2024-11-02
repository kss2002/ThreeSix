import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const DalkkalbiList__new = [
  {
    name: '돌아온 삼고비',
    price: '8,000원',
  },
];

const DalkkalbiList__main = [
  {
    name: '2인 스마일 세트',
    price: '26,000원',
  },
  {
    name: '3인 스마일 세트',
    price: '40,500원',
  },
  {
    name: '4인 스마일 세트',
    price: '54,000원',
  },
  {
    name: '2인 치즈스마일 세트',
    price: '30,000원',
  },
  {
    name: '3인 치즈스마일 세트',
    price: '46,500원',
  },
  {
    name: '4인 치즈스마일 세트',
    price: '62,000원',
  },
  {
    name: '라면',
    price: '2,000원',
  },
  {
    name: '우동',
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
const Dalkkalbi = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">스마일 닭갈비</div>
      </header>
      <main>
        <MenuSection title="새로 나온 메뉴" items={DalkkalbiList__new} />
        <MenuSection title="닭갈비" items={DalkkalbiList__main} />
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

export default Dalkkalbi;
