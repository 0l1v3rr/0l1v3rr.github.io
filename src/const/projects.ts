interface Project {
  name: string;
  link: string;
  category: "frontend" | "backend" | "fullstack" | "other";
}

export const projects: Project[] = [
  {
    name: "GitHub README Tech Stack",
    link: "https://github.com/0l1v3rr/github-readme-tech-stack?ref=0l1v3rr.github.io",
    category: "fullstack",
  },
  {
    name: "Trello Clone",
    link: "https://github.com/0l1v3rr/trello-clone?ref=0l1v3rr.github.io",
    category: "fullstack",
  },
  {
    name: "CLI File Manager",
    link: "https://github.com/0l1v3rr/cli-file-manager?ref=0l1v3rr.github.io",
    category: "other",
  },
  {
    name: "Pathfinding Visualizer",
    link: "https://github.com/0l1v3rr/pathfinding-visualizer?ref=0l1v3rr.github.io",
    category: "frontend",
  },
  {
    name: "Portfolio Website",
    link: "https://github.com/0l1v3rr/0l1v3rr.github.io?ref=0l1v3rr.github.io",
    category: "frontend",
  },
];
