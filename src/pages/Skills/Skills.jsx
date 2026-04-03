import React from "react";
import {
  Box,
  Database,
  LayoutGrid,
  Monitor,
  Network,
  Share2,
  Sparkles,
} from "lucide-react";
import {
  SiAmazonwebservices,
  SiAxios,
  SiC,
  SiCplusplus,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiKeras,
  SiLangchain,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiOpenapiinitiative,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { skillsSection, site } from "@/data/sefinContent";

const brandIconClass = "w-10 h-10";
const conceptIconClass = "w-10 h-10 text-violet-400";

function StackIcon({ iconKey, variant }) {
  if (variant === "concept") {
    const common = conceptIconClass;
    switch (iconKey) {
      case "oop":
        return <Sparkles className={common} strokeWidth={1.35} />;
      case "dbms":
        return <Database className={common} strokeWidth={1.35} />;
      case "networks":
        return <Network className={common} strokeWidth={1.35} />;
      case "os":
        return <Monitor className={common} strokeWidth={1.35} />;
      case "dsa":
        return <LayoutGrid className={common} strokeWidth={1.35} />;
      default:
        return null;
    }
  }

  const c = brandIconClass;
  switch (iconKey) {
    case "c":
      return <SiC className={`${c} text-[#A8B9CC]`} />;
    case "cpp":
      return <SiCplusplus className={`${c} text-[#00599C]`} />;
    case "python":
      return <SiPython className={`${c} text-[#3776AB]`} />;
    case "java":
      return <SiOpenjdk className={`${c} text-[#437291]`} />;
    case "sklearn":
      return <SiScikitlearn className={`${c} text-[#F89939]`} />;
    case "tensorflow":
      return <SiTensorflow className={`${c} text-[#FF6F00]`} />;
    case "pytorch":
      return <SiPytorch className={`${c} text-[#EE4C2C]`} />;
    case "keras":
      return <SiKeras className={`${c} text-[#D00000]`} />;
    case "opencv":
      return <SiOpencv className={`${c} text-[#5C3EE8]`} />;
    case "flask":
      return <SiFlask className={`${c} text-gray-200`} />;
    case "langchain":
      return <SiLangchain className={`${c} text-sky-400`} />;
    case "vectordb":
      return <Share2 className={`${c} text-violet-400`} strokeWidth={1.25} />;
    case "rag":
      return <Box className={`${c} text-violet-400`} strokeWidth={1.25} />;
    case "html5":
      return <SiHtml5 className={`${c} text-[#E34F26]`} />;
    case "css3":
      return <SiCss3 className={`${c} text-[#1572B6]`} />;
    case "javascript":
      return <SiJavascript className={`${c} text-[#F7DF1E]`} />;
    case "react":
      return <SiReact className={`${c} text-[#61DAFB]`} />;
    case "nextjs":
      return <SiNextdotjs className={`${c} text-white`} />;
    case "tailwind":
      return <SiTailwindcss className={`${c} text-[#06B6D4]`} />;
    case "typescript":
      return <SiTypescript className={`${c} text-[#3178C6]`} />;
    case "nodejs":
      return <SiNodedotjs className={`${c} text-[#339933]`} />;
    case "express":
      return <SiExpress className={`${c} text-gray-100`} />;
    case "fastapi":
      return <SiFastapi className={`${c} text-[#009688]`} />;
    case "django":
      return <SiDjango className={`${c} text-[#092E20]`} />;
    case "jwt":
      return <SiJsonwebtokens className={`${c} text-gray-200`} />;
    case "mysql":
      return <SiMysql className={`${c} text-[#4479A1]`} />;
    case "postgresql":
      return <SiPostgresql className={`${c} text-[#4169E1]`} />;
    case "redis":
      return <SiRedis className={`${c} text-[#DC382D]`} />;
    case "restapi":
      return <SiOpenapiinitiative className={`${c} text-[#6BA539]`} />;
    case "git":
      return <SiGit className={`${c} text-[#F05032]`} />;
    case "github":
      return <SiGithub className={`${c} text-white`} />;
    case "docker":
      return <SiDocker className={`${c} text-[#2496ED]`} />;
    case "aws":
      return <SiAmazonwebservices className={`${c} text-[#FF9900]`} />;
    case "axios":
      return <SiAxios className={`${c} text-[#5A29E4]`} />;
    default:
      return null;
  }
}

function TechItem({ item, variant }) {
  const highlight = item.highlight;
  return (
    <div
      className={`flex flex-col items-center gap-2 max-w-[100px] ${
        variant === "concept" ? "min-w-[104px]" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center rounded-xl transition-transform duration-200 hover:scale-105 ${
          highlight
            ? "ring-2 ring-violet-500/90 ring-offset-2 ring-offset-[#0a0f24] p-1.5"
            : ""
        }`}
      >
        <StackIcon iconKey={item.iconKey} variant={variant} />
      </div>
      <span className="text-[11px] sm:text-xs text-gray-300 leading-tight font-medium">
        {item.name}
      </span>
    </div>
  );
}

function StackCard({ category }) {
  return (
    <div className="rounded-2xl border border-gray-700/70 bg-gray-900/85 backdrop-blur-sm p-5 sm:p-6 shadow-lg shadow-black/30 hover:border-violet-500/25 transition-colors duration-300">
      <h3 className="text-center text-sm sm:text-base font-semibold text-white mb-5 tracking-wide">
        {category.title}
      </h3>
      <div className={category.gridClass}>
        {category.items.map((item) => (
          <TechItem key={item.name} item={item} variant={category.variant} />
        ))}
      </div>
    </div>
  );
}

const SkillsSection = () => {
  const { headingLead, headingAccent, subtitle, categories } = skillsSection;

  return (
    <main
      id="skills"
      className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative scroll-mt-24"
    >
      <div className="absolute inset-0 bg-skills-grid opacity-20 pointer-events-none" />

      <section className="container mx-auto px-4 py-12 sm:py-16 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 text-sm text-violet-400/90">
            <span className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
            <span className="font-medium tracking-wide">{site.domainBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
            <span className="text-white">{headingLead}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500">
              {headingAccent}
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <StackCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
