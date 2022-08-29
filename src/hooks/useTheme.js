import { useState, useEffect } from "react";

export const useTheme = () => {
  let checkTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [nightMode, setNightMode] = useState(checkTheme);

  const nightModeChanged = () => {
    setNightMode(!nightMode);
    localStorage.setItem("theme", !nightMode);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "false") {
      setNightMode(false);
    }
  }, []);
  return [nightMode, nightModeChanged];
};
