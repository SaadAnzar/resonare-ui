import { useTheme } from "@/providers/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
}
