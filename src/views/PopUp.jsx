import React from 'react';
import { Link } from 'react-router-dom';

const PopUp = () => {
  return (
    <div className="loading-overlay">
      <div>
        <h1 className="PoP">
          OFF 입니다.
          <br />
          오픈되면 열립니다.
        </h1>
        <br />
        <div className="PoPbutton">
          <Link to="/">돌아가기</Link>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
