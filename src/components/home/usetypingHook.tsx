import { useState, useEffect } from 'react';

const useTypingEffect = (lines: string[], typingSpeed = 100, lineDelay = 1000) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      if (currentCharIndex < lines[currentLineIndex].length) {
        const timeoutId = setTimeout(() => {
          setDisplayedLines((prev) => {
            const updatedLines = [...prev];
            if (!updatedLines[currentLineIndex]) {
              updatedLines[currentLineIndex] = "";
            }
            updatedLines[currentLineIndex] += lines[currentLineIndex][currentCharIndex];
            return updatedLines;
          });
          setCurrentCharIndex(currentCharIndex + 1);
        }, typingSpeed);

        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
        }, lineDelay);

        return () => clearTimeout(timeoutId);
      }
    } else {
      setIsTyping(false);
    }
  }, [lines, currentLineIndex, currentCharIndex, typingSpeed, lineDelay]);

  return { displayedLines, isTyping, currentLineIndex, currentCharIndex };
};

export default useTypingEffect;
