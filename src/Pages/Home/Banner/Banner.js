import { useEffect, useRef, useState } from "react";
import sample from "../../../assets/vedio/cover.mp4";
import "./Banner.css";

const Banner = () => {
  /* timer start */
  const [days, setDays] = useState("00");
  const [houres, setHoures] = useState("00");
  const [munits, setMunits] = useState("00");
  const [seconds, setSecounds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("november 20, 2022 00: 00: 00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
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
  });
  /* timer end */
  return (
    <section className="">
      <video className="videoTag w-full" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <article className="textContainer absolute bottom-20 md:bottom-12 text-white mx-auto w-full">
        <section className="timer-container">
          <section className="timer flex justify-center items-center md:justify-end">
            <p className="text-6xl font-extrabold hidden md:block">To goes</p>
            <div className="clock ">
              <section className="w-20 text-2xl md:w-36 md:text-4xl">
                <small>Days</small>
                <p>{days}</p>
              </section>
              <section className="w-20 text-2xl md:w-36 md:text-4xl">
                <small>Houres</small>
                <p>{houres}</p>
              </section>
              <section className="w-20 text-2xl md:w-36 md:text-4xl">
                <small>Munits</small>
                <p>{munits}</p>
              </section>
              <section className="w-20 text-2xl md:w-36 md:text-4xl">
                <small>Seconds</small>
                <p>{seconds}</p>
              </section>
            </div>
          </section>
        </section>
      </article>
    </section>
  );
};

export default Banner;
