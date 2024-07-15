import React from 'react';
import AboutMeText from './aboutMeText';

const AboutMe: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-black w-full h-screen">
      <div className="max-w-full mx-auto">
        <AboutMeText />
      </div>
    </div>
  );
};

export default AboutMe;
