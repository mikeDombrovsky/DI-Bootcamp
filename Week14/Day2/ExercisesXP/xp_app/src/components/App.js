
import './App.css';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
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
      <BuggyCounter/>
    </div>
  );
}

export default App;
