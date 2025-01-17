// 카테고리 선택 네비게이션
import React from 'react';

const CategoryNav = ({ categories, currentCategory, onCategoryChange }) => {
  return (
    <nav>
      <ul className="Mainlist-pc__nav">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onCategoryChange(category)}
            style={{
              fontWeight: currentCategory === category ? 'bold' : 'normal',
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;
