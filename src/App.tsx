import React, { useRef } from "react";
import "./App.css";
import { motion, useScroll } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SkillsSectionComplete from "./components/skills/skillsSectionComplete";
import Aboutme from "./components/aboutme/aboutme";
import Contact from "./components/contact/Contact";
import Home from "./components/home/home";
import Navbar from "./layouts/navbar";
import { HeroParallaxDemo } from "./components/projects/ProjectsSection";

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  return (
    // <Router>
      <>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="App" ref={scrollRef}>
          <Navbar />
          <Home />
          <Aboutme />
          <SkillsSectionComplete />
          {/* <HeroParallaxDemo /> */}
          <Contact />
        </div>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/skills" element={<SkillsSectionComplete />} />
          <Route path="/projects" element={<HeroParallaxDemo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </>
    // </Router>
  );
};

export default App;
