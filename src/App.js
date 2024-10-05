import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomeView from './views/HomeView';
import MainView from './views/MainView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/* 
라우팅 담당 파일 home > main
*/

/* 
<Route path="/" element={<HomeView />} />
홈뷰 세팅을 잠시 주석 처리하겠습니다. 10.4
*/
