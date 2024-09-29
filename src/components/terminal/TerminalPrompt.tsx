import { FC, ReactNode } from "react";
import { GiAlliedStar } from "react-icons/gi";

interface TerminalPromptProps {
  children?: ReactNode;
}

const TerminalPrompt: FC<TerminalPromptProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col">
      <div className="before:content[''] after:content[''] ml-5 select-none font-bold before:absolute before:left-0.5 before:top-1/4 before:h-[2px] before:w-5 before:-translate-y-[2px] before:bg-kali-blue after:absolute after:left-0.5 after:h-1/2 after:w-[2px] after:translate-y-1/2 after:bg-kali-blue">
        <span className="text-kali-blue">(</span>
        <span className="text-kali-red">
          root💀
          <GiAlliedStar className="mt-[-1px] inline-block" />
          kali
        </span>
        <span className="text-kali-blue">)-[</span>
        <span className="text-kali-gray">~</span>
        <span className="text-kali-blue">]</span>
      </div>

      <div className="before:content[''] ml-3 flex items-center gap-0 before:absolute before:left-0.5 before:top-[75%] before:h-[2px] before:w-3 before:-translate-y-[2px] before:bg-kali-blue">
        <span className="ml-0.5 select-none font-bold text-kali-red">#</span>

        <div className="relative pl-2 text-sm text-kali-gray">{children}</div>
      </div>
    </div>
  );
};

export default TerminalPrompt;
