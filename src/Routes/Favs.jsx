import React from "react";
import Card from "../Components/Card";
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      </div>
    </>
  );
};

export default Favs;