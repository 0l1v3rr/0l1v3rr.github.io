import { FC } from "react";
import TypeAnimation from 'react-type-animation';

interface CommandType {
    command: string
}

const Command:FC<CommandType> = (props) => {
    return (
        <div className="flex gap-2 ml-1">
            <span className="text-gray-500">$</span>
            <span className="text-orange-300">
                <TypeAnimation 
                    cursor={true}
                    sequence={[props.command, 1000]}
                    repeat={1}
                    className="type"
                />
            </span>
        </div>
    );
};

export default Command;