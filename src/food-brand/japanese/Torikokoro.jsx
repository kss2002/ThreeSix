import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';

// 리스트 선언
const TorikokoroList__menu = [
  {
    name: '쇼유 라멘',
    price: '9,000원',
  },
  {
    name: '시오 라멘',
    price: '9,000원',
  },
];

const TorikokoroList__main = [
  {
    name: '쇼유 라멘',
    price: '9,000원',
  },
  {
    name: '시오 라멘',
    price: '9,000원',
  },
  {
    name: '카라이 미소라멘',
    price: '9,000원',
  },
  {
    name: '마제 소바',
    price: '9,000원',
  },
  {
    name: '시루나시 탄탄멘',
    price: '9,000원',
  },
];

const TorikokoroList__drink = [
  {
    name: '코카콜라',
    price: '2,000원',
  },
  {
    name: '코카콜라 제로',
    price: '2,000원',
  },
  {
    name: '스프라이트',
    price: '2,000원',
  },
  {
    name: '라무네',
    price: '3,000원',
  },
  {
    name: '우롱차',
    price: '3,000원',
  },
  {
    name: '멜론 소다',
    price: '4,000원',
  },
];

// 메인 컴포넌트
const Torikokoro = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">토리코코로</div>
      </header>
      <main>
        <MenuSection title="사장님 추천 메뉴" items={TorikokoroList__menu} />
        <MenuSection title="라멘" items={TorikokoroList__main} />
        <MenuSection title="음료" items={TorikokoroList__drink} />
        <MenuBottom />
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Torikokoro;
