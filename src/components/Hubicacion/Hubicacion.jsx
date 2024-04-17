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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52594.10157322372!2d-56.281380049999996!3d-34.52490005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1b41fa527fd63%3A0xeaebc270e2330f5!2s90000%20Canelones%2C%20Departamento%20de%20Canelones!5e0!3m2!1ses!2suy!4v1713340014416!5m2!1ses!2suy" // Inserta aquí tu URL de Google Maps
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
            <p>telefono</p>
          </div>
          <div className="info-item">
            <i className="icono"><IoLocationSharp /></i> {/* Icono de dirección */}
            <p>direccion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hubicacion;
