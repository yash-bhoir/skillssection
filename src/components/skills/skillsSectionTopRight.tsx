import IconCloud from "../../utils/icon-cloud";

const slugs = [
  "react",
  "nodedotjs",
  "express",
  "mongodb",
  "html5",
  "css3",
  "microsoftsqlserver",
  "git",
  "github",
  "cplusplus",
  "javascript",
  "tsnode",
  "dotnet",
  "csharp",
  "framer",
  "bootstrap",
  "tailwindcss",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background mt-4">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
