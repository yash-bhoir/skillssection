import React from 'react';
import { FlipWordsDemo } from './skillsSectionTopLeft';
import IconCloudDemo from './skillsSectionTopRight';

const SkillsSectionTop: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex-1 flex justify-center items-center bg-black p-4">
        <FlipWordsDemo />
      </div>
      <div className="flex-1 flex justify-center items-center bg-black p-4">
        <IconCloudDemo />
      </div>
    </div>
  );
};

export default SkillsSectionTop;
