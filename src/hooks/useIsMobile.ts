import { useState, useEffect } from "react";

const deviceNames = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
];

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(() => deviceNames.some((i) => navigator.userAgent.match(i)));
  }, []);

  return isMobile;
};
