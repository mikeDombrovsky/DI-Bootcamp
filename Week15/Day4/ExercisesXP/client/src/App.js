import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AuthProvider, { useAuth } from "./hooks/AuthProvider";
import Login from "./components/login";
import Register from "./components/Register";
import { useEffect, useState } from "react";

function App() {
  const { token, handleLogout } = useAuth();

  //??component does not refresh when token loaded - need manual refresh page
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
