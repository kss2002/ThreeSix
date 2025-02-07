import React, { useMemo } from 'react';
import FoodList from '../discharge/FoodList';
// 브랜드 사진
import byeolmiga from '../assets/img/rest-food/j-rest/Byeolmiga.png';
import torikokoro from '../assets/img/rest-food/j-rest/Torikokoro.png';
import syokuyoku from '../assets/img/rest-food/j-rest/Syokuyoku.png';

const FoodJapanese = () => {
  const japaneseList = useMemo(
    () => [
      {
        id: 1,
        title: '별미가',
        img: byeolmiga,
        time: '영업시간 11:00 ~ 21:00',
        phoneNum: '전화번호 0507-1348-5845',
        path: '/byeolmiga',
      },
      {
        id: 2,
        title: '토리코코로',
        img: torikokoro,
        time: '영업시간 10:00 ~ 20:30',
        phoneNum: '전화번호 0507-1321-8794',
        path: '/torikokoro',
      },
      {
        id: 3,
        title: '쇼쿠요쿠',
        img: syokuyoku,
        time: '영업시간 10:30 ~ 20:30',
        phoneNum: '전화번호 031-527-2933',
        path: '/syokuyoku',
      },
    ],
    []
  );

  return <FoodList title="일식" foodItems={japaneseList} />;
};

export default FoodJapanese;
