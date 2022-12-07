import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
    }
    fetchData()
}, [])
  return (
    <main className="" >
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