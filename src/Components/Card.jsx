import React from "react";
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";


const Card = ({name, username, id}) => {
    console.log(name);
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <img src={img} alt="image doctor" />
        <Link to={'/'+ id}><h2>{name}</h2></Link>
        <h3>{username}</h3>
        <button onClick={addFav} className="favButton">Add fav🌟</button>
    </div>
  );
};

export default Card;
