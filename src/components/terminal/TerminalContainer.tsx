import { useKeyboardInput } from "../../hooks/useKeyboardInput";
import { useEffect, useRef, useState } from "react";
import Prompt from "./Prompt";
import TerminalTitle from "./TerminalTitle";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";
import PromptSession from "../../classes/prompt-session";

const TerminalContainer = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [prompts, setPrompts] = useState<PromptSession[]>([
    new PromptSession(),
  ]);

  const enter = (result: string) => {
    setPrompts((prev) => {
      prev[prev.length - 1].handleEnterClick(promptText);
      return prev;
    });
    setPrompts((prev) => [...prev, new PromptSession()]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [prompts]);

  const promptText = useKeyboardInput(enter);
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
        {prompts.map((prompt) => {
          return (
            <Prompt
              text={prompt.enterPressed ? prompt.promptText : promptText}
              showCursor={prompt.showCursor}
              key={`prompt-${Math.random()}`}
            />
          );
        })}

        <div ref={bottomRef} />
      </div>
    </section>
  );
};

export default TerminalContainer;
