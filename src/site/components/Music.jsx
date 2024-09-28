import { useRef, useState } from 'react';
import iconMusic from '../../assets/img/music.png'
import song from '../../assets/music/song.mp3';

export const Music = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const songRef = useRef();

  const onPlaySong = () => {
    
    if ( isPlaying ) {
      songRef.current.play();
      setIsPlaying(false);
    } else {
      songRef.current.pause();
      setIsPlaying(true);
    }

  }

  return (
    <div className="music">
      <audio src={song} ref={songRef}></audio>
      <img onClick={ onPlaySong } className='music__image' src={iconMusic} alt="Icono de musica colorido" />
    </div>
  )
}
