import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const ManyeoList__main = [
  {
    name: '빨강즉석떡볶이',
    price: '10,000원',
  },
  {
    name: '파랑즉석떡볶이',
    price: '13,000원',
  },
];

const ManyeoList__menu = [
  {
    name: '떡볶이1인분',
    price: '4,000원',
  },
  {
    name: '치즈퐁떡',
    price: '8,000원',
  },
  {
    name: '후랑크소세지(5개)',
    price: '2,500원',
  },
  {
    name: '치즈스틱(3개)',
    price: '2,500원',
  },
  {
    name: '납작만두(5개)',
    price: '3,000원',
  },
  {
    name: '모둠튀김(6개)',
    price: '5,000원',
  },
  {
    name: '모둠튀김(4개)',
    price: '3,500원',
  },
];

const ManyeoList__add = [
  {
    name: '라면',
    price: '1,500원',
  },
  {
    name: '떡',
    price: '1,500원',
  },
  {
    name: '어묵',
    price: '1,500원',
  },
  {
    name: '쫄면',
    price: '1,500원',
  },
  {
    name: '우동',
    price: '1,500원',
  },
  {
    name: '당면',
    price: '1,500원',
  },
  {
    name: '중국당면',
    price: '3,000원',
  },
  {
    name: '계란',
    price: '500원',
  },
  {
    name: '슬라이스치즈',
    price: '500원',
  },
  {
    name: '치즈떡',
    price: '4,000원',
  },
  {
    name: '모짜렐라치즈',
    price: '4,000원',
  },
  {
    name: '볶음밥',
    price: '2,500원',
  },
];

const ManyeoList__rice = [
  {
    name: '참치주먹밥',
    price: '4,000원',
  },
  {
    name: '참치김치주먹밥',
    price: '4,000원',
  },
  {
    name: '김치주먹밥',
    price: '4,000원',
  },
];

const ManyeoList__and = [
  {
    name: '주떡(소)',
    price: '4,500원',
  },
  {
    name: '주떡(중)',
    price: '5,000원',
  },
  {
    name: '주떡(대)',
    price: '5,500원',
  },
];

const ManyeoList__cotton = [
  {
    name: '치킨까스',
    price: '8,500원',
  },
  {
    name: '치즈치킨까스',
    price: '9,500원',
  },
  {
    name: '고구마치즈돈까스',
    price: '9,500원',
  },
  {
    name: '비빔쫄면',
    price: '7,000원',
  },
  {
    name: '돈까스',
    price: '8,500원',
  },
  {
    name: '치즈돈까스',
    price: '9,500원',
  },
  {
    name: '비건까스',
    price: '9,500원',
  },
  {
    name: '어묵우동',
    price: '6,000원',
  },
  {
    name: '얼큰김치우동',
    price: '6,500원',
  },
];

const ManyeoList__drink = [
  {
    name: '쿨피스',
    price: '2,500원',
  },
  {
    name: '환타',
    price: '2,000원',
  },
  {
    name: '콜라/사이다(소)',
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
const Manyeo = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">마녀 떡볶이</div>
      </header>
      <main>
        <MenuSection title="마녀 즉석 떡볶이 메뉴" items={ManyeoList__main} />
        <MenuSection title="마녀 떡볶이 메뉴" items={ManyeoList__menu} />
        <MenuSection title="사리 추가 메뉴" items={ManyeoList__add} />
        <MenuSection title="주먹밥 메뉴" items={ManyeoList__rice} />
        <MenuSection title="주먹밥&떡볶이 메뉴" items={ManyeoList__and} />
        <MenuSection title="까스&면류" items={ManyeoList__cotton} />
        <MenuSection title="음료수 메뉴" items={ManyeoList__drink} />
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

export default Manyeo;
