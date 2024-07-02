import React from 'react';
import ProgressBar from './progressbar';

const ProgressContainer: React.FC = () => {
  return (
    <div className="container">
      <ProgressBar from={0} to={85} speed={1800} />
      <ProgressBar from={0} to={70} speed={1500} />
      <ProgressBar from={0} to={70} speed={1500} />
      <ProgressBar from={0} to={85} speed={1800} />
      
    </div>
  );
};

export default ProgressContainer;
