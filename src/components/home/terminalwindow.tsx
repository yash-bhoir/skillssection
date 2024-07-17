import React from 'react';
import useTypingEffect from './usetypingHook';

const TypingEffect: React.FC = () => {
  const lines = [
    "I'm a full stack developer.",
    "I build scalable and performant web applications.",
    "I create intuitive user interfaces.",
    "I ensure smooth backend integration.",
    "Let's build something amazing together!",
  ];
  
  const { displayedLines, isTyping, currentLineIndex, currentCharIndex } = useTypingEffect(lines);

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
    <div className="typing-effect-container">
      <div className="typing-effect-menu">
        <div className="typing-effect-buttons typing-effect-close"></div>
        <div className="typing-effect-buttons typing-effect-minimize"></div>
        <div className="typing-effect-buttons typing-effect-zoom"></div>
      </div>
      <div className="typing-effect-screen font-normal text-white dark:text-neutral-400">
        {displayedLines.map((line, index) => (
          <p key={index}>
            PS C:\User\Yash&gt; {line}
            {isTyping && index === currentLineIndex && <span className="blinking-cursor">|</span>}
          </p>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TypingEffect;
