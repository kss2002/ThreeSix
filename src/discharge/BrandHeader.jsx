import React from 'react';

const BrandHeader = ({ name }) => {
  return (
    <header>
      <div className="detail__head">{name}</div>
      {/* pc */}
      <div className="detail-pc__background">
        <div className="detail-pc__title">{name}</div>
      </div>
    </header>
  );
};
// 브랜드 헤더 컴포넌트화
export default BrandHeader;
