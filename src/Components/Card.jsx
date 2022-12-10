
import { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";
import { ContextGlobal } from "./utils/global.context";


const Card = ({name, username, id}) => {

const {theme} = useContext(ContextGlobal)

const addFav = ()=>{

};

  return (
    <div className="card" style={{background: theme.cardBackground}}>
        <img src={img} alt="image doctor"/>
        <h2><Link to={`/${id}`}>{name}</Link></h2>
        <h3>{username}</h3>
        <button onClick={()=> addFav()} className="favButton">🌟</button>
    </div>
  );
};

export default Card;
