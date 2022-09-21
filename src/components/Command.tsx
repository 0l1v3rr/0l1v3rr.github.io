import { FC } from "react";
import TypeAnimation from "react-type-animation";

interface CommandType {
  command: string;
}

const Command: FC<CommandType> = (props) => {
  return (
    <div className="relative">
      <div className="text-orange-300 ml-1 absolute z-20">
        <TypeAnimation
          cursor={false}
          sequence={[props.command]}
          repeat={1}
          className="type"
        />
      </div>

      <div className="text-gray-600 ml-1 absolute z-10">{props.command}</div>
    </div>
  );
};

export default Command;
