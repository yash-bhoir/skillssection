// src/components/GridLayout.tsx
import React from 'react';
import { IconCloudDemo } from './skills';
import Progressbar from './progressbar';
// Import your skill icons from simple-icons via react-icons
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiDotnet, SiJavascript } from 'react-icons/si';

const GridLayout: React.FC = () => {
    return (
        <div className="no-border min-h-screen bg-black text-white text-center p-4">
            {/* Top Section */}
            <div className="skillstext mb-10">
                <h1 className='skills'> skills</h1>
                <h1 className="myskills mt-2 font-medium text-gradient w-fit staggered-reveal" style={{ opacity: "1" }}>My Skills</h1>
                <p className="text-lg">
                    As a full stack developer,
                </p >
                <p className="text-lg">
                    I take pride in crafting both the frontend and backend of web applications,
                    <p className="text-lg">
                        ensuring seamless and efficient user experiences.
                    </p>
                </p>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Left Section */}
                <div className="md:col-span-6 grid grid-cols-2 grid-rows-3 gap-4">
                    <div className="h-24 flex flex-col items-center justify-center">
                        <SiReact size={60} color="#61DAFB" />

                        <div className='reacttext' style={{ marginBottom: "5px", marginTop: "5px" }}>
                            <h2>React</h2>
                        </div>
                        <Progressbar progress={60} />
                    </div>
                    <div className="h-24 flex flex-col items-center justify-center">
                        <SiNodedotjs size={60} color="#339933" />
                        <div className='reacttext' style={{ marginBottom: "5px", marginTop: "5px" }}>
                            <h2>Node.js</h2>
                        </div>
                        <Progressbar progress={45} />
                    </div>
                    <div className="h-24 flex flex-col items-center justify-center">
                        <SiExpress size={60} color="#000000" />
                        <div className='reacttext'>
                            <h2>Express.js</h2>
                        </div>
                        <Progressbar progress={90} />
                    </div>
                    <div className="h-24 flex flex-col items-center justify-center">
                        <SiMongodb size={60} color="#47A248" />
                        <div className='reacttext'>
                            <h2>MongoDB</h2>
                        </div>
                        <Progressbar progress={100} />
                    </div>
                    <div className="h-24 flex flex-col items-center justify-center">
                        <SiDotnet size={60} color="#512BD4" />
                        <div className='reacttext'>
                            <h2>.Net</h2>
                        </div>
                        <Progressbar progress={20} />
                    </div>
                    <div className="h-24 flex flex-col items-center justify-center">
                        <SiJavascript size={60} color="#F7DF1E" />
                        <div className='reacttext' >
                            <h2>Javascript</h2>
                        </div>
                        <Progressbar progress={50} />
                    </div>
                </div>

                {/* Right Section */}
                <div className="circle md:col-span-6 h-full">
                    <IconCloudDemo />
                </div>
            </div>
        </div>
    );
};

export default GridLayout;
