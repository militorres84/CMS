import React from 'react';
import './_header.scss';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <>
    <header>

        <a href="index.html" className="logo">
          <img src={logo} alt="cms logo" />
        </a>
        <nav className="nav-content">
          <ul className="nav">
            <li><a href="#">INICIAR SESIÓN</a></li>
            <li className="buttom-blog"><a href="#">Crea tu blog</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
