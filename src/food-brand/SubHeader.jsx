import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SubHeader = () => {
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <header>
      <div id="mainScreen" className="SubHeader">
        <div className="subHeader">삼식아</div>

        <nav>
          <ul className="Mainheader__nav">
            <li>
              <Link to="/">메인화면</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SubHeader;
