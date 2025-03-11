import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import UpDown from '../UpDown';
import MainFooter from '../../main-components/MainFooter';
import BrandHeader from '../../discharge/BrandHeader';

// 리스트 선언
const MaemeodeuList__coffee = [
  {
    name: '아메리카노(S)',
    price: '1,200원',
  },
  {
    name: '아메리카노(M)',
    price: '1,600원',
  },
  {
    name: '아메리카노(L)',
    price: '3,000원',
  },
  {
    name: '꿀 커피(S)',
    price: '1,800원',
  },
  {
    name: '꿀 커피(M)',
    price: '2,300원',
  },
  {
    name: '꿀 커피(L)',
    price: '3,500원',
  },
  {
    name: '헤이즐럿 커피(S)',
    price: '2,300원',
  },
  {
    name: '헤이즐럿 커피(M)',
    price: '2,800원',
  },
  {
    name: '카페 라떼(S)',
    price: '2,200원',
  },
  {
    name: '카페 라떼(M)',
    price: '2,700원',
  },
  {
    name: '카페 라떼(L)',
    price: '4,800원',
  },
  {
    name: '꿀 라떼(S)',
    price: '2,600원',
  },
  {
    name: '꿀 라떼(M)',
    price: '3,100원',
  },
  {
    name: '꿀 라떼(L)',
    price: '5,200원',
  },
  {
    name: '헤이즐넛 라떼(S)',
    price: '3,000원',
  },
  {
    name: '헤이즐넛 라떼(M)',
    price: '3,600원',
  },
  {
    name: '바닐라/아몬드 라떼(S)',
    price: '2,500원',
  },
  {
    name: '바닐라/아몬드 라떼(M)',
    price: '3,100원',
  },
  {
    name: '바닐라/아몬드 라떼(L)',
    price: '5,200원',
  },
  {
    name: '바나나 달달(S)',
    price: '2,600원',
  },
  {
    name: '바나나 달달(M)',
    price: '3,300원',
  },
  {
    name: '베트남 연유 커피(S)',
    price: '2,600원',
  },
  {
    name: '베트남 연유 커피(M)',
    price: '3,300원',
  },
  {
    name: '카페 모카(S)',
    price: '2,700원',
  },
  {
    name: '카페 모카(M)',
    price: '3,300원',
  },
  {
    name: '카페 모카(L)',
    price: '5,400원',
  },
  {
    name: '믹스 커피(M)',
    price: '3,000원',
  },
  {
    name: '그린티/토피넛 샷 라떼(S)',
    price: '3,000원',
  },
  {
    name: '그린티/토피넛 샷 라떼(M)',
    price: '3,700원',
  },
  {
    name: '그린티/토피넛 샷 라떼(L)',
    price: '5,800원',
  },
  {
    name: '솔티드 카라멜 마키야또(S)',
    price: '3,200원',
  },
  {
    name: '솔티드 카라멜 마키야또(M)',
    price: '4,000원',
  },
  {
    name: '아샷추 복숭아 아이스티(M)',
    price: '3,400원',
  },
  {
    name: '아샷추 복숭아 아이스티(L)',
    price: '4,400원',
  },
  {
    name: '아인슈페너(S)',
    price: '2,500원',
  },
  {
    name: '아인슈페너 라떼(S)',
    price: '3,500원',
  },
  {
    name: '바닐라 크럼블 \n아이스크림 라떼(S)',
    price: '4,900원',
  },
];

const MaemeodeuList__coldbrew = [
  {
    name: '콜드브루(S)',
    price: '1,700원',
  },
  {
    name: '콜드브루(M)',
    price: '2,300원',
  },
  {
    name: '콜드브루(L)',
    price: '3,500원',
  },
  {
    name: '콜드브루 라떼(S)',
    price: '2,500원',
  },
  {
    name: '콜드브루 라떼(M)',
    price: '3,000원',
  },
  {
    name: '콜드브루 라떼(L)',
    price: '5,000원',
  },
  {
    name: '돌체 콜드브루 라떼(S)',
    price: '2,800원',
  },
  {
    name: '돌체 콜드브루 라떼(M)',
    price: '3,500원',
  },
  {
    name: '돌체 콜드브루 라떼(L)',
    price: '5,500원',
  },
  {
    name: '달고나 콜드브루 라떼(M)',
    price: '4,500원',
  },
];

const MaemeodeuList__nonCoffee = [
  {
    name: '초코 라떼(S)',
    price: '2,300원',
  },
  {
    name: '초코 라떼(M)',
    price: '2,900원',
  },
  {
    name: '초코 라떼(L)',
    price: '4,800원',
  },
  {
    name: '고구마 라떼(S)',
    price: '2,600원',
  },
  {
    name: '고구마 라떼(M)',
    price: '3,400원',
  },
  {
    name: '고구마 라떼(L)',
    price: '5,000원',
  },
  {
    name: '그린티/토피넛 라떼(S)',
    price: '2,600원',
  },
  {
    name: '그린티/토피넛 라떼(M)',
    price: '3,300원',
  },
  {
    name: '그린티/토피넛 라떼(L)',
    price: '5,000원',
  },
  {
    name: '곡물 라떼(M)',
    price: '3,400원',
  },
  {
    name: '로얄 밀크티(M)',
    price: '3,500원',
  },
  {
    name: '로얄 밀크티(L)',
    price: '5,000원',
  },
  {
    name: '아몬드 밀크티(M)',
    price: '3,700원',
  },
  {
    name: '아몬드 밀크티(L)',
    price: '5,200원',
  },
  {
    name: '달고나 라떼(M)',
    price: '4,000원',
  },
  {
    name: '딸기 라떼(M)',
    price: '4,500원',
  },
];

