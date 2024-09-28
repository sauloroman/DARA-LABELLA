import taza from '../assets/img/taza.webp';

export const Confirm = () => {
  return (
    <div className="confirm">
      <div className="confirm__container">
        <h2 className="confirm__message heading-section">A Celebrar</h2>
        <p className="confirm__text">Es importante que confirmes tu asistencia con la mamá de Dara</p>
        <a target='_blank' href="https://wa.me/4493626123?text=He recibido la invitación para la fiesta de Dara 🎉🎉🎉. Confirmo mi asistencia 🌟." className='confirm__button btn btn--yellow'>Confirmar Asistencia</a>
        <div className="flex flex-center">
          <img className='confirm__image' src={taza} alt="Taza" />
        </div>
      </div>
    </div>
  )
}
