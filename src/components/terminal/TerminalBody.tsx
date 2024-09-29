import { FC, Fragment, useState } from "react";
import TerminalPrompt from "./TerminalPrompt";
import TerminalPromptInput from "./TerminalPromptInput";
import { History } from "../../types";
import { getColorfulPrompt, processPrompt } from "../../lib/utils";
import { v4 as uuidv4 } from "uuid";
import parse from "html-react-parser";

interface TerminalBodyProps {}

const TerminalBody: FC<TerminalBodyProps> = () => {
  const [history, setHistory] = useState<History[]>([]);

  function handlePromptEnter(prompt: string) {
    const { command } = processPrompt(prompt);

    if (command === "clear") {
      setHistory([]);
      return;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: uuidv4(),
        prompt,
        response: `${command}: command not found`,
      },
    ]);
  }

  return (
    <section className="terminal-scrollbar h-full w-full overflow-y-scroll px-1 pb-2 pt-1 text-sm text-kali-gray">
      {history.map((item) => (
        <Fragment key={item.id}>
          <TerminalPrompt>
            {parse(getColorfulPrompt(item.prompt))}
          </TerminalPrompt>
          <div>{parse(item.response + "<br/><br/>")}</div>
        </Fragment>
      ))}

      <TerminalPrompt>
        <TerminalPromptInput onEnter={handlePromptEnter} />
      </TerminalPrompt>
    </section>
  );
};

export default TerminalBody;
