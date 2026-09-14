import { useEffect, useState } from "react";

export type Theme = "system" | "dark" | "light";

const STORAGE_KEY = "theme";

const getSystemTheme = (): "dark" | "light" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (
      savedTheme === "system" ||
      savedTheme === "dark" ||
      savedTheme === "light"
    ) {
      return savedTheme;
    }

    return "system";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const resolvedTheme =
        theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;

      document.documentElement.classList.toggle(
        "dark-mode",
        resolvedTheme === "dark",
      );
    };

    applyTheme();

    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };

  return {
    theme,
    setTheme: changeTheme,
    resolvedTheme: theme === "system" ? getSystemTheme() : theme,
  };
};
