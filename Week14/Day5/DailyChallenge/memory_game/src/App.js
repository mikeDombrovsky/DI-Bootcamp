import superheroes from "./superheroes.json";
import "./App.css";
import { useState } from "react";
import CardList from "./components/CardList.js";

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [heroes, setHeroes] = useState(superheroes);

  const count = (id) => {
    let hero = heroes.find((hero) => hero.id === id);
    console.log(hero);
    if (!hero) {
      return;
    }
    if (hero.clicked) {
      console.log("KLIT-CKED");
      if (score > topScore) {
        setTopScore(score);
      }
      setScore(0);
      setHeroes(superheroes.map((h) => h).sort((a, b) => 0.5 - Math.random()));

      console.log(heroes);
      return;
    }
    setScore(score + 1);
    
    setHeroes(
      heroes
        .map((h) => {
          if (h.id === id) {
            return { ...hero, clicked: true };
          } else {
            return h;
          }
        })
        .sort((a, b) => 0.5 - Math.random())
    );

    console.log("heroes", heroes);
  };

  const shuffle = () => {
    const shuffled = heroes.map((hero) => hero);
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
      <CardList heroes={heroes} count={count} />
    </div>
  );
}

export default App;
