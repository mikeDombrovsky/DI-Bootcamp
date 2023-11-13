import { createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);


    const handleLogin = (newToken) => {
        setToken(newToken);
    }

    const handleLogout = () => {
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{token, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}