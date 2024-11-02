import React from 'react';
import Main from '../main-components/Main';
import MainHeader from '../main-components/MainHeader';
import MainIntro from '../main-components/MainIntro';
import MainFooter from '../main-components/MainFooter';
import MainList from '../main-components/MainList';
import MainContact from '../main-components/MainContact';

const MainView = () => {
  return (
    <>
      <MainHeader />
      <Main>
        <MainIntro />
        <MainList />
        <MainContact />
      </Main>
      <MainFooter />
    </>
  );
};

export default MainView;

/* 버튼 클릭시 나오는 메인 화면 */
