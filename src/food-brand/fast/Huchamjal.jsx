import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';

// 리스트 선언
const HuchamjalList__main = [
  {
    name: '후라이드치킨',
    price: '16,000원',
  },
  {
    name: '양념치킨',
    price: '17,000원',
  },
  {
    name: '눈꽃치즈치킨',
    price: '17,000원',
  },
  {
    name: '허니버터치킨',
    price: '17,000원',
  },
  {
    name: '맵달킹치킨',
    price: '18,000원',
  },
  {
    name: '킹트리플 양념치킨',
    price: '18,000원',
  },
  {
    name: '간장or핫간장치킨',
    price: '17,000원',
  },
  {
    name: '핫토스치킨',
    price: '17,000원',
  },
  {
    name: '디진다핫치킨',
    price: '18,000원',
  },
  {
    name: '모든 메뉴\n순살변경',
    price: '+1,000원',
  },
];

const HuchamjalList__set = [
  {
    name: '후라이드+감자튀김',
    price: '22,000원',
  },
  {
    name: '후라이드+눈꽃치즈감자',
    price: '23,000원',
  },
  {
    name: '후라이드+후라이드',
    price: '28,000원',
  },
  {
    name: '후라이드+양념치킨',
    price: '29,000원',
  },
  {
    name: '후라이드+간장치킨',
    price: '29,000원',
  },
  {
    name: '후라이드+눈꽃치즈치킨',
    price: '29,000원',
  },
  {
    name: '양념치킨+간장치킨',
    price: '30,000원',
  },
];

const HuchamjalList__side = [
  {
    name: '감자튀김',
    price: '6,000원',
  },
  {
    name: '눈꽃치즈감자',
    price: '7,000원',
  },
  {
    name: '허니버터감자',
    price: '7,000원',
  },
  {
    name: '핫토스감자',
    price: '7,000원',
  },
];

const HuchamjalList__extra = [
  {
    name: '생맥주 1000cc',
    price: '7,000원',
  },
  {
    name: '콜라 500ml',
    price: '1,500원',
  },
  {
    name: '콜라 1.25L',
    price: '2,500원',
  },
  {
    name: '제로콜라 500ml',
    price: '1,500원',
  },
  {
    name: '제로콜라 1.25L',
    price: '2,500원',
  },
  {
    name: '무 추가',
    price: '500원',
  },
  {
    name: '양념/매운양념 소스',
    price: '500원',
  },
  {
    name: '치즈머스타드 소스',
    price: '500원',
  },
  {
    name: '크리미킹 소스',
    price: '500원',
  },
  {
    name: '치즈킹 소스',
    price: '500원',
  },
  {
    name: '갈릭디핑 소스',
    price: '500원',
  },
  {
    name: '와사마요 소스',
    price: '500원',
  },
  {
    name: '마늘간장 소스',
    price: '500원',
  },
  {
    name: '디진다 핫소스',
    price: '1,000원',
  },
  {
    name: '불닭마요 킹소스',
    price: '1,000원',
  },
];

// 메인 컴포넌트
const Huchamjal = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">후라이드 참 잘하는 집</div>
      </header>
      <main>
        <MenuSection title="치킨 메뉴" items={HuchamjalList__main} />
        <MenuSection title="세트" items={HuchamjalList__set} />
        <MenuSection title="사이드" items={HuchamjalList__side} />
        <MenuSection title="추가" items={HuchamjalList__extra} />
        <MenuBottom />
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default Huchamjal;
