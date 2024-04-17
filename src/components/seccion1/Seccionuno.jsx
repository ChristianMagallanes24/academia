import React from 'react'
import videoSrc from '../../assets/video.mp4'; // Asegúrate de que la ruta sea correcta
const Seccionuno = () => {
  return (
    <div>
        <div className='elegirnos-container'>
           
            <div className='razones'>
            <h2 className='elegirnos-titulo'>por que elegir Guerreros boxin club?</h2>
                <div className='razon'>
                    <div>
                    
                        <h3 className='razon-titulo'>Diversos artes marciales</h3>
                    </div>
                    <p className='razon-p'>Ofreciendo clases en Boxeo, Taekwondo ITF, Jujitsu, Kickboxing.</p>
                </div>

                {/* razones */}
                <div className='razon'>
                    <div>
                        
                        <h3 className='razon-titulo'>Entrenadores expertos</h3>
                    </div>
                    <p className='razon-p'>Ofreciendo clases en Boxeo, Taekwondo ITF, Jujitsu, Kickboxing.</p>
                </div>

                {/* razones */}
                <div className='razon'>
                    <div>
                       
                        <h3 className='razon-titulo'>Facilidad de arte del Estado</h3>
                    </div>
                    <p className='razon-p'>Ofreciendo clases en Boxeo, Taekwondo ITF, Jujitsu, Kickboxing.</p>
                </div>

            </div>
            <div className='video'>
        <video className='video-video'  autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
        </div>
       
    </div>
  )
}

export default Seccionuno