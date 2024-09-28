import { useEffect, useState } from "react";
import bellaImage2 from '../assets/img/bella-2.png';

export const Timer = () => {

  const [targetDate, setTargetDate] = useState(
    Math.ceil((new Date('09/28/2024 14:00').getTime() - new Date()) * 0.001)
  );
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(
      () =>
        setTargetDate(
          Math.ceil(
            (new Date('09/28/2024 14:00').getTime() - new Date()) * 0.001
          )
        ),
      1000
    );
  }, []);

  useEffect(() => {
    let temp = 0;

    let days = (targetDate / 86400).toString().split('.');
    temp = Number((`.` + days[1]).slice(0, 6)).toFixed(6);
    days = days[0];

    let hours = (temp * 24).toString().split('.');
    temp = Number((`.` + hours[1]).slice(0, 6)).toFixed(6);
    hours = hours[0];

    let minutes = (temp * 60).toString().split('.');
    temp = Number((`.` + minutes[1]).slice(0, 6)).toFixed(6);
    minutes = minutes[0];

    let seconds = (temp * 60).toString().split('.');
    seconds = seconds[0];

    setTimeData({
      days,
      hours,
      minutes,
      seconds,
    });
  }, [targetDate]);

  return (
    <div className="timer">
      <h2 className="heading-section timer__title">Solo Falta!</h2>
      <div className="timer__grid">
        <div className="timer__box">
          <p className="timer__number">{timeData.days <= 9 ? `0${timeData.days}`: timeData.days}</p>
          <p className="timer__type">Días</p>
        </div>
        <div className="timer__box">
          <p className="timer__number">{timeData.hours <= 9 ? `0${timeData.hours}`: timeData.hours}</p>
          <p className="timer__type">Horas</p>
        </div>
        <div className="timer__box">
          <p className="timer__number">{timeData.minutes <= 9 ? `0${timeData.minutes}`: timeData.minutes}</p>
          <p className="timer__type">Minutos</p>
        </div>
        <div className="timer__box">
          <p className="timer__number">{timeData.seconds <= 9 ? `0${timeData.seconds}`: timeData.seconds}</p>
          <p className="timer__type">Segundos</p>
        </div>
      </div>
      <p className="heading-section timer__text">Para comenzar la fiesta</p>
      <div className="flex flex-center">
        <img className="timer__image" src={bellaImage2} alt="Bella" />
      </div>
    </div>
  )
}
