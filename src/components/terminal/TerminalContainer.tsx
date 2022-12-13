import { useKeyboardInput } from "../../hooks/useKeyboardInput";
import { useEffect, useRef, useState } from "react";
import Prompt from "./Prompt";
import TerminalTitle from "./TerminalTitle";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";
import PromptSession from "../../classes/prompt-session";
import ResultDiv from "./ResultDiv";
import { motdText } from "../../const/commands";
import { useIsMobile } from "../../hooks/useIsMobile";

const TerminalContainer = () => {
  const isMobile = useIsMobile();

  const [isMotdVisible, setIsMotdVisible] = useState<boolean>(true);
  const [terminalClasses, setTerminalClasses] = useState<string>(
    "scale-100 opacity-100"
  );
  const bottomRef = useRef<HTMLDivElement>(null);
  useScrollToBottom(bottomRef.current);

  const [prompts, setPrompts] = useState<PromptSession[]>([
    new PromptSession(),
  ]);

  const handleEnterPress = () => {
    if (promptText.trim().toLowerCase().split(" ")[0] === "clear") {
      setPrompts([new PromptSession()]);
      setIsMotdVisible(false);
      return;
    }

    setPrompts((prev) => {
      prev[prev.length - 1].handleEnterClick(promptText);
      return [...prev, new PromptSession()];
    });
  };

  const promptText = useKeyboardInput(handleEnterPress, () => {
    setPrompts([new PromptSession()]);
    setIsMotdVisible(false);
  });

  useEffect(
    () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
    [prompts, promptText]
  );

  return (
    <section
      className={`rounded-md w-full h-full bg-kali-gray-dark/[.96] 
        border border-solid border-kali-border font-fira-code 
        text-sm shadow-terminal flex flex-col overflow-hidden 
        cursor-default resize ${terminalClasses} transition-all duration-100`}
    >
      <TerminalTitle
        closeTerminal={() => setTerminalClasses("scale-0 opacity-0")}
      />

      <div
        className="px-1 text-kali-gray text-sm w-full h-full
          overflow-y-auto terminal-scrollbar pb-2 pt-1"
      >
        {isMobile && (
          <ResultDiv
            text={`<span class="text-kali-red-dark">Err: This site does not work on devices without a physical keyboard.</span>`}
          />
        )}
        {isMotdVisible && <ResultDiv text={motdText()} />}

        {prompts.map((prompt) => {
          return (
            <div key={`prompt-${Math.random()}`}>
              <Prompt
                text={prompt.enterPressed ? prompt.promptText : promptText}
                showCursor={prompt.showCursor}
              />

              {prompt.result !== undefined && (
                <ResultDiv text={prompt.result} />
              )}
            </div>
          );
        })}

        <div ref={bottomRef} />
      </div>
    </section>
  );
};

export default TerminalContainer;
