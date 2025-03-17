import React from 'react';
import BrandHeader from '../../discharge/BrandHeader';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const ChulguList__deopbap = [
  {
    name: '연어덮밥(M)',
    price: '12,900원',
  },
  {
    name: '연어덮밥(L)',
    price: '16,900원',
  },
  {
    name: '연어장덮밥(M)',
    price: '12,900원',
  },
  {
    name: '연어장덮밥(L)',
    price: '16,900원',
  },
  {
    name: '돈가스덮밥',
    price: '10,900원',
  },
  {
    name: '매콤돈가스덮밥',
    price: '10,900원',
  },
  {
    name: '매콤항정살덮밥',
    price: '9,900원',
  },
  {
    name: '우삼겹덮밥',
    price: '9,900원',
  },
  {
    name: '닭고기덮밥',
    price: '8,900원',
  },
  {
    name: '치킨가라아게덮밥',
    price: '8,900원',
  },
  {
    name: '새우튀김덮밥',
    price: '8,900원',
  },
  {
    name: '가지덮밥',
    price: '8,900원',
  },
];

const ChulguList__curry = [
  {
    name: '치킨스프카레',
    price: '12,900원',
  },
  {
    name: '야채스프카레',
    price: '11,900원',
  },
  {
    name: '돈가스카레',
    price: '10,900원',
  },
  {
    name: '치킨가라아게카레',
    price: '10,900원',
  },
  {
    name: '매콤우삼겹카레',
    price: '9,900원',
  },
];

const ChulguList__udon = [
  {
    name: '계란카레우동',
    price: '9,900원',
  },
  {
    name: '소고기우동',
    price: '9,900원',
  },
  {
    name: '닭고기우동',
    price: '8,900원',
  },
  {
    name: '유부우동',
    price: '7,900원',
  },
];

const ChulguList__side = [
  {
    name: '치킨가라아게(M)',
    price: '4,000원',
  },
  {
    name: '치킨가라아게(L)',
    price: '6,000원',
  },
  {
    name: '새우튀김',
    price: '4,000원',
  },
  {
    name: '고로케',
    price: '4,000원',
  },
];

const ChulguList__topping = [
  {
    name: '야채튀김',
    price: '1,000원',
  },
  {
    name: '해쉬브라운',
    price: '1,000원',
  },
  {
    name: '반숙계란장(0.5개)',
    price: '500원',
  },
  {
    name: '반숙계란장(1개)',
    price: '1,000원',
  },
  {
    name: '치즈밥 변경(카레)',
    price: '500원',
  },
  {
    name: '치즈 추가(카레)',
    price: '500원',
  },
];

const ChulguList__drink = [
  {
    name: '콜라/사이다/제로',
    price: '2,000원',
  },
];

const Chulgu = () => {
  return (
    <section>
      <BrandHeader name="출구없는 덮밥집" />
      <main>
        <MenuSection title="덮밥" items={ChulguList__deopbap} />
        <MenuSection title="카레" items={ChulguList__curry} />
        <MenuSection title="우동" items={ChulguList__udon} />
        <MenuSection title="사이드" items={ChulguList__side} />
        <MenuSection title="토핑" items={ChulguList__topping} />
        <MenuSection title="음료" items={ChulguList__drink} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Chulgu;
