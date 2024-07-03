import React from 'react';
import  TextRevealDemo  from './aboutmeLowerSection';
import Onemore from './onemoretext';

const AboutMe: React.FC = () => {
  return (
    <div className="grid grid-rows-2 min-h-screen">
      {/* Upper Section */}
      <div className="bg-blue-500 flex items-center justify-center p-4">
        <Onemore/>
      </div>
      
      {/* Lower Section */}
      <div className="bg-black flex items-center justify-center p-4">
        <TextRevealDemo/>
      </div>
    </div>
  );
};

export default AboutMe;
