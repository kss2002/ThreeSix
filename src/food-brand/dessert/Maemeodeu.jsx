import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import UpDown from '../UpDown';
import MainFooter from '../../main-components/MainFooter';
import BrandHeader from '../../discharge/BrandHeader';

// 리스트 선언
const MaemeodeuList__coffee = [
  {
    name: '디카페인 아메리카노(M)',
    price: '2,300원',
  },
  {
    name: '아메리카노(L)',
    price: '3,000원',
  },
  {
    name: '아메리카노(M)',
    price: '1,600원',
  },
  {
    name: '아메리카노(S)',
    price: '1,200원',
  },
];

// 메인 컴포넌트
const Maemeodeu = () => {
  return (
    <section>
      <BrandHeader name="매머드 커피" />
      <main>
        <MenuSection title="커피" items={MaemeodeuList__coffee} />
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
