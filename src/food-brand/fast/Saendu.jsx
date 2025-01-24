import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const SaenduList__sandwich = [
  {
    name: '깻잎불고기',
    price: '7,900원',
  },
  {
    name: '에그스프레드',
    price: '3,900원',
  },
  {
    name: '에그달콤',
    price: '5,800원',
  },
  {
    name: '인기가요',
    price: '6,000원',
  },
  {
    name: '햄치즈에그',
    price: '6,500원',
  },
  {
    name: '에그마요',
    price: '6,500원',
  },
  {
    name: '햄에그',
    price: '6,000원',
  },
  {
    name: '햄치즈',
    price: '6,000원',
  },
  {
    name: '게살',
    price: '6,500원',
  },
  {
    name: '치킨텐더',
    price: '6,900원',
  },
  {
    name: '통새우튀김',
    price: '6,900원',
  },
  {
    name: '해쉬포테이토',
    price: '6,500원',
  },
  {
    name: '치킨데리야끼',
    price: '6,500원',
  },
  {
    name: '치킨스파이시',
    price: '6,500원',
  },
  {
    name: '바질아보카도',
    price: '7,900원',
  },
];

const SaenduList__poke = [
  {
    name: '클래식연어포케',
    price: '12,500원',
  },
  {
    name: '스파이시연어포케',
    price: '12,500원',
  },
  {
    name: '그릴드목살포케',
    price: '11,900원',
  },
  {
    name: '우삼겹포케',
    price: '11,900원',
  },
  {
    name: '하와이쉬림프포케',
    price: '11,900원',
  },
  {
    name: '그릴드훈제오리포케',
    price: '10,900원',
  },
  {
    name: '머쉬룸포케',
    price: '9,900원',
  },
  {
    name: '수비드닭가슴살포케',
    price: '9,900원',
  },
];

const SaenduList__salad = [
  {
    name: '에그마요 샐러드',
    price: '8,000원',
  },
  {
    name: '구운버섯 샐러드',
    price: '8,500원',
  },
  {
    name: '수비드닭가슴살 샐러드',
    price: '8,500원',
  },
  {
    name: '치킨텐더 샐러드',
    price: '8,500원',
  },
  {
    name: '단호박오리훈제 샐러드',
    price: '8,900원',
  },
  {
    name: '게살듬뿍 샐러드',
    price: '8,000원',
  },
  {
    name: '구운쉬림프 샐러드',
    price: '8,900원',
  },
  {
    name: '크림파스타 샐러드',
    price: '8,900원',
  },
  {
    name: '우삼겹 오트밀 샐러드',
    price: '8,000원',
  },
  {
    name: '리코타치즈 샐러드',
    price: '8,900원',
  },
  {
    name: '오트밀 그린 샐러드',
    price: '7,200원',
  },
];

const SaenduList__coffee = [
  {
    name: '아메리카노',
    price: '3,500원',
  },
  {
    name: '카페 라떼',
    price: '4,000원',
  },
  {
    name: '바닐라 라떼',
    price: '4,500원',
  },
  {
    name: '돌체 라떼',
    price: '4,500원',
  },
  {
    name: '카페 모카',
    price: '4,500원',
  },
  {
    name: '크림 라떼',
    price: '5,000원',
  },
];

const SaenduList__noncoffee = [
  {
    name: '초코 라떼',
    price: '4,900원',
  },
  {
    name: '딸기 라떼',
    price: '6,000원',
  },
  {
    name: '미숫가루',
    price: '5,000원',
  },
  {
    name: '냉마',
    price: '5,000원',
  },
];

const SaenduList__ade = [
  {
    name: '레몬에이드',
    price: '4,900원',
  },
  {
    name: '자몽에이드',
    price: '4,900원',
  },
  {
    name: '오렌지에이드',
    price: '4,900원',
  },
  {
    name: '청포도에이드',
    price: '4,900원',
  },
  {
    name: '히비스카스 레몬에이드',
    price: '4,900원',
  },
  {
    name: '체리콕',
    price: '5,000원',
  },
];

const SaenduList__smoothie = [
  {
    name: '플레인요거트 스무디',
    price: '5,000원',
  },
  {
    name: '블루베리요거트 스무디',
    price: '5,500원',
  },
  {
    name: '죠리퐁 스무디',
    price: '5,000원',
  },
  {
    name: '미숫가루 스무디',
    price: '5,500원',
  },
];

const SaenduList__juice = [
  {
    name: '딸기 주스',
    price: '5,000원',
  },
  {
    name: '딸기바나나 주스',
    price: '5,500원',
  },
  {
    name: '바나나 주스',
    price: '5,000원',
  },
  {
    name: '꿀토마토 주스',
    price: '5,500원',
  },
];

const SaenduList__1L = [
  {
    name: '아메리카노',
    price: '6,500원',
  },
  {
    name: '카페 라떼',
    price: '8,000원',
  },
  {
    name: '바닐라 라떼',
    price: '8,500원',
  },
  {
    name: '돌체 라떼',
    price: '8,500원',
  },
  {
    name: '냉마',
    price: '9,500원',
  },
  {
    name: '미숫가루',
    price: '9,500원',
  },
];

const SaenduList__bottle = [
  {
    name: '이소라 주스',
    price: '4,900원',
  },
  {
    name: '생딸기 우유',
    price: '4,900원',
  },
  {
    name: '복숭아 아이스티',
    price: '4,500원',
  },
  {
    name: '레몬참 아이스티',
    price: '4,500원',
  },
];

// 메인 컴포넌트
const Saendu = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">샌두</div>

        {/* pc */}
        <div className="detail-pc__background">
          <div className="detail-pc__title">샌두</div>
        </div>
      </header>
      <main>
        <MenuSection title="샌드위치" items={SaenduList__sandwich} />
        <MenuSection title="포케" items={SaenduList__poke} />
        <MenuSection title="샐러드" items={SaenduList__salad} />
        <MenuSection title="커피" items={SaenduList__coffee} />
        <MenuSection title="음료" items={SaenduList__noncoffee} />
        <MenuSection title="에이드" items={SaenduList__ade} />
        <MenuSection title="스무디" items={SaenduList__smoothie} />
        <MenuSection title="주스" items={SaenduList__juice} />
        <MenuSection title="1L 드링크" items={SaenduList__1L} />
        <MenuSection title="보틀 및 아이스티" items={SaenduList__bottle} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Saendu;
