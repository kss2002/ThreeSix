import React from 'react';

const MainFooter = () => {
  return (
    <>
      <footer id="MainFooter-mobile">
        <div className="Mainfooter__bottom">삼육대 유니브 1팀</div>
      </footer>
      <footer>
        <div id="MainFooter-id" className="MainFooter-pc">
          <p className="Mainfooter__text">
            영업시간,휴무일 등등
            <br />
            기재된 내용과 다를 수 있으며 자세한 사항은 가게에 문의해주세요!
          </p>
          <p className="Mainfooter__title">유니브 삼육대 1팀</p>
          <h6 className="Mainfooter__update">
            Copyright &copy; 업데이트:2025/01/27
          </h6>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
