import { useEffect, useState } from "react";

export const useTimeFormat = (): string => {
  const [date, setDate] = useState<string>(formatDate(new Date()));

  useEffect(() => {
    const interval = setInterval(() => setDate(formatDate(new Date())), 1000);

    return () => clearInterval(interval);
  });

  return date;
};

const formatDate = (date: Date): string => {
  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h24",
  });
};
