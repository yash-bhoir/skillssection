// AboutMeText.tsx
import "./aboutMeText.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { TypewriterEffectDemo } from "./TypewriterEffect";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 25 }: ParallaxProps) { // Further reduced baseVelocity
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1], { // Further reduced max factor
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000); // Adjusted delta calculation

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax font-normal text-neutral-600 dark:text-neutral-400">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function AboutMeText() {
  return (
    <section>
      <ParallaxText baseVelocity={-2}>I am a full-stack developer with a passion for building </ParallaxText> {/* Further reduced baseVelocity */}
      <TypewriterEffectDemo />
      <ParallaxText baseVelocity={2}>through modern frontend architecture, and robust backend solutions.</ParallaxText> {/* Further reduced baseVelocity */}
    </section>
  );
}
