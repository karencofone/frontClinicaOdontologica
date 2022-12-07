import axios from "axios";
import { createContext } from "react";
export const initialState = {
    themes: {
        light:{}, 
        dark:{}} ,
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
    {children}
    </ContextGlobal.Provider>
  );
};