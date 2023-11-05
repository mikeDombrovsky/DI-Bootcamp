import { useState } from "react";
import "./App.css";
import MealForm from "./MealForm";
import MealDisplay from "./MealDisplay";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [destination, setDestination] = useState("");
  const [nuts_free, setNuts_free] = useState("No");
  const [lactose_free, setLactose_free] = useState("No");
  const [vegan_meal, setVegan_meal] = useState("No");

  return (
    <div className="App">
      <MealForm
        setName={setName}
        setLastName={setLastName}
        setAge={setAge}
        setGender={setGender}
        setDestination={setDestination}
        setNuts_free={setNuts_free}
        setLactose_free={setLactose_free}
        setVegan_meal={setVegan_meal}
      />
      <hr />
      <MealDisplay
        name={name}
        lastName={lastName}
        age={age}
        gender={gender}
        destination={destination}
        nuts_free={nuts_free}
        lactose_free={lactose_free}
        vegan_meal={vegan_meal}
      />
    </div>
  );
}

export default App;
