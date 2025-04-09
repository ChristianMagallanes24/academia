// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import videoSrc from '../../assets/video.mp4'; // Importa el video desde la carpeta assets
import './_Home.scss';  // Asegúrate de que el CSS esté importado correctamente

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Usamos useNavigate para manejar la navegación programática

  const handleEnterClick = () => {
    setIsLoading(true); // Activa el loading

    // Simulamos un retraso antes de navegar a la siguiente página
    setTimeout(() => {
      setIsLoading(false); // Desactiva el loading
      navigate('/app'); // Redirige a la página /app
    }, 2000); // Cambia el tiempo según lo que necesites (en milisegundos)
  };

  return (
    <div className="home">
      <video className="video-background" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      
      <div className="content">
        <h1>Bienvenido</h1>

        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Cargando...</p>
          </div>
        ) : (
          <button className="btn-home" onClick={handleEnterClick}>
            Entrar
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
