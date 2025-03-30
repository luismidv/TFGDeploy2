import React, { createContext, useState, useContext } from "react";

const LessorContext = createContext();
export const LessorProvider = ({children}) => {
    const [lessorData, setLessorData] = useState(null);

    return (
        <LessorContext.Provider value = {{lessorData, setLessorData}}>
        {children}
        </LessorContext.Provider>
    )
}
export const useLessor = () => useContext(LessorContext)