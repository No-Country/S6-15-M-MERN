import { useRef } from 'react';
import Left from '../assets/Left.svg';
import Right from '../assets/Right.svg';

const Reviews = () => {
  const carousel = useRef(null);

  const slideLeft = () => {
    if (carousel.current.children.length > 0) {
      const firstElement = carousel.current.children[0];
      carousel.current.style.transition = `5000 ease-out all`;
      const carouselSize = carousel.current.children[0].offsetWidth;
      carousel.current.style.transform = `translateX(-${carouselSize}px)`;
      const transition = () => {
        carousel.current.style.transition = 'none';
        carousel.current.style.transform = `translateX(0)`;
        carousel.current.style.appendChild(firstElement);
      };

      carousel.current.addEventListener('transitionend', transition);
    }
  };

  const slideRight = () => {
    console.log('right');
  };
  return (
    <div>
      <div
        ref={carousel}
        className=' cards-carousel mt-[19rem] p-4 flex  overflow-hidden   scroll-smooth  items-center justify-center mb-[12rem]'
      >
        <div className='card-1 m-2 rounded-[100px] border-2 w-[295px] h-[435px] '>
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
        <div className='card-1 m-2 rounded-[100px] border-2 w-[295px] h-[435px]'>
          <div className='card-content '>
            <div className='foto-estrellas'>
              <img
                className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                src='https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        <div className='card-1 m-2 rounded-[100px] border-2 w-[295px] h-[435px]'>
          <div className='card-content '>
            <div className='foto-estrellas'>
              <img
                className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                src='https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        <div className='card-1 m-2 rounded-[100px] border-2 w-[295px] h-[435px] max-[1250px]:w-210  '>
          <div className='card-content '>
            <div className='foto-estrellas'>
              <img
                className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                src='https://images.pexels.com/photos/848199/pexels-photo-848199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        <div className='card-1 m-2 rounded-[100px] border-2 w-[295px] h-[435px] max-[1450px]:hidden '>
          <div className='card-content '>
            <div className='foto-estrellas'>
              <img
                className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10 object-cover'
                src='https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        <div className='card-1 m-2 rounded-[100px] border-2 w-[295px] h-[435px] max-[1720px]:hidden '>
          <div className='card-content '>
            <div className='foto-estrellas'>
              <img
                className='user-picture h-[100px] w-[100px] rounded-full ml-auto mr-auto mt-10'
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
      <div className='buttons flex justify-between '>
        <button onClick={slideLeft}>
          <img className='w-12 ml-10 ' src={Left}></img>
        </button>

        <button onClick={slideRight}>
          <img className='w-12 mr-10' src={Right}></img>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
