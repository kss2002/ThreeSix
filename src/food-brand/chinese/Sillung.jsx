import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import SubHeader from '../SubHeader';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const SillungList__main = [
  {
    name: '기본마라탕(1인분)',
    price: '12,000원',
  },
  {
    name: '기본마라탕(2인분)',
    price: '22,000원',
  },
  {
    name: '마라샹궈(1인분)',
    price: '17,000원',
  },
  {
    name: '마라샹궈(2인분)',
    price: '30,000원',
  },
  {
    name: '마라반(1인분)',
    price: '14,000원',
  },
  {
    name: '꿔바로우(소)',
    price: '10,000원',
  },
  {
    name: '꿔바로우(대)',
    price: '16,000원',
  },
  {
    name: '마라떡볶이(1인분)',
    price: '7,000원',
  },
  {
    name: '마라떡볶이(2인분)',
    price: '14,000원',
  },
  {
    name: '눈꽃마라떡볶이(1인분)',
    price: '8,000원',
  },
  {
    name: '눈꽃마라떡볶이(2인분)',
    price: '16,000원',
  },
];

const SillungList__set = [
  {
    name: '마라탕+꿔바로우(1인분)',
    price: '21,000원',
  },
  {
    name: '마라탕+꿔바로우(2인분)',
    price: '40,000원',
  },
  {
    name: '마라탕+새우볶음밥(1인분)',
    price: '18,000원',
  },
  {
    name: '마라탕+새우볶음밥(2인분)',
    price: '28,000원',
  },
  {
    name: '마라탕+계란볶음밥(1인분)',
    price: '17,000원',
  },
  {
    name: '마라탕+계란볶음밥(2인분)',
    price: '27,000원',
  },
  {
    name: '마라샹궈+꿔바로우(1인분)',
    price: '25,000원',
  },
  {
    name: '마라샹궈+꿔바로우(2인분)',
    price: '48,000원',
  },
  {
    name: '마라샹궈+새우볶음밥(1인분)',
    price: '22,000원',
  },
  {
    name: '마라샹궈+새우볶음밥(2인분)',
    price: '40,000원',
  },
  {
    name: '마라샹궈+계란볶음밥(1인분)',
    price: '21,000원',
  },
  {
    name: '마라샹궈+계란볶음밥(2인분)',
    price: '38,000원',
  },
  {
    name: '마라반+꿔바로우(1인분)',
    price: '22,000원',
  },
  {
    name: '마라반+꿔바로우(2인분)',
    price: '40,000원',
  },
  {
    name: '마라반+새우볶음밥(1인분)',
    price: '19,000원',
  },
  {
    name: '마라반+새우볶음밥(2인분)',
    price: '36,000원',
  },
  {
    name: '마라반+계란볶음밥(1인분)',
    price: '18,000원',
  },
  {
    name: '마라반+계란볶음밥(2인분)',
    price: '34,000원',
  },
  {
    name: '눈꽃마라떡볶이 +\n계란볶음밥(1인분)',
    price: '12,000원',
  },
  {
    name: '눈꽃마라떡볶이 +\n계란볶음밥(2인분)',
    price: '23,000원',
  },
  {
    name: '눈꽃마라떡볶이 +\n새우볶음밥(1인분)',
    price: '13,000원',
  },
  {
    name: '눈꽃마라떡볶이 +\n새우볶음밥(2인분)',
    price: '24,000원',
  },
  {
    name: '마라떡볶이 +\n새우볶음밥(1인분)',
    price: '12,000원',
  },
  {
    name: '마라떡볶이 +\n새우볶음밥(2인분)',
    price: '23,000원',
  },
  {
    name: '마라떡볶이 +\n계란볶음밥(1인분)',
    price: '11,000원',
  },
  {
    name: '마라떡볶이 +\n계란볶음밥(2인분)',
    price: '22,000원',
  },
];

const SillungList__side = [
  {
    name: '새우볶음밥',
    price: '6,000원',
  },
  {
    name: '계란야채볶음밥',
    price: '5,000원',
  },
  {
    name: '쫀득한 미니전',
    price: '2,000원',
  },
  {
    name: '공기밥',
    price: '1,000원',
  },
];

const SillungList__drink = [
  {
    name: '콜라',
    price: '2,000원',
  },
  {
    name: '사이다',
    price: '2,000원',
  },
  {
    name: '환타(파인애플)',
    price: '2,000원',
  },
  {
    name: '환타(오렌지)',
    price: '2,000원',
  },
  {
    name: '웰치스(포도맛)',
    price: '2,000원',
  },
  {
    name: '코코팜(복숭아)',
    price: '2,000원',
  },
  {
    name: '코코팜(요구르트)',
    price: '2,000원',
  },
  {
    name: '쿨피스',
    price: '2,000원',
  },
  {
    name: '빙홍차',
    price: '3,000원',
  },
  {
    name: '펩시제로',
    price: '2,000원',
  },
  {
    name: '스프라이트제로',
    price: '2,000원',
  },
];

// 메인 컴포넌트
const Sillung = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">신룽푸마라탕</div>

        {/* pc */}
        <SubHeader />
        <div className="detail-pc__background">
          <div className="detail-pc__title">신룽푸마라탕</div>
        </div>
      </header>
      <main>
        <MenuSection title="메인메뉴" items={SillungList__main} />
        <MenuSection title="세트메뉴" items={SillungList__set} />
        <MenuSection title="사이드&추가메뉴" items={SillungList__side} />
        <MenuSection title="음료수" items={SillungList__drink} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Sillung;
