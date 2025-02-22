import React, { useMemo } from 'react';
import FoodList from '../discharge/FoodList';
// 브랜드 사진
import hongwon from '../assets/img/rest-food/c-rest/Hongwon.png';
import gawan from '../assets/img/rest-food/c-rest/Gawan.png';
import matchina from '../assets/img/rest-food/c-rest/Matchina.png';
import sillung from '../assets/img/rest-food/c-rest/Sillung.png';

const Foodchinese = () => {
  const chineseList = useMemo(
    () => [
      {
        id: 1,
        title: '홍원',
        img: hongwon,
        time: '영업시간 10:00 ~ 19:00',
        phoneNum: '전화번호 031-573-6155',
        path: '/hongwon',
      },
      {
        id: 2,
        title: '중국관',
        img: gawan,
        time: '영업시간 10:30 ~ 19:20',
        phoneNum: '전화번호 031-528-8236',
        path: '/gawan',
      },
      {
        id: 3,
        title: '맛차이나',
        img: matchina,
        time: '영업시간 10:00 ~ 19:00',
        phoneNum: '전화번호 0507-1454-8888',
        path: '/matchina',
      },
      {
        id: 4,
        title: '신룽푸마라탕',
        img: sillung,
        time: '영업시간 11:00 ~ 20:30',
        phoneNum: '전화번호 0507-1349-9044',
        path: '/sillung',
      },
    ],
    []
  );

  return <FoodList title="중식" foodItems={chineseList} />;
};

export default Foodchinese;
