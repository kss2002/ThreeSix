import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';

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
      <header>
        {/* brand head */}
        <div className="detail__head">담터추어탕</div>
      </header>
      <main>
        <MenuSection title="담터추어탕" items={ChueotangList__main} />
        <MenuSection title="추어튀김" items={ChueotangList__fried} />
        <MenuSection title="국수" items={ChueotangList__noodle} />
        <MenuBottom />
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Chueotang;
