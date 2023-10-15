"use client"

import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFormLocaStorage = () => {
    if(typeof window !== undefined){
        const value= localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeContexProvider =({children}) => {
    const [theme, setTheme]=useState(()=>{
        return getFormLocaStorage();
    });
    return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
};