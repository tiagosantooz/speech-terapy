import React from 'react';
import './Header.css';
import logoImage from '../assets/speech.png'

const Header = () => {
    return (
      <header>
        <nav className='navbar'>
          <div className="logo">
            <img src={logoImage} className='logo-image'/> 
          </div>
          <ul className="nav-links">
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Objetivos</a></li>
            <li><a href="#">Contactos</a></li> 
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;