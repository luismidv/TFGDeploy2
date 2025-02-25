
import React, {createContext, useState, useContext} from 'react';

const LogContext = createContext();

export const useLog = () => {
    return useContext(LogContext);
}

export const LogProvider = ({children}) => {
    const [user, setUser] = useState(null);


const login = (logInfo) => {
    setUser(logInfo);
}

const logout = () => {
    setUser(null);
}

return (
    <LogContext.Provider value={{user, login, logout}}>
        {children}
    </LogContext.Provider>
    );

};