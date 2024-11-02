import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const MaemeodeuList__coffee = [
  {
    name: '디카페인 아메리카노(M)',
    price: '2,300원',
  },
  {
    name: '아메리카노(L)',
    price: '3,000원',
  },
  {
    name: '아메리카노(M)',
    price: '1,600원',
  },
  {
    name: '아메리카노(S)',
    price: '1,200원',
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
const Maemeodeu = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">매머드 커피</div>
      </header>
      <main>
        <MenuSection title="커피" items={MaemeodeuList__coffee} />
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

export default Maemeodeu;
