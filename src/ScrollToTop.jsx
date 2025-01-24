import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 최상단으로 스크롤
  }, [location]);

  return null;
};

export default ScrollToTop;
