import React, { useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";



const Favs = () => {
  const {theme} = useContext(ContextGlobal)
  let dentist = JSON.parse(localStorage.getItem("dentistas"))
  return (
    <div className="favs" style={{background: theme.homeBackground, color: theme.color}}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentist.map(item => (
          <Card name={item.name} username={item.username} key={item.id} id={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default Favs;