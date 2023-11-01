import "./App.css";
import BuggyCounter from "./BuggyCounter";
import Color from "./Color";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <p style={{ textAlign: "left" }}>Exercise 1 ErrorBoundary</p>
      <p>Simulation 1 - both counters in one error handler</p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <p>Simulation 2 - counters each in peronal error handler</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <p>Simulation 3 - counter without error handler</p>
      <BuggyCounter />
      <p style={{ textAlign: "left" }}>
        Exercise 2 shouldComponentUpdate(), componentDidUpdate()
      </p>
      <Color />
    </div>
  );
}

export default App;
