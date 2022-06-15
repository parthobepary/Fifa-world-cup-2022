import React from 'react';
import img from '../../../assets/sadium/alianz arena.jpg'
import img6 from '../../../assets/sadium/alianz arena.jpg'
import img1 from '../../../assets/sadium/EO3W2HxXsAA-61b.jpg'
import img2 from '../../../assets/sadium/EO3W2HxXsAA-61b.jpg'
import img3 from '../../../assets/sadium/EO3W2HxXsAA-61b.jpg'
import img4 from '../../../assets/sadium/EO3W2HxXsAA-61b.jpg'
import img5 from '../../../assets/sadium/EO3W2HxXsAA-61b.jpg'
const Studium = () => {
    return (
        <div>
      <h1 className="text-3xl text-center font-bold uppercase mt-40">
        All Stadium
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img1}
              alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img2}
              alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img3}
              alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img6}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img4}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Studium;