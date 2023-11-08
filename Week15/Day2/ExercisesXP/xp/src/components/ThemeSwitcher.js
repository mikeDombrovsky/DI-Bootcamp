import { useTheme } from "./ThemeContext";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
