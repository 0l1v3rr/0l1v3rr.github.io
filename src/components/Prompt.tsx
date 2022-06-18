import { FC } from "react";

import { MdWeb } from "react-icons/md";
import { IoIosFolderOpen } from "react-icons/io";
import { FaGithubAlt, FaCodeBranch } from "react-icons/fa";

interface PromptType {
    page: string
}

const Prompt:FC<PromptType> = (props) => {
    return (
        <div className="flex items-center bg-white/[0.07] px-3 w-fit rounded-lg gap-2 mb-1">
            <div className="text-gray-100 text-sm"><MdWeb /></div>
            <div className="text-gray-500">/</div>
            <div className="text-blue-500 flex items-center text-sm">
                <IoIosFolderOpen />&nbsp;
                <span className="font-bold">~</span>/0l1v3rr/<span className="font-bold">portfolio</span>
            </div>
            <div className="text-gray-500">/</div>
            <div className="flex text-emerald-500 items-center text-sm">
                <FaGithubAlt />&nbsp;<FaCodeBranch />&nbsp;
                {props.page}
            </div>
        </div>
    );
};

export default Prompt;