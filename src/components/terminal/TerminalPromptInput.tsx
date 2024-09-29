import { FC, FormEvent, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TerminalPromptInputProps {}

const TerminalPromptInput: FC<TerminalPromptInputProps> = ({}) => {
  const [input, setInput] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (input.trim() === "") return;

    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        autoFocus
        onFocus={() => setInputFocus(true)}
        onBlur={(e) => {
          setInputFocus(false);
          e.target.focus();
        }}
        value={input}
        onClick={(e) => setCaretPosition(e.currentTarget.selectionStart ?? 0)}
        onKeyDown={(e) => setCaretPosition(e.currentTarget.selectionStart ?? 0)}
        onChange={(e) => {
          setInput(e.target.value);
          setCaretPosition(e.target.selectionStart ?? 0);
        }}
        className="w-full whitespace-nowrap bg-transparent p-0 text-kali-white text-transparent focus:outline-none"
      />
      <div
        className={twMerge(
          "pointer-events-none absolute left-0 top-1/2 h-[20px] max-w-full -translate-y-1/2 overflow-hidden overflow-ellipsis whitespace-nowrap pr-2"
        )}
      >
        {inputFocus && (
          <span
            className="content[''] absolute top-0 h-[20px] w-2 animate-blink bg-kali-gray/[.8]"
            style={{ left: `${input.length === 0 ? 0 : caretPosition}ch` }}
          />
        )}
        {input}
      </div>
    </form>
  );
};

export default TerminalPromptInput;
