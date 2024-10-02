import { FC, FormEvent, Fragment, KeyboardEvent, useState } from "react";
import { twMerge } from "tailwind-merge";
import { getColorfulPrompt } from "../../lib/utils";
import parse from "html-react-parser";
import { COMMAND_NAMES } from "../../lib/commands";

interface TerminalPromptInputProps {
  onEnter(prompt: string): void;
}

const TerminalPromptInput: FC<TerminalPromptInputProps> = ({ onEnter }) => {
  const [input, setInput] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onEnter(input);
    setInput("");
  }

  const autocompleteCommand = input
    ? COMMAND_NAMES.find((x) => x.startsWith(input))
    : undefined;

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    setCaretPosition(e.currentTarget.selectionStart ?? 0);

    if (autocompleteCommand && e.key === "Tab") {
      e.preventDefault();
      setInput(autocompleteCommand);
      setCaretPosition(autocompleteCommand.length);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        aria-label="Terminal input"
        autoFocus
        onFocus={() => setInputFocus(true)}
        onBlur={(e) => {
          setInputFocus(false);
          e.target.focus();
        }}
        value={input}
        onClick={(e) => setCaretPosition(e.currentTarget.selectionStart ?? 0)}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setInput(e.target.value);
          setCaretPosition(e.target.selectionStart ?? 0);
        }}
        className="w-full cursor-default whitespace-nowrap bg-transparent p-0 text-kali-white text-transparent focus:outline-none"
      />

      {autocompleteCommand && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-kali-text-muted">
          {[...input].map((_, idx) => (
            <Fragment key={idx}>&nbsp;</Fragment>
          ))}
          {autocompleteCommand.substring(input.length)}
        </div>
      )}

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

        {parse(getColorfulPrompt(input))}
      </div>
    </form>
  );
};

export default TerminalPromptInput;
