import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';
import BrandHeader from '../../discharge/BrandHeader';
import PopUp from '../../views/PopUp';

// 리스트 선언
const YogiList__none = [
  {
    name: '메뉴를 찾을 수 없었습니다😱',
    price: '0원',
  },
];

// 메인 컴포넌트
const Yogi = () => {
  return (
    <section>
      {/* 3/4 팝업 추가 */}
      <PopUp />
      <BrandHeader name="YOGI YOGURT" />
      <main>
        <MenuSection title="카페, 디저트" items={YogiList__none} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Yogi;
