import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainView from './views/MainView';
import ChineseView from '../src/views/ListView/ChineseView';
import WesternView from './views/ListView/WesternView';
import KoreanView from './views/ListView/KoreanView';
import JapaneseView from './views/ListView/JapaneseView';
import SchoolView from './views/ListView/SchoolView';
import DessertView from './views/ListView/DessertView';
import FastView from './views/ListView/FastView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/chinese" element={<ChineseView />} />
        <Route path="/western" element={<WesternView />} />
        <Route path="/korean" element={<KoreanView />} />
        <Route path="/japanese" element={<JapaneseView />} />
        <Route path="/school" element={<SchoolView />} />
        <Route path="/dessert" element={<DessertView />} />
        <Route path="/fast" element={<FastView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
