import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [destination, setDestination] = useState("");
  const [nuts_free, setNuts_free] = useState("No");
  const [lactose_free, setLactose_free] = useState("No");
  const [vegan_meal, setVegan_meale] = useState("No");

  const handleChange = (e) => {};

  return (
    <div className="App">
      <header>Sample form</header>
      <form>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="male">Female</label>
        </div>

        <div>
          <label for="destination">Select your destination</label>
          <select name="destination">
            <option>--Please choose a destination--</option>
            <option value="Israel">Israel</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <label>Dietary restrictions:</label>
        <div>
          <div>
            <input type="checkbox" name="nuts_free" />
            <label>Nuts free</label>
          </div>
          <div>
            <input type="checkbox" name="lactose_free" />
            <label>Lactose free</label>
          </div>
          <div>
            <input type="checkbox" name="vegan" />
            <label>Vegan</label>
          </div>
        </div>
      </form>
      <hr />
      <div>{name}</div>
    </div>
  );
}

export default App;
