import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import "./App.css";

import SkillsSectionComplete from "./components/skills/skillsSectionComplete";
import Aboutme from "./components/aboutme/aboutme";
import Contact from "./components/contact/Contact";
import Home from "./components/home/home";
import Navbar from "./layouts/navbar";
import Preloader from "./utils/preloder"; // Assuming Preloader is defined in this path

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Element name="section1">
            <Home />
          </Element>
          <Element name="section2">
            <Aboutme />
          </Element>
          <Element name="section3">
            <SkillsSectionComplete />
          </Element>
          <Element name="section4">
            {/* Projects Component Here */}
          </Element>
          <Element name="section5">
            <Contact />
          </Element>
        </>
      )}
    </>
  );
};

export default App;
