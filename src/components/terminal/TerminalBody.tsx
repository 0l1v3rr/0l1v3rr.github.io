import { FC, Fragment, useEffect, useRef, useState } from "react";
import TerminalPrompt from "./TerminalPrompt";
import TerminalPromptInput from "./TerminalPromptInput";
import { History } from "../../types";
import { getColorfulPrompt, processPrompt } from "../../lib/utils";
import { v4 as uuidv4 } from "uuid";
import parse from "html-react-parser";
import { useUsernameContext } from "../../context/UsernameContext";
import { getCommandResponse, MOTD } from "../../lib/commands";

interface TerminalBodyProps {}

const TerminalBody: FC<TerminalBodyProps> = () => {
  const { username, setUsername } = useUsernameContext();

  const [history, setHistory] = useState<History[]>([]);
  const [motdVisible, setMotdVisible] = useState(true);

  const scrollToRef = useRef<HTMLDivElement>(null);

  function handlePromptEnter(prompt: string) {
    const { command, args, sudo } = processPrompt(prompt);

    if (command === "clear") {
      setHistory([]);
      setMotdVisible(false);
      return;
    }

    if (command === "su") {
      setUsername(args[0]);
    }

    setHistory((prev) => [
      ...prev,
      {
        id: uuidv4(),
        prompt,
        response: getCommandResponse({ command, args, sudo }, username),
        username,
      },
    ]);
  }

  useEffect(() => {
    scrollToRef.current?.scrollIntoView({ behavior: "instant" });
  }, [history]);

  return (
    <section className="terminal-scrollbar h-full w-full overflow-y-scroll px-1 pb-2 pt-1 text-sm text-kali-gray [&_a]:cursor-default hover:[&_a]:underline [&_b]:text-kali-cyan">
      {motdVisible && parse(MOTD + "<br/><br/>")}

      {history.map((item) => (
        <Fragment key={item.id}>
          <TerminalPrompt username={item.username}>
            {parse(getColorfulPrompt(item.prompt))}
          </TerminalPrompt>
          <div>
            {parse(
              item.response + (item.response?.trim() ? "<br/><br/>" : "<br/>")
            )}
          </div>
        </Fragment>
      ))}

      <TerminalPrompt username={username}>
        <TerminalPromptInput onEnter={handlePromptEnter} />
      </TerminalPrompt>

      <div ref={scrollToRef} />
    </section>
  );
};

export default TerminalBody;
