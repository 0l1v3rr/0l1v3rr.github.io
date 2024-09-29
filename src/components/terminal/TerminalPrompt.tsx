import { FC, ReactNode } from "react";
import { GiAlliedStar } from "react-icons/gi";
import { twMerge } from "tailwind-merge";

interface TerminalPromptProps {
  children?: ReactNode;
  username: string;
}

const TerminalPrompt: FC<TerminalPromptProps> = ({ children, username }) => {
  const isRoot = username === "root";
  const borderColor = isRoot ? "text-kali-blue" : "text-kali-green";
  const usernameColor = isRoot ? "text-kali-red" : "text-kali-blue";

  const icon = isRoot ? (
    <>💀</>
  ) : (
    <GiAlliedStar className="mt-[-1px] inline-block" />
  );

  return (
    <div className="relative flex w-full flex-col">
      <div
        className={twMerge(
          "before:content[''] after:content[''] ml-5 select-none font-bold before:absolute before:left-0.5 before:top-1/4 before:h-[2px] before:w-5 before:-translate-y-[2px] after:absolute after:left-0.5 after:h-1/2 after:w-[2px] after:translate-y-1/2",
          isRoot && "before:bg-kali-blue after:bg-kali-blue",
          !isRoot && "before:bg-kali-green after:bg-kali-green"
        )}
      >
        <span className={borderColor}>(</span>
        <span className={usernameColor}>
          {username}
          {icon}
          kali
        </span>
        <span className={borderColor}>)-[</span>
        <span className="text-kali-gray">~</span>
        <span className={borderColor}>]</span>
      </div>

      <div
        className={twMerge(
          "before:content[''] ml-3 flex items-center gap-0 before:absolute before:left-0.5 before:top-[75%] before:h-[2px] before:w-3 before:-translate-y-[2px]",
          isRoot && "before:bg-kali-blue",
          !isRoot && "before:bg-kali-green"
        )}
      >
        <span
          className={twMerge("ml-0.5 select-none font-bold", usernameColor)}
        >
          {isRoot ? "#" : "$"}
        </span>

        <div className="relative w-full pl-2 text-sm text-kali-gray">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TerminalPrompt;
