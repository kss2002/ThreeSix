import React, { useEffect, useState } from 'react';
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
const Search = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // 모든 데이터를 하나로 병합
  const allData = [
    ...PCimagesChina,
    ...PCimagesJapan,
    ...PCimagesUS,
    ...PCimagesKorea,
    ...PCimagesSchool,
    ...PCimagesDessert,
    ...PCimagesRest,
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 ~~px 이상이면 고정
      //console.log('Scroll Position:', window.scrollY);

      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 스크롤 이벤트 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setResults([]);
    } else {
      const filteredResults = allData.filter(
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
    <section className={`fixed ${isScrolled ? 'fixed--scrolled' : ''}`}>
      <div className="Search__container">
        <FaSearch className="FaSearch" />

        <input
          className="Search__input"
          type="search"
          placeholder="원하는 식당을 검색해보세요"
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
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))
          : searchTerm && (
              <p className="Search__Exce">검색 결과를 찾지 못했습니다</p>
            )}
      </div>
    </section>
  );
};

export default Search;
