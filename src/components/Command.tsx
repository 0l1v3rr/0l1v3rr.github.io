import { FC } from "react";

interface CommandType {
    command: string
}

const Command:FC<CommandType> = (props) => {
    return (
        <div className="flex gap-2 ml-1">
            <span className="text-gray-500">$</span>
            <span className="text-orange-300">{props.command}</span>
        </div>
    );
};

export default Command;