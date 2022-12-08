import React from 'react'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'

const Footer = () => {
  const {theme} = useContext(ContextGlobal)
  return (
    <footer style={{background: theme.footBackground, color: theme.color}}>
      <div>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo'/>
      </div>
      <div>
        <img src="./imagenes/ico-facebook.png" alt='ico-fb'/>
        <img src="./imagenes/ico-instagram.png" alt='ico-ig'/>
        <img src="./imagenes/ico-whatsapp.png" alt='ico-wpp'/>
        <img src="./imagenes/ico-tiktok.png" alt='ico-tk'/>
      </div>
        
    </footer>
  )
}

export default Footer
