import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState('')
  return (
    <main>
      <nav>
        <h1>Weather App</h1>
        <input type="search" placeholder="Search" onChange={(e) => setCity(e.target.value)}  />
      </nav>
      <div>{city}</div>
    </main>
  );
}

export default App;
