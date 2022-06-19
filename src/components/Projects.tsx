import { useState, useEffect } from "react";

import Command from "./Command";
import Prompt from "./Prompt";

const sleep = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
);

const Projects = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await sleep(600);
            setIsLoaded(true);
        })();
    });
    
    return (
        <>
            <div className="ml-2 mb-1">
                <Prompt page="projects" />
                <Command command="projects" />

                {isLoaded && <ProjectContent />}
            </div>
        </>
    );
}

const ProjectContent = () => {
    return (
        <div className="text-gray-200">asd</div>
    );
}

export default Projects;