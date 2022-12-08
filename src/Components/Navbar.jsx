import React, { useContext } from 'react'
import { Link,  } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'



//Este componente debera ser estilado como "dark" o "light"x dependiendo del theme del Context

const Navbar = () => {
const { theme, handleTheme} = useContext(ContextGlobal)

  return (
    <nav className="nav" style={{background: theme.navBackground, color: theme.color}}>
      <Link to={'/'}><h2>DH Odonto</h2></Link>
      <div className='divNav'>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/favs'}>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleTheme}>🌙</button>
      </div>
    </nav>
  )
}

export default Navbar