import React from 'react';

const ReviewCards = () => {
  return (
    <div className='card-1 m-4 rounded-[100px] border-2 flex grow-[0 0 25%] w-[295px] h-[435px] hover:scale-105  '>
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
          “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat.”
        </p>
        <div className='nombre text-center mt-8'>
          <p className='user-name text-lg font-bold'>Juan</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
