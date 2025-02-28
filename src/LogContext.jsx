//Dejo este código comentado para entederlo correctamente
import React, {createContext, useState, useContext, useEffect, use} from 'react';

//Primero creamos un contexto en el que almacenaremos la información del usuario
const LogContext = createContext();

//Creamos un hook que nos permitirá acceder a la información del usuario

export const useLog = () => {
    return useContext(LogContext);
}

//Creamos un provider que nos permitirá almacenar la información del usuario
export const LogProvider = ({children}) => {
    //Creamos un estado que almacenará la información del usuario
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            fetchUserData(token);
        }}, [token]);
    
    const fetchUserData = async(jwtToken) => {
        try{
            const response = await fetch('https://tfgserver.onrender.com/api/my_endpoint/', {
                method: 'GET',
                headers: { Authorization: 'Bearer ${jwtToken}'},
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            }else {
                logout();
            }
        }catch (error) {
            console.error("Error fetching user data", error);
            logout();
        }
    };

    const login = async (username, password) => {
        try{

        
            const response = await fetch('https://tfgserver.onrender.com/api/user/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({username, password}),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.access);
                fetchUserData(data.access);
            } else {
                console.error("Login failed");
            }
        }catch (error) {
            console.error("Error logging in", error);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    }

    return (
        <LogContext.Provider value={{user, login, logout}}>
            {children}
        </LogContext.Provider>
    );
};



