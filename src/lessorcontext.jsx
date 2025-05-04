import React, { createContext, useState, useContext,useEffect  } from "react";

const LessorContext = createContext();
export const LessorProvider = ({children}) => {
    const [lessorData, setLessorData] = useState(() => {
        const savedData = localStorage.getItem("lessorData");
        return savedData ? JSON.parse(savedData) : null;
    });

    const refreshLessorData = async (navigate) => {
        try {

            const type = "Refresh";
            console.log("🔄 Sending login request...");

            let username = lessorData?.rooms_data?.[0]?.username
            if (username == null){
                username = lessorData.username
            }
            const data = {username,type}
            console.log(username)
            console.log(type)
            const response = await fetch('https://tfgserver.onrender.com/api/lessor_identificaiton/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
      
            console.log("✅ Fetch finished, status:", response.status);
      
            if (!response.ok) {
                const errorText = await response.text();
                console.error("❌ Server error:", response.status, response.statusText, errorText);
                return;
            }
      
            const result = await response.json();
            setLessorData(result);
            console.log(result);
            console.log("🎉 Success! Lessor logged:", result);
            navigate("/lessorpage");
      
        } catch (error) {
            console.error("⚠️ Fetch error:", error);
            alert("Network error occurred! Check the console for details.");
        }
      };
    
    const [lessorId, setLessorId] = useState(null);
        
        
    

    useEffect(() => {
        if (lessorData) {
            localStorage.setItem("lessorData", JSON.stringify(lessorData));
        } else {
            localStorage.removeItem("lessorData");
        }
    }, [lessorData]);

    return (
        <LessorContext.Provider value = {{lessorData, setLessorData, lessorId, setLessorId, refreshLessorData}}>
        {children}
        </LessorContext.Provider>
    )}
export const useLessor = () => useContext(LessorContext)