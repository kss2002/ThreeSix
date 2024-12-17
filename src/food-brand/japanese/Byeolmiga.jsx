import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';

// 리스트 선언
const ByeolmigaList__meal = [
  {
    name: '민찌 카츠',
    price: '8,500원',
  },
  {
    name: '소고기 고로케',
    price: '8,500원',
  },
  {
    name: '고민카츠',
    price: '8,500원',
  },
  {
    name: '로스카츠',
    price: '8,000원',
  },
  {
    name: '문어가라아게',
    price: '8,000원',
  },
  {
    name: '쇼가야꺼동',
    price: '8,500원',
  },
  {
    name: '야끼카레',
    price: '9,500원',
  },
  {
    name: '카니미소 알밥',
    price: '9,000원',
  },
  {
    name: '가츠나베',
    price: '9,000원',
  },
  {
    name: '김치가츠나베',
    price: '9,500원',
  },
  {
    name: '우샤브고마우동',
    price: '7,500원',
  },
  {
    name: '날치알 크림우동',
    price: '8,000원',
  },
  {
    name: '규) 우동',
    price: '7,500원',
  },
  {
    name: '우동면 추가',
    price: '2,500원',
  },
];

const ByeolmigaList__add = [
  {
    name: '민찌카츠',
    price: '3,500원',
  },
  {
    name: '소고기 고로케',
    price: '3,500원',
  },
];

const ByeolmigaList__side = [
  {
    name: '타코야끼',
    price: '4,000원',
  },
  {
    name: '찬샤이식 미니 오뎅나베',
    price: '12,000원',
  },
  {
    name: '찬샤이식 미니 오뎅카츠',
    price: '12,000원',
  },
];

const ByeolmigaList__drink = [
  {
    name: '콜라,사이다',
    price: '2,000원',
  },
  {
    name: '하이볼',
    price: '6,000원',
  },
  {
    name: '참이슬',
    price: '4,000원',
  },
  {
    name: '처음처럼',
    price: '4,000원',
  },
  {
    name: '진로이즈백',
    price: '4,000원',
  },
  {
    name: '테라',
    price: '4,000원',
  },
  {
    name: '카스',
    price: '4,000원',
  },
];

// 메인 컴포넌트
const Byeolmiga = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">별미가</div>
      </header>
      <main>
        <MenuSection title="식사" items={ByeolmigaList__meal} />
        <MenuSection title="추가" items={ByeolmigaList__add} />
        <MenuSection title="사이드" items={ByeolmigaList__side} />
        <MenuSection title="음료/주류" items={ByeolmigaList__drink} />
        <MenuBottom />
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Byeolmiga;
