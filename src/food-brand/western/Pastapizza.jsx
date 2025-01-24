import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const PastapizzaList__tomato = [
  {
    name: '몽키 파스타',
    price: '6,500원',
  },
  {
    name: '토마토 파스타',
    price: '8,000원',
  },
  {
    name: '미트볼 파스타',
    price: '8,500원',
  },
  {
    name: '치킨토마토 파스타',
    price: '8,500원',
  },
  {
    name: '아마트리치아나',
    price: '9,000원',
  },
  {
    name: '칠리새우토마토 파스타',
    price: '9,500원',
  },
  {
    name: '해물토마토 파스타',
    price: '9,900원',
  },
  {
    name: '해물짬뽕 파스타',
    price: '9,900원',
  },
];

const PastapizzaList__cream = [
  {
    name: '크림 파스타',
    price: '6,500원',
  },
  {
    name: '까르보나라',
    price: '9,000원',
  },
  {
    name: '매운 까르보나라',
    price: '9,000원',
  },
  {
    name: '새우크림 파스타',
    price: '9,500원',
  },
  {
    name: '칠리홍게살크림 파스타',
    price: '9,500원',
  },
  {
    name: '크림치킨 파스타',
    price: '9,500원',
  },
  {
    name: '해산물 파스타',
    price: '9,900원',
  },
  {
    name: '불고기 파스타',
    price: '9,500원',
  },
  {
    name: '빠네 파스타',
    price: '13,500원',
  },
];

const PastapizzaList__oil = [
  {
    name: '알리오올리오 파스타',
    price: '8,500원',
  },
  {
    name: '새우알리오올리오 파스타',
    price: '9,500원',
  },
  {
    name: '봉골레 파스타',
    price: '9,900원',
  },
  {
    name: '홍게살오일 파스타',
    price: '9,500원',
  },
];

const PastapizzaList__pilaff = [
  {
    name: '불고기 필라프',
    price: '10,500원',
  },
  {
    name: '베이컨 필라프',
    price: '9,500원',
  },
  {
    name: '새우 필라프',
    price: '9,500원',
  },
  {
    name: '치킨 필라프',
    price: '9,500원',
  },
];

const PastapizzaList__overin = [
  {
    name: '토마토 치즈오븐 파스타',
    price: '9,500원',
  },
  {
    name: '미트 치즈오븐 파스타',
    price: '9,500원',
  },
  {
    name: '크림 치즈오븐 파스타',
    price: '9,500원',
  },
];

const PastapizzaList__risotto = [
  {
    name: '크림새우 리조또',
    price: '9,500원',
  },
  {
    name: '크림치킨 리조또',
    price: '9,500원',
  },
  {
    name: '크림비프 리조또',
    price: '9,500원',
  },
  {
    name: '토마토해물 리조또',
    price: '9,900원',
  },
  {
    name: '토마토치킨 리조또',
    price: '9,500원',
  },
];

const PastapizzaList__rose = [
  {
    name: '새우로제 파스타',
    price: '9,500원',
  },
  {
    name: '홍게살로제 파스타',
    price: '9,500원',
  },
];

const PastapizzaList__salad = [
  {
    name: '치킨 샐러드',
    price: '8,500원',
  },
  {
    name: '돈까스 샐러드',
    price: '9,000원',
  },
  {
    name: '마늘빵 2개',
    price: '1,000원',
  },
];

const PastapizzaList__basic = [
  {
    name: '마르코 피자(L)',
    price: '14,900원',
  },
  {
    name: '마르코 피자(R)',
    price: '11,900원',
  },
  {
    name: '고르곤졸라(L)',
    price: '14,900원',
  },
  {
    name: '고르곤졸라(R)',
    price: '11,900원',
  },
  {
    name: '더블페퍼로니 피자(L)',
    price: '14,900원',
  },
  {
    name: '더블페퍼로니 피자(R)',
    price: '11,900원',
  },
  {
    name: '치즈 피자(L)',
    price: '14,900원',
  },
  {
    name: '치즈 피자(R)',
    price: '11,900원',
  },
  {
    name: '슈퍼슈프림 피자(L)',
    price: '14,900원',
  },
  {
    name: '슈퍼슈프림 피자(R)',
    price: '11,900원',
  },
  {
    name: '불고기 피자(L)',
    price: '14,900원',
  },
  {
    name: '불고기 피자(R)',
    price: '11,900원',
  },
  {
    name: '고구마 피자(L)',
    price: '14,900원',
  },
  {
    name: '고구마 피자(R)',
    price: '11,900원',
  },
  {
    name: '하와이안 피자(L)',
    price: '14,900원',
  },
  {
    name: '하와이안 피자(R)',
    price: '11,900원',
  },
  {
    name: '핫페퍼로니 피자(L)',
    price: '14,900원',
  },
  {
    name: '핫페퍼로니 피자(R)',
    price: '11,900원',
  },
  {
    name: '야채 피자(L)',
    price: '14,900원',
  },
  {
    name: '야채 피자(R)',
    price: '11,900원',
  },
];

