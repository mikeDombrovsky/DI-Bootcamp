import React, { useState } from 'react';
import './App.css';
import Language from './components/Language';


function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const addVote = (name) => {
    const languagesCopy = [...languages ];
    const langObj = languagesCopy.find(lang => lang.name === name);
    langObj.votes = langObj.votes + 1;
    setLanguages(languagesCopy);
  }

  return (
    <main>
      <h1>Vote Your language!</h1>
      {
        languages.map(lang => {
          return (
            <Language name={lang.name} votes={lang.votes} addVote={addVote} />
          )
        })
      }
    </main>
  );
}

export default App;
