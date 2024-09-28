import photo from '../assets/img/photo-4.jpg';
import poster from '../assets/img/poster.jpg';

export const Farewell = () => {
  return (
    <section className="farewell" style={{ backgroundImage: `url(${poster})`}}>
      <div className="farewell__container">
        <div className="flex flex-center photo__box">
          <img src={photo} alt="Dara foto" className="photo" />
        </div>
        <h2 className="farewell__message heading-section">Te espero</h2>
        <p className='farewell__text'>Listos para festejar</p>
      </div>
    </section>
  )
}
