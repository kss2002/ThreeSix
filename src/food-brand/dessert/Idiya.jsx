import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';
import BrandHeader from '../../discharge/BrandHeader';

// 11-1 (리스트 너무 많아서 일단 보류)

// 리스트 선언
const IdiyaList__coffee = [
  {
    name: '아메리카노',
    price: '3,200원',
  },
  {
    name: '(EX)아메리카노',
    price: '4,200원',
  },
  {
    name: '카페 라떼',
    price: '4,200원',
  },
  {
    name: '(EX)카페 라떼',
    price: '5,400원',
  },
  {
    name: '카푸치노',
    price: '4,200원',
  },
  {
    name: '바닐라 라떼',
    price: '4,500원',
  },
  {
    name: '(EX)바닐라 라떼',
    price: '5,700원',
  },
  {
    name: '연유 카페 라떼',
    price: '4,500원',
  },
  {
    name: '(EX)연유 카페 라떼',
    price: '5,700원',
  },
  {
    name: '카라멜 마끼야또',
    price: '4,500원',
  },
  {
    name: '(EX)카라멜 마끼야또',
    price: '5,700원',
  },
  {
    name: '카페 모카',
    price: '4,500원',
  },
  {
    name: '(EX)카페 모카',
    price: '5,700원',
  },
  {
    name: '화이트 초콜릿 모카',
    price: '4,500원',
  },
  {
    name: '(EX)화이트 초콜릿 모카',
    price: '5,700원',
  },
  {
    name: '넛츠 크림 라떼',
    price: '4,700원',
  },
  {
    name: '아포카토',
    price: '4,700원',
  },
  {
    name: '민트 모카',
    price: '4,900원',
  },
];

const IdiyaList__tea = [
  {
    name: '스프링 캐모마일',
    price: '3,200원',
  },
  {
    name: '(EX)스프링 캐모마일',
    price: '4,200원',
  },
  {
    name: '샤인 히비스커스',
    price: '3,200원',
  },
  {
    name: '(EX)샤인 히비스커스',
    price: '4,200원',
  },
  {
    name: '퓨어 페퍼민트',
    price: '3,200원',
  },
  {
    name: '(EX)퓨어 페퍼민트',
    price: '4,200원',
  },
  {
    name: '피치 얼그레이',
    price: '3,200원',
  },
  {
    name: '(EX)피치 얼그레이',
    price: '4,200원',
  },
  {
    name: '그린 루이보스',
    price: '3,200원',
  },
  {
    name: '(EX)그린 루이보스',
    price: '4,200원',
  },
  {
    name: '쌍화차',
    price: '4,200원',
  },
  {
    name: '생강차',
    price: '4,200원',
  },
  {
    name: '밀크티',
    price: '4,200원',
  },
  {
    name: '살얼음 식혜',
    price: '4,200원',
  },
  {
    name: '(EX)살얼음 식혜',
    price: '5,200원',
  },
  {
    name: '버블 크림 밀크티',
    price: '4,700원',
  },
];

const IdiyaList__coldbrew = [
  {
    name: '콜드브루',
    price: '3,900원',
  },
  {
    name: '(EX)콜드브루',
    price: '4,900원',
  },
  {
    name: '콜드브루 니트로',
    price: '4,200원',
  },
  {
    name: '흑당 콜드브루',
    price: '4,200원',
  },
  {
    name: '(EX)흑당 콜드브루',
    price: '5,400원',
  },
  {
    name: '콜드브루 라떼',
    price: '4,500원',
  },
  {
    name: '(EX)콜드브루 라떼',
    price: '5,700원',
  },
  {
    name: '연유 콜드브루',
    price: '4,700원',
  },
  {
    name: '(EX)연유 콜드브루',
    price: '5,900원',
  },
  {
    name: '콜드브루 화이트 비엔나',
    price: '4,900원',
  },
];

const IdiyaList__milkbeverage = [
  {
    name: '흑당 라떼',
    price: '3,700원',
  },
  {
    name: '(EX)흑당 라떼',
    price: '4,900원',
  },
  {
    name: '달고나 라떼',
    price: '3,700원',
  },
  {
    name: '(EX)달고나 라떼',
    price: '4,900원',
  },
  {
    name: '12곡 라떼',
    price: '3,700원',
  },
  {
    name: '초콜릿 라떼',
    price: '3,900원',
  },
  {
    name: '(EX)초콜릿 라떼',
    price: '5,100원',
  },
  {
    name: '녹차 라떼',
    price: '3,900원',
  },
  {
    name: '(EX)녹차 라떼',
    price: '5,100원',
  },
  {
    name: '토피넛 라떼',
    price: '4,200원',
  },
  {
    name: '(EX)토피넛 라떼',
    price: '5,400원',
  },
  {
    name: '민트 초콜릿 라떼',
    price: '4,200원',
  },
  {
    name: '고구마 라떼',
    price: '4,200원',
  },
  {
    name: '버블 흑당 라떼',
    price: '4,700원',
  },
  {
    name: '(EX)버블 흑당 라떼',
    price: '5,900원',
  },
];

