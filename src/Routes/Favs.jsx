import React, { useContext } from "react";
import Card from "../Components/Card";
import { useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";



const Favs = () => {
  const {theme} = useContext(ContextGlobal)
  return (
    <div className="favs" style={{background: theme.homeBackground, color: theme.color}}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      </div>
    </div>
  );
};

export default Favs;