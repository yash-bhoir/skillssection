import React from 'react';
import NameSection from './nameSection';
import SocialIcons from './socialIcons';
import SplineSection from './splineSection';
import TypingEffect from './terminalwindow';

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto min-h-auto">
      <div className="md:col-span-2 flex flex-col md:flex-row bg-black p-4 text-white pt-10">
        <div className="flex flex-col md:flex-row w-full md:w-1/2">
          <div className="hidden md:flex flex-grow-0 flex-shrink-0 mx-auto mb-4 mr-4 mt-[140px]">
            <SocialIcons />
          </div>
          <div className="flex flex-grow-0 flex-shrink-0 mx-auto w-auto">
            <NameSection />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center mt-4 md:mt-0 w-full">
          <SplineSection />
        </div>
      </div>
      <div className="bg-black flex-1 items-center md:col-span-2">
        <div className="mt-7">
          <TypingEffect />
        </div>
      </div>
    </div>
  );
};

export default Home;
