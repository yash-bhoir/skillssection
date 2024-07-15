import React from 'react';
import Rightsectionskills from './skillsSectionBottomRight';
import ProgressContainer from './skillsSectionBottomLeft';

const SkillsSectionBottom: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto">
      <div className="flex-1 flex justify-center items-center bg-black p-4">
        <ProgressContainer />
      </div>
      <div className="flex-1 flex justify-center items-center bg-black p-4">
        <Rightsectionskills />
      </div>
    </div>
  );
};

export default SkillsSectionBottom;
