import photo2 from '../assets/img/photo-2.jpg';
import photo3 from '../assets/img/photo-3.jpg';
import rosas from '../assets/img/rosas-2.png';

export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__container">
        <div className="gallery__grid">
          <div className="flex flex-center">
            <img className='gallery__rose gallery__rose--beginning' src={rosas} alt="Rosas rojas" />
          </div>
          <div className="gallery__item">
            <img src={photo2} alt="Dara foto 2" />
          </div>
          <div className="flex flex-center">
            <img className='gallery__rose' src={rosas} alt="Rosas rojas" />
          </div>
          <div className="gallery__item">
            <img src={photo3} alt="Dara foto 3" />
          </div>
        </div>
      </div>
    </div>
  )
}
