import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Guerreros Boxin Club</h2>
        <p>2024 Guerreros Boxin Club. Libera a tu luchador interior.</p>
      </div>
      <div className="footer-section">
        <h3>LINKS QUICK</h3>
        <ul>
          <li><a href="#home">Hogar</a></li>
          <li><a href="#about">Acerca de Nosotros</a></li>
          <li><a href="#classes">Clases</a></li>
          <li><a href="#prices">Precios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>CONNECT</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://youtube.com">Youtube</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
