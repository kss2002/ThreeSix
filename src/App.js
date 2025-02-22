// react - main 세팅
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainView from './views/MainView';

// 카테고리 - import
import ChineseView from '../src/views/ListView/ChineseView';
import WesternView from './views/ListView/WesternView';
import KoreanView from './views/ListView/KoreanView';
import JapaneseView from './views/ListView/JapaneseView';
import SchoolView from './views/ListView/SchoolView';
import DessertView from './views/ListView/DessertView';
import FastView from './views/ListView/FastView';
// 중식 명단 - import
import Hongwon from './food-brand/chinese/Hongwon';
import Gawan from './food-brand/chinese/Gawan';
import Matchina from './food-brand/chinese/Matchina';
import Sillung from './food-brand/chinese/Sillung';
// 후식 명단 - import
import Seumail from './food-brand/dessert/Seumail';
import Bageul from './food-brand/dessert/Bageul';
import Maemeodeu from './food-brand/dessert/Maemeodeu';
import Rinseu from './food-brand/dessert/Rinseu';
import Idiya from './food-brand/dessert/Idiya';
import Yogi from './food-brand/dessert/Yogi';
import Gonggang from './food-brand/dessert/Gonggang';
import Haio from './food-brand/dessert/Haio';
// 기타 명단 - import
import Huchamjal from './food-brand/fast/Huchamjal';
import Jikjin from './food-brand/fast/Jikjin';
import Moms from './food-brand/fast/Moms';
import Saendu from './food-brand/fast/Saendu';
import Chang from './food-brand/fast/Chang';
// 한식 명단 - import
import Haneuljigi from './food-brand/korean/Haneuljigi';
import Darami from './food-brand/korean/Darami';
import Dalkkalbi from './food-brand/korean/Dalkkalbi';
import Cheone from './food-brand/korean/Cheone';
import Ssalguksu from './food-brand/korean/Ssalguksu';
import Chueotang from './food-brand/korean/Chueotang';
import Jjukkumi from './food-brand/korean/Jjukkumi';
import Gamjatang from './food-brand/korean/Gamjatang';
import Choegojip from './food-brand/korean/Choegojip';
// 일식 명단 - import
import Byeolmiga from './food-brand/japanese/Byeolmiga';
import Torikokoro from './food-brand/japanese/Torikokoro';
import Syokuyoku from './food-brand/japanese/Syokuyoku';
// 분식 명단 - import
import Kkum from './food-brand/school/Kkum';
import Manyeo from './food-brand/school/Manyeo';
// 양식 명단 - import
import Pastapizza from './food-brand/western/Pastapizza';
import Dorosi from './food-brand/western/Dorosi';

//
import ScrollToTop from './ScrollToTop';
import SubHeader from './food-brand/SubHeader';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SubHeader />
      <Routes>
        {/* 메인 화면 */}
        <Route path="/" element={<MainView />} />

        {/* 카테고리 화면 */}
        <Route path="/chinese" element={<ChineseView />} />
        <Route path="/western" element={<WesternView />} />
        <Route path="/korean" element={<KoreanView />} />
        <Route path="/japanese" element={<JapaneseView />} />
        <Route path="/school" element={<SchoolView />} />
        <Route path="/dessert" element={<DessertView />} />
        <Route path="/fast" element={<FastView />} />

        {/* 중식 명단 */}
        <Route path="/hongwon" element={<Hongwon />} />
        <Route path="/gawan" element={<Gawan />} />
        <Route path="/matchina" element={<Matchina />} />
        <Route path="/sillung" element={<Sillung />} />

        {/* 후식 명단 */}
        <Route path="/seumail" element={<Seumail />} />
        <Route path="/bageul" element={<Bageul />} />
        <Route path="/maemeodeu" element={<Maemeodeu />} />
        <Route path="/rinseu" element={<Rinseu />} />
        <Route path="/idiya" element={<Idiya />} />
        <Route path="/yogi" element={<Yogi />} />
        <Route path="/Gonggang" element={<Gonggang />} />
        <Route path="/haio" element={<Haio />} />

        {/* 기타 명단 */}
        <Route path="/huchamjal" element={<Huchamjal />} />
        <Route path="/jikjin" element={<Jikjin />} />
        <Route path="/moms" element={<Moms />} />
        <Route path="/saendu" element={<Saendu />} />
        <Route path="/chang" element={<Chang />} />

        {/* 한식 명단 */}
        <Route path="/haneuljigi" element={<Haneuljigi />} />
        <Route path="/darami" element={<Darami />} />
        <Route path="/dalkkalbi" element={<Dalkkalbi />} />
        <Route path="/cheone" element={<Cheone />} />
        <Route path="/ssalguksu" element={<Ssalguksu />} />
        <Route path="/chueotang" element={<Chueotang />} />
        <Route path="/jjukkumi" element={<Jjukkumi />} />
        <Route path="/gamjatang" element={<Gamjatang />} />
        <Route path="/choegojip" element={<Choegojip />} />

        {/* 일식 명단 */}
        <Route path="/byeolmiga" element={<Byeolmiga />} />
        <Route path="/torikokoro" element={<Torikokoro />} />
        <Route path="/syokuyoku" element={<Syokuyoku />} />

        {/* 분식 명단 */}
        <Route path="/kkum" element={<Kkum />} />
        <Route path="/manyeo" element={<Manyeo />} />

        {/* 양식 명단 */}
        <Route path="/pastapizza" element={<Pastapizza />} />
        <Route path="/dorosi" element={<Dorosi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
