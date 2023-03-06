import React from 'react';
import profile from '../../assets/marta.png';

import marta from '../../assets/marta.png'
import { useSelector } from 'react-redux';

export const CardServices = ({ title, image, description, service, id, avatar }) => {
  let texto = description;
  if (description !== undefined && description.length > 270) texto = description.substring(0,270)+"...";
  return (
    <div className=' flex flex-col flex-wrap w-[277px] sm:w-[400px] h-auto md:h-[350px]  rounded-2xl shadow-md relative cursor-pointer'>
      <div className='top'>
      <div className='avatar w-full absolute flex justify-center mt-14' >
        <img
          className='object-cover rounded-full w-20 h-20  border-[#28315C] border-solid border-2 '
          src={((avatar.path !== undefined) && (avatar.path !== "")) ? (avatar.path) : (profile)}
          alt=''
        />

      </div>
        <img className='object-cover max w-full h-[100px] rounded-t-2xl' src={image} />

      </div>
      
      <div className="bottom">

      </div>



      <div className='cardDiv mt-6 bottom p-3' id={id}>
        <div className='serviceDiv text-lg font-bold'>
          <h4> {service}</h4>
          <p className='pCard'>{title}</p>
        </div>
        <div className='divTetx mt-2 '>
          <div className='divPrice '>
            <p className='mt-2  text-'>{texto}</p>
            {/* <h5 className='text-buttons-buttonGreen font-black'> $price</h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};
