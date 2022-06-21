import { FC } from "react";
import TypeAnimation from 'react-type-animation';

interface CommandType {
    command: string
}

const Command:FC<CommandType> = (props) => {
    return (
        <div className="text-orange-300 ml-1">
            <TypeAnimation 
                cursor={false}
                sequence={[props.command]}
                repeat={1}
            />
        </div>
    );
};

export default Command;