"use client";
import { TypewriterEffect } from "../../utils/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "scalable",
    },
    {
      text: "high-performance",
    },
    {
      text: "applications",
    },
    {
      text: "delivering",
    },
    {
        text: "exceptional",
      },
      {
        text: "user",
        className: "text-red-500 dark:text-red-500",

      },
    {
      text: "experiences.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className=" flex-col items-center justify-center mt-5 mb-5 ">
      <TypewriterEffect words={words} />
    </div>
  );
}

