import superheroes from "./superheroes.json";
import { useState } from "react";
import CardList from "./components/CardList.js";
import NavBar from "./components/NavBar.js";

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [heroes, setHeroes] = useState(superheroes);

  const count = (id) => {
    const hero = heroes.find((hero) => hero.id === id);
    if (!hero) {
      return;
    }
    if (hero.clicked) {
      if (score > topScore) {
        setTopScore(score);
      }
      setScore(0);
      setHeroes(
        superheroes.map((hero) => hero).sort(() => 0.5 - Math.random())
      );
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
        .sort(() => 0.5 - Math.random())
    );
  };

  const shuffle = () => {
    const shuffled = heroes.map((hero) => hero);
    shuffled.sort(() => 0.5 - Math.random());
    setHeroes(shuffled);
  };

  return (
    <div>
      <NavBar score={score} topScore={topScore} />
      <CardList heroes={heroes} count={count} />
    </div>
  );
}

export default App;
