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
        <>
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
        </>
      )}
    </>
  );
};

export default MainView;
