import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-content">
      <div className="container">
        <div className="footer-row">
          <div className="footer-links">
            <h4>Ayuda</h4>
            <ul>
              <li><a href="#">¿Cómo hacer un blog?</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Comunidad</h4>
            <ul>
              <li><a href="#">¿Quiénes somos?</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Desarrolladoras</h4>
            <ul>
              <li><a href="#">Miembros</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

