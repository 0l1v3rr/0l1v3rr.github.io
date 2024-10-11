import {
  FC,
  FormEvent,
  Fragment,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { getColorfulPrompt } from "../../lib/utils";
import parse from "html-react-parser";
import { COMMAND_NAMES } from "../../lib/commands";
import { flushSync } from "react-dom";

interface TerminalPromptInputProps {
  history: string[];
  onEnter(prompt: string): void;
  onClear(): void;
}

const TerminalPromptInput: FC<TerminalPromptInputProps> = ({
  history,
  onEnter,
  onClear,
}) => {
  const [input, setInput] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [shouldBlink, setShouldBlink] = useState(true);
  const shouldBlinkTimeoutRef = useRef<number>();

  const [caretPosition, setCaretPosition] = useState(0);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(
    history.length
  );

  useEffect(() => {
    setCurrentHistoryIndex(history.length);
  }, [history.length]);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onEnter(input);
    setInput("");
  }

  const autocompleteCommand = input
    ? COMMAND_NAMES.find((x) => x.startsWith(input))
    : undefined;

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    clearTimeout(shouldBlinkTimeoutRef.current);

    new Promise(() =>
      flushSync(() => setCaretPosition(e.currentTarget.selectionStart ?? 0))
    );

    if (autocompleteCommand && e.key === "Tab") {
      e.preventDefault();
      setInput(autocompleteCommand);
      setCaretPosition(autocompleteCommand.length);
      return;
    }

    if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      onClear();
      return;
    }

    if (["ArrowUp", "ArrowDown"].includes(e.key)) {
      e.preventDefault();

      const newHistoryIndex =
        e.key === "ArrowUp"
          ? Math.max(0, currentHistoryIndex - 1)
          : Math.min(history.length, currentHistoryIndex + 1);

      setCurrentHistoryIndex(newHistoryIndex);
      setInput(history[newHistoryIndex] ?? "");
      setCaretPosition(history[newHistoryIndex]?.length ?? 0);
    }

    setShouldBlink(false);
    shouldBlinkTimeoutRef.current = setTimeout(() => setShouldBlink(true), 500);
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
        onKeyDown={handleKeyDown}
        onKeyUp={(e) => setCaretPosition(e.currentTarget.selectionStart ?? 0)}
        onChange={(e) => {
          setInput(e.target.value);
          setCurrentHistoryIndex(history.length);
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
            className={twMerge(
              "content[''] absolute top-0 h-[20px] w-2 bg-kali-gray/[.8]",
              shouldBlink && "animate-blink"
            )}
            style={{ left: `${input.length === 0 ? 0 : caretPosition}ch` }}
          />
        )}

        {parse(getColorfulPrompt(input))}
      </div>
    </form>
  );
};

export default TerminalPromptInput;
