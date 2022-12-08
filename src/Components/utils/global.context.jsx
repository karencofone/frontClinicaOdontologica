import { createContext, useContext, useState } from "react";
export const initialState = {
    themes: {
        light:{
          className: "",
          backgroundCard: "transparent",
        }, 
        dark:{
          className: "dark",
          backgroundCard: "#222",
        }} ,
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialState.themes.light)  
  
  
  return (
    <ContextGlobal.Provider value={{theme, setTheme}}>
    {children}
    </ContextGlobal.Provider>
  )
  }
  export const useContextGlobal = ()=>{
    return useContext(ContextGlobal)
  }