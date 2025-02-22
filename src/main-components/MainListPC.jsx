import React, { useState, useEffect } from 'react';
import useCategoryStore from '../store/categoryStore';
import SliderCompo from '../discharge/SliderCompo';
import CategoryNav from '../discharge/CategoryNav';
import MapComponent from '../discharge/MapComponent';
import LoadingSpinner from '../LoadingSpinner';

// map marker
const markers = [
  { lat: 37.64398229999981, lng: 127.11030229999939 },
  { lat: 37.6429594000002, lng: 127.1042267999995 },
  { lat: 37.6428473999999, lng: 127.10544689999936 },
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

  useEffect(() => {
    // 현재 카테고리에 해당하는 이미지 가져오기
    const images = getCategoryImages(currentCategory);

    // 이미지 로드 체크
    let loadedCount = 0;
    if (images.length === 0) {
      setLoading(false);
      return;
    }

    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false); // 모든 이미지가 로드되면 로딩 해제
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false);
        }
      };
    });
  }, [currentCategory, getCategoryImages]);

  return (
    <main id="restaurant">
      {loading && <LoadingSpinner loading={loading} />}
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
