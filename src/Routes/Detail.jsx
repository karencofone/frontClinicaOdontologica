import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Detail = () => {
const params = useParams()
const [dentist, setDentist] = useState({});
useEffect(() => {
  const fetchData = async () => {
      axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => setDentist(res.data))
  }
  fetchData()
});


  return (
    <>
      <h1>Detail Dentist {dentist.id}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Web Page</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail