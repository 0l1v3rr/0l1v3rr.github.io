import { useState } from "react";
import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";

const Terminal = () => {
  const [username, setUsername] = useState("root");

  return (
    <main className="flex h-full w-[min(100%,_60rem)] cursor-default flex-col overflow-hidden border border-kali-border bg-kali-gray-dark/[.96] font-fira-code text-sm shadow-terminal sm:rounded-md md:aspect-[3/2] md:h-auto">
      <TerminalHeader username={username} />
      <TerminalBody username={username} />
    </main>
  );
};

export default Terminal;
