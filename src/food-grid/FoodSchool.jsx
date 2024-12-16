import React from 'react';
import FoodList from '../discharge/FoodList';
// 브랜드 사진
import kkum from '../assets/img/rest-food/s-rest/Kkum.png';
import manyeo from '../assets/img/rest-food/s-rest/Manyeo.png';

// 핵심 데이터 부품화
const schoolList = [
  {
    id: 1,
    title: '꿈꾸는 떡볶이',
    img: kkum,
    time: '영업시간 11:00 ~ 20:00',
    phoneNum: '전화번호 031-527-7873',
    path: '/kkum',
  },
  {
    id: 2,
    title: '마녀 떡볶이',
    img: manyeo,
    time: '영업시간 10:00 ~ 19:30',
    phoneNum: '전화번호 0507-1329-9769',
    path: '/manyeo',
  },
];

const FoodSchool = () => <FoodList title="분식" foodItems={schoolList} />;

export default FoodSchool;
