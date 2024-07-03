import React, { useRef } from 'react';
import "./App.css";
import { motion, useScroll } from "framer-motion";

import SkillsSectionComplete from './components/skills/skillsSectionComplete';
import Aboutme from './components/aboutme/aboutme';

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="App" ref={scrollRef}>
        <Aboutme />
        <SkillsSectionComplete />
      </div>
    </>
  );
};

export default App;