const PastapizzaList__special = [
  {
    name: '스위트골드 피자(L)',
    price: '19,900원',
  },
  {
    name: '스위트골드 피자(R)',
    price: '14,900원',
  },
  {
    name: '포테이토 피자(L)',
    price: '19,900원',
  },
  {
    name: '포테이토 피자(R)',
    price: '14,900원',
  },
  {
    name: '슈퍼불고기 피자(L)',
    price: '19,900원',
  },
  {
    name: '슈퍼불고기 피자(R)',
    price: '14,900원',
  },
  {
    name: '슈퍼콤비네이션 피자(L)',
    price: '19,900원',
  },
  {
    name: '슈퍼콤비네이션 피자(R)',
    price: '14,900원',
  },
  {
    name: '베이컨체다 피자(L)',
    price: '19,900원',
  },
  {
    name: '베이컨체다 피자(R)',
    price: '14,900원',
  },
  {
    name: '크림쉬림프 치즈피자(L)',
    price: '19,900원',
  },
  {
    name: '크림쉬림프 치즈피자(R)',
    price: '14,900원',
  },
  {
    name: '프리미엄 오븐치킨',
    price: '13,900원',
  },
];

const PastapizzaList__side = [
  {
    name: '핫윙(6조각)',
    price: '5,000원',
  },
  {
    name: '치킨텐더(5조각)',
    price: '5,000원',
  },
  {
    name: '치즈스틱(6조각)',
    price: '5,000원',
  },
  {
    name: '갈릭소스 , 피클',
    price: '500원',
  },
  {
    name: '파마산',
    price: '200원',
  },
  {
    name: '핫소스',
    price: '100원',
  },
  {
    name: '칠성 사이다 1.25L',
    price: '2,500원',
  },
  {
    name: '코카콜라 500ml',
    price: '1,500원',
  },
  {
    name: '코카콜라 1.25L',
    price: '2,500원',
  },
  {
    name: '웰치스 350ml',
    price: '1,500원',
  },
  {
    name: '치즈크러스트 추가',
    price: '3,000원',
  },
  {
    name: '고구마크러스트 추가',
    price: '3,000원',
  },
  {
    name: '씬 도우 추가',
    price: '1,000원',
  },
];

// 메인 컴포넌트
const Pastapizza = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">오렌지몽키파스타&마르코죤스피자</div>

        {/* pc */}
        <div className="detail-pc__background">
          <div className="detail-pc__title">
            오렌지몽키파스타&마르코죤스피자
          </div>
        </div>
      </header>
      <main>
        <MenuSection title="토마토 소스" items={PastapizzaList__tomato} />
        <MenuSection title="크림 소스" items={PastapizzaList__cream} />
        <MenuSection title="올리브오일 소스" items={PastapizzaList__oil} />
        <MenuSection title="필라프" items={PastapizzaList__pilaff} />
        <MenuSection title="오븐 파스타" items={PastapizzaList__overin} />
        <MenuSection title="리조또" items={PastapizzaList__risotto} />
        <MenuSection title="로제 소스" items={PastapizzaList__rose} />
        <MenuSection title="샐러드" items={PastapizzaList__salad} />
        <MenuSection title="베이직피자" items={PastapizzaList__basic} />
        <MenuSection title="스페셜 피자" items={PastapizzaList__special} />
        <MenuSection title="사이드 메뉴" items={PastapizzaList__side} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Pastapizza;
