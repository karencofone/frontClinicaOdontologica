import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='nav'>
      <div>
      <Link to={'/'}><h2>DH Odonto</h2></Link>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/favs'}>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar