import React from 'react';

// grid 핵심 데이터 부품화
const maingridNav = [
  { id: 1, title: '양식' },
  { id: 2, title: '중식' },
  { id: 3, title: '일식' },
  { id: 4, title: '카페' },
];

// 컴포넌트 이름은 대문자로 시작해야 함
const MaingridItem = ({ title }) => {
  return <div className="main__grid-items">{title}</div>;
};

const MainList = () => {
  return (
    <section className="Mainlist__section">
      <p className="Mainlist__title">
        후문에 있는 식당을 종류순으로 나열했습니다. <br /> (주 메뉴를 기준으로
        나열했습니다.)
      </p>
      <div className="Mainlist__container">
        {maingridNav.map((item) => (
          <MaingridItem key={item.id} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default MainList;
