import React, { useMemo, useState, useEffect } from 'react';
import FoodList from '../discharge/FoodList';
// 브랜드 사진
import pastapizza from '../assets/img/rest-food/w-rest/Pastapizza.png';
import dorosi from '../assets/img/rest-food/w-rest/Dorosi.png';
import LoadingSpinner from '../LoadingSpinner';

const FoodWestern = () => {
  const westernList = useMemo(
    () => [
      {
        id: 1,
        title: '오렌지몽키&마르코죤스',
        img: pastapizza,
        time: '영업시간 10:30 ~ 22:00',
        phoneNum: '전화번호 0507-1378-0154',
        path: '/pastapizza',
      },
      {
        id: 2,
        title: '도로시화덕피자',
        img: dorosi,
        time: '영업시간 10:30 ~ 20:00',
        phoneNum: '전화번호 031-527-7003',
        path: '/dorosi',
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
        <FoodList title="양식" foodItems={westernList} />
      )}
    </>
  );
};

export default FoodWestern;
