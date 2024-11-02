import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const ChangList__all = [
  {
    name: '스킨칩스감자',
    price: '8,500원',
  },
  {
    name: '스킨칩스라이스',
    price: '8,000원',
  },
  {
    name: '소고기감자',
    price: '8,500원',
  },
  {
    name: '소고기라이스',
    price: '8,000원',
  },
  {
    name: '소세지감자',
    price: '8,500원',
  },
  {
    name: '감자라이스',
    price: '8,000원',
  },
  {
    name: '바질쉬림프감자',
    price: '9,500원',
  },
  {
    name: '바질쉬림프라이스',
    price: '9,000원',
  },
  {
    name: '쉬림프감자',
    price: '8,500원',
  },
  {
    name: '쉬림프라이스',
    price: '8,500원',
  },
  {
    name: '치킨감자',
    price: '8,500원',
  },
  {
    name: '치킨라이스',
    price: '8,000원',
  },
  {
    name: '훈제치킨감자',
    price: '8,500원',
  },
  {
    name: '훈제치킨라이스',
    price: '8,000원',
  },
  {
    name: '알리오올리오파스타',
    price: '11,900원',
  },
  {
    name: '베이컨크림파스타\nor 리조또',
    price: '11,900원',
  },
  {
    name: '투움바파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '베이컨로제파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '쉬림프치즈오븐파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '쉬림프바질파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '명란버터알리오파스타',
    price: '12,900원',
  },
  {
    name: '봉골레파스타',
    price: '12,900원',
  },
  {
    name: '스테이크크림파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '베이컨필라프',
    price: '10,900원',
  },
  {
    name: '쉬림프필라프',
    price: '10,900원',
  },
  {
    name: '김치베이컨필라프',
    price: '10,900원',
  },
  {
    name: '쉬림프낙지필라프',
    price: '11,900원',
  },
  {
    name: '명란아보카도비빔밥',
    price: '12,900원',
  },
  {
    name: '생크리데미돈까스',
    price: '12,900원',
  },
  {
    name: '매콤생크림돈까스',
    price: '12,900원',
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
const Chang = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">창부리또</div>
      </header>
      <main>
        <MenuSection title="전체 메뉴" items={ChangList__all} />
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

export default Chang;
