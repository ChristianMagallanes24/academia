import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Hubicacion = () => {
  return (
    <div className="hubicacion-container">
      <div className="mapa">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.31123554140035!2d-56.28254321522207!3d-34.52703528936649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1b4234f94a441%3A0x3abfd1ad5de74ffe!2sJos%C3%A9%20Batlle%20y%20Ord%C3%B3%C3%B1ez%20418%2C%2090000%20Canelones%2C%20Departamento%20de%20Canelones!5e0!3m2!1ses-419!2suy!4v1717285383887!5m2!1ses-419!2suy" // Inserta aquí tu URL de Google Maps
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-info">
        <h2>Contactos:</h2>
        <div className="info">
          <div className="info-item">
            <i className="icono"><MdEmail /></i> {/* Icono de correo (puedes usar una librería de iconos como FontAwesome) */}
            <p>email</p>
          </div>
          <div className="info-item">
            <i className="icono"><FaPhone /></i> 
            <p>099 802 910</p>
          </div>
          <div className="info-item">
            <i className="icono"><IoLocationSharp /></i> {/* Icono de dirección */}
            <p>Jose Batlle y Ordoñez 418</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hubicacion;
