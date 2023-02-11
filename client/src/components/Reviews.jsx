import React, { useState, useRef } from 'react';
import Left from '../assets/Left.svg';
import Right from '../assets/Right.svg';

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
        className='carousel-container w-max flex justify-center overflow-hidden'
        ref={containerRef}
      >
        <div
          className=' carousel-slider mt-[19rem] flex grow overflow-hidden translate-x-[calc(5rem*-100%)] transition-[0.5s] mb-[12rem]'
          ref={sliderRef}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className='card-1 m-2 rounded-[100px] border-2 flex grow-[0 0 25%] w-[295px] h-[435px] '>
            <div className='card-content '>
              <div className='foto-estrellas'>
                <img
                  className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                  src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                ></img>
                <div className='stars-container flex items-center justify-center mt-4 '>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300 '
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                </div>
              </div>

              <p className='card-text text-base text-center ml-4 mr-4 mt-8 font-sans font-normal'>
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
              <div className='nombre text-center mt-8'>
                <p className='user-name text-lg font-bold'>Juan</p>
              </div>
            </div>
          </div>
          <div className='card-1 m-2 rounded-[100px] border-2 flex grow-[0 0 25%] w-[295px] h-[435px] '>
            <div className='card-content '>
              <div className='foto-estrellas'>
                <img
                  className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                  src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                ></img>
                <div className='stars-container flex items-center justify-center mt-4 '>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300 '
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                </div>
              </div>

              <p className='card-text text-base text-center ml-4 mr-4 mt-8 font-sans font-normal'>
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
              <div className='nombre text-center mt-8'>
                <p className='user-name text-lg font-bold'>Laura</p>
              </div>
            </div>
          </div>
          <div className='card-1 m-2 rounded-[100px] border-2 flex grow-[0 0 25%] w-[295px] h-[435px] '>
            <div className='card-content '>
              <div className='foto-estrellas'>
                <img
                  className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                  src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                ></img>
                <div className='stars-container flex items-center justify-center mt-4 '>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300 '
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                </div>
              </div>

              <p className='card-text text-base text-center ml-4 mr-4 mt-8 font-sans font-normal'>
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
              <div className='nombre text-center mt-8'>
                <p className='user-name text-lg font-bold'>Juana</p>
              </div>
            </div>
          </div>
          <div className='card-1 m-2 rounded-[100px] border-2 flex grow-[0 0 25%] w-[295px] h-[435px] '>
            <div className='card-content '>
              <div className='foto-estrellas'>
                <img
                  className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                  src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                ></img>
                <div className='stars-container flex items-center justify-center mt-4 '>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300 '
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                </div>
              </div>

              <p className='card-text text-base text-center ml-4 mr-4 mt-8 font-sans font-normal'>
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
              <div className='nombre text-center mt-8'>
                <p className='user-name text-lg font-bold'>Pedro</p>
              </div>
            </div>
          </div>
          <div className='card-1 m-2 rounded-[100px] border-2 flex grow-[0 0 25%] w-[295px] h-[435px] '>
            <div className='card-content '>
              <div className='foto-estrellas'>
                <img
                  className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                  src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                ></img>
                <div className='stars-container flex items-center justify-center mt-4 '>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300 '
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                </div>
              </div>

              <p className='card-text text-base text-center ml-4 mr-4 mt-8 font-sans font-normal'>
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
              <div className='nombre text-center mt-8'>
                <p className='user-name text-lg font-bold'>Homero</p>
              </div>
            </div>
          </div>
          <div className='card-1 m-2 rounded-[100px] border-2 flex grow-[0 0 25%] w-[295px] h-[435px] '>
            <div className='card-content '>
              <div className='foto-estrellas'>
                <img
                  className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                  src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                ></img>
                <div className='stars-container flex items-center justify-center mt-4 '>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300 '
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                  <svg
                    className='w-8 h-8 fill-current text-amber-300'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                  </svg>
                </div>
              </div>

              <p className='card-text text-base text-center ml-4 mr-4 mt-8 font-sans font-normal'>
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
              <div className='nombre text-center mt-8'>
                <p className='user-name text-lg font-bold'>Ramiro</p>
              </div>
            </div>
          </div>
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
