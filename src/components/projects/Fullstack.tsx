import Project from "./Project";

const Fullstack = () => {
    return (
        <>
            <Project
                project={{
                    url: "https://github.com/0l1v3rr/scrumw",
                    title: "scrumw",
                    description: "🚩scrumw - a free, open-source, self-hosted scrum & project management system.",
                    category: "fullstack",
                    techStack: [ "Java", "Spring Boot", "SvelteKit" ]
                }}
            />

            <Project
                project={{
                    url: "https://github.com/0l1v3rr/todo",
                    title: "Advanced ToDo",
                    description: "✔️ This is an advanced and over-engineered full-stack to-do application.",
                    category: "fullstack",
                    techStack: [ "Go", "Gin", "React", "TypeScript" ]
                }}
            />
        </>
    );
};

export default Fullstack;