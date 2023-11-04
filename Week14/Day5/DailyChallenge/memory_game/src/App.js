import superheroes from "./superheroes.json";
import "./App.css";
import { useState } from "react";
import CardList from "./components/CardList.js";


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
      <header>
        <div>
          <h2>Superheroes Memory Game</h2>
          <p>
            <span>Score:{score}</span>
            <span>Top Score:{topScore}</span>
          </p>
        </div>
        <div>
          Get points by clicking on an image but don't click on any more than
          once!
        </div>
      </header>
      <CardList heroes={heroes} count={count}/>
    </div>
  );
}

export default App;
