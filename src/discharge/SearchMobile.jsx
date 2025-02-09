import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  PCimagesChina,
  PCimagesJapan,
  PCimagesUS,
  PCimagesKorea,
  PCimagesSchool,
  PCimagesDessert,
  PCimagesRest,
} from '../constants/PCdata';

// 검색 기능
const SearchMobile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // 모든 데이터를 하나로 병합
  const allDataMobile = [
    ...PCimagesChina,
    ...PCimagesJapan,
    ...PCimagesUS,
    ...PCimagesKorea,
    ...PCimagesSchool,
    ...PCimagesDessert,
    ...PCimagesRest,
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setResults([]);
    } else {
      const filteredResults = allDataMobile.filter(
        (item) =>
          item.title.toLowerCase().includes(value.toLowerCase()) &&
          item.title !== '삼식아'
      );
      setResults(filteredResults);
    }
  };

  const handleClick = (path) => {
    // 안전하게 경로 처리
    if (path) navigate(path); //해당 경로 이동
  };

  return (
    <main className="Search__mobile">
      <div className="Search__container">
        <FaSearch className="FaSearch" />

        <input
          className="Search__input"
          type="text"
          placeholder="원하는 식당을 검색하기"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="Search__results">
        {results.length > 0
          ? results.map((item, index) => (
              <div
                key={index}
                className="Search__result-item"
                onClick={() => handleClick(item.path)}
              >
                <div>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))
          : searchTerm && (
              <p className="Search__Exce">검색 결과를 찾지 못했습니다</p>
            )}
      </div>
    </main>
  );
};

export default SearchMobile;
