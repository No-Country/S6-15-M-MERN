import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
// import data from "./data.json";

const OurServices = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    fetch(
      'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/jobs'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current['scrollLeft'] =
        carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, [items]);

  if (error) {
    return <div className='text-center'>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className=' text-center '>Cargando...</div>;
  } else {
    return (
      <div className='2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10'>
        <section className='carousel my-12 mx-auto '>
          <div className='py-8 text-center'>
            <h2 className='text-gray-600 font-extrabold text-2xl md:text-3xl'>
              Nuestros Servicios
            </h2>
            <p className=' text-gray-500 text-base md:text-lg'>
            Contamos con la experiencia necesaria y el servicio requerido, en cada área profesional de tu necesidad, desde la proximidad de tu domicilio o ubicación!
            </p>
          </div>
          <div className='relative overflow-hidden'>
            <div className='flex justify-between absolute top left w-full h-full'>
              <button
                onClick={movePrev}
                className='hover:bg-emerald-600/75 bg text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300'
                disabled={isDisabled('prev')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-20 -ml-5 sm:none'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
                <span className='sr-only'>Prev</span>
              </button>
              <button
                onClick={moveNext}
                className='hover:bg-emerald-600/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300'
                disabled={isDisabled('next')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-20 -ml-5 sm:none'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
                <span className='sr-only'>Next</span>
              </button>
            </div>
            <div
              ref={carousel}
              className='carousel-container relative flex max-sm:gap-16 max-md:gap-4 md:gap-2 lg:gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 '
            >
              {items.jobs.map((resource, index) => {
                return (
                  <div
                    key={index}
                    className=' carousel-item text-center relative w-52 h-56 md:h-72 '
                  >
                    <div className="carousel-img relative w-36 h-36 md:w-52 md:h-52">
                        <Link
                          // href="/servicios"
                          className="h-full w-full sm:w-full aspect-square rounded-full block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                          style={{
                            backgroundImage: `url(${resource.jobImageUrl || ""})`,
                          }}
                        >
                          <img
                            src={resource.jobImageUrl || ""}
                            alt={resource.description}
                            className="w-full aspect-square hidden "
                          />
                        </Link>
                        <Link
                          to="/servicios"
                          className="h-full w-full aspect-square rounded-full block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-emerald-600/75 z-10"
                        >
                          <h3 className="text-white py-6 px-3 mx-auto text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {resource.title}
                          </h3>
                        </Link>
                    </div>
                    <h1 className='text-gray-600 font-extrabold text-xl'>
                      {resource.service}
                    </h1>
                    <p className='text-gray-500 text-sm inline-block align-middle'>{resource.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default OurServices;
