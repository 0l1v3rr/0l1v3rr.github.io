import { useState, useEffect, FC } from "react";
import { useSearchParams, Link } from "react-router-dom";

import Command from "./Command";
import Backend from "./projects/Backend";
import Frontend from "./projects/Frontend";
import Fullstack from "./projects/Fullstack";
import Other from "./projects/Other";
import Prompt from "./Prompt";

interface ProjectListProp {
    category: string | null
}

const sleep = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
);

const Projects = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const category = searchParams.get("category");
    
    const [isLoaded, setIsLoaded] = useState(false);
    const [cmdLoaded, setCmdLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await sleep(1000);
            setCmdLoaded(true);
            await sleep(710);
            setIsLoaded(true);
        })();
    });
    
    return (
        <>
            <div className="ml-2 mb-1 flex items-start gap-1">
                <Prompt page="projects" />
                {cmdLoaded && <Command command="projects" />}
            </div>

            {isLoaded && <ProjectContent category={category} />}
        </>
    );
}

const ProjectContent:FC<ProjectListProp> = (props) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <span className="text-gray-300">
                    You can find a few projects separated by categories here. 
                    If you want to know more, click the title of the project.
                </span>
                
                <div>
                    <span className="text-gray-300 font-bold">Please select a category: </span>

                    <div className="flex gap-8">
                        <Link to="?category=fullstack">
                            <span className="cursor-pointer underline text-gray-300">Fullstack</span>
                        </Link>

                        <Link to="?category=backend">
                            <span className="cursor-pointer underline text-gray-300">Backend</span>
                        </Link>

                        <Link to="?category=frontend">
                            <span className="cursor-pointer underline text-gray-300">Frontend</span>
                        </Link>

                        <Link to="?category=other">
                            <span className="cursor-pointer underline text-gray-300">Other</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="my-5 gap-4 flex flex-col">
                {props.category === "backend" && <Backend />}
                {props.category === "frontend" && <Frontend />}
                {props.category === "fullstack" && <Fullstack />}
                {props.category === "other" && <Other />}
            </div>
        </>
    );
}

export default Projects;