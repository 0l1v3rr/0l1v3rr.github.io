import { FC } from "react";

interface PromptProps {
  text: string;
  showCursor: boolean;
}

const Prompt: FC<PromptProps> = (props) => {
  return (
    <div className="flex flex-col relative">
      <div
        className="ml-5 before:content[''] before:h-[1px] before:w-5 
          before:bg-kali-blue before:absolute before:top-1/4 before:left-0.5
          after:content[''] after:h-1/2 after:w-[1px] after:bg-kali-blue
          after:absolute after:left-0.5 after:translate-y-1/2 
          before:-translate-y-[1px] select-none font-bold"
      >
        <span className="text-kali-blue">(</span>
        <span className="text-kali-red">root💀kali</span>
        <span className="text-kali-blue">)-[</span>
        <span className="text-kali-gray">~</span>
        <span className="text-kali-blue">]</span>
      </div>

      <div
        className="ml-3 before:content[''] before:h-[1px] before:w-3 
          before:bg-kali-blue before:absolute before:top-[75%] before:left-0.5
          before:-translate-y-[1px] flex items-center gap-0"
      >
        <span className="text-kali-red ml-0.5 select-none font-bold">#</span>
        <div
          className={`text-kali-gray text-[.8rem] relative 
            ${
              props.showCursor &&
              `after:content[''] after:h-4 after:w-2 after:absolute 
            after:bg-kali-gray after:translate-y-[10%] after:animate-blink`
            }`}
        >
          <span className="select-none">&nbsp;</span>
          {`${props.text}`}
        </div>
      </div>
    </div>
  );
};

export default Prompt;
