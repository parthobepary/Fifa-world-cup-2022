import { useEffect, useRef, useState } from "react";
import "./timer.css";

const Timer = () => {
  const [days, setDays] = useState("00");
  const [houres, setHoures] = useState("00");
  const [munits, setMunits] = useState("00");
  const [seconds, setSecounds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("july 30, 2022 00: 00: 00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor(distance % (1000 * 60)/1000);

      
      if(distance < 0){
        clearInterval(interval.current);
      }else{
        setDays(day);
        setHoures(hour);
        setMunits(minit);
        setSecounds(second);
      }

    }, 1000);

  };

  useEffect(() => {
    startTimer();
    clearInterval(interval.current);

  })
  return (
    <div>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{days}</p>
              <small>Days</small>
            </section>
            <section>
              <p>{houres}</p>
              <small>Houres</small>
            </section>
            <section>
              <p>{munits}</p>
              <small>Munits</small>
            </section>
            <section>
              <p>{seconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Timer;
