import { createContext, useState } from "react";
export const initialState = {
    themes: {
        light:{
          navBackground: "",
          footBackground: "rgb(218, 218, 218)",
          cardBackground: "rbga(255,255,255,.3)",
          homeBackground:"rgb(255,255,255)",
          color: "rgb(0,0,0)",
          inverted: "invert(0)"

        }, 
        dark:{
          navBackground:"rgb(32, 37, 61)",
          footBackground:"rgba(19, 20, 19, 0.7)",
          cardBackground:"rgb(34, 34, 34);",
          homeBackground:"rgba(18, 18, 18, 0.59)",
          backgroundButton: "rbga(255,255,255,.3)",
          color:"rgb(255,255,255)",
          inverted: "invert(1)"
        }} ,
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialState.themes.light)  
    const handleTheme = () =>{
      setTheme((curr) => (curr === initialState.themes.light ? initialState.themes.dark : initialState.themes.light ))}
  
  return (
    <ContextGlobal.Provider value={{theme, handleTheme}}>
    {children}
    </ContextGlobal.Provider>
  )
  }