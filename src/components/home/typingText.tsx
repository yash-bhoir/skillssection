import TypingAnimation from "../../utils/typingAnimation";

export function TextRevealDemo() {
  const sentences = ["Full Stack Software Developer", "pragmatic Frontend Developer", "enthusiastic Backend Develope"];

  return (
    <TypingAnimation
      className="text-4xl font-bold text-white dark:text-white"
      texts={sentences}
    />
  );
}
