// food-grid 전역 공통 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';

const FoodList = ({ title, foodItems }) => {
  return (
    <section>
      <header className="list__head">{title}</header>
      <main>
        <div className="list__main">
          {foodItems.map((item) => (
            <div key={item.id}>
              <Link className="list__brand" to={item.path}>
                <img className="list__img" src={item.img} alt={item.title} />
                <div className="list__col">
                  <div className="list__name">{item.title}</div>
                  <div className="list__businessHours">{item.time}</div>
                  <div className="list__phoneNumber">{item.phoneNum}</div>
                </div>
              </Link>
              <div className="list__line"></div>
            </div>
          ))}

          <div className="list__bar"></div>
          <div className="list__back">
            <Link to="/">다른 식당은 어때요?</Link>
          </div>
          <div className="list__cat"></div>
        </div>

        <div className="list__caution">
          [주의사항]
          <br />
          <br />
          안녕하세요. 삼식아입니다.
        </div>

        <div className="desc">
          메뉴 항목과 가격은 <br /> 각 매장의 사정에 따라 기재된 내용과 <br />
          다를 수 있음을 알려드립니다. <br /> 또한 영업 시간이 다를 수도 있으며,
          매장 자체가 쉬는 곳도 존재할 수 있습니다. <br />
          감사합니다.😊
        </div>
      </main>

      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default FoodList;
