// 전역 상태 관리
import React, { createContext, useContext, useState } from 'react';

// 컨텍스트 생성
const StateContext = createContext();

// 컨텍스트를 제공하는 컴포넌트
export const StateProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState('중식'); // 기본값 설정
  const [sliderImages, setSliderImages] = useState([]);

  return (
    <StateContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        sliderImages,
        setSliderImages,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// 컨텍스트 사용을 위한 커스텀 훅
export const useStateContext = () => useContext(StateContext);
