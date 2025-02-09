import React from 'react';
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

const MainView = () => {
  return (
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
  );
};

export default MainView;

/* 버튼 클릭시 나오는 메인 화면 */
