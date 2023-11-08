import { useTheme } from "./ThemeContext";
import "./ChangeMe.css";
import { useEffect, useContext } from "react";

export const ChangeMe = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <p>My current Theme: {theme}</p>
    </div>
  );
};
