import sample from "../../../assets/vedio/cover.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <video className="videoTag w-full" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <article className="textContainer text-white mx-auto w-full">
        <p className=" text-5xl font-bold">
          Countdown Timer
        </p>
      </article>
    </section>
  );
};

export default Banner;
