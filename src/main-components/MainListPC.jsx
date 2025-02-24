import React, { useState, useEffect } from 'react';
import useCategoryStore from '../store/categoryStore';
import SliderCompo from '../discharge/SliderCompo';
import CategoryNav from '../discharge/CategoryNav';
import MapComponent from '../discharge/MapComponent';
import LoadingSpinner from '../LoadingSpinner';

// map marker
const markers = [
  { lat: 37.6428473999999, lng: 127.105446899999361 },
  { lat: 37.64372042131863, lng: 127.10897673094719 },
  { lat: 37.63829557479886, lng: 127.10753616211548 },
];

const settings = {
  infinite: true, // 무한 루프
  speed: 500, // 슬라이드 전환 속도 (ms)
  slidesToShow: 3, // 한 번에 보여줄 슬라이드 개수
  autoplay: true, // 자동 슬라이드
  autoplaySpeed: 3000, // 자동 슬라이드 속도 (ms)
};

const MainListPC = () => {
  const { currentCategory, setCurrentCategory, getCategoryImages } =
    useCategoryStore();

  const [loading, setLoading] = useState(true);
  const categories = ['중식', '일식', '양식', '한식', '분식', '후식', '기타'];

  // loading Modify. 2025/02/24
  useEffect(() => {
    setLoading(true);
    const images = getCategoryImages(currentCategory);
    if (images.length === 0) {
      setTimeout(() => setLoading(false), 1000); // 최소 1초 로딩 후 해제
      return;
    }

    let loadedCount = 0;
    const startTime = Date.now();

    const checkLoading = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(1000 - elapsedTime, 0);
        setTimeout(() => setLoading(false), remainingTime); // 최소 1초 보장
      }
    };

    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      img.onload = checkLoading;
      img.onerror = checkLoading;
    });
  }, [currentCategory, getCategoryImages]);

  return (
    <main id="restaurant">
      {loading && (
        <>
          <LoadingSpinner loading={loading} />
          <div className="betaloading">로딩 중..</div>
        </>
      )}
      {!loading && (
        <section className="Mainlist-pc">
          <div className="Mainlist-pc__top">
            <p className="Mainlist-pc__mainTitle">
              삼육대 후문 식당을 찾아보세요!
            </p>
            <CategoryNav
              categories={categories}
              currentCategory={currentCategory}
              onCategoryChange={setCurrentCategory}
            />
            <div className="Mainlist-pc__bar-container">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`Mainlistpc__bar ${
                    currentCategory === category ? 'active' : ''
                  }`}
                  style={{
                    backgroundColor:
                      currentCategory === category ? '#46CC63' : '#f2f2f2', // 선택된 카테고리만 색상 변경
                  }}
                ></div>
              ))}
            </div>
            <SliderCompo
              images={getCategoryImages(currentCategory)}
              settings={settings}
            />
          </div>
          <div className="Mainlist-pc__bottom"></div>
        </section>
      )}

      <div id="researchMap">
        <p className="Mainmap-pc__title">
          지도로 가까운 위치의 식당을 찾아보세요!
        </p>
        <MapComponent markers={markers} />
      </div>
    </main>
  );
};

export default MainListPC;
