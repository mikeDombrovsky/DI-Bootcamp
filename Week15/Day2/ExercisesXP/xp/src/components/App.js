import "./App.css";

import { ThemeProvider } from "./ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ChangeMe } from "./ChangeMe";
import { CharacterCounter } from "./CharacterCounter";

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
      <CharacterCounter />
      <hr />
      <p>Exercise 3</p>
      <hr />
    </div>
  );
}

export default App;
