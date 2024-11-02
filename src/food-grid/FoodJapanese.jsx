import React from 'react';
import { Link } from 'react-router-dom';
// 브랜드 사진
import byeolmiga from '../assets/img/rest-food/j-rest/Byeolmiga.png';
import torikokoro from '../assets/img/rest-food/j-rest/Torikokoro.png';
import syokuyoku from '../assets/img/rest-food/j-rest/Syokuyoku.png';

// 핵심 데이터 부품화
const japaneseList = [
  {
    id: 1,
    title: '별미가',
    img: byeolmiga,
    time: '영업시간 11:00 ~ 21:00',
    phoneNum: '전화번호 0507-1348-5845',
    path: '/byeolmiga',
  },
  {
    id: 2,
    title: '토리코코로',
    img: torikokoro,
    time: '영업시간 10:00 ~ 20:30',
    phoneNum: '전화번호 0507-1321-8794',
    path: '/torikokoro',
  },
  {
    id: 3,
    title: '쇼쿠요쿠',
    img: syokuyoku,
    time: '영업시간 10:30 ~ 20:30',
    phoneNum: '전화번호 031-527-2933',
    path: '/syokuyoku',
  },
];

const FoodJapanese = () => {
  return (
    <section>
      <header className="list__head">일식</header>
      <main>
        <div className="list__main">
          {japaneseList.map((list, key) => (
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
      </main>
      <footer>
        <div className="list__foot">하루를 맛있게</div>
      </footer>
    </section>
  );
};

export default FoodJapanese;
