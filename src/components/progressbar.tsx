// // src/components/Progressbar.tsx
// import React from 'react';

// interface ProgressbarProps {
//   progress: number;
// }

// const Progressbar: React.FC<ProgressbarProps> = ({ progress }) => {
//   return (
//     <div className="progressbar">
//       <div className="progress">
//         <div className="progress-value" style={{ width: `${progress}%` }}></div>
//       </div>
//     </div>
//   );
// };

// export default Progressbar;
import React, { useEffect } from 'react';

interface ProgressBarProps {
  from: number;
  to: number;
  speed: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ from, to, speed }) => {
  useEffect(() => {
    const timer = document.querySelector(`.timer[data-to="${to}"]`) as HTMLElement;
    if (!timer) return;

    let start = from;
    const end = to;
    const duration = speed;
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(start + (progress / duration) * (end - start), end);
      timer.textContent = Math.floor(current).toString();
      if (current < end) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [from, to, speed]);

  return (
    <div className="progress">
      <span className="title timer" data-from={from} data-to={to} data-speed={speed}>{from}</span>
      <div className="overlay"></div>
      <div className="left"></div>
      <div className="right"></div>
    </div>
  );
};

export default ProgressBar;
