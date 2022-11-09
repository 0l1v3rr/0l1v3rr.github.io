import Project from "./Project";

const Frontend = () => {
  return (
    <>
      <Project
        project={{
          url: "https://github.com/0l1v3rr/react-initializr?ref=0l1v3rr.github.io",
          title: "React Initializr",
          description:
            "📦 A web-based boilerplate-free React Project generator.",
          category: "cli-app",
          techStack: ["TypeScript, React, Tailwind"],
        }}
      />

      <Project
        project={{
          url: "https://github.com/0l1v3rr/0l1v3rr.github.io?ref=0l1v3rr.github.io",
          title: "Portfolio",
          description: "💻 My portfolio website",
          category: "frontend",
          techStack: ["TypeScript, React, Tailwind"],
        }}
      />

      <Project
        project={{
          url: "https://github.com/0l1v3rr/hangman-game?ref=0l1v3rr.github.io",
          title: "Hangman Game",
          description: "🪢 A web-based hangman game with React",
          category: "frontend",
          techStack: ["TypeScript, React, Tailwind"],
        }}
      />

      <Project
        project={{
          url: "https://github.com/0l1v3rr/vlsm-calculator?ref=0l1v3rr.github.io",
          title: "VLSM Calulator",
          description: "📝 Variable Length Subnet Mask Calculator",
          category: "frontend",
          techStack: ["Svelte", "JavaScript"],
        }}
      />

      <Project
        project={{
          url: "https://github.com/0l1v3rr/sorting-visualizer?ref=0l1v3rr.github.io",
          title: "Sorting Visualizer",
          description:
            "〽️ A simple web tool to visualize the different sorting algorithms.",
          category: "frontend",
          techStack: ["JavaScript", "HTML", "CSS"],
        }}
      />
    </>
  );
};

export default Frontend;
