import { useKeyboardInput } from "../../hooks/useKeyboardInput";
import Prompt from "./Prompt";
import TerminalTitle from "./TerminalTitle";

const TerminalContainer = () => {
  const promptText = useKeyboardInput();

  return (
    <section
      className="rounded-xl w-full h-full bg-black/[.8] 
        border border-solid border-kali-black font-fira-code 
        text-sm overflow-y-hidden shadow-5xl"
    >
      <TerminalTitle />

      <div className="px-1 text-kali-gray text-sm w-full">
        <Prompt text={promptText} showCursor={true} />
      </div>
    </section>
  );
};

export default TerminalContainer;
