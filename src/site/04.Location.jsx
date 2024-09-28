import bellaImage1 from '../assets/img/bella-3.png';
import cake from '../assets/img/cake.png';

export const Location = () => {
  return (
    <div className="location">
      <div className="location__container">
        <div className="flex flex-center">
          <img className='location__image' src={bellaImage1} alt="Bella" />
        </div>
        <h2 className="heading-section location__title">Ven a festejar conmigo</h2>
        <p className="location__text">Nos vemos el día <span>28 de Septiembre</span> en punto de las <span>02:00 p.m.</span></p>
      </div>
      <div className="location__place">
        <h2 className="heading-section location__title--2">Ubicación</h2>
        <div className="flex flex-center">
          <img className='location__cake' src={cake} alt="Pastel de cumpleaños" />
        </div>
        <p className='location__location'>Calle Yukón #108. Fraccionamiento Agricultura, Aguascalientes, Ags.</p>
        <a target='_blank' href='https://maps.app.goo.gl/B8F9yAnx4KuXjBEx6' className="btn btn--yellow">Abrir en Google Maps</a>
      </div>
    </div>
  )
}
