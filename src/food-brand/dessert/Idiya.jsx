import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 11-1 (리스트 너무 많아서 일단 보류)

// 리스트 선언
const IdiyaList__new = [
  {
    name: '(L)ICED 미니펄 밀크티',
    price: '5,300원',
  },
  {
    name: '(L)ICED 미니펄 망고연유라떼',
    price: '5,700원',
  },
  {
    name: '(L)미니펄 연유커피쉐이크',
    price: '5,900원',
  },
  {
    name: '(L)미니펄 딸기연유플랫치노',
    price: '5,900원',
  },
  {
    name: '(EX)ICED 시그니처 라떼',
    price: '5,900원',
  },
  {
    name: '(EX)ICED 민트 모히또 라떼',
    price: '6,100원',
  },
];

const IdiyaList__coffee = [
  {
    name: '(L)HOT 카페 아메리카노',
    price: '3,200원',
  },
  {
    name: '(L)ICED 카페 아메리카노',
    price: '3,200원',
  },
  {
    name: '(EX)HOT 카페 아메리카노',
    price: '4,200원',
  },
  {
    name: '(EX)ICED 카페 아메리카노',
    price: '4,200원',
  },
  {
    name: '(L)HOT 시그니처 라떼',
    price: '4,700원',
  },
  {
    name: '(L)ICED 시그니처 라떼',
    price: '4,700원',
  },
  {
    name: '(EX)HOT 시그니처 라떼',
    price: '5,900원',
  },
  {
    name: '(EX)ICED 시그니처 라떼',
    price: '5,900원',
  },
  {
    name: '(L)HOT 민트 모히또 라떼',
    price: '4,900원',
  },
  {
    name: '(L)ICED 민트 모히또 라떼',
    price: '4,900원',
  },
  {
    name: '(EX)HOT 민트 모히또 라떼',
    price: '6,100원',
  },
  {
    name: '(EX)ICED 민트 모히또 라떼',
    price: '6,100원',
  },
  {
    name: '(L)HOT 연유 카페 라떼',
    price: '4,500원',
  },
  {
    name: '(L)ICED 연유 카페 라떼',
    price: '4,500원',
  },
  {
    name: '(EX)HOT 연유 카페 라떼',
    price: '5,700원',
  },
  {
    name: '(EX)ICED 연유 카페 라떼',
    price: '5,700원',
  },
  {
    name: '(L)ICED 달달커피',
    price: '2,900원',
  },
  {
    name: '(EX)ICED 달달커피',
    price: '3,900원',
  },
  {
    name: '(L)HOT 카페 라떼',
    price: '4,200원',
  },
  {
    name: '(L)ICED 카페 라떼',
    price: '4,200원',
  },
  {
    name: '(EX)HOT 카페 라떼',
    price: '5,400원',
  },
  {
    name: '(EX)ICED 카페 라떼',
    price: '5,400원',
  },
  {
    name: '(L)HOT 카페 모카',
    price: '4,500원',
  },
  {
    name: '(L)ICED 카페 모카',
    price: '4,500원',
  },
  {
    name: '(EX)HOT 카페 모카',
    price: '5,700원',
  },
  {
    name: '(EX)ICED 카페 모카',
    price: '5,4700원',
  },
];

const IdiyaList__noncoffee = [];

const IdiyaList__collabo = [];

const IdiyaList__ice = [];

const IdiyaList__tea = [];

const IdiyaList__bakery = [];

const IdiyaList__dessert = [];

const IdiyaList__drink = [];

const IdiyaList__coldbrew = [];

const IdiyaList__bubble = [];

const IdiyaList__flatcino = [];

const IdiyaList__blending = [];

const IdiyaList__ade = [];

const IdiyaList__shake = [];

const IdiyaList__bottle = [];

const IdiyaList__snacks = [];

const IdiyaList__stick = [];

const IdiyaList__md = [];

const IdiyaList__capsule = [];

// 메인 컴포넌트
const Idiya = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">이디야</div>

        {/* pc */}
        <div className="detail-pc__background">
          <div className="detail-pc__title">이디야</div>
        </div>
      </header>
      <main>
        <MenuSection title="추천" items={IdiyaList__new} />
        <MenuSection title="커피" items={IdiyaList__coffee} />
        <MenuSection title="디카페인" items={IdiyaList__noncoffee} />
        <MenuSection title="콜라보" items={IdiyaList__collabo} />
        <MenuSection title="빙수" items={IdiyaList__ice} />
        <MenuSection title="아이스티" items={IdiyaList__tea} />
        <MenuSection title="베이커리" items={IdiyaList__bakery} />
        <MenuSection title="디저트&기타" items={IdiyaList__dessert} />
        <MenuSection title="음료" items={IdiyaList__drink} />
        <MenuSection title="콜드브루" items={IdiyaList__coldbrew} />
        <MenuSection title="버블티" items={IdiyaList__bubble} />
        <MenuSection title="플랫치노" items={IdiyaList__flatcino} />
        <MenuSection title="블렌딩티" items={IdiyaList__blending} />
        <MenuSection title="에이드" items={IdiyaList__ade} />
        <MenuSection title="쉐이크" items={IdiyaList__shake} />
        <MenuSection title="병 음료" items={IdiyaList__bottle} />
        <MenuSection title="스낵" items={IdiyaList__snacks} />
        <MenuSection title="스틱커피" items={IdiyaList__stick} />
        <MenuSection title="MD" items={IdiyaList__md} />
        <MenuSection title="캡슐" items={IdiyaList__capsule} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Idiya;
