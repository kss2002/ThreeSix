import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';
import BrandHeader from '../../discharge/BrandHeader';

// 리스트 선언
const SeumailList__coffee = [
  {
    name: '아메리카노(M)',
    price: '2,500원',
  },
  {
    name: '아메리카노(L)',
    price: '3,000원',
  },
  {
    name: '아메리카노(XL)',
    price: '3,800원',
  },
  {
    name: '헤즐넛 아메리카노(M)',
    price: '2,700원',
  },
  {
    name: '헤즐넛 아메리카노(L)',
    price: '3,200원',
  },
  {
    name: '헤즐넛 아메리카노(XL)',
    price: '4,000원',
  },
  {
    name: '카페 라떼/카푸치노(M)',
    price: '3,200원',
  },
  {
    name: '카페 라떼/카푸치노(L)',
    price: '4,000원',
  },
  {
    name: '카페 라떼/카푸치노(XL)',
    price: '5,000원',
  },
  {
    name: '바닐라 라떼(M)',
    price: '3,500원',
  },
  {
    name: '바닐라 라떼(L)',
    price: '4,300원',
  },
  {
    name: '바닐라 라떼(XL)',
    price: '5,500원',
  },
  {
    name: '헤즐넛 라떼(M)',
    price: '3,500원',
  },
  {
    name: '헤즐넛 라떼(L)',
    price: '4,300원',
  },
  {
    name: '헤즐넛 라떼(XL)',
    price: '5,500원',
  },
  {
    name: '연유 라떼(M)',
    price: '3,500원',
  },
  {
    name: '연유 라떼(L)',
    price: '4,300원',
  },
  {
    name: '연유 라떼(XL)',
    price: '5,500원',
  },
  {
    name: '흑당 라떼(M)',
    price: '3,500원',
  },
  {
    name: '흑당 라떼(L)',
    price: '4,300원',
  },
  {
    name: '코코넛 모카 라떼(M)',
    price: '3,900원',
  },
  {
    name: '코코넛 모카 라떼(L)',
    price: '4,700원',
  },
  {
    name: '토피넛 카라멜 라떼(M)',
    price: '3,900원',
  },
  {
    name: '토피넛 카라멜 라떼(L)',
    price: '4,700원',
  },
  {
    name: '카라멜 마끼아또(M)',
    price: '4,200원',
  },
  {
    name: '카라멜 마끼아또(L)',
    price: '4,900원',
  },
  {
    name: '카페 모카(M)',
    price: '4,200원',
  },
  {
    name: '카페 모카(L)',
    price: '4,900원',
  },
  {
    name: '화이트 모카(M)',
    price: '4,200원',
  },
  {
    name: '화이트 모카(L)',
    price: '4,900원',
  },
  {
    name: '헤즐넛 모카(M)',
    price: '4,500원',
  },
  {
    name: '헤즐넛 모카(L)',
    price: '5,200원',
  },
  {
    name: '민트 모카(M)',
    price: '4,500원',
  },
  {
    name: '민트 모카(L)',
    price: '5,200원',
  },
  {
    name: '말차라떼',
    price: '3,500원',
  },
  {
    name: '카페 말차라떼',
    price: '4,100원',
  },
];

const SeumailList__bubble = [
  {
    name: '타로 버블티(L)',
    price: '4,700원',
  },
  {
    name: '녹차 버블티(L)',
    price: '4,700원',
  },
  {
    name: '초코 버블티(L)',
    price: '5,000원',
  },
  {
    name: '흑당 밀크 버블티(L)',
    price: '5,000원',
  },
  {
    name: '흑당 라떼 버블티(L)',
    price: '5,000원',
  },
  {
    name: '로얄 밀크 버블티(L)',
    price: '5,300원',
  },
];

