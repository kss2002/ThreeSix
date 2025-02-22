import React, { useMemo, useState, useEffect } from 'react';
import FoodList from '../discharge/FoodList';
// 브랜드 사진
import kkum from '../assets/img/rest-food/s-rest/Kkum.png';
import manyeo from '../assets/img/rest-food/s-rest/Manyeo.png';
import LoadingSpinner from '../LoadingSpinner';

const FoodSchool = () => {
  const schoolList = useMemo(
    () => [
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
        <FoodList title="분식" foodItems={schoolList} />
      )}
    </>
  );
};

export default FoodSchool;
