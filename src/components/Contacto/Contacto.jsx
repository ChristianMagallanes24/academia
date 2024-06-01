import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [arteMarcial, setArteMarcial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Nombre: ${nombre} ${apellido}\nEdad: ${edad}\nArte Marcial: ${arteMarcial}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=59899802910&text=${encodeURIComponent(mensaje)}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contacto-container">
      <h2>Agendate ahora mismo!</h2>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <input 
            type="text" 
            placeholder='Nombre' 
            id="nombre" 
            name="nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </div>
        <div className="form-field">
          <input 
            type="text" 
            placeholder='Apellido' 
            id="apellido" 
            name="apellido" 
            value={apellido} 
            onChange={(e) => setApellido(e.target.value)} 
            required 
          />
        </div>
        <div className="form-field">
          <input 
            type="number" 
            placeholder='Edad' 
            id="edad" 
            name="edad" 
            value={edad} 
            onChange={(e) => setEdad(e.target.value)} 
            required 
          />
        </div>
        <div className="form-field">
          <select 
            id="arteMarcial" 
            name="arteMarcial" 
            value={arteMarcial} 
            onChange={(e) => setArteMarcial(e.target.value)} 
            required
          >
            <option value="">Selecciona un arte marcial</option>
            <option value="Taekwondo ITF">Taekwondo ITF</option>
            <option value="Boxeo">Boxeo</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Envío</button>
      </form>
    </div>
  );
};

export default Contacto;