const MaemeodeuList__teaAde = [
  {
    name: '유자티/에이드(M)',
    price: '2,300원',
  },
  {
    name: '유자티/에이드(L)',
    price: '3,500원',
  },
  {
    name: '인크레드불(M)',
    price: '3,000원',
  },
  {
    name: '복숭아 아이스티(M)',
    price: '3,000원',
  },
  {
    name: '복숭아 아이스티(L)',
    price: '4,000원',
  },
  {
    name: '레몬밤 민트티(M)',
    price: '3,500원',
  },
  {
    name: '히비스커스 유자티(M)',
    price: '3,500원',
  },
  {
    name: '청포도 에이드(M)',
    price: '3,500원',
  },
  {
    name: '티/에이드(M) \n 한라봉/자몽/청귤/블루레몬',
    price: '3,500원',
  },
  {
    name: '매머드 에이드(L)',
    price: '3,900원',
  },
  {
    name: '에이드(M) \n 깔라만시/장수 오미자',
    price: '3,600원',
  },
  {
    name: '에이드(L) \n 깔라만시/장수 오미자',
    price: '4,500원',
  },
  {
    name: '얼그레이 티(M)',
    price: '3,700원',
  },
  {
    name: '레몬&오렌지 티(M)',
    price: '3,700원',
  },
  {
    name: '캐모마일 티(M)',
    price: '3,700원',
  },
  {
    name: '페퍼민트 티(M)',
    price: '3,700원',
  },
  {
    name: '지리산 청매실티(M)',
    price: '4,000원',
  },
  {
    name: '수박 주스(M)',
    price: '4,000원',
  },
  {
    name: '파인애플 주스(M)',
    price: '4,000원',
  },
];

const MaemeodeuList__zero = [
  {
    name: '제로 복숭아 아이스티(M)',
    price: '3,000원',
  },
  {
    name: '제로 복숭아 아이스티(L)',
    price: '4,000원',
  },
  {
    name: '제로 체리콕 에이드(M)',
    price: '3,600원',
  },
  {
    name: '제로 체리콕 에이드(L)',
    price: '4,500원',
  },
];

const MaemeodeuList__frappeBlended = [
  {
    name: '퍼플 젤리 스무디(M)',
    price: '3,900원',
  },
  {
    name: '플레인 요거트 스무디M)',
    price: '3,900원',
  },
  {
    name: '딸기 요거트 스무디(M)',
    price: '4,000원',
  },
  {
    name: '블루베리 요거트 스무디(M)',
    price: '4,000원',
  },
  {
    name: '밀크 쉐이크(M)',
    price: '4,000원',
  },
  {
    name: '딸기 밀크쉐이크(M)',
    price: '4,500원',
  },
  {
    name: '솔티드 카라멜 밀크쉐이크(M)',
    price: '4,500원',
  },
  {
    name: '피넛버터 밀크쉐이크(M)',
    price: '4,500원',
  },
  {
    name: '초코 밀크쉐이크(M)',
    price: '4,500원',
  },
  {
    name: '리얼 스무디(M) \n (망고/배/복숭아)',
    price: '4,500원',
  },
  {
    name: '바나나 초코칩 프라페(M)',
    price: '4,000원',
  },
  {
    name: '자바칩 프라페(M)',
    price: '4,500원',
  },
  {
    name: '피스타치오 아몬드 프라페(M)',
    price: '4,500원',
  },
  {
    name: '민트 초코 프라페(M)',
    price: '4,500원',
  },
  {
    name: '오레오 초코 프라페(M)',
    price: '4,500원',
  },
  {
    name: '그린티 프라페(M)',
    price: '4,500원',
  },
  {
    name: '초코 프라페(M)',
    price: '4,500원',
  },
  {
    name: '콜드브루 커피 프라페(M)',
    price: '4,500원',
  },
];

// 메인 컴포넌트
const Maemeodeu = () => {
  return (
    <section>
      <BrandHeader name="매머드 커피" />
      <main>
        <MenuSection title="커피" items={MaemeodeuList__coffee} />
        <MenuSection title="콜드브루" items={MaemeodeuList__coldbrew} />
        <MenuSection title="논커피" items={MaemeodeuList__nonCoffee} />
        <MenuSection title="티&에이드" items={MaemeodeuList__teaAde} />
        <MenuSection title="제로" items={MaemeodeuList__zero} />
        <MenuSection
          title="프라페/블렌디드"
          items={MaemeodeuList__frappeBlended}
        />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Maemeodeu;
