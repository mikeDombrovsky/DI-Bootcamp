import "./MealForm.css";

const MealForm = ({
  setName,
  setLastName,
  setAge,
  setGender,
  setDestination,
  setNuts_free,
  setLactose_free,
  setVegan_meal,
}) => {
  return (
    <section className="form">
      <h1>Sample form</h1>
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
        <div className="gender">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="gender">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>

        <div className="select_destination">
          <h5>Select your destination</h5>
          <div>
            <select
              name="destination"
              id="dest"
              onChange={(e) => setDestination(e.target.value)}
            >
              <option>--Please choose a destination--</option>
              <option value="Israel">Israel</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
        </div>
        <h5>Dietary restrictions:</h5>
        <div>
          <div className="restriction">
            <input
              type="checkbox"
              name="nuts_free"
              id="nuts_free"
              onChange={(e) => setNuts_free(e.target.checked ? "Yes" : "No")}
            />
            <label htmlFor="nuts_free">Nuts free</label>
          </div>
          <div className="restriction">
            <input
              type="checkbox"
              name="lactose_free"
              id="lactose_free"
              onChange={(e) => setLactose_free(e.target.checked ? "Yes" : "No")}
            />
            <label htmlFor="lactose_free">Lactose free</label>
          </div>
          <div className="restriction">
            <input
              type="checkbox"
              name="vegan"
              id="vegan"
              onChange={(e) => setVegan_meal(e.target.checked ? "Yes" : "No")}
            />
            <label htmlFor="vegan">Vegan</label>
          </div>
        </div>
        <input type="submit" />
      </form>
    </section>
  );
};

export default MealForm;
