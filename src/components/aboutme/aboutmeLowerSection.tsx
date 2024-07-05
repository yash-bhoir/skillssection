import React from 'react';
import TextRevealByWord from '../../utils/text-reveal'; // Assuming you meant TextRevealByWord instead of TextReveal

const TextRevealDemo: React.FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white  ">
            <TextRevealByWord text={`I am a full-stack developer with a passion for building scalable,high-performance applications, delivering exceptional user experiences through modern frontend architecture, and robust backend solutions.`} />
        </div>
    );
};

export default TextRevealDemo;
