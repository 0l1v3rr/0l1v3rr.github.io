import { title } from "process";
import { FC } from "react";

interface ProjectData {
    url: string,
    title: string,
    description?: string,
    category: string,
    techStack: string[]
}

interface ProjectProp {
    project: ProjectData
}

const Project:FC<ProjectProp> = (props) => {
    return (
        <div className="text-gray-300 flex flex-col">
            <span className="text-emerald-400 font-bold">
                <span className="text-gray-600 font-normal">| </span>
                <a target="_blank" href={props.project.url} className="hover:underline">
                    {props.project.title}
                </a>&nbsp;
                <span className="font-thin bg-white/[0.1] text-gray-500 px-2 w-fit rounded-lg gap-2 mb-1">
                    {props.project.category}
                </span>
            </span>

            <span className="text-gray-400">
                <span className="text-gray-600">| </span>
                {props.project.description}
            </span>

            <span className="text-gray-300">
                <span className="text-gray-600">| </span>
                [ {props.project.techStack.join(', ')} ]
            </span>
        </div>
    );
}

export default Project;