import React from 'react';
import profile from '../../assets/marta.png';
import './CardService.css';
import marta from '../../assets/marta.png'
import { useSelector } from 'react-redux';

<<<<<<< HEAD
export const CardServices = ({ title, image, description, service, id, imagen }) => {



=======
export const CardServices = ({ title, image, description, service, id, avatar }) => {
  console.log(avatar.path, "AVATARRRRRRRRRRRRRRRR");
>>>>>>> 7db4bd1fa873cc2402f8140d5617ff1d3e5ff579
  return (
    <div className='containerCard relative'>
      <img src={image} />

      <img
<<<<<<< HEAD
        className=' inset-0 rounded-full w-20 max-h-20 absolute ml-[42%] mt-16 border-[#28315C] border-solid border-2 '
        src={imagen}
=======
        className=' max-[448px]:ml-[85px] max-[448px]:mt-[18px]  object-cover inset-0 rounded-full w-20 max-h-20 absolute ml-[42%] mt-16 border-[#28315C] border-solid border-2 '
        src={((avatar.path !== undefined)&&(avatar.path !== ""))?(avatar.path):(profile)}
>>>>>>> 7db4bd1fa873cc2402f8140d5617ff1d3e5ff579
        alt=''
      />
      <div className='cardDiv' id={id}>
        <div className='serviceDiv'>
          <h4> {service}</h4>
          <p className='pCard'>{title}</p>
        </div>
        <div className='divTetx '>
          <div className='divPrice '>
            <p className='max-[448px]:mt-6'>{description}</p>
            {/* <h5 className='text-buttons-buttonGreen font-black'> $price</h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};
