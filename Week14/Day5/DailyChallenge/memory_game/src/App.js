import superheroes from "./superheroes.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [heroes, setHeroes] = useState(superheroes);

  const count = (id) => {
    const heroesCopy = [...heroes];
    const hero = heroesCopy.find((hero) => hero.id === id);
    if (!hero) {
      return;
    }
    if (hero.clicked) {
      console.log("KLIT-CKED");
      shuffle();
      return;
    }
    hero.clicked = true;
    setHeroes(heroesCopy);
    shuffle();
  };

  const shuffle = () => {
    const shuffled = [...heroes];
    shuffled.sort((a, b) => 0.5 - Math.random());
    setHeroes(shuffled);
  };

  return (
    <div className="App">
      <CardList heroes={heroes} />
    </div>
  );
}

export default App;
