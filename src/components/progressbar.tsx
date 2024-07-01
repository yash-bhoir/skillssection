// src/components/Progressbar.tsx
import React from 'react';

interface ProgressbarProps {
  progress: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({ progress }) => {
  return (
    <div className="progressbar">
      <div className="progress">
        <div className="progress-value" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Progressbar;
