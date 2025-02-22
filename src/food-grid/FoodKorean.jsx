import React, { useMemo, useState, useEffect } from 'react';
import FoodList from '../discharge/FoodList';
// 브랜드 사진
import haneuljigi from '../assets/img/rest-food/k-rest/Haneuljigi.png';
import darami from '../assets/img/rest-food/k-rest/Darami.png';
import dalkkalbi from '../assets/img/rest-food/k-rest/Dalkkalbi.png';
import cheone from '../assets/img/rest-food/k-rest/Cheone.png';
import ssalguksu from '../assets/img/rest-food/k-rest/Ssalguksu.png';
import chueotang from '../assets/img/rest-food/k-rest/Chueotang.png';
import jjukkumi from '../assets/img/rest-food/k-rest/Jjukkumi.png';
import gamjatang from '../assets/img/rest-food/k-rest/Gamjatang.png';
import choegojip from '../assets/img/rest-food/k-rest/Choegojip.png';
import LoadingSpinner from '../LoadingSpinner';

const FoodKorean = () => {
  const koreanList = useMemo(
    () => [
      {
        id: 1,
        title: '하늘지기(수내닭꼬치)',
        img: haneuljigi,
        time: '영업시간 09:00 ~ 22:00',
        phoneNum: '전화번호 010-4026-0631',
        path: '/haneuljigi',
      },
      {
        id: 2,
        title: '다람이임자탕',
        img: darami,
        time: '영업시간 11:00 ~ 21:00',
        phoneNum: '전화번호 031-529-9890',
        path: '/darami',
      },
      {
        id: 3,
        title: '스마일닭갈비',
        img: dalkkalbi,
        time: '영업시간 10:00 ~ 21:00',
        phoneNum: '전화번호 010-7704-8286',
        path: '/dalkkalbi',
      },
      {
        id: 4,
        title: '청와삼대',
        img: cheone,
        time: '영업시간 10:00 ~ 22:00',
        phoneNum: '전화번호 031-528-0338',
        path: '/cheone',
      },
      {
        id: 5,
        title: '쌀국수공방',
        img: ssalguksu,
        time: '영업시간 07:30 ~ 14:30',
        phoneNum: '전화번호 0507-1441-8582',
        path: '/ssalguksu',
      },
      {
        id: 6,
        title: '담터추어탕',
        img: chueotang,
        time: '영업시간 10:00 ~ 21:00',
        phoneNum: '전화번호 031-571-9544',
        path: '/chueotang',
      },
      {
        id: 7,
        title: '담터쭈구미',
        img: jjukkumi,
        time: '영업시간 11:00 ~ 20:45',
        phoneNum: '전화번호 0507-1402-9544',
        path: '/jjukkumi',
      },
      {
        id: 8,
        title: '세상만사감자탕',
        img: gamjatang,
        time: '영업시간 08:00 ~ 23:00',
        phoneNum: '전화번호 031-572-4998',
        path: '/gamjatang',
      },
      {
        id: 9,
        title: '최고집해물찜칼국수',
        img: choegojip,
        time: '영업시간 10:30 ~ 22:00',
        phoneNum: '전화번호 031-529-3688',
        path: '/choegojip',
      },
    ],
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <FoodList title="한식" foodItems={koreanList} />
      )}
    </>
  );
};

export default FoodKorean;
