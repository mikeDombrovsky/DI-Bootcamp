import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import './App.css';
import Exercise from './components/Exercise3';
function App() {
  //ex1
  const myElement = <h1>I love JSX!</h1>;
  const sum = 5 + 5;

  //ex2
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div className="App">
      {
        //ex1
      }
      <p>Hello World!</p>
      {myElement}
      React is {sum} times better with JSX
      {
        //ex2
      }
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      {
        //ex3
      }
      <Exercise/>
    </div>
  );
}

export default App;
