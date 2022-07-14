import Project from "./Project";

const Other = () => {
    return (
        <>
            <Project
                project={{
                    url: "https://github.com/0l1v3rr/cli-file-manager",
                    title: "CLI File Manager",
                    description: "⚡A fully-featured very fast file manager that runs inside your terminal. It's designed for Linux.",
                    category: "cli-app",
                    techStack: [ "Go" ]
                }}
            />

            <Project
                project={{
                    url: "https://github.com/0l1v3rr/creek",
                    title: "Creek",
                    description: "🌊 A fast and easy-to-use streams library for Golang.",
                    category: "library",
                    techStack: [ "Go" ]
                }}
            />

            <Project
                project={{
                    url: "https://github.com/0l1v3rr/subnet-calculator",
                    title: "Subnet Calculator",
                    description: "🖨️ A simple command-line tool to calculate IPv4 subnets.",
                    category: "cli-app",
                    techStack: [ "Go" ]
                }}
            />

            <Project
                project={{
                    url: "https://github.com/0l1v3rr/port-scanner",
                    title: "Port Scanner",
                    description: "🛡️ This is a terminal application that allows you to find opened ports on a network.",
                    category: "cli-app",
                    techStack: [ "Go" ]
                }}
            />

            <Project
                project={{
                    url: "https://github.com/0l1v3rr/jfmt",
                    title: "JFMT",
                    description: "🔬 An easy-to-use Java library to format strings and write colored outputs more easily.",
                    category: "library",
                    techStack: [ "Java" ]
                }}
            />
        </>
    );
};

export default Other;