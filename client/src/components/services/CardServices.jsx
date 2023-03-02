import React from 'react';
import profile from '../../assets/profile.jpeg';
import './CardService.css';
import marta from '../../assets/marta.png'
import { useSelector } from 'react-redux';

export const CardServices = ({ title, image, description, service, id, imagen }) => {



  return (
    <div className='containerCard relative'>
      <img src={image} />

      <img
        className=' inset-0 rounded-full w-20 max-h-20 absolute ml-[42%] mt-16 border-[#28315C] border-solid border-2 '
        src={imagen}
        alt=''
      />
      <div className='cardDiv' id={id}>
        <div className='serviceDiv'>
          <h4> {service}</h4>
          <p className='pCard'>{title}</p>
        </div>
        <div className='divTetx'>
          <div className='divPrice'>
            <p>{description}</p>
            {/* <h5 className='text-buttons-buttonGreen font-black'> $price</h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};
