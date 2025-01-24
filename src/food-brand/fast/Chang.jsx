import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const ChangList__all = [
  {
    name: '스킨칩스감자',
    price: '8,500원',
  },
  {
    name: '스킨칩스라이스',
    price: '8,000원',
  },
  {
    name: '소고기감자',
    price: '8,500원',
  },
  {
    name: '소고기라이스',
    price: '8,000원',
  },
  {
    name: '소세지감자',
    price: '8,500원',
  },
  {
    name: '감자라이스',
    price: '8,000원',
  },
  {
    name: '바질쉬림프감자',
    price: '9,500원',
  },
  {
    name: '바질쉬림프라이스',
    price: '9,000원',
  },
  {
    name: '쉬림프감자',
    price: '8,500원',
  },
  {
    name: '쉬림프라이스',
    price: '8,500원',
  },
  {
    name: '치킨감자',
    price: '8,500원',
  },
  {
    name: '치킨라이스',
    price: '8,000원',
  },
  {
    name: '훈제치킨감자',
    price: '8,500원',
  },
  {
    name: '훈제치킨라이스',
    price: '8,000원',
  },
  {
    name: '알리오올리오파스타',
    price: '11,900원',
  },
  {
    name: '베이컨크림파스타\nor 리조또',
    price: '11,900원',
  },
  {
    name: '투움바파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '베이컨로제파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '쉬림프치즈오븐파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '쉬림프바질파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '명란버터알리오파스타',
    price: '12,900원',
  },
  {
    name: '봉골레파스타',
    price: '12,900원',
  },
  {
    name: '스테이크크림파스타\nor 리조또',
    price: '12,900원',
  },
  {
    name: '베이컨필라프',
    price: '10,900원',
  },
  {
    name: '쉬림프필라프',
    price: '10,900원',
  },
  {
    name: '김치베이컨필라프',
    price: '10,900원',
  },
  {
    name: '쉬림프낙지필라프',
    price: '11,900원',
  },
  {
    name: '명란아보카도비빔밥',
    price: '12,900원',
  },
  {
    name: '생크리데미돈까스',
    price: '12,900원',
  },
  {
    name: '매콤생크림돈까스',
    price: '12,900원',
  },
];

// 메인 컴포넌트
const Chang = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">창부리또</div>

        {/* pc */}
        <div className="detail-pc__background">
          <div className="detail-pc__title">창부리또</div>
        </div>
      </header>
      <main>
        <MenuSection title="전체 메뉴" items={ChangList__all} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Chang;
