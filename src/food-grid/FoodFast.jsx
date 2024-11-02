import React from 'react';
import { Link } from 'react-router-dom';
// 브랜드 사진
import huchamjal from '../assets/img/rest-food/f-rest/Huchamjal.png';
import jikjin from '../assets/img/rest-food/f-rest/Jikjin.png';
import moms from '../assets/img/rest-food/f-rest/Moms.png';
import saendu from '../assets/img/rest-food/f-rest/Saendu.png';
import chang from '../assets/img/rest-food/f-rest/Chang.png';

// 핵심 데이터 부품화
const fastList = [
  {
    id: 1,
    title: '후라이드 참 잘하는 집',
    img: huchamjal,
    time: '영업시간 11:00 ~ 00:30',
    phoneNum: '전화번호 031-527-2509',
    path: '/huchamjal',
  },
  {
    id: 2,
    title: '직진 닭강정',
    img: jikjin,
    time: '영업시간 10:00 ~ 20:30',
    phoneNum: '전화번호 0507-1320-1892',
    path: '/jikjin',
  },
  {
    id: 3,
    title: '맘스터치',
    img: moms,
    time: '영업시간 11:00 ~ 21:00',
    phoneNum: '전화번호 031-572-0572',
    path: '/moms',
  },
  {
    id: 4,
    title: '샌두',
    img: saendu,
    time: '영업시간 11:00 ~ 18:30',
    phoneNum: '전화번호 031-575-5558',
    path: '/saendu',
  },
  {
    id: 5,
    title: '창부리또',
    img: chang,
    time: '영업시간 09:00 ~ 20:45',
    phoneNum: '전화번호 0507-1488-3848',
    path: '/chang',
  },
];

const FoodFast = () => {
  return (
    <section>
      <header className="list__head">기타</header>
      <main>
        <div className="list__main">
          {fastList.map((list, key) => (
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

export default FoodFast;
