import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = ({ loading }) => {
  if (!loading) return null; // loading이 false면 아무것도 렌더링하지 않음

  return (
    <div className="loading-overlay">
      <PacmanLoader color="rgba(136, 194, 124, 0.8)" size={50} />
    </div>
  );
};

export default LoadingSpinner;
