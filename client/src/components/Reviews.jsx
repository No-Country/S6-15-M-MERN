import React, { useState, useRef } from 'react';
import Left from '../assets/Left.svg';
import Right from '../assets/Right.svg';

const Reviews = () => {
  const sliderRef = useRef(null);
  const sliderRefBig = useRef(null);
  const containerRef = useRef(null);
  const containerRefBig = useRef(null);
  const prevRef = useRef(null);
  const prevRefBig = useRef(null);
  const nextRef = useRef(null);
  const nextRefBig = useRef(null);
  const [direction, setDirection] = useState(0);

  const slideLeft = () => {
    if (direction === -1) {
      const firstChild = sliderRef.current.firstElementChild;
      sliderRef.current.appendChild(firstChild);
      setDirection(1);
    }

    containerRef.current.style.justifyContent = 'flex-end';
    sliderRef.current.style.transform = 'translate(100%)';
    console.log('izquierda');
  };
  const slideLeftBig = () => {
    if (direction === -1) {
      const firstChild = sliderRefBig.current.firstElementChild;
      sliderRefBig.current.appendChild(firstChild);
      setDirection(1);
    }

    containerRefBig.current.style.justifyContent = 'flex-end';
    sliderRefBig.current.style.transform = 'translate(35%)';
    console.log('izquierda');
  };

  const slideRight = () => {
    setDirection(-1);
    containerRef.current.style.justifyContent = 'flex-start';
    sliderRef.current.style.transform = 'translate(-100%)';
    console.log('derecha');
  };
  const slideRightBig = () => {
    setDirection(-1);
    containerRefBig.current.style.justifyContent = 'flex-start';
    sliderRefBig.current.style.transform = 'translate(-35%)';
    console.log('derecha');
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
  const handleTransitionEndBig = () => {
    if (direction === -1) {
      const firstChild = sliderRefBig.current.firstElementChild;
      sliderRefBig.current.appendChild(firstChild);
    } else if (direction === 1) {
      const lastChild = sliderRefBig.current.lastElementChild;
      sliderRefBig.current.prepend(lastChild);
    }

    sliderRefBig.current.style.transition = 'none';
    sliderRefBig.current.style.transform = 'translate(0)';
    setTimeout(() => {
      sliderRefBig.current.style.transition = 'all 0.5s';
    });
  };

  return (
    <>
      <div ref={containerRef} className='mb-24 min-[550px]:hidden mt-70'>
        <div
          className='snap-y snap-mandatory w-screen flex overflow-x-hidden small-cards-container carousel-slider grow transition-[0.5s] '
          ref={sliderRef}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className='small-card snap-start  flex-shrink-0 w-screen flex items-center-justify-center flex-col'>
            <div className='small-foto-estrellas'>
              <img
                className='max-[448px]:w-24 max-[448px]:h-24 user-picture h-[50px] w-[50px] rounded-full ml-auto mr-auto mt-2 object-cover '
                src='https://images.pexels.com/photos/15104800/pexels-photo-15104800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              ></img>
              <div className='small-stars-container flex items-center justify-center mt-4 '>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300 '
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
              </div>
            </div>
            <p className='small-card-text text-sm text-center mt-2 ml-12 mr-12 font-sans font-normal min-[260px]:text-xs'>
              “Es un gran profesional. Resolvió el problema muy rapido. Precios
              accesibles.”
            </p>
            <div className='small-nombre text-center mt-2'>
              <p className='small-user-name text-md font-bold'>Juan</p>
            </div>
          </div>
          <div className='small-card snap-start  flex-shrink-0 w-screen flex items-center-justify-center flex-col'>
            <div className='small-foto-estrellas'>
              <img
                className='max-[448px]:w-24 max-[448px]:h-24 user-picture h-[50px] w-[50px] rounded-full ml-auto mr-auto mt-2 object-cover '
                src='https://img.freepik.com/foto-gratis/reparacion-fontanero-hombre-mediana-edad-atento-experimentado-que-examina-fondo-fregadero-cocina_259150-58266.jpg?w=1060&t=st=1677116433~exp=1677117033~hmac=871f4ea44f3918f27a25d561de7b12b0910190ee46d168265e1788b609ea7156'
              ></img>
              <div className='small-stars-container flex items-center justify-center mt-4 '>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300 '
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
              </div>
            </div>
            <p className='small-card-text text-sm text-center mt-2 ml-12 mr-12 font-sans font-normal min-[260px]:text-xs'>
              “Es un gran profesional. Resolvió el problema muy rapido. Precios
              accesibles.”
            </p>
            <div className='small-nombre text-center mt-2'>
              <p className='small-user-name text-md font-bold'>Laura</p>
            </div>
          </div>
          <div className='small-card snap-start  flex-shrink-0 w-screen flex items-center-justify-center flex-col'>
            <div className='small-foto-estrellas'>
              <img
                className='max-[448px]:w-24 max-[448px]:h-24 user-picture h-[50px] w-[50px] rounded-full ml-auto mr-auto mt-2 object-cover'
                src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              ></img>
              <div className='small-stars-container flex items-center justify-center mt-4 '>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300 '
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
              </div>
            </div>
            <p className='small-card-text text-sm text-center mt-2 ml-12 mr-12 font-sans font-normal min-[260px]:text-xs'>
              “Es un gran profesional. Resolvió el problema muy rapido. Precios
              accesibles.”
            </p>
            <div className='small-nombre text-center mt-2'>
              <p className='small-user-name text-md font-bold'>Ramiro</p>
            </div>
          </div>
          <div className='small-card snap-start  flex-shrink-0 w-screen flex items-center-justify-center flex-col'>
            <div className='small-foto-estrellas'>
              <img
                className='max-[448px]:w-24 max-[448px]:h-24 user-picture h-[50px] w-[50px] rounded-full ml-auto mr-auto mt-2 object-cover'
                src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              ></img>
              <div className='small-stars-container flex items-center justify-center mt-4 '>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300 '
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  className='w-4 h-4 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
              </div>
            </div>
            <p className='small-card-text text-sm text-center mt-2 ml-12 mr-12 font-sans font-normal min-[260px]:text-xs'>
              “Es un gran profesional. Resolvió el problema muy rapido. Precios
              accesibles.”
            </p>
            <div className='small-nombre text-center mt-2'>
              <p className='small-user-name text-md font-bold'>Lucia</p>
            </div>
          </div>
        </div>
        <div className='small-buttons flex -mt-24  justify-between'>
          <button className=' -ml-4 z-50' onClick={slideLeft} ref={prevRef}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-20 '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={1}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button className=' max-[480px]:-mr-0 max-w-15  -mr-4 z-50 ' onClick={slideRight} ref={nextRef}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 max-[480px]:w-14 w-20 '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={1}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='min-[210px]:hidden min-[550px]:block  '>
        <div
          className='carousel-container  flex overflow-hidden  '
          ref={containerRefBig}
        >
          <div
            className='carousel-slider mt-[10rem] flex grow transition-[0.8s] mb-[12rem] justify-center w-[100%] '
            ref={sliderRefBig}
            onTransitionEnd={handleTransitionEndBig}
          >
            <div className='card-1 m-2 rounded-[100px] border-2 flex w-[300px] h-[420px] hover:scale-105 cursor-pointer gap-2 grow max-[1390px]:h-[380px] max-[1160px]:scale-[0.9] max-[1160px]:w-[380px] max-[1160px]:-m-2 '>
              <div className='card-content '>
                <div className='foto-estrellas'>
                  <img
                    className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover '
                    src='https://images.pexels.com/photos/15104800/pexels-photo-15104800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  ></img>
                  <div className='stars-container flex items-center justify-center mt-[4%] '>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                  </div>
                </div>

                <p className='card-text text-base text-center ml-4 mr-4 mt-[8%] font-sans font-normal max-[1390px]:text-sm max-[1390px]:-mb-2 '>
                  “Fotógrafo de primera! Totalmente recomendable.”
                </p>
                <div className='nombre text-center mt-[8%]'>
                  <p className='user-name text-lg font-bold max-[1390px]:text-base'>
                    Alberto
                  </p>
                </div>
              </div>
            </div>
            <div className='card-1 m-2 rounded-[100px] border-2 flex w-[300px] h-[420px] hover:scale-105 cursor-pointer gap-2 grow max-[1390px]:h-[380px] max-[1160px]:scale-[0.9] max-[1160px]:w-[380px] max-[1160px]:-m-2'>
              <div className='card-content '>
                <div className='foto-estrellas'>
                  <img
                    className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                    src='https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  ></img>
                  <div className='stars-container flex items-center justify-center mt-4 '>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6 '
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                  </div>
                </div>

                <p className='card-text text-base text-center ml-4 mr-4 mt-[8%] font-sans font-normal max-[1390px]:text-sm max-[1390px]:-mb-2'>
                  “Anabella es una gran contadora! Me ayudó muchisimo. Cinthia.”
                </p>
                <div className='nombre text-center mt-[8%]'>
                  <p className='user-name text-lg font-bold max-[1390px]:text-base'>
                    Anabella
                  </p>
                </div>
              </div>
            </div>
            <div className='card-1 m-2 rounded-[100px] border-2 flex w-[300px] h-[420px] hover:scale-105 cursor-pointer gap-2 grow max-[1390px]:h-[380px] max-[1160px]:scale-[0.9] max-[1160px]:w-[380px] max-[1160px]:-m-2'>
              <div className='card-content '>
                <div className='foto-estrellas'>
                  <img
                    className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                    src='https://www.campustraining.es/wp-content/uploads/2021/09/FONTANERO-SUELDO-715x495.jpg.webp'
                  ></img>
                  <div className='stars-container flex items-center justify-center mt-4 '>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6 '
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                  </div>
                </div>

                <p className='card-text text-base text-center ml-4 mr-4 mt-[8%] font-sans font-normal max-[1390px]:text-sm max-[1390px]:-mb-2'>
                  “Me resolvió un problema de cañerías durante una urgencia, un
                  genio. Luis.”
                </p>
                <div className='nombre text-center mt-[8%]'>
                  <p className='user-name text-lg font-bold max-[1390px]:text-base'>
                    Diego
                  </p>
                </div>
              </div>
            </div>
            <div className='card-1 m-2 rounded-[100px] border-2 flex w-[300px] h-[420px] hover:scale-105 cursor-pointer gap-2 grow max-[1390px]:h-[380px] max-[1160px]:scale-[0.9] max-[1160px]:w-[380px] max-[1160px]:-m-2 max-[840px]:hidden'>
              <div className='card-content '>
                <div className='foto-estrellas'>
                  <img
                    className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                    src='https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  ></img>
                  <div className='stars-container flex items-center justify-center mt-4 '>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6 '
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                  </div>
                </div>

                <p className='card-text text-base text-center ml-4 mr-4 mt-[8%] font-sans font-normal max-[1390px]:text-sm max-[1390px]:-mb-2'>
                  “Le solicité a María que diseñara una página web que
                  necesitaba con urgencia para mi emprendimiento y en muy poco
                  tiempo ya la tenía lista. Luis.”
                </p>
                <div className='nombre text-center mt-[8%]'>
                  <p className='user-name text-lg font-bold max-[1390px]:text-base'>
                    María
                  </p>
                </div>
              </div>
            </div>
            <div className='card-1 m-2 rounded-[100px] border-2 flex w-[300px] h-[420px] hover:scale-105 cursor-pointer gap-2 grow max-[1390px]:h-[380px] max-[1160px]:scale-[0.9] max-[1160px]:w-[380px] max-[1160px]:-m-2 max-[1050px]:hidden'>
              <div className='card-content '>
                <div className='foto-estrellas'>
                  <img
                    className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                    src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  ></img>
                  <div className='stars-container flex items-center justify-center mt-4 '>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6 '
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                    <svg
                      className='w-8 h-8 fill-current text-amber-300 max-[1390px]:w-6 max-[1390px]:h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                    </svg>
                  </div>
                </div>

                <p className='card-text text-base text-center ml-4 mr-4 mt-[8%] font-sans font-normal max-[1390px]:text-sm max-[1390px]:-mb-2'>
                  “Martín ofrece un servicio excelente. Totalmente recomendable.
                  Anabella.”
                </p>
                <div className='nombre text-center mt-[8%]'>
                  <p className='user-name text-lg font-bold max-[1390px]:text-base'>
                    Martín
                  </p>
                </div>
              </div>
            </div>
            <div className='card-1 m-2 rounded-[100px] border-2 flex w-[300px] h-[420px] hover:scale-105 cursor-pointer gap-2 grow max-[1680px]:hidden'>
              <div className='card-content '>
                <div className='foto-estrellas'>
                  <img
                    className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                    src='https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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

                <p className='card-text text-base text-center ml-4 mr-4 mt-[8%] font-sans font-normal'>
                  “Lo recomiendo totalmente, me arregló el auto muy rápido y
                  logró conseguir un repuesto que estaba muy dificil. Alberto.”
                </p>
                <div className='nombre text-center mt-[8%]'>
                  <p className='user-name text-lg font-bold'>Luis</p>
                </div>
              </div>
            </div>
            <div className='card-1 m-2 rounded-[100px] border-2 flex w-[300px] h-[420px] hover:scale-105 cursor-pointer gap-2 grow max-[1965px]:hidden'>
              <div className='card-content '>
                <div className='foto-estrellas'>
                  <img
                    className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                    src='https://thumbs.dreamstime.com/z/cortando-pasto-157632503.jpg'
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

                <p className='card-text text-base text-center ml-4 mr-4 mt-[8%] font-sans font-normal'>
                  “Juan ofrece un muy buen servicio. Trabaja rápido y trae todo
                  su equipo con el. Laura.”
                </p>
                <div className='nombre text-center mt-[8%]'>
                  <p className='user-name text-lg font-bold'>Juan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='buttons flex justify-between -mt-48 mb-12 p-4'>
          <button className='z-50' onClick={slideLeftBig} ref={prevRefBig}>
            <img className='w-12 ml-10 ' src={Left}></img>
          </button>

          <button className='z-50' onClick={slideRightBig} ref={nextRefBig}>
            <img className='w-12 mr-10' src={Right}></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
