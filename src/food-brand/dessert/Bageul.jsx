import React from 'react';
import { Link } from 'react-router-dom';

// 리스트 선언
const BageulList__signiture = [
  {
    name: '바글티',
    price: '2,000원',
  },
  {
    name: '자몽 아이스티',
    price: '3,200원',
  },
  {
    name: '로얄 밀크티',
    price: '4,500원',
  },
];

const BageulList__black = [
  {
    name: '얼그레이',
    price: '2,500원',
  },
  {
    name: '프렌치바닐라',
    price: '2,500원',
  },
  {
    name: '잉글리시브랙퍼스트',
    price: '2,500원',
  },
  {
    name: '우유/설탕 추가',
    price: '300원',
  },
];

const BageulList__herbal = [
  {
    name: '페퍼민트/캐모마일',
    price: '2,500원',
  },
  {
    name: '루이보스/레몬앤진저',
    price: '2,500원',
  },
  {
    name: '로즈힙히비스커스',
    price: '2,500원',
  },
  {
    name: '라즈베리앤석류',
    price: '2,500원',
  },
];

const BageulList__brand = [
  {
    name: '스티븐 스미스 티메이커',
    price: '4,500원',
  },
];

const BageulList__coffee = [
  {
    name: '아메리카노',
    price: '3,800원',
  },
  {
    name: '카페 라떼',
    price: '4,200원',
  },
  {
    name: '바닐라 라떼',
    price: '4,500원',
  },
];

const BageulList__ade = [
  {
    name: '고홍유자 에이드',
    price: '4,500원',
  },
  {
    name: '제주청귤 에이드',
    price: '4,500원',
  },
  {
    name: '자몽 에이드',
    price: '4,500원',
  },
  {
    name: '청포도 에이드',
    price: '4,500원',
  },
  {
    name: '캐모마일 릴렉서 에이드',
    price: '4,500원',
  },
];

const BageulList__juice = [
  {
    name: '발렌시아 오렌지 주스',
    price: '3,500원',
  },
  {
    name: '홍자몽 주스',
    price: '3,500원',
  },
];

const BageulList__milk = [
  {
    name: '흰 우유',
    price: '2,800원',
  },
  {
    name: '초코 우유',
    price: '3,500원',
  },
];

const BageulList__bread = [
  {
    name: '플레인 베이글',
    price: '1,900원',
  },
  {
    name: '소금빵',
    price: '1,900원',
  },
  {
    name: '깨찰빵',
    price: '2,000원',
  },
  {
    name: '야끼소바빵',
    price: '2,700원',
  },
  {
    name: '연어 베이글 샌드위치',
    price: '5,300원',
  },
  {
    name: '레몬 파운드 케이크',
    price: '1,900원',
  },
  {
    name: '플레인 스콘',
    price: '2,200원',
  },
  {
    name: '스모어 스콘',
    price: '2,500원',
  },
  {
    name: '초코칩 스콘',
    price: '2,500원',
  },
  {
    name: '소프트 바게트',
    price: '2,500원',
  },
  {
    name: '모카번',
    price: '2,500원',
  },
  {
    name: '연유와직녀빵',
    price: '2,700원',
  },
  {
    name: '초코칩베이글',
    price: '2,700원',
  },
  {
    name: '너도내가 브라우니',
    price: '2,800원',
  },
  {
    name: '레몬 갸또',
    price: '2,800원',
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
const Bageul = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">바글바글 베이커리</div>
      </header>
      <main>
        <MenuSection title="SIGNITURE TEA" items={BageulList__signiture} />
        <MenuSection title="Black Tea" items={BageulList__black} />
        <MenuSection title="Herbal Tea" items={BageulList__herbal} />
        <MenuSection title="Brand Tea" items={BageulList__brand} />
        <MenuSection title="Coffee" items={BageulList__coffee} />
        <MenuSection title="Ade" items={BageulList__ade} />
        <MenuSection title="Juice" items={BageulList__juice} />
        <MenuSection title="Milk" items={BageulList__milk} />
        <MenuSection title="Bread" items={BageulList__bread} />
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

export default Bageul;
