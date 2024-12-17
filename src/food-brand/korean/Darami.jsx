import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';

// 리스트 선언
const DaramiList__main = [
  {
    name: '도토리 쟁반국수(2인)',
    price: '22,000원',
  },
  {
    name: '도토리 임자탕',
    price: '10,000원',
  },
  {
    name: '국산콩 청국장',
    price: '9,000원',
  },
  {
    name: '국산콩 비지찌개',
    price: '9,000원',
  },
  {
    name: '도토리전',
    price: '7,000원',
  },
  {
    name: '보리밥',
    price: '9,000원',
  },
  {
    name: '공기밥',
    price: '1,000원',
  },
];

const DaramiList__summer = [
  {
    name: '콩국수',
    price: '9,000원',
  },
];

// 메인 컴포넌트
const Darami = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">다람이임자탕</div>
      </header>
      <main>
        <MenuSection title="다람이임자탕 차림표" items={DaramiList__main} />
        <MenuSection title="하절기" items={DaramiList__summer} />
        <MenuBottom />
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Darami;
