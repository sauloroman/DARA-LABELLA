import backgroundHero from '../assets/img/background.png';
import titleCumple from '../assets/img/titulo.png'
import rosas from '../assets/img/rosas.png';
import bellaImage from '../assets/img/bella-1.png';

export const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundHero})`}} >
      <div className="hero__line"></div>
      <div className="hero__container">
        <img className='hero__image' src={bellaImage} alt="La bella" />
        <div className="flex flex-center">
          <img className='hero__rose' src={rosas} alt="Rosas rojas" />
        </div>
        <p className='hero__special'>La Princesa</p>
        <h1 className='heading-primary'>Dara</h1>
        <div className="flex flex-center">
          <img className='hero__title' src={titleCumple} alt="Cumple 7 años" />
        </div>
        <p className="hero__text">Tenemos el placer de invitar a todos los Principes y Princesas de los Reinos Vecinos al Baile que se celebrará en su honor.</p>
        <div className="hero__directions">
          <p className='hero__text'>Te esperamos el día <span>Sábado 28 de Septiembre</span> a las <span>02:00 p.m.</span> en <span>Calle Yukón #108, Fracc. Agricultura</span></p>
        </div>
        <p className="hero__message">¡No puedes <br /> faltar!</p>
      </div>
    </div>
  )
}
