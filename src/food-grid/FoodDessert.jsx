import React from 'react';
import { Link } from 'react-router-dom';
// 브랜드 사진
import seumail from '../assets/img/rest-food/d-rest/Seumail.png';
import bageul from '../assets/img/rest-food/d-rest/Bageul.png';
import maemeodeu from '../assets/img/rest-food/d-rest/Maemeodeu.png';
import rinseu from '../assets/img/rest-food/d-rest/Rinseu.png';
import idiya from '../assets/img/rest-food/d-rest/Idiya.png';
import yogi from '../assets/img/rest-food/d-rest/Yogi.png';
import gonggang from '../assets/img/rest-food/d-rest/Gonggang.png';
import haio from '../assets/img/rest-food/d-rest/Haio.png';

// 핵심 데이터 부품화
const dessertList = [
  {
    id: 1,
    title: '스마일하우스',
    img: seumail,
    time: '영업시간 08:10 ~ 21:30',
    phoneNum: '전화번호 031-527-3664',
    path: '/seumail',
  },
  {
    id: 2,
    title: '바글바글 베이커리',
    img: bageul,
    time: '영업시간 09:00 ~ 19:00',
    phoneNum: '전화번호 0507-1415-0208',
    path: '/bageul',
  },
  {
    id: 3,
    title: '매머드 커피',
    img: maemeodeu,
    time: '영업시간 07:30 ~ 18:30',
    phoneNum: '전화번호 0505-042-0428',
    path: '/maemeodeu',
  },
  {
    id: 4,
    title: '린스테이블',
    img: rinseu,
    time: '영업시간 10:00 ~ 21:00',
    phoneNum: '전화번호 070-8736-3679',
    path: '/rinseu',
  },
  {
    id: 5,
    title: '이디야',
    img: idiya,
    time: '영업시간 08:00 ~ 21:00',
    phoneNum: '전화번호 0507-1397-0208',
    path: '/idiya',
  },
  {
    id: 6,
    title: 'YOGI YOGURT',
    img: yogi,
    time: '영업시간 모름',
    phoneNum: '전화번호 모름',
    path: '/yogi',
  },
  {
    id: 7,
    title: '카페 공강',
    img: gonggang,
    time: '영업시간 10:00 ~ 21:30',
    phoneNum: '전화번호 031-575-0908',
    path: '/gonggang',
  },
  {
    id: 8,
    title: '하이오커피',
    img: haio,
    time: '영업시간 08:20 ~ 20:00',
    phoneNum: '전화번호 031-527-7555',
    path: '/haio',
  },
];

const FoodDessert = () => {
  return (
    <section>
      <header className="list__head">후식</header>
      <main>
        <div className="list__main">
          {dessertList.map((list, key) => (
            <div key={list.id}>
              <Link className="list__brand" to={list.path}>
                <img className="list__img" src={list.img} alt="사진" />
                <div className="list__col">
                  <div className="list__name">{list.title}</div>
                  <div className="list__businessHours">{list.time}</div>
                  <div className="list__phoneNumber">{list.phoneNum}</div>
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
          <br /> <br />
          안녕하세요. 삼식아입니다.
        </div>
        <div className="desc">
          메뉴 항목과 가격은 <br />각 매장의 사정에 따라 기재된 내용과 <br />
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

export default FoodDessert;
