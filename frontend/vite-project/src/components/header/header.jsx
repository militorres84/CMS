import React from 'react'

export default function Header() {
  return (
    <>
    <header>
        <a href="index.html" className="logo">
          <img className="header-img" src="./logo.png" alt="cms logo" />
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
