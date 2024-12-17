import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';

// 리스트 선언
const GamjatangList__none = [
  {
    name: '메뉴를 찾을 수 없었습니다😱',
    price: '0원',
  },
];

// 메인 컴포넌트

const Gamjatang = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">세상만사 감자탕</div>
      </header>
      <main>
        <MenuSection title="카페, 디저트" items={GamjatangList__none} />
        <MenuBottom />
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Gamjatang;
