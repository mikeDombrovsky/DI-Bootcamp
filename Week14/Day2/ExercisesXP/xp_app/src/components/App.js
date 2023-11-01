
import './App.css';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
