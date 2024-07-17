import React from "react";
import Spline from "@splinetool/react-spline";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { TextRevealDemo } from "./typingText";
// import CoderProfile from "./codeSection";
import Card from "./card";
import TypingEffect from "./terminalwindow";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto">
      <div className="bg-black flex-1 p-8 flex flex-col text-white">
        <h1 className="font-normal text-neutral-600 dark:text-neutral-400 text-2xl mt-12">Hii, my name is</h1>

        <h1 className="text-5xl mt-7 font-bold text-neutral-600 dark:text-neutral-400">
          <span className="text-white">Yash</span> Bhoir
        </h1>

        <div className="mt-7  items-center">
          <TypingEffect />
        </div>

        <div className="flex space-x-4 mb-6 mt-10">
          <FaEnvelope className="text-2xl" />
          <FaLinkedin className="text-2xl" />
          <FaGithub className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaTwitter className="text-2xl" />
        </div>
        <div className="w-full flex justify-center">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Let's Talk
            </div>
          </button>
        </div>
      </div>
      {/* <CoderProfile/> */}


      <div className="bg-black flex-1 flex items-center justify-center">
        <div className="w-full h-full max-w-screen-lg max-h-screen-md">
          <Spline scene="https://prod.spline.design/qOTUI2HG-omEkfqP/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Home;
