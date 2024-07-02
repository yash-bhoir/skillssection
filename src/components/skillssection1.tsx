import React from 'react';
import { FlipWordsDemo } from './FlipWordsDemo';
import Rightsectionskills from './rightsectionskills';
import IconCloudDemo from './skills';

const TwoColumnLayout: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 justify-center items-center bg-black">
        <FlipWordsDemo />
      </div>
      <div className="flex-1 flex justify-center items-center bg-black">
      <IconCloudDemo/>
      </div>
     
    </div>
  );
};

export default TwoColumnLayout;
