import React from 'react';

const Reviews = () => {
  return (
    <div className='cards-container mt-[30rem] grid grid-cols-3  '>
      <div className='card-1 rounded-2xl shadow-2xl w-80 h-72 ml-12'>
        <div className='card-content '>
          <p className='card-text text-base text-left ml-4 mr-4 mt-8 font-sans font-normal'>
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.”
          </p>
          <div className='card-subcontent  flex  items-center justify-between mt-8 ml-6 mr-6 bg-background-card-color h-24 '>
            <img
              className='user-picture h-14 w-14 ml-4 rounded-full'
              src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ></img>
            <div className='nombre-estrella mr-16 mt-6'>
              <p className='user-name text-lg font-bold -mt-8 mb-1'>
                Mario Zapato
              </p>

              <div className='stars-container flex'>
                <svg className='w-6 h-6 ' viewBox='0 0 24 24'>
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-amber-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-700'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card-2 rounded-2xl shadow-2xl w-80 h-72'>
        <div className='card-content '>
          <p className='card-text text-base text-left ml-4 mr-4 mt-8 font-sans font-normal'>
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.”
          </p>
          <div className='card-subcontent  flex  items-center justify-between mt-8 ml-6 mr-6 bg-background-card-color h-24 '>
            <img
              className='user-picture h-14 w-14 ml-4 rounded-full'
              src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ></img>
            <div className='nombre-estrella mr-16 mt-6'>
              <p className='user-name text-lg font-bold -mt-8 mb-1'>
                Mario Zapato
              </p>

              <div className='stars-container flex'>
                <svg
                  class='w-6 h-6 fill-current text-gray-700'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-700'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-700'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card-3 rounded-2xl shadow-2xl w-80 h-72 -ml-12'>
        <div className='card-content '>
          <p className='card-text text-base text-left ml-4 mr-4 mt-8 font-sans font-normal'>
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.”
          </p>
          <div className='card-subcontent  flex  items-center justify-between mt-8 ml-6 mr-6 bg-background-card-color h-24 '>
            <img
              className='user-picture h-14 w-14 ml-4 rounded-full'
              src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ></img>
            <div className='nombre-estrella mr-16 mt-6'>
              <p className='user-name text-lg font-bold -mt-8 mb-1'>
                Mario Zapato
              </p>

              <div className='stars-container flex'>
                <svg
                  class='w-6 h-6 fill-current text-gray-700'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-700'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-700'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
                <svg
                  class='w-6 h-6 fill-current text-gray-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
