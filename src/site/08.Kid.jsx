import photo from '../assets/img/photo-1.jpg';
import petalos from '../assets/img/petalos.png';

export const Kid = () => {
  return (
    <section className='kid' style={{ backgroundImage: `url(${petalos})`}}>
      <div className="kid__container">
        <div className="flex flex-center photo__box">
          <img className='photo' src={photo} alt="Kid image" />
        </div>
        <div className="kid__name">7 años</div>
      </div>
    </section>
  )
}
