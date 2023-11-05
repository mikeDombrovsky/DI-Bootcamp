import './MealDisplay.css';

const MealDisplay = ({
  name,
  lastName,
  age,
  gender,
  destination,
  nuts_free,
  lactose_free,
  vegan_meal,
}) => {
  return (
    <section className="display">
      <h3>Entered information:</h3>
      <p>
        Your name: {name} {lastName}
      </p>
      <p>Your age: {age}</p>
      <p>Your gender: {gender}</p>
      <p>Your destination: {destination}</p>

      <p>Your dietary restrictions:</p>
      <p className="restriction">**Nuts free: {nuts_free}</p>
      <p className="restriction">**Lactose free: {lactose_free}</p>
      <p className="restriction">**Vegan meal: {vegan_meal}</p>
    </section>
  );
};

export default MealDisplay;
