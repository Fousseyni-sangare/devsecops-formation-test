import { createContext, useContext, useState } from "react";

const SharedDataContext = createContext();

export const useSharedData = () => {
    return useContext(SharedDataContext);
};

export const SharedDataProvider = ({ children }) => {
    const [sharedData, setSharedData] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false) 
    const [getProfil, setProfil] = useState("") 

    return (
        <SharedDataContext.Provider
            value={{
                isLoggedIn, setIsLoggedIn,
                sharedData, setSharedData,
                getProfil, setProfil
            }}>
            {children}
        </SharedDataContext.Provider>
    );
};