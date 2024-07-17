import React from 'react';
import SocialIconsH from './socialmediahorizontal';

const NameSection: React.FC = () => {
    return (
        <div className="text-center flex-1 py-12">
            <h1 className="font-normal text-neutral-600 dark:text-neutral-400 text-2xl mt-12">
                Hii, my name is
            </h1>
            <h1 className="text-5xl mt-7 font-bold text-neutral-600 dark:text-neutral-400">
                <span className="text-white">Yash</span> Bhoir
            </h1>
            <div className="text-4xl font-bold text-neutral-600 dark:text-neutral-400 mt-[50px]">
                I am a Full Stack <span className="text-blue-500">Developer </span>
                <span className="text-white">|</span>
            </div>

            <div className="md:hidden flex justify-center mt-[30px]">
                <SocialIconsH />
            </div>

            <button className="p-[3px] relative mt-[60px]">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                    Let's Talk
                </div>
            </button>
        </div>
    );
};

export default NameSection;
