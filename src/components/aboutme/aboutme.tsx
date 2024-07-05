import React from 'react';
import  TextRevealDemo  from './aboutmeLowerSection';
import AboutMeText from './aboutMeText';

const AboutMe: React.FC = () => {
  return (


    <div className="bg-black  max-w-full mx-auto ">
    <h1 className="text-xl font-bold mb-4">Responsive Div</h1>
    <p className="text-base">This div will automatically adjust its size according to the internal content and is responsive to different screen sizes.</p>
    <p className="text-base">Resize the browser window to see the effect.</p>
    <AboutMeText/>

  </div>
  );
};

export default AboutMe;
