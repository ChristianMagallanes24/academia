import React from 'react';

const Contacto = () => {
  // Función para manejar el envío del formulario (ejemplo básico)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregarías la lógica para manejar la información del formulario
    console.log("Formulario enviado");
  };

  return (
    <div className="contacto-container">
      <h2>Empezar hoy</h2>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <div className="form-field">
          
          <input type="text" placeholder='nombre' id="nombre" name="nombre" required />
        </div>
        <div className="form-field">
          
          <input type="email" placeholder='email' id="email" name="email" required />
        </div>
        <div className="form-field">
          
          <input type="tel" placeholder='telefono' id="telefono" name="telefono" />
        </div>
        <button type="submit" className="submit-btn">Envío</button>
      </form>
    </div>
  );
};

export default Contacto;
