import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import SubHeader from '../SubHeader';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const CheoneList__main = [
  {
    name: '모듬 세트',
    price: '58,000원',
  },
  {
    name: '한우소머리전골(대)',
    price: '49,000원',
  },
  {
    name: '한우소머리전골(중)',
    price: '38,000원',
  },
  {
    name: '한우소머리설렁탕',
    price: '13,000원',
  },
  {
    name: '한우소머리곰탕',
    price: '13,000원',
  },
  {
    name: '청와설렁탕',
    price: '10,000원',
  },
  {
    name: '청와곰탕',
    price: '10,000원',
  },
  {
    name: '한방족발',
    price: '40,000원',
  },
  {
    name: '매운양념족발',
    price: '42,000원',
  },
  {
    name: '명이마늘보쌈',
    price: '39,000원',
  },
  {
    name: '뚝배기닭볶음탕',
    price: '10,000원',
  },
  {
    name: '소고기국밥',
    price: '10,000원',
  },
  {
    name: '청와칼국수',
    price: '9,000원',
  },
  {
    name: '홍와칼국수',
    price: '9,000원',
  },
  {
    name: '들깨칼국수',
    price: '9,000원',
  },
  {
    name: '콩국수',
    price: '9,000원',
  },
  {
    name: '메밀막국수(비빔)',
    price: '9,000원',
  },
  {
    name: '보쌈정식',
    price: '11,000원',
  },
  {
    name: '사골떡만두국',
    price: '9,000원',
  },
  {
    name: '낙지만두',
    price: '7,000원',
  },
  {
    name: '투명감자만두',
    price: '6,000원',
  },
];

// 메인 컴포넌트
const Cheone = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">청와삼대</div>

        {/* pc */}
        <SubHeader />
        <div className="detail-pc__background">
          <div className="detail-pc__title">청와삼대</div>
        </div>
      </header>
      <main>
        <MenuSection title="청와삼대 메뉴" items={CheoneList__main} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Cheone;
