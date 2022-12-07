import React from 'react'
import axios from 'axios';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [odontologo, setOdontologo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        axios('https://jsonplaceholder.typicode.com/users/:id')
        .then(res => setOdontologo(res.data))
    }
    fetchData()
}, [])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail