import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = ({ loading }) => {
  if (!loading) return null; // loading이 false면 아무것도 렌더링하지 않음

  return (
    <div className="loading-overlay">
      <PacmanLoader color="#88c27c" size={50} />
    </div>
  );
};

export default LoadingSpinner;
