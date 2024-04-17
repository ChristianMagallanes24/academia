import React from 'react'

const Preguntas = () => {
  return (
    <div className='preguntas-container'>
        <h1>Preguntas frecuentes</h1>
        <div className='preguntas'>
            <div className='card-preguntas'>
                <div className='card'>
                    <h3>a que grupos de edad atiendes?</h3>
                    <p>damos la bienvenida a estudiantes de todas las edads, a partir de los 5 años en adelante</p>
                </div>
                <div className='card'>
                    <h3>que debo llevar a mi primera clase?</h3>
                    <p>solo tu mismo, ropa comoda y una botella de agua. <br /> proporccionaremos el resto</p>
                </div>
            </div>
            <div className='card-preguntas'>
                <div className='card'>
                    <h3>necesito alguna experiencia previa?</h3>
                    <p>no, nuestras clases son adeccuadas para todos los niveles de experiencia, desde principiantes hasta practicantes avanzados</p>
                </div>
                <div className='card'>
                    <h3>con que frecuencia debo asistir a clases?</h3>
                    <p>te recomendamos asistir a clases de dos a tres veces a la semana para una progresion optima.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Preguntas