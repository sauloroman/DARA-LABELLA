import bella4 from '../assets/img/bella-4.png';

export const Presents = () => {
  return (
    <div className="presents">
      <div className="presents__container">
        <h2 className="heading-section presents__title">Mesa de Regalos</h2>
        <div className="flex flex-center">
          <img className='presents__image' src={bella4} alt="Bella 4" />
        </div>
        <p className="presents__text">Tu presencia es el mejor regalo, pero si quieres tener algún detalle conmigo es bien recibido.</p>
      </div>
    </div>
  )
}
