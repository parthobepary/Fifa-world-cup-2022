import React from "react";
import img from "../../../assets/sadium/brazil-vs-argentina.jpg";
const LiveStream = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold uppercase mt-40">
        Live Stream
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12 mt-20">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Argentina vs Brazil
              <a
                href="https://www.youtube.com/watch?v=CrCGGEx-bPs&ab_channel=ArchismanGhosh"
                target="blank"
              >
                <div class="badge badge-secondary">Watch Now</div>
              </a>
            </h2>
            <p>Time: 4am USA</p>
            <p>Time: 12pm Qatar</p>
            <p>Time: 4pm Bangladesh</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Argentina vs Brazil
              <a
                href="https://www.youtube.com/watch?v=CrCGGEx-bPs&ab_channel=ArchismanGhosh"
                target="blank"
              >
                <div class="badge badge-secondary">Watch Now</div>
              </a>
            </h2>
            <p>Time: 4am USA</p>
            <p>Time: 12pm Qatar</p>
            <p>Time: 4pm Bangladesh</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Argentina vs Brazil
              <a
                href="https://www.youtube.com/watch?v=CrCGGEx-bPs&ab_channel=ArchismanGhosh"
                target="blank"
              >
                <div class="badge badge-secondary">Watch Now</div>
              </a>
            </h2>
            <p>Time: 4am USA</p>
            <p>Time: 12pm Qatar</p>
            <p>Time: 4pm Bangladesh</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Argentina vs Brazil
              <a
                href="https://www.youtube.com/watch?v=CrCGGEx-bPs&ab_channel=ArchismanGhosh"
                target="blank"
              >
                <div class="badge badge-secondary">Watch Now</div>
              </a>
            </h2>
            <p>Time: 4am USA</p>
            <p>Time: 12pm Qatar</p>
            <p>Time: 4pm Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
