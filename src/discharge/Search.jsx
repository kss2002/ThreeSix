// 검색 기능
import React, { useEffect, useState } from 'react';

const Search = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <section className={`fixed ${isScrolled ? 'fixed--scrolled' : ''}`}>
      <div className="Search__container">
        <input
          className="Search__input"
          type="search"
          placeholder="원하는 메뉴를 검색해보세요"
        />
      </div>
    </section>
  );
};

export default Search;
