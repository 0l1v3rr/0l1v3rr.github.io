import { useEffect } from "react";

export const useScrollToBottom = (element: HTMLDivElement | null): void => {
  useEffect(() => element?.scrollIntoView({ behavior: "smooth" }), [element]);
};
