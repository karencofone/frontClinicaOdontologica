import React, { useContext } from 'react'
import { Link,  } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoonOverSun} from '@fortawesome/free-solid-svg-icons'



//Este componente debera ser estilado como "dark" o "light"x dependiendo del theme del Context

const Navbar = () => {
const { theme, handleTheme} = useContext(ContextGlobal)

  return (
    <nav className="nav" style={{background: theme.navBackground, color: theme.color}}>
      <Link to={'/'}><h2 className='icono'><span>D</span>H Odonto</h2></Link>
      <div className='divNav'>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/favs'}>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button style={{width: "30px", height: "30px"}} onClick={handleTheme}><FontAwesomeIcon icon="fa-solid fa-moon-over-sun" /></button>
      </div>
    </nav>
  )
}

export default Navbar