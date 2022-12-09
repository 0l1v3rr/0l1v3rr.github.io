import { useKeyboardInput } from "../../hooks/useKeyboardInput";
import { useRef } from "react";
import Prompt from "./Prompt";
import TerminalTitle from "./TerminalTitle";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";

const TerminalContainer = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const promptText = useKeyboardInput();
  useScrollToBottom(bottomRef.current);

  return (
    <section
      className="rounded-xl w-full h-full bg-black/[.8] 
        border border-solid border-kali-black font-fira-code 
        text-sm shadow-5xl flex flex-col overflow-hidden"
    >
      <TerminalTitle />

      <div
        className="px-1 text-kali-gray text-sm w-full h-full
          overflow-y-auto terminal-scrollbar pb-2"
      >
        <Prompt text={promptText} showCursor={true} />

        <div ref={bottomRef} />
      </div>
    </section>
  );
};

export default TerminalContainer;
