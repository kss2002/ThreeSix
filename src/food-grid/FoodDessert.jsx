import React, { useMemo } from 'react';
import FoodList from '../discharge/FoodList';
// 브랜드 사진
import seumail from '../assets/img/rest-food/d-rest/Seumail.png';
import bageul from '../assets/img/rest-food/d-rest/Bageul.png';
import maemeodeu from '../assets/img/rest-food/d-rest/Maemeodeu.png';
import rinseu from '../assets/img/rest-food/d-rest/Rinseu.png';
import idiya from '../assets/img/rest-food/d-rest/Idiya.png';
import yogi from '../assets/img/rest-food/d-rest/Yogi.png';
import gonggang from '../assets/img/rest-food/d-rest/Gonggang.png';
import haio from '../assets/img/rest-food/d-rest/Haio.png';

const FoodDessert = () => {
  const dessertList = useMemo(
    () => [
      {
        id: 1,
        title: '스마일하우스',
        img: seumail,
        time: '영업시간 08:10 ~ 21:30',
        phoneNum: '전화번호 031-527-3664',
        path: '/seumail',
      },
      {
        id: 2,
        title: '바글바글 베이커리',
        img: bageul,
        time: '영업시간 09:00 ~ 19:00',
        phoneNum: '전화번호 0507-1415-0208',
        path: '/bageul',
      },
      {
        id: 3,
        title: '매머드 커피',
        img: maemeodeu,
        time: '영업시간 07:30 ~ 18:30',
        phoneNum: '전화번호 0505-042-0428',
        path: '/maemeodeu',
      },
      {
        id: 4,
        title: '린스테이블',
        img: rinseu,
        time: '영업시간 10:00 ~ 21:00',
        phoneNum: '전화번호 070-8736-3679',
        path: '/rinseu',
      },
      {
        id: 5,
        title: '이디야',
        img: idiya,
        time: '영업시간 08:00 ~ 21:00',
        phoneNum: '전화번호 0507-1397-0208',
        path: '/idiya',
      },
      {
        id: 6,
        title: 'YOGI YOGURT',
        img: yogi,
        time: '영업시간 모름',
        phoneNum: '전화번호 모름',
        path: '/yogi',
      },
      {
        id: 7,
        title: '카페 공강',
        img: gonggang,
        time: '영업시간 10:00 ~ 21:30',
        phoneNum: '전화번호 031-575-0908',
        path: '/gonggang',
      },
      {
        id: 8,
        title: '하이오커피',
        img: haio,
        time: '영업시간 08:20 ~ 20:00',
        phoneNum: '전화번호 031-527-7555',
        path: '/haio',
      },
    ],
    []
  );

  return <FoodList title="후식" foodItems={dessertList} />;
};

export default FoodDessert;
