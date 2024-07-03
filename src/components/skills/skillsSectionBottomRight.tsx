import { SiReact, SiDotnet, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiGit, SiGithub, SiCplusplus, SiCsharp, SiFramer, SiExpress, SiTailwindcss, SiMicrosoftsqlserver } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: <SiReact size={50} color="#61DAFB" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={50} color="#8CC84B" /> },
  { name: 'Express.js', icon: <SiExpress size={50} color="white" /> },
  { name: 'MongoDB', icon: <SiMongodb size={50} color="#4DB33D" /> },
  { name: 'HTML', icon: <SiHtml5 size={50} color="#E34F26" /> },
  { name: 'CSS', icon: <SiCss3 size={50} color="#1572B6" /> },
  { name: 'Git', icon: <SiGit size={50} color="white" /> },
  { name: 'GitHub', icon: <SiGithub size={50} color="white" /> },
  { name: 'C++', icon: <SiCplusplus size={50} color="#00599C" /> },
  { name: 'Data Structures & Algorithms', icon: <SiFramer size={50} color="#00599C" /> },
  { name: '.NET MVC Core', icon: <SiDotnet size={50} color="#5C2D91" /> },
  { name: 'C#', icon: <SiCsharp size={50} color="#239120" /> },
  { name: 'JavaScript', icon: <SiJavascript size={50} color="#F7DF1E" /> },
  { name: 'Framer Motion', icon: <SiFramer size={50} color="white" /> },
  { name: 'Bootstrap', icon: <SiBootstrap size={50} color="#563D7C" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} color="#38B2AC" /> },
  { name: 'SQL', icon: <SiMicrosoftsqlserver size={50} color="#CC2927" /> }, // Corrected 'sql' to 'SQL'
];

const Rightsectionskills = () => {
  return (
    <div className="rightsectionskills p-4">
      <div className="lat flex flex-wrap items-start justify-start">
        <h1 className="w-full text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl mx-auto font-normal text-neutral-500 dark:text-neutral-400  mb-10">LANGUAGES AND TOOLS</h1>
        {skills.filter(skill => ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Git', 'GitHub'].includes(skill.name)).map(skill => (
          <div key={skill.name} className="flex flex-col items-center m-2">
            <span>{skill.icon}</span>
            <span className="text-sm mt-2 text-2xl mx-auto font-normal text-neutral-500 dark:text-neutral-400">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="laf flex flex-wrap items-start justify-start">
        <h1 className="w-full text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl mx-auto font-normal text-neutral-500 dark:text-neutral-400 mt-10 mb-10">LIBRARIES AND FRAMEWORKS</h1>
        {skills.filter(skill => ['C++', '.NET MVC Core', 'C#', 'JavaScript', 'Framer Motion', 'Bootstrap', 'Tailwind CSS'].includes(skill.name)).map(skill => (
          <div key={skill.name} className="flex flex-col items-center m-2">
            <span>{skill.icon}</span>
            <span className="text-sm mt-2 text-2xl mx-auto font-normal text-neutral-500 dark:text-neutral-400">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="dao flex flex-wrap items-start justify-start">
        <h1 className="w-full text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl mx-auto font-normal text-neutral-500 dark:text-neutral-400 mt-10 mb-10">DATABASES AND OTHERS</h1>
        {skills.filter(skill => ['MongoDB', 'SQL'].includes(skill.name)).map(skill => (
          <div key={skill.name} className="flex flex-col items-center m-2">
            <span>{skill.icon}</span>
            <span className="text-sm mt-2 text-2xl mx-auto font-normal text-neutral-500 dark:text-neutral-400">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightsectionskills;
