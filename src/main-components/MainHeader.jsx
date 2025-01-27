import React from 'react';

const MainHeader = () => {
  return (
    <header>
      <div id="mainScreen" className="Mainheader">
        삼식아
        <nav>
          <ul className="Mainheader__nav">
            <li>
              <a href="#restaurant">식당</a>
            </li>
            <li>
              <a href="#researchMap">지도</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
