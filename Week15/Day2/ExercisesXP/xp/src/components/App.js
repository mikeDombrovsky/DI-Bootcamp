import "./App.css";

import { ThemeProvider } from "./ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ChangeMe } from "./ChangeMe";

function App() {
  return (
    <div className="App">
      <hr />
      <p>Exercise 1</p>
      <hr />
      <ThemeProvider>
        <ThemeSwitcher />
        <ChangeMe />
      </ThemeProvider>
      <hr />
      <p>Exercise 2</p>
      <hr />
    </div>
  );
}

export default App;
