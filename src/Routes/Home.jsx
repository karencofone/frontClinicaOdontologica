import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {theme} = useContext(ContextGlobal)
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
    }
    fetchData()
}, [])
  return (
    <main className="home" style={{background: theme.homeBackground, color: theme.color}} >
      <h1>Home</h1>
      <div className='card-grid'>
        {data?.map(item =>{ 
         return <Card key={item.id} data={item} id={item.id} name={item.name} username={item.username}/>}
         )}
      </div>
    </main>
  )
}

export default Home