import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';

// 리스트 선언
const ChoegojipList__steam = [
  {
    name: '해물찜 (대)',
    price: '65,000원',
  },
  {
    name: '해물찜 (중)',
    price: '55,000원',
  },
  {
    name: '해물찜 (소)',
    price: '45,000원',
  },
  {
    name: '아귀찜 (대)',
    price: '65,000원',
  },
  {
    name: '아귀찜 (중)',
    price: '55,000원',
  },
  {
    name: '아귀찜 (소)',
    price: '45,000원',
  },
  {
    name: '대구뽈찜 (대)',
    price: '59,000원',
  },
  {
    name: '대구뽈찜 (중)',
    price: '49,000원',
  },
  {
    name: '대구뽈찜 (소)',
    price: '39,000원',
  },
];

const ChoegojipList__meal = [
  {
    name: '바지락칼국수',
    price: '9,000원',
  },
  {
    name: '해물칼국수',
    price: '10,000원',
  },
  {
    name: '얼큰수제비',
    price: '10,000원',
  },
  {
    name: '얼큰칼제비',
    price: '10,000원',
  },
  {
    name: '쌀팥죽',
    price: '10,000원',
  },
  {
    name: '새알팥죽',
    price: '10,000원',
  },
  {
    name: '팥칼국수',
    price: '10,000원',
  },
  {
    name: '만두국',
    price: '10,000원',
  },
  {
    name: '낙지볶음',
    price: '10,000원',
  },
  {
    name: '서리태냉콩국수',
    price: '10,000원',
  },
  {
    name: '물,비빔막국수',
    price: '10,000원',
  },
  {
    name: '해물전',
    price: '13,000원',
  },
  {
    name: '야채전',
    price: '10,000원',
  },
  {
    name: '손만두',
    price: '8,000원',
  },
  {
    name: '볶음밥',
    price: '3,000원',
  },
  {
    name: '공기밥',
    price: '1,000원',
  },
];

const ChoegojipList__threesix = [
  {
    name: '대구뽈찜 (대)',
    price: '59,000원',
  },
  {
    name: '대구뽈찜 (중)',
    price: '49,000원',
  },
  {
    name: '대구뽈찜 (소)',
    price: '39,000원',
  },
  {
    name: '삼육식 야채전',
    price: '10,000원',
  },
  {
    name: '삼육식 칼국수',
    price: '9,000원',
  },
  {
    name: '삼육식 얼큰수제비',
    price: '10,000원',
  },
  {
    name: '삼육식 얼큰칼제비',
    price: '10,000원',
  },
  {
    name: '삼육식 쌀팥죽',
    price: '10,000원',
  },
  {
    name: '삼육식 새알팥죽',
    price: '10,000원',
  },
  {
    name: '삼육식 팥칼국수',
    price: '10,000원',
  },
  {
    name: '서리태냉콩국수',
    price: '10,000원',
  },
  {
    name: '삼육식 물,비빔막국수',
    price: '10,000원',
  },
];

const ChoegojipList__drink = [
  {
    name: '백세주',
    price: '10,000원',
  },
  {
    name: '청하',
    price: '6,000원',
  },
  {
    name: '맥주',
    price: '5,000원',
  },
  {
    name: '소주',
    price: '5,000원',
  },
  {
    name: '막걸리',
    price: '4,000원',
  },
  {
    name: '음료',
    price: '2,000원',
  },
];

// 메인 컴포넌트
const Choegojip = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">최고집해물찜칼국수</div>
      </header>
      <main>
        <MenuSection title="찜류" items={ChoegojipList__steam} />
        <MenuSection title="식사류" items={ChoegojipList__meal} />
        <MenuSection title="삼육식" items={ChoegojipList__threesix} />
        <MenuSection title="주류 및 음료" items={ChoegojipList__drink} />
        <MenuBottom />
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Choegojip;
