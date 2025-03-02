//Dejo este código comentado para entederlo correctamente
import React, {createContext, useState, useContext, useEffect} from 'react';

//Primero creamos un contexto en el que almacenaremos la información del usuario
const LogContext = createContext();

//Creamos un hook que nos permitirá acceder a la información del usuario

export const useLog = () => {
    return useContext(LogContext);
}

//Creamos un provider que nos permitirá almacenar la información del usuario
export const LogProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
      const token = localStorage.getItem("token");
      return token ? { loggedIn: true } : null;
    });
  
    const login = (logInfo) => {
      localStorage.setItem("token", logInfo.token); // Store token
      setUser({ loggedIn: true });
    };
  
    const logout = () => {
      localStorage.removeItem("token");
      setUser(null);
      window.location.reload(); // Refresh page on logout
    };

    return (
        <LogContext.Provider value={{user, login, logout}}>
            {children}
        </LogContext.Provider>
    );
};



