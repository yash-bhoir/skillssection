import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineSection: React.FC = () => {
  return (
    <div className="bg-black flex flex-1 items-center justify-center w-full h-full">
      <div className="relative w-full h-full flex items-center justify-center">
        <Spline scene="https://prod.spline.design/0RTbBQIjc7AVMyX6/scene.splinecode" className="w-full h-full md:w-[600px] md:h-[600px]" />
      </div>
    </div>
  );
};

export default SplineSection;
