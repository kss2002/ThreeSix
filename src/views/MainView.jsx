import React, { useState, useEffect } from 'react';
import Main from '../main-components/Main';
import MainHeader from '../main-components/MainHeader';
import MainIntro from '../main-components/MainIntro';
import MainFooter from '../main-components/MainFooter';
import MainContact from '../main-components/MainContact';
import Search from '../discharge/Search';
import MainListMobile from '../main-components/MainListMobile';
import MainListPC from '../main-components/MainListPC';
import MainHello from '../main-components/MainHello';
import SearchMobile from '../discharge/SearchMobile';

import LoadingSpinner from '../LoadingSpinner';

const MainView = () => {
  const [loading, setLoading] = useState(true);
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  useEffect(() => {
    const startTime = performance.now(); // 시작 시간 기록

    const handleLoad = () => {
      const loadTime = performance.now() - startTime; // 로딩 시간 계산

      if (loadTime >= 2000) {
        setShouldShowLoader(true); // 2초 이상이면 로딩 표시
      }

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
      {loading && shouldShowLoader ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <main>
          <MainHeader />
          <Main>
            <MainHello />
            <Search />
            <SearchMobile />
            <MainIntro />
            <MainListMobile />
            <MainListPC />
            <MainContact />
          </Main>
          <MainFooter />
        </main>
      )}
    </>
  );
};

export default MainView;
