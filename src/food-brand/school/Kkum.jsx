import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import SubHeader from '../SubHeader';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const KkumList__main = [
  {
    name: '즉석 모듬(2~3인분)',
    price: '10,000원',
  },
  {
    name: '즉석 떡볶이(기본)',
    price: '7,000원',
  },
];

const KkumList__add = [
  {
    name: '라면',
    price: '1,000원',
  },
  {
    name: '우동',
    price: '1,000원',
  },
  {
    name: '쫄면',
    price: '1,000원',
  },
  {
    name: '오뎅',
    price: '1,000원',
  },
  {
    name: '야채',
    price: '1,000원',
  },
  {
    name: '당면',
    price: '1,000원',
  },
  {
    name: '떡사리',
    price: '1,000원',
  },
  {
    name: '계란',
    price: '500원',
  },
  {
    name: '모짜렐라치즈',
    price: '1,000원',
  },
  {
    name: '슬라이스치즈',
    price: '1,000원',
  },
  {
    name: '볶음밥',
    price: '1,500원',
  },
];

const KkumList__fried = [
  {
    name: '야끼만두',
    price: '400원',
  },
  {
    name: '후랑크',
    price: '400원',
  },
  {
    name: '맛살',
    price: '400원',
  },
  {
    name: '김말이',
    price: '400원',
  },
];

const KkumList__drink = [
  {
    name: '쿨피스',
    price: '1,500원',
  },
  {
    name: '환타',
    price: '1,000원',
  },
  {
    name: '콜라 500ml',
    price: '1,500원',
  },
  {
    name: '사이다 500ml',
    price: '1,500원',
  },
];

// 메인 컴포넌트
const Kkum = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">꿈꾸는 떡볶이</div>

        {/* pc */}
        <SubHeader />
        <div className="detail-pc__background">
          <div className="detail-pc__title">꿈꾸는 떡볶이</div>
        </div>
      </header>
      <main>
        <MenuSection title="메인 메뉴" items={KkumList__main} />
        <MenuSection title="추가 사리" items={KkumList__add} />
        <MenuSection title="튀김" items={KkumList__fried} />
        <MenuSection title="음료" items={KkumList__drink} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Kkum;
