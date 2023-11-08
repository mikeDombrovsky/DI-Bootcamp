import { useTheme } from "./ThemeContext";
import "./ChangeMe.css";

export const ChangeMe = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <p>My current Theme: {theme}</p>
    </div>
  );
};
