import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TerminalPromptInputProps {}

const TerminalPromptInput: FC<TerminalPromptInputProps> = ({}) => {
  const [input, setInput] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div className="relative w-full">
      <input
        autoFocus
        onFocus={() => setInputFocus(true)}
        onBlur={(e) => {
          setInputFocus(false);
          e.target.focus();
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full whitespace-nowrap bg-transparent p-0 text-kali-white text-transparent focus:outline-none"
      />
      <div
        className={twMerge(
          "pointer-events-none absolute left-0 top-1/2 h-[20px] max-w-full -translate-y-1/2 overflow-hidden overflow-ellipsis whitespace-nowrap pr-2",
          inputFocus &&
            "after:content[''] after:absolute after:h-[20px] after:w-2 after:animate-blink after:bg-kali-gray/[.8]"
        )}
      >
        {input}
      </div>
    </div>
  );
};

export default TerminalPromptInput;
