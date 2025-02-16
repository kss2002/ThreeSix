import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';
import BrandHeader from '../../discharge/BrandHeader';

// 리스트 선언
const ChueotangList__main = [
  {
    name: '통추',
    price: '13,000원',
  },
  {
    name: '갈추',
    price: '13,000원',
  },
];

const ChueotangList__fried = [
  {
    name: '한개',
    price: '16,000원',
  },
  {
    name: '반개',
    price: '9,000원',
  },
];

const ChueotangList__noodle = [
  {
    name: '비빔',
    price: '8,000원',
  },
  {
    name: '잔치',
    price: '8,000원',
  },
  {
    name: '곱빼기',
    price: '9,000원',
  },
];

// 메인 컴포넌트
const Chueotang = () => {
  return (
    <section>
      <BrandHeader name="담터추어탕" />
      <main>
        <MenuSection title="담터추어탕" items={ChueotangList__main} />
        <MenuSection title="추어튀김" items={ChueotangList__fried} />
        <MenuSection title="국수" items={ChueotangList__noodle} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Chueotang;
