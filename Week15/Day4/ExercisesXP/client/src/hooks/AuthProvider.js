import { createContext, useContext, useEffect, useState, useMemo } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("token"));

  const handleLogin = (newToken) => {
    setToken(newToken);
    Cookies.set("token", newToken);
  };

  const handleLogout = () => {
    setToken(null);
    Cookies.remove("token");
  };
  //enother way
  //   useEffect(() => {
  //     if (token) {
  //       Cookies.set("token", token);
  //     } else {
  //       Cookies.remove("token");
  //     }
  //   }, [token]);

  //   const contextValue = useMemo(() => ({ token, handleLogin }), [token]);

  return (
    <AuthContext.Provider value={{ token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
