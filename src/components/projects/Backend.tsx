import Project from "./Project";

const Backend = () => {
    return (
        <>
            <Project 
                project={{
                    url: "https://github.com/0l1v3rr/bookstore-api",
                    title: "Bookstore API",
                    description: "📑 A simple REST API that returns some sample data.",
                    category: "backend",
                    techStack: [ "Go", "gorilla/mux", "MySQL" ]
                }}
            />

            <Project 
                project={{
                    url: "https://github.com/0l1v3rr/algorithms",
                    title: "Algorithms",
                    description: "🦾 My implementation of various Data Structures and Algorithms in Java.",
                    category: "backend",
                    techStack: [ "Java" ]
                }}
            />
        </>
    );
};

export default Backend;