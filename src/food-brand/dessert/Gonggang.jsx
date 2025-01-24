import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const GonggangList__coffee = [
  {
    name: '에스프레소',
    price: '3,000원',
  },
  {
    name: '아메리카노',
    price: '4,000원',
  },
  {
    name: '헤이즐넛 아메리카노',
    price: '5,000원',
  },
  {
    name: '카페 라떼',
    price: '4,500원',
  },
  {
    name: '바닐라/카라멜/헤이즐넛/\n모카/헤이즐모카 라떼',
    price: '5,000원',
  },
  {
    name: '카푸치노',
    price: '4,500원',
  },
  {
    name: '플랫화이트',
    price: '4,000원',
  },
  {
    name: '아인슈페너',
    price: '5,000원',
  },
  {
    name: '벌꿀카페라떼',
    price: '5,000원',
  },
  {
    name: '수제 달고나 카페라떼',
    price: '5,500원',
  },
  {
    name: '크림라떼',
    price: '6,000원',
  },
  {
    name: '피스타치오 크림라떼',
    price: '5,500원',
  },
  {
    name: '코코넛스무디커피',
    price: '6,000원',
  },
  {
    name: '아포카토',
    price: '6,500원',
  },
];

const GonggangList__noncoffee = [
  {
    name: '수아청(Hot)',
    price: '5,000원',
  },
  {
    name: '수아청(Ice)',
    price: '5,500원',
  },
  {
    name: '수아청(Ade)',
    price: '6,000원',
  },
  {
    name: '한라봉홍차(Hot)',
    price: '5,000원',
  },
  {
    name: '한라봉홍차(Ice)',
    price: '5,500원',
  },
  {
    name: '한라봉홍차(Ade)',
    price: '6,000원',
  },
  {
    name: '메실차(Hot)',
    price: '4,000원',
  },
  {
    name: '메실차(Ice)',
    price: '4,000원',
  },
  {
    name: '메실차(Ade)',
    price: '4,500원',
  },
  {
    name: '자몽 히비스커스 티(Hot)',
    price: '5,500원',
  },
  {
    name: '자몽 히비스커스 티(Ice)',
    price: '5,500원',
  },
  {
    name: '얼그레이 하이볼\n무알콜(Ade)',
    price: '6,000원',
  },
  {
    name: '피치레몬 아이스티(Ice)',
    price: '4,000원',
  },
  {
    name: '아쌈피치 아이스티(Ice)',
    price: '4,000원',
  },
  {
    name: '골드키위 아이스티(Ice)',
    price: '5,500원',
  },
];

const GonggangList__latte = [
  {
    name: '딸기 라떼',
    price: '5,500원',
  },
  {
    name: '수제 달고나 라떼',
    price: '5,000원',
  },
  {
    name: '밀크티',
    price: '5,500원',
  },
  {
    name: '쌀 라떼',
    price: '5,000원',
  },
  {
    name: '그린티 라떼',
    price: '5,000원',
  },
  {
    name: '초코 라떼',
    price: '5,000원',
  },
  {
    name: '헤이즐넛 초코라떼',
    price: '5,500원',
  },
];

const GonggangList__juice = [
  {
    name: '생토마토방울 주스',
    price: '5,500원',
  },
  {
    name: '생키위 주스',
    price: '5,500원',
  },
  {
    name: '딸기바나나 주스',
    price: '5,000원',
  },
  {
    name: '파인애플 주스',
    price: '5,000원',
  },
  {
    name: '망고 주스',
    price: '5,000원',
  },
  {
    name: '망고 코코넛',
    price: '6,000원',
  },
];

const GonggangList__smoothie = [
  {
    name: '밀크쉐이크',
    price: '5,000원',
  },
  {
    name: '요거트 스무디',
    price: '5,000원',
  },
  {
    name: '딸기 요거트 스무디',
    price: '6,000원',
  },
  {
    name: '망고 요거트 스무디',
    price: '6,000원',
  },
  {
    name: '베리 요거트 스무디',
    price: '5,500원',
  },
  {
    name: '한라봉 요거트 스무디',
    price: '5,500원',
  },
  {
    name: '패션후르츠 요거트 스무디',
    price: '5,500원',
  },
];

const GonggangList__tea = [
  {
    name: '마르코 폴로',
    price: '4,500원',
  },
  {
    name: '웨딩 임페리얼',
    price: '4,500원',
  },
  {
    name: '얼그레이 프렌치 블루',
    price: '4,500원',
  },
  {
    name: '아쿠아로사',
    price: '4,500원',
  },
  {
    name: '마르코 폴로',
    price: '4,500원',
  },
  {
    name: '엑스퓨레 에딕트',
    price: '4,500원',
  },
];

const GonggangList__dessert = [
  {
    name: '당근 케이크',
    price: '5,500원',
  },
  {
    name: '한라봉홍차 케이크',
    price: '5,500원',
  },
  {
    name: '듬뿍생크림 카스테라',
    price: '6,000원',
  },
  {
    name: '헤이즐넛 초콜릿 케이크',
    price: '6,000원',
  },
  {
    name: '단호박 쑥 가또 쇼콜라',
    price: '6,000원',
  },
  {
    name: '말차가또 쇼콜라',
    price: '6,500원',
  },
  {
    name: '제리치즈 케이크',
    price: '6,500원',
  },
  {
    name: '순우유크림 케이크',
    price: '6,000원',
  },
  {
    name: '바닐라 아이스크림',
    price: '6,500원',
  },
  {
    name: '녹차 아이스크림',
    price: '6,500원',
  },
];

const GonggangList__gonggang = [
  {
    name: '생모짜렐라 크로와상 샌드위치',
    price: '7,800원',
  },
  {
    name: '브라우니',
    price: '5,000원',
  },
  {
    name: '브라우니 + \n(바닐라/녹차 아이스크림 택1)',
    price: '6,000원',
  },
  {
    name: '에그타르트',
    price: '3,700원',
  },
  {
    name: '애플 크럼블 타르트',
    price: '4,300원',
  },
  {
    name: '토마토 바질 키슈',
    price: '4,500원',
  },
  {
    name: '대파 치킨햄 키슈',
    price: '4,500원',
  },
  {
    name: '크루와상',
    price: '3,500원',
  },
];

const GonggangList__croiffle = [
  {
    name: '크로플',
    price: '3,900원',
  },
  {
    name: '시나몬 크로플',
    price: '3,900원',
  },
  {
    name: '체다치즈 크로플',
    price: '3,900원',
  },
  {
    name: '누텔라 바나나 크로플',
    price: '6,000원',
  },
  {
    name: '키위생크림 크로플',
    price: '6,000원',
  },
  {
    name: '아이스크림 크로플',
    price: '6,500원',
  },
];

// 메인 컴포넌트
const Gonggang = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">카페 공강</div>

        {/* pc */}
        <div className="detail-pc__background">
          <div className="detail-pc__title">카페 공강</div>
        </div>
      </header>
      <main>
        <MenuSection title="Coffee" items={GonggangList__coffee} />
        <MenuSection title="Non Coffee" items={GonggangList__noncoffee} />
        <MenuSection title="Latte" items={GonggangList__latte} />
        <MenuSection title="Juice" items={GonggangList__juice} />
        <MenuSection title="Smoothie" items={GonggangList__smoothie} />
        <MenuSection title="Tea" items={GonggangList__tea} />
        <MenuSection title="Dessert" items={GonggangList__dessert} />
        <MenuSection title="Gonggang's" items={GonggangList__gonggang} />
        <MenuSection title="Croiffle" items={GonggangList__croiffle} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Gonggang;
