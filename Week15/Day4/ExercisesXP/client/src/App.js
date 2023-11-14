import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AuthProvider, { useAuth } from "./hooks/AuthProvider";

function App() {
  const { token } = useAuth();
  return (
    <AuthProvider>
      {token ? (
        <div className="App">private</div>
      ) : (
        <div className="App">public
        </div>
      )}
    </AuthProvider>
  );
}

export default App;
