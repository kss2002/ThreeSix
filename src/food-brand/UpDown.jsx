import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

const UpDown = () => {
  return (
    <div id="UpDown">
      <button className="Up_btn">
        <a href="#mainScreen" rel="noreferrer">
          <FaArrowUp className="UpDown__icon" />
        </a>
      </button>
      <button className="Down_btn">
        <a href="#MainFooter-id" rel="noreferrer">
          <FaArrowDown className="UpDown__icon" />
        </a>
      </button>
    </div>
  );
};

export default UpDown;
