import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';

// 리스트 선언
const JikjinList__main = [
  {
    name: '닭강정 (대)',
    price: '16,500원',
  },
  {
    name: '닭강정 (중)',
    price: '13,000원',
  },
  {
    name: '닭강정 (소)',
    price: '8,500원',
  },
  {
    name: '맛 선택 가능',
    price: '순한 맛/매콤한 맛/후라이드',
  },
];

const JikjinList__drink = [
  {
    name: '콜라 1.25L',
    price: '2,500원',
  },
  {
    name: '콜라 500ml',
    price: '1,500원',
  },
  {
    name: '사이다 1.25L',
    price: '2,500원',
  },
  {
    name: '사이다 500ml',
    price: '1,500원',
  },
];

const JikjinList__extra = [
  {
    name: '치킨무',
    price: '500원',
  },
  {
    name: '떡 추가',
    price: '1,00원',
  },
];

// 메인 컴포넌트
const Jikjin = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">직진닭강정</div>
      </header>
      <main>
        <MenuSection title="닭강정" items={JikjinList__main} />
        <MenuSection title="음료" items={JikjinList__drink} />
        <MenuSection title="추가" items={JikjinList__extra} />
        <MenuBottom />
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Jikjin;
