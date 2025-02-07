import React, { useMemo } from 'react';
import FoodList from '../discharge/FoodList';
// 브랜드 사진
import huchamjal from '../assets/img/rest-food/f-rest/Huchamjal.png';
import jikjin from '../assets/img/rest-food/f-rest/Jikjin.png';
import moms from '../assets/img/rest-food/f-rest/Moms.png';
import saendu from '../assets/img/rest-food/f-rest/Saendu.png';
import chang from '../assets/img/rest-food/f-rest/Chang.png';

const FoodFast = () => {
  const fastList = useMemo(
    () => [
      {
        id: 1,
        title: '후라이드 참 잘하는 집',
        img: huchamjal,
        time: '영업시간 11:00 ~ 00:30',
        phoneNum: '전화번호 031-527-2509',
        path: '/huchamjal',
      },
      {
        id: 2,
        title: '직진 닭강정',
        img: jikjin,
        time: '영업시간 10:00 ~ 20:30',
        phoneNum: '전화번호 0507-1320-1892',
        path: '/jikjin',
      },
      {
        id: 3,
        title: '맘스터치',
        img: moms,
        time: '영업시간 11:00 ~ 21:00',
        phoneNum: '전화번호 031-572-0572',
        path: '/moms',
      },
      {
        id: 4,
        title: '샌두',
        img: saendu,
        time: '영업시간 11:00 ~ 18:30',
        phoneNum: '전화번호 031-575-5558',
        path: '/saendu',
      },
      {
        id: 5,
        title: '창부리또',
        img: chang,
        time: '영업시간 09:00 ~ 20:45',
        phoneNum: '전화번호 0507-1488-3848',
        path: '/chang',
      },
    ],
    []
  );

  return <FoodList title="기타" foodItems={fastList} />;
};

export default FoodFast;
