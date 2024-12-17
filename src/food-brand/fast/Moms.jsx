import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';

// 리스트 선언
const MomsList__burger = [
  {
    name: '싸이플렉스 버거',
    price: '8,300원',
  },
  {
    name: '아라비아따치즈 버거',
    price: '7,400원',
  },
  {
    name: '인크레더블 버거',
    price: '6,000원',
  },
  {
    name: '싸이 버거',
    price: '4,900원',
  },
  {
    name: '언빌리버블 버거',
    price: '6,500원',
  },
  {
    name: '화이트갈릭 버거',
    price: '5,500원',
  },
  {
    name: '새우불고기 버거',
    price: '6,300원',
  },
];

const MomsList__chicken = [
  {
    name: '후라이드빅싸이순살',
    price: '11,900원',
  },
  {
    name: '후라이드빅싸이순살맥스',
    price: '19,900원',
  },
];

const MomsList__rest = [
  {
    name: '케이준양념감자(중)',
    price: '2,100원',
  },
  {
    name: '바삭크림치즈볼(4조각)',
    price: '3,800원',
  },
  {
    name: '코오슬로',
    price: '1,900원',
  },
  {
    name: '콘샐러드',
    price: '1,900원',
  },
];

// 메인 컴포넌트
const Moms = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">맘스터치</div>
      </header>
      <main>
        <MenuSection title="버거" items={MomsList__burger} />
        <MenuSection title="치킨" items={MomsList__chicken} />
        <MenuSection title="사이드" items={MomsList__rest} />
        <MenuBottom />
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Moms;
