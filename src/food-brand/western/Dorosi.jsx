import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';
import BrandHeader from '../../discharge/BrandHeader';

// 리스트 선언
const DorosiList__pizza = [
  {
    name: '고르곤졸라',
    price: '14,000원',
  },
  {
    name: '마르게리따',
    price: '14,000원',
  },
  {
    name: '카푸리쵸사',
    price: '17,000원',
  },
  {
    name: '디아볼라',
    price: '18,000원',
  },
  {
    name: '깔쪼네',
    price: '17,000원',
  },
  {
    name: '루꼴라',
    price: '18,000원',
  },
];

const DorosiList__pasta = [
  {
    name: '토마토스파게티',
    price: '8,500원',
  },
  {
    name: '까르보나라',
    price: '8,500원',
  },
  {
    name: '매콤까르보나라',
    price: '8,500원',
  },
  {
    name: '매콤까르보나라떡볶이',
    price: '8,500원',
  },
  {
    name: '샐러드파스타',
    price: '9,000원',
  },
  {
    name: '알리오올리오',
    price: '8,500원',
  },
  {
    name: '치즈 화덕 스파게티',
    price: '9,000원',
  },
  {
    name: '로제 파스타',
    price: '8,500원',
  },
  {
    name: '라자냐',
    price: '12,000원',
  },
  {
    name: '빠네크림파스타',
    price: '13,000원',
  },
];

const DorosiList__rice = [
  {
    name: '치킨 도리아',
    price: '9,000원',
  },
  {
    name: '버섯크림 리조또',
    price: '9,500원',
  },
  {
    name: '새우크림 리조또',
    price: '9,500원',
  },
];

const DorosiList__and = [
  {
    name: '화꾸닭',
    price: '14,000원',
  },
  {
    name: '미니 피자\n(고르곤졸라or마르게리따)',
    price: '6,000원',
  },
  {
    name: '도로시샐러드',
    price: '7,500원',
  },
];

const DorosiList__drink = [
  {
    name: '사이다',
    price: '2,000원',
  },
  {
    name: '콜라',
    price: '2,000원',
  },
  {
    name: '오렌지 쥬스',
    price: '3,000원',
  },
  {
    name: '망고 쥬스',
    price: '3,000원',
  },
  {
    name: '자몽 쥬스',
    price: '3,000원',
  },
];

// 메인 컴포넌트
const Dorosi = () => {
  return (
    <section>
      <BrandHeader name="도로시화덕피자" />
      <main>
        <MenuSection title="PIZZA" items={DorosiList__pizza} />
        <MenuSection title="Pasta" items={DorosiList__pasta} />
        <MenuSection title="Rice" items={DorosiList__rice} />
        <MenuSection title="And" items={DorosiList__and} />
        <MenuSection title="Drink" items={DorosiList__drink} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Dorosi;
