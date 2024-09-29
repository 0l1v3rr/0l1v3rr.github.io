import { FC } from "react";
import TerminalPrompt from "./TerminalPrompt";

interface TerminalBodyProps {}

const TerminalBody: FC<TerminalBodyProps> = () => {
  return (
    <section className="terminal-scrollbar h-full w-full overflow-y-scroll px-1 pb-2 pt-1 text-sm text-kali-gray">
      <TerminalPrompt>sudo asd</TerminalPrompt>
    </section>
  );
};

export default TerminalBody;
