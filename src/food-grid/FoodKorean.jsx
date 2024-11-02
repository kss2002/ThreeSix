import React from 'react';
import { Link } from 'react-router-dom';
// 브랜드 사진
import haneuljigi from '../assets/img/rest-food/k-rest/Haneuljigi.png';
import darami from '../assets/img/rest-food/k-rest/Darami.png';
import dalkkalbi from '../assets/img/rest-food/k-rest/Dalkkalbi.png';
import cheone from '../assets/img/rest-food/k-rest/Cheone.png';
import ssalguksu from '../assets/img/rest-food/k-rest/Ssalguksu.png';
import chueotang from '../assets/img/rest-food/k-rest/Chueotang.png';
import jjukkumi from '../assets/img/rest-food/k-rest/Jjukkumi.png';
import gamjatang from '../assets/img/rest-food/k-rest/Gamjatang.png';
import choegojip from '../assets/img/rest-food/k-rest/Choegojip.png';

// 핵심 데이터 부품화
const koreanList = [
  {
    id: 1,
    title: '하늘지기(수내닭꼬치)',
    img: haneuljigi,
    time: '영업시간 09:00 ~ 22:00',
    phoneNum: '전화번호 010-4026-0631',
    path: '/haneuljigi',
  },
  {
    id: 2,
    title: '다람이임자탕',
    img: darami,
    time: '영업시간 11:00 ~ 21:00',
    phoneNum: '전화번호 031-529-9890',
    path: '/darami',
  },
  {
    id: 3,
    title: '스마일닭갈비',
    img: dalkkalbi,
    time: '영업시간 10:00 ~ 21:00',
    phoneNum: '전화번호 010-7704-8286',
    path: '/dalkkalbi',
  },
  {
    id: 4,
    title: '청와삼대',
    img: cheone,
    time: '영업시간 10:00 ~ 22:00',
    phoneNum: '전화번호 031-528-0338',
    path: '/cheone',
  },
  {
    id: 5,
    title: '쌀국수공방',
    img: ssalguksu,
    time: '영업시간 07:30 ~ 14:30',
    phoneNum: '전화번호 0507-1441-8582',
    path: '/ssalguksu',
  },
  {
    id: 6,
    title: '담터추어탕',
    img: chueotang,
    time: '영업시간 10:00 ~ 21:00',
    phoneNum: '전화번호 031-571-9544',
    path: '/chueotang',
  },
  {
    id: 7,
    title: '담터쭈구미',
    img: jjukkumi,
    time: '영업시간 11:00 ~ 20:45',
    phoneNum: '전화번호 0507-1402-9544',
    path: '/jjukkumi',
  },
  {
    id: 8,
    title: '세상만사감자탕',
    img: gamjatang,
    time: '영업시간 08:00 ~ 23:00',
    phoneNum: '전화번호 031-572-4998',
    path: '/gamjatang',
  },
  {
    id: 9,
    title: '최고집해물찜칼국수',
    img: choegojip,
    time: '영업시간 10:30 ~ 22:00',
    phoneNum: '전화번호 031-529-3688',
    path: '/choegojip',
  },
];

const FoodKorean = () => {
  return (
    <section>
      <header className="list__head">한식</header>
      <main>
        <div className="list__main">
          {koreanList.map((list, key) => (
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

export default FoodKorean;
