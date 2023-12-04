import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import  { useAuth } from "./hooks/AuthProvider";
import Login from "./components/login";
import Register from "./components/Register";

function App() {
  const { token, handleLogout, handleLogin } = useAuth();

  //??component does not refresh when token loaded - need manual refresh page

  useEffect( async() => {
    const response = await fetch("http://127.0.0.1:3000/refresh", {
      method: "POST"
    });

    const data = await response.json();

    handleLogin(data.token)
  }, []);

  return (
    <div>
      {token ? (
        <>
          <div className="App">private</div>
          <button onClick={handleLogout}>logout</button>
        </>
      ) : (
        <>
          <div className="App">public</div>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}

export default App;
