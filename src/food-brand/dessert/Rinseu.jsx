import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const RinseuList__coffee = [
  {
    name: '츄러스 크림 라떼',
    price: '5,800원',
  },
  {
    name: '아메리카노',
    price: '3,800원',
  },
  {
    name: '카페 라떼',
    price: '4,300원',
  },
  {
    name: '흑임자 라떼',
    price: '5,800원',
  },
  {
    name: '크림 라떼',
    price: '5,600원',
  },
  {
    name: '린테슈페너',
    price: '5,000원',
  },
];

const RinseuList__noncoffee = [
  {
    name: '밀크티 봉봉',
    price: '5,600원',
  },
  {
    name: '초코 우유',
    price: '5,600원',
  },
  {
    name: '딸기 우유',
    price: '5,600원',
  },
  {
    name: '쑥크림 라떼',
    price: '5,700원',
  },
  {
    name: '복숭아 아이스티',
    price: '3,500원',
  },
  {
    name: '시트러스 블라썸 아이스티',
    price: '5,700원',
  },
  {
    name: '피치패션 블랙 아이스티',
    price: '5,500원',
  },
];

const RinseuList__icecream = [
  {
    name: '아포카토',
    price: '6,000원',
  },
  {
    name: '망고 샤베트 에이드',
    price: '7,000원',
  },
];

const RinseuList__tea = [
  {
    name: '홍차',
    price: '4,500원',
  },
  {
    name: '자스민',
    price: '4,500원',
  },
  {
    name: '로즈마리',
    price: '4,500원',
  },
  {
    name: '캐모마일',
    price: '5,000원',
  },
  {
    name: '루이보스',
    price: '6,000원',
  },
  {
    name: '민트',
    price: '4,000원',
  },
  {
    name: '자몽 수제차',
    price: '5,500원',
  },
  {
    name: '레몬 수제차',
    price: '5,500원',
  },
  {
    name: '레몬 생강차',
    price: '6,000원',
  },
  {
    name: '패션후르츠차',
    price: '5,500원',
  },
];

const RinseuList__ade = [
  {
    name: '파인애플 머스캣티 에이드',
    price: '5,700원',
  },
  {
    name: '히비스커스 레몬 에이드',
    price: '5,700원',
  },
  {
    name: '라즈베리 자몽 에이드',
    price: '5,700원',
  },
  {
    name: '패션후르츠 에이드',
    price: '5,700원',
  },
  {
    name: '한라봉 에이드',
    price: '5,600원',
  },
];

const RinseuList__rest = [
  {
    name: '+설탕시럽',
    price: '0원',
  },
  {
    name: '알룰로스 변경',
    price: '500원',
  },
  {
    name: '비정제 설탕 변경',
    price: '500원',
  },
];

const RinseuList__bread = [
  {
    name: '생과일 케이크',
    price: '50,000원',
  },
  {
    name: '천상의 맛 카이막 세트',
    price: '8,900원',
  },
  {
    name: '양송이 스프 세트',
    price: '7,500원',
  },
  {
    name: '플레인',
    price: '4,500원',
  },
  {
    name: '과일&그래놀라',
    price: '7,500원',
  },
  {
    name: '연남동 파카치아',
    price: '5,300원',
  },
  {
    name: '타르트',
    price: '6,500원',
  },
  {
    name: '생망고 빙수',
    price: '23,000원',
  },
  {
    name: '복숭아 빙수',
    price: '22,000원',
  },
  {
    name: '린테st.대만빙수',
    price: '23,000원',
  },
];

// 메인 컴포넌트
const Rinseu = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">린스테이블</div>

        {/* pc */}
        <div className="detail-pc__background">
          <div className="detail-pc__title">린스테이블</div>
        </div>
      </header>
      <main>
        <MenuSection title="COFFEE" items={RinseuList__coffee} />
        <MenuSection title="NON COFFEE" items={RinseuList__noncoffee} />
        <MenuSection title="ICECREAM" items={RinseuList__icecream} />
        <MenuSection title="TEA" items={RinseuList__tea} />
        <MenuSection title="ADE" items={RinseuList__ade} />
        <MenuSection title="추가" items={RinseuList__rest} />
        <MenuSection title="사이드" items={RinseuList__bread} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Rinseu;
