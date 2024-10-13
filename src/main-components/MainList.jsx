import React from 'react';

// grid 핵심 데이터 부품화
const maingridNav = [
  { id: 1, title: '양식' },
  { id: 2, title: '중식' },
  { id: 3, title: '일식' },
  { id: 4, title: '양식' },
  { id: 5, title: '분식' },
  { id: 6, title: '후식' },
];

// 컴포넌트 이름은 대문자로 시작해야 함
const MaingridItem = ({ title }) => {
  return <div className="main__grid-items">{title}</div>;
};

const Main__List__map = () => {
  return (
    <section id="MainList" className="Mainlist__section">
      <div className="Mainlist__title">원하는 메뉴를 골라보세요!</div>
      <div className="Mainlist__menu">
        <div className="Mainlist__container">
          {maingridNav.map((item) => (
            <MaingridItem key={item.id} title={item.title} />
          ))}
        </div>
      </div>
      <div className="Mainmap__title">지도로 식당 위치를 찾아보세요!</div>
      <div className="Mainmap__main"></div>
    </section>
  );
};

export default Main__List__map;
