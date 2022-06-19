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
                    url: "https://github.com/0l1v3rr/gourly",
                    title: "gourly",
                    description: "✂️ A very simple URL shortener.",
                    category: "fullstack",
                    techStack: [ "Go", "Gin", "Gorm", "React" ]
                }}
            />
        </>
    );
};

export default Fullstack;