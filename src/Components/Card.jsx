
import { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";
import { ContextGlobal } from "./utils/global.context";


const Card = ({name, username, id}) => {
const {theme} = useContext(ContextGlobal)
const dentist = ({
  id: id,
  name: name,
  username: username
})
const addFav = ()=>{
  const dentists = JSON.parse(localStorage.getItem("dentistas") || '[]')
  dentists.push(dentist)
  localStorage.setItem("dentistas", JSON.stringify(dentists))
  console.log(`dentista con id ${dentist.id} agregado`);
  console.log(dentists);
};

  return (
    <div className="card" style={{background: theme.cardBackground}}>
        <img src={img} alt="image_doctor"/>
        <h2><Link to={`/${id}`}>{name}</Link></h2>
        <h3>{username}</h3>
        <button onClick={addFav} className="favButton">🌟</button>
    </div>
  );
};

export default Card;
