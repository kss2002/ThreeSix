import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';
import BrandHeader from '../../discharge/BrandHeader';

// 리스트 선언
const DalkkalbiList__new = [
  {
    name: '돌아온 삼고비',
    price: '8,000원',
  },
];

const DalkkalbiList__main = [
  {
    name: '2인 스마일 세트',
    price: '26,000원',
  },
  {
    name: '3인 스마일 세트',
    price: '40,500원',
  },
  {
    name: '4인 스마일 세트',
    price: '54,000원',
  },
  {
    name: '2인 치즈스마일 세트',
    price: '30,000원',
  },
  {
    name: '3인 치즈스마일 세트',
    price: '46,500원',
  },
  {
    name: '4인 치즈스마일 세트',
    price: '62,000원',
  },
  {
    name: '라면',
    price: '2,000원',
  },
  {
    name: '우동',
    price: '2,000원',
  },
];

// 메인 컴포넌트
const Dalkkalbi = () => {
  return (
    <section>
      <BrandHeader name="스마일 닭갈비" />
      <main>
        <MenuSection title="새로 나온 메뉴" items={DalkkalbiList__new} />
        <MenuSection title="닭갈비" items={DalkkalbiList__main} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Dalkkalbi;
