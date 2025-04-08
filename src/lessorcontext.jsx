import React, { createContext, useState, useContext } from "react";

const LessorContext = createContext();
export const LessorProvider = ({children}) => {
    const [lessorData, setLessorData] = useState(() => {
        const savedData = localStorage.getItem("lessorData");
        return savedData ? JSON.parse(savedData) : null;
    });
    
    const [lessorId, setLessorId] = useState(() => {
        return localStorage.getItem("lessorId") || null;
    });
    useEffect(() => {
        if (lessorId) {
            localStorage.setItem("lessorId", lessorId);
        } else {
            localStorage.removeItem("lessorId");
        }
    }, [lessorId]);

    useEffect(() => {
        if (lessorData) {
            localStorage.setItem("lessorData", JSON.stringify(lessorData));
        } else {
            localStorage.removeItem("lessorData");
        }
    }, [lessorData]);
    
    return (
        <LessorContext.Provider value = {{lessorData, setLessorData, lessorId, setLessorId}}>
        {children}
        </LessorContext.Provider>
    )}
export const useLessor = () => useContext(LessorContext)