const SeumailList__others = [
  {
    name: '복숭아/레몬 아이스티(L)',
    price: '3,000원',
  },
  {
    name: '복숭아/레몬 아이스티(XL)',
    price: '4,000원',
  },
  {
    name: '체리/노을/바다 에이드(L)',
    price: '3,500원',
  },
  {
    name: '체리/노을/바다 에이드(XL)',
    price: '4,500원',
  },
  {
    name: '레몬/자몽/청포도 에이드(L)',
    price: '3,700원',
  },
  {
    name: '레몬/자몽/청포도 에이드(XL)',
    price: '4,700원',
  },
  {
    name: '블루 레몬에이드(L)',
    price: '4,500원',
  },
  {
    name: '블루 레몬에이드(XL)',
    price: '5,500원',
  },
  {
    name: '유자 애플티(L)',
    price: '4,500원',
  },
  {
    name: '자몽 블랙티(L)',
    price: '4,500원',
  },
  {
    name: '유자차 /\n레몬티 /\n한라봉 오미자차(M)',
    price: '3,500원',
  },
  {
    name: '유자차 /\n레몬티 /\n한라봉 오미자차(L)',
    price: '4,200원',
  },
  {
    name: '홍차(M)',
    price: '3,200원',
  },
  {
    name: '홍차(XL)',
    price: '4,500원',
  },
  {
    name: '허브 티(M)',
    price: '3,200원',
  },
  {
    name: '허브 티(XL)',
    price: '4,500원',
  },
  {
    name: '헤즐넛 초코/초코라떼(M)',
    price: '3,500원',
  },
  {
    name: '헤즐넛 초코/초코라떼(L)',
    price: '4,200원',
  },
  {
    name: '녹차/오곡/블루베리라떼(M)',
    price: '3,500원',
  },
  {
    name: '녹차/오곡/블루베리라떼(L)',
    price: '4,200원',
  },
  {
    name: '흑당/연유 밀크티(M)',
    price: '3,900원',
  },
  {
    name: '흑당/연유 밀크티(L)',
    price: '4,600원',
  },
  {
    name: '더블/토피넛/민트 초콜릿(M)',
    price: '4,200원',
  },
  {
    name: '더블/토피넛/민트 초콜릿(L)',
    price: '4,900원',
  },
  {
    name: '고구마 라떼(M)',
    price: '4,200원',
  },
  {
    name: '고구마 라떼(L)',
    price: '4,900원',
  },
  {
    name: '로얄 밀크티(M)',
    price: '4,200원',
  },
  {
    name: '로얄 밀크티(L)',
    price: '4,900원',
  },
];

const SeumailList__blended = [
  {
    name: '자두 스무디(M)',
    price: '4,500원',
  },
  {
    name: '자두 스무디(L)',
    price: '5,500원',
  },
  {
    name: '고구마 스무디 라떼(M)',
    price: '5,000원',
  },
  {
    name: '고구마 스무디 라떼(L)',
    price: '6,000원',
  },
  {
    name: '망고 코코넛 스무디(M)',
    price: '5,500원',
  },
  {
    name: '망고 코코넛 스무디(L)',
    price: '6,500원',
  },
  {
    name: '요거트 스무디(M)\n(플레인/레몬/딸기/블루베리)',
    price: '5,500원',
  },
  {
    name: '요거트 스무디(L)\n(플레인/레몬/딸기/블루베리)',
    price: '6,500원',
  },
  {
    name: '녹차 프리잔떼(M)',
    price: '5,000원',
  },
  {
    name: '녹차 프리잔떼(L)',
    price: '6,000원',
  },
  {
    name: '카라멜 프리잔떼(M)',
    price: '5,000원',
  },
  {
    name: '카라멜 프리잔떼(L)',
    price: '6,000원',
  },
  {
    name: '모카 프리잔떼(M)',
    price: '5,000원',
  },
  {
    name: '모카 프리잔떼(L)',
    price: '6,000원',
  },
  {
    name: '초코칩 프리잔떼(M)',
    price: '5,500원',
  },
  {
    name: '초코칩 프리잔떼(L)',
    price: '6,500원',
  },
  {
    name: '쿠키&크림 프리잔떼(M)',
    price: '5,500원',
  },
  {
    name: '쿠키&크림 프리잔떼(L)',
    price: '6,500원',
  },
  {
    name: '민트 초코칩 프리잔떼(M)',
    price: '5,500원',
  },
  {
    name: '민트 초코칩 프리잔떼(L)',
    price: '6,500원',
  },
  {
    name: '돼지바(M)',
    price: '6,000원',
  },
  {
    name: '돼지바(L)',
    price: '7,000원',
  },
  {
    name: '크크 스트로베리(M)',
    price: '6,000원',
  },
  {
    name: '크크 스트로베리(L)',
    price: '7,000원',
  },
  {
    name: '제철 생과일 주스(M)',
    price: '4,500원',
  },
  {
    name: '제철 생과일 주스(L)',
    price: '5,500원',
  },
];

// 메인 컴포넌트
const Seumail = () => {
  return (
    <section>
      <BrandHeader name="스마일하우스" />
      <main>
        <MenuSection title="COFFEE" items={SeumailList__coffee} />
        <MenuSection title="BUBBLE TEA" items={SeumailList__bubble} />
        <MenuSection title="OTHERS" items={SeumailList__others} />
        <MenuSection title="ICE BLENDED" items={SeumailList__blended} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Seumail;
