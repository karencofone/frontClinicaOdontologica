import React from 'react'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'
import logo from "../images/DH.png";
import facebook from "../images/ico-facebook.png";
import instagram from "../images/ico-instagram.png";
import wpp from "../images/ico-whatsapp.png";
import tiktok from "../images/ico-tiktok.png";

const Footer = () => {
  const {theme} = useContext(ContextGlobal)
  return (
    <footer clasName="footer" style={{background: theme.footBackground, color: theme.color}}>
      <div className='logo'>
        <img className="logoDH" src={logo} alt='DH-logo'/>
      </div>
      <div className='divRedes'>
        <img className='redes'src={facebook} alt='ico-fb'/>
        <img className='redes'src={instagram} alt='ico-ig'/>
        <img className='redes'src={wpp} alt='ico-wpp'/>
        <img className='redes'src={tiktok} alt='ico-tk'/>
      </div>
        
    </footer>
  )
}

export default Footer
