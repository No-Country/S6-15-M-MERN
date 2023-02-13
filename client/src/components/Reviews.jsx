import React, { useState, useRef } from 'react';
import Left from '../assets/Left.svg';
import Right from '../assets/Right.svg';
import ReviewCards from './ReviewCards';

const Reviews = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [direction, setDirection] = useState(0);

  const slideLeft = () => {
    if (direction === -1) {
      const firstChild = sliderRef.current.firstElementChild;
      sliderRef.current.appendChild(firstChild);
      setDirection(1);
    }

    containerRef.current.style.justifyContent = 'flex-end';
    sliderRef.current.style.transform = 'translate(25%)';
  };

  const slideRight = () => {
    setDirection(-1);
    containerRef.current.style.justifyContent = 'flex-start';
    sliderRef.current.style.transform = 'translate(-25%)';
  };

  const handleTransitionEnd = () => {
    if (direction === -1) {
      const firstChild = sliderRef.current.firstElementChild;
      sliderRef.current.appendChild(firstChild);
    } else if (direction === 1) {
      const lastChild = sliderRef.current.lastElementChild;
      sliderRef.current.prepend(lastChild);
    }

    sliderRef.current.style.transition = 'none';
    sliderRef.current.style.transform = 'translate(0)';
    setTimeout(() => {
      sliderRef.current.style.transition = 'all 0.5s';
    });
  };

  return (
    <div>
      <div
        className='carousel-container w-full flex overflow-hidden '
        ref={containerRef}
      >
        <div
          className='carousel-slider mt-[10rem] flex grow transition-[0.5s] mb-[12rem]  -ml-44'
          ref={sliderRef}
          onTransitionEnd={handleTransitionEnd}
        >
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
          <ReviewCards />
        </div>
      </div>
      <div className='buttons flex justify-between -mt-48 mb-12 p-4'>
        <button onClick={slideLeft} ref={prevRef}>
          <img className='w-12 ml-10 ' src={Left}></img>
        </button>

        <button onClick={slideRight} ref={nextRef}>
          <img className='w-12 mr-10' src={Right}></img>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
