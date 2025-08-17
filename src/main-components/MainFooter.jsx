import { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';

// GitHube API / fetch
const MainFooter = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const fetchLastPushDate = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/kss2002/ThreeSix/commits'
        );
        const data = await response.json();

        if (data.length > 0) {
          const lastCommitDate = new Date(data[0].commit.committer.date);
          lastCommitDate.setHours(lastCommitDate.getHours() + 9); // UTC → KST 변환
          const formattedDate = lastCommitDate.toISOString().split('T')[0];

          setLastUpdated(formattedDate);
        }
      } catch (error) {
        console.error('GitHub 데이터를 불러오는 중 오류 발생:', error);
        setLastUpdated('업데이트 정보를 가져올 수 없습니다.');
      }
    };

    fetchLastPushDate();
  }, []);

  return (
    <>
      <footer id="MainFooter-id">
        <div className="Mainfooter__bottom">삼육대 유니브 1팀</div>
      </footer>
      <footer>
        <div id="MainFooter-id" className="MainFooter-pc">
          <p className="Mainfooter__text">
            영업시간,휴무일 등등
            <br />
            기재된 내용과 다를 수 있으며 자세한 사항은 가게에 문의해주세요!
          </p>
          <p className="Mainfooter__title">삼육대 유니브 1팀</p>
          <h3 className="Mainfooter__update">
            Copyright &copy; 업데이트: {lastUpdated}
            <a href="https://github.com/kss2002/ThreeSix" target="_blank">
              <FiGithub />
            </a>
          </h3>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