const IdiyaList__flatcino = [
  {
    name: '꿀복숭아',
    price: '3,900원',
  },
  {
    name: '망고',
    price: '3,900원',
  },
  {
    name: '초콜릿 칩',
    price: '4,500원',
  },
  {
    name: '민트 초콜릿 칩',
    price: '4,500원',
  },
  {
    name: '플레인 요거트',
    price: '4,500원',
  },
  {
    name: '딸기 요거트',
    price: '4,700원',
  },
  {
    name: '블루베리 요거트',
    price: '4,700원',
  },
];

const IdiyaList__blending = [
  {
    name: '복숭아 아이스티',
    price: '2,900원',
  },
  {
    name: '(EX)복숭아 아이스티',
    price: '3,900원',
  },
  {
    name: '레몬 아이스티',
    price: '2,900원',
  },
  {
    name: '(EX)레몬 아이스티',
    price: '3,900원',
  },
  {
    name: '유자 과일차',
    price: '4,200원',
  },
  {
    name: '자몽 과일차',
    price: '4,200원',
  },
  {
    name: '석류 과일차',
    price: '4,200원',
  },
  {
    name: '유자 피나콜라다',
    price: '4,500원',
  },
  {
    name: '(EX)유자 피나콜라다',
    price: '5,100원',
  },
  {
    name: '자몽 네이블오렌지',
    price: '4,500원',
  },
  {
    name: '(EX)자몽 네이블오렌지',
    price: '5,100원',
  },
  {
    name: '석류 애플라임',
    price: '4,500원',
  },
  {
    name: '(EX)석류 애플라임',
    price: '5,100원',
  },
];

const IdiyaList__ade = [
  {
    name: '레몬 에이드',
    price: '4,200원',
  },
  {
    name: '(EX)레몬 에이드',
    price: '5,200원',
  },
  {
    name: '자몽 에이드',
    price: '4,200원',
  },
  {
    name: '(EX)자몽 에이드',
    price: '5,200원',
  },
  {
    name: '청포도 에이드',
    price: '4,200원',
  },
  {
    name: '(EX)청포도 에이드',
    price: '5,200원',
  },
];

const IdiyaList__juice = [
  {
    name: '홍시 과일주스',
    price: '4,500원',
  },
  {
    name: '골드키위 과일주스',
    price: '4,500원',
  },
  {
    name: '딸기 과일주스',
    price: '4,500원',
  },
];

const IdiyaList__shake = [
  {
    name: '오리진 쉐이크',
    price: '4,700원',
  },
  {
    name: '초코쿠키 쉐이크',
    price: '4,900원',
  },
  {
    name: '딸기 쉐이크',
    price: '5,200원',
  },
];

const IdiyaList__capsule = [
  {
    name: '(캡슐)페르소나 블렌드',
    price: '4,500원',
  },
  {
    name: '(캡슐)콜롬비아 슈프리모',
    price: '4,500원',
  },
  {
    name: '(캡슐)에티오피아 리무',
    price: '4,500원',
  },
];

// 메인 컴포넌트
const Idiya = () => {
  return (
    <section>
      <BrandHeader name="이디야" />
      <main>
        <MenuSection title="커피" items={IdiyaList__coffee} />
        <MenuSection title="티" items={IdiyaList__tea} />
        <MenuSection title="콜드브루" items={IdiyaList__coldbrew} />
        <MenuSection title="밀크 베버리지" items={IdiyaList__milkbeverage} />
        <MenuSection title="플랫치노" items={IdiyaList__flatcino} />
        <MenuSection title="블렌딩티" items={IdiyaList__blending} />
        <MenuSection title="에이드" items={IdiyaList__ade} />
        <MenuSection title="과일주스" items={IdiyaList__juice} />
        <MenuSection title="쉐이크" items={IdiyaList__shake} />
        <MenuSection title="캡슐" items={IdiyaList__capsule} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Idiya;
