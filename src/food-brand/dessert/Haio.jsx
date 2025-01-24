import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const HaioList__coffee = [
  {
    name: '아메리카노(Hot/Ice)',
    price: '2,000원',
  },
  {
    name: '믹스커피(Hot/Ice)',
    price: '2,500원',
  },
  {
    name: '카페 라떼(Hot/Ice)',
    price: '2,800원',
  },
  {
    name: '카푸치노(Hot/Ice)',
    price: '2,800원',
  },
  {
    name: '바닐라 라떼(Hot/Ice)',
    price: '3,300원',
  },
  {
    name: '헤이즐넛 라떼(Hot/Ice)',
    price: '3,300원',
  },
  {
    name: '하이슈페너(Hot/Ice)',
    price: '3,400원',
  },
  {
    name: '카라멜 마끼아또(Hot/Ice)',
    price: '3,500원',
  },
  {
    name: '카페 모카(Hot/Ice)',
    price: '3,500원',
  },
  {
    name: '콜드브루(Hot/Ice)',
    price: '3,300원',
  },
  {
    name: '연유 라떼(Hot/Ice)',
    price: '3,500원',
  },
];

const HaioList__bubblin = [
  {
    name: '흑당 밀크 버블린(Ice)',
    price: '4,300원',
  },
  {
    name: '타로 밀크 버블린(Ice)',
    price: '4,300원',
  },
  {
    name: '홍차 밀크 버블린(Ice)',
    price: '4,300원',
  },
];

const HaioList__coconut = [
  {
    name: '코코넛(Ice)\n(커피/밀크/망고)',
    price: '4,200원',
  },
];

const HaioList__beverage = [
  {
    name: '딸기 라떼(Ice)',
    price: '3,500원',
  },
  {
    name: '초코 라떼(Ice)',
    price: '3,500원',
  },
  {
    name: '고구마 라떼(Ice)',
    price: '3,500원',
  },
  {
    name: '녹차 라떼(Ice)',
    price: '3,500원',
  },
  {
    name: '홍차 라떼(Ice)',
    price: '3,500원',
  },
  {
    name: '민트초코칩 라떼(Ice)',
    price: '3,500원',
  },
  {
    name: '블루베리 라떼(Ice)',
    price: '3,500원',
  },
  {
    name: '미숫가루 라떼(Ice)',
    price: '3,500원',
  },
];

const HaioList__blended = [
  {
    name: '플레인 요거트 스무디(Ice)',
    price: '3,900원',
  },
  {
    name: '딸기 요거트 스무디(Ice)',
    price: '3,900원',
  },
  {
    name: '망고 요거트 스무디(Ice)',
    price: '3,900원',
  },
  {
    name: '블루베리 요거트 스무디(Ice)',
    price: '3,900원',
  },
  {
    name: '녹차 프라페(Ice)',
    price: '3,900원',
  },
  {
    name: '자바초코칩 프라페(Ice)',
    price: '4,200원',
  },
  {
    name: '민트초코칩 프라페(Ice)',
    price: '4,200원',
  },
  {
    name: '폭탄초코 프라페(Ice)',
    price: '4,200원',
  },
  {
    name: '쿠키&크림 프라페(Ice)',
    price: '4,200원',
  },
];

const HaioList__signature = [
  {
    name: '딸기 스노잉(Ice)',
    price: '4,200원',
  },
  {
    name: '망고 스노잉(Ice)',
    price: '4,200원',
  },
  {
    name: '블루베리 스노잉(Ice)',
    price: '4,200원',
  },
  {
    name: '바다 소금 커피(Ice)',
    price: '3,900원',
  },
  {
    name: '바다 소금 라떼(Ice)',
    price: '4,200원',
  },
];

const HaioList__ade = [
  {
    name: '청포도/자몽/블루레몬(Ice)',
    price: '3,800원',
  },
];

const HaioList__tea = [
  {
    name: '아이스티 복숭아(Ice)',
    price: '3,000원',
  },
  {
    name: '캐모마일(Ice)',
    price: '2,500원',
  },
  {
    name: '페퍼민트(Ice)',
    price: '2,500원',
  },
  {
    name: '루이보스(Ice)',
    price: '2,500원',
  },
  {
    name: '얼그레이(Ice)',
    price: '2,500원',
  },
  {
    name: '식혜(Ice)',
    price: '2,500원',
  },
  {
    name: '자몽/레몬/유자(Ice)',
    price: '3,500원',
  },
];

const HaioList__topping = [
  {
    name: '에스프레소(Ice)\n샷/펄/시럽 추가',
    price: '500원',
  },
];

// 메인 컴포넌트
const Haio = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">하이오 커피</div>

        {/* pc */}
        <div className="detail-pc__background">
          <div className="detail-pc__title">하이오 커피</div>
        </div>
      </header>
      <main>
        <MenuSection title="COFFEE" items={HaioList__coffee} />
        <MenuSection title="BUBBLIN" items={HaioList__bubblin} />
        <MenuSection title="COCONUT" items={HaioList__coconut} />
        <MenuSection title="BEVERAGE" items={HaioList__beverage} />
        <MenuSection title="BLENDED" items={HaioList__blended} />
        <MenuSection title="SIGNATURE" items={HaioList__signature} />
        <MenuSection title="ADE" items={HaioList__ade} />
        <MenuSection title="TEA" items={HaioList__tea} />
        <MenuSection title="TOPPING" items={HaioList__topping} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Haio;
