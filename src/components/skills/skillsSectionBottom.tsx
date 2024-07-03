import React from 'react';
// import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiDotnet, SiJavascript } from 'react-icons/si';
import Rightsectionskills from './skillsSectionBottomRight';
import ProgressContainer from './skillsSectionBottomLeft';

const SkillsSectionBottom: React.FC = () => {
    return (
        // <div className="no-border min-h-screen bg-black text-white text-center p-4">
        //     {/* Top Section */}
        //     <div className="skillstext mb-10">
              
        //     </div>

        //     {/* Bottom Section */}
        //     <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        //         {/* Left Section */}
        //         <div className="md:col-span-6 grid grid-cols-2 grid-rows-3 gap-4">
        //             <div className="h-24 flex flex-col items-center justify-center">
        //                 <SiReact size={60} color="#61DAFB" />

        //                 <div className='reacttext' style={{ marginBottom: "5px", marginTop: "5px" }}>
        //                     <h2>React</h2>
        //                 </div>
        //                 <Progressbar progress={60} />
        //             </div>
        //             <div className="h-24 flex flex-col items-center justify-center">
        //                 <SiNodedotjs size={60} color="#339933" />
        //                 <div className='reacttext' style={{ marginBottom: "5px", marginTop: "5px" }}>
        //                     <h2>Node.js</h2>
        //                 </div>
        //                 <Progressbar progress={45} />
        //             </div>
        //             <div className="h-24 flex flex-col items-center justify-center">
        //                 <SiExpress size={60} color="#000000" />
        //                 <div className='reacttext'>
        //                     <h2>Express.js</h2>
        //                 </div>
        //                 <Progressbar progress={90} />
        //             </div>
        //             <div className="h-24 flex flex-col items-center justify-center">
        //                 <SiMongodb size={60} color="#47A248" />
        //                 <div className='reacttext'>
        //                     <h2>MongoDB</h2>
        //                 </div>
        //                 <Progressbar progress={100} />
        //             </div>
        //             <div className="h-24 flex flex-col items-center justify-center">
        //                 <SiDotnet size={60} color="#512BD4" />
        //                 <div className='reacttext'>
        //                     <h2>.Net</h2>
        //                 </div>
        //                 <Progressbar progress={20} />
        //             </div>
        //             <div className="h-24 flex flex-col items-center justify-center">
        //                 <SiJavascript size={60} color="#F7DF1E" />
        //                 <div className='reacttext' >
        //                     <h2>Javascript</h2>
        //                 </div>
        //                 <Progressbar progress={50} />
        //             </div>
        //         </div>

        //         {/* Right Section */}
        //         <div className="circle md:col-span-6 ">
        //             <Rightsectionskills />
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 justify-center items-center bg-black">
        <ProgressContainer />
      </div>
      <div className="flex-1 flex justify-center items-center bg-black">
      <Rightsectionskills />
            </div>
     
    </div>
    );
};

export default SkillsSectionBottom;
