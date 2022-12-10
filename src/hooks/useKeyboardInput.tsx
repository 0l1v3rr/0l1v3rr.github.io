import { useCallback, useEffect, useState } from "react";

export const useKeyboardInput = (
  enterPress: (result: string) => void,
  clearInputs: () => void
): string => {
  const [result, setResult] = useState<string>("");

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();

      if (event.isComposing) {
        return;
      }

      // enter press
      if (event.code === "Enter") {
        enterPress(result);
        setResult("");
        return;
      }

      // ctrl + backspace hotkey
      if (event.ctrlKey && event.code === "Backspace") {
        setResult((prev) => prev.split(" ").slice(0, -1).join(" "));
        return;
      }

      // ctrl + l hotkey
      if (event.ctrlKey && event.code === "KeyL") {
        clearInputs();
        return;
      }

      // regular keys
      if (event.code.startsWith("Key") || event.code.startsWith("Digit")) {
        setResult((prev) => `${prev}${event.key}`);
        return;
      }

      // "special characters"
      switch (event.code) {
        case "Backspace":
          setResult((prev) => prev.slice(0, -1));
          break;
        case "Space":
          setResult((prev) => `${prev} `);
          break;
      }
    },
    [enterPress, result, clearInputs]
  );

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return result;
};
