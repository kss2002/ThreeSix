import React from 'react';
import { MenuBottom, MenuSection } from '../../discharge/MenuCompo';
import MainFooter from '../../main-components/MainFooter';
import UpDown from '../UpDown';

// 리스트 선언
const HongwonList__cotton = [
  {
    name: '짜장면',
    price: '4,500원',
  },
  {
    name: '우 동',
    price: '6,500원',
  },
  {
    name: '짬 뽕',
    price: '6,500원',
  },
  {
    name: '간짜장',
    price: '6,500원',
  },
  {
    name: '울 면',
    price: '7,000원',
  },
  {
    name: '홍합짬뽕',
    price: '7,000원',
  },
  {
    name: '고추짬뽕',
    price: '7,500원',
  },
  {
    name: '돈까스짜장',
    price: '7,500원',
  },
  {
    name: '삼선짜장',
    price: '9,000원',
  },
  {
    name: '삼선짬뽕',
    price: '9,000원',
  },
  {
    name: '쟁반짜장',
    price: '13,000원',
  },
  {
    name: '쟁반짬뽕',
    price: '13,000원',
  },
];

const HongwonList__cook = [
  {
    name: '양장피',
    price: '25,000원',
  },
  {
    name: '팔보채',
    price: '25,000원',
  },
  {
    name: '잡 탕',
    price: '25,000원',
  },
  {
    name: '깐쇼새우',
    price: '30,000원',
  },
  {
    name: '깐풍새우',
    price: '30,000원',
  },
  {
    name: '고추잡채',
    price: '20,000원',
  },
  {
    name: '유산슬',
    price: '30,000원',
  },
  {
    name: '당면잡채',
    price: '12,000원',
  },
  {
    name: '계란탕',
    price: '10,000원',
  },
  {
    name: '술 국',
    price: '10,000원',
  },
  {
    name: '탕수육 (대)',
    price: '20,000원',
  },
  {
    name: '탕수육 (중)',
    price: '15,000원',
  },
  {
    name: '탕수육 (소)',
    price: '12,000원',
  },
  {
    name: '소고기탕수육 (대)',
    price: '25,000원',
  },
  {
    name: '소고기탕수육 (중)',
    price: '20,000원',
  },
  {
    name: '소고기탕수육 (소)',
    price: '15,000원',
  },
  {
    name: '버섯탕수육 (대)',
    price: '20,000원',
  },
  {
    name: '버섯탕수육 (중)',
    price: '15,000원',
  },
  {
    name: '버섯탕수육 (소)',
    price: '10,000원',
  },
  {
    name: '치킨탕수육 (대)',
    price: '20,000원',
  },
  {
    name: '치킨탕수육 (중)',
    price: '15,000원',
  },
  {
    name: '치킨탕수육 (소)',
    price: '10,000원',
  },
  {
    name: '깐풍기',
    price: '20,000원',
  },
  {
    name: '라조기',
    price: '20,000원',
  },
];

const HongwonList__rice = [
  {
    name: '볶음밥',
    price: '6,500원',
  },
  {
    name: '짜장밥',
    price: '6,500원',
  },
  {
    name: '짬뽕밥',
    price: '7,000원',
  },
  {
    name: '잡채밥',
    price: '8,000원',
  },
  {
    name: '버섯덮밥',
    price: '8,000원',
  },
  {
    name: '송이덮밥',
    price: '8,000원',
  },
  {
    name: '고추덮밥',
    price: '8,000원',
  },
  {
    name: '오징어덮밥',
    price: '8,000원',
  },
  {
    name: '오므라이스',
    price: '7,000원',
  },
  {
    name: '삼선볶음밥',
    price: '10,000원',
  },
  {
    name: '유산슬밥',
    price: '10,000원',
  },
  {
    name: '새우덮밥',
    price: '10,000원',
  },
  {
    name: '잡탕밥',
    price: '13,000원',
  },
];

const HongwonList__set = [
  {
    name: '탕수육+짜장1',
    price: '15,000원',
  },
  {
    name: '탕수육+짜장2',
    price: '17,000원',
  },
  {
    name: '탕수육+짬뽕2',
    price: '18,000원',
  },
  {
    name: '깐풍기+짜장2+만두',
    price: '28,000원',
  },
];

const HongwonList__two = [
  {
    name: '짬짜면',
    price: '7,000원',
  },
  {
    name: '볶짜면',
    price: '7,000원',
  },
  {
    name: '볶짬면',
    price: '7,000원',
  },
  {
    name: '탕짜면',
    price: '8,000원',
  },
  {
    name: '탕짬면',
    price: '8,000원',
  },
  {
    name: '탕볶밥',
    price: '8,500원',
  },
];

const HongwonList__rest = [
  {
    name: '육계장',
    price: '7,000원',
  },
  {
    name: '갈비탕',
    price: '7,000원',
  },
  {
    name: '냉면콩국수',
    price: '7,000원',
  },
  {
    name: '삼육군만두',
    price: '4,000원',
  },
  {
    name: '야채춘권',
    price: '4,000원',
  },
  {
    name: '군만두',
    price: '4,000원',
  },
  {
    name: '물만두',
    price: '4,000원',
  },
];

// 메인 컴포넌트
const Hongwon = () => {
  return (
    <section>
      <header>
        {/* brand head */}
        <div className="detail__head">홍원</div>

        {/* pc */}
        <div className="detail-pc__background">
          <div className="detail-pc__title">홍원</div>
        </div>
      </header>
      <main>
        <MenuSection title="면류" items={HongwonList__cotton} />
        <MenuSection title="요리류" items={HongwonList__cook} />
        <MenuSection title="밥류" items={HongwonList__rice} />
        <MenuSection title="세트메뉴" items={HongwonList__set} />
        <MenuSection title="두가지맛" items={HongwonList__two} />
        <MenuSection title="기타" items={HongwonList__rest} />
        <MenuBottom />
      </main>
      <footer>
        <MainFooter />
      </footer>
      <UpDown />
    </section>
  );
};

export default Hongwon;
