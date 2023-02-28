import React from 'react';
<<<<<<< HEAD
import { useSearchParams } from 'react-router-dom';
import image from '../../assets/Image.png';
import profile from '../../assets/profile.jpeg';
import './CardService.css';

export const CardServices = ({ title, image, description, service, id }) => {
  const [searchparams] = useSearchParams();
  /* console.log(title, "la props"); */
=======
import profile from '../../assets/profile.jpeg';
import './CardService.css';

export const CardServices = ({ title, image, description, service, id }) => {


>>>>>>> 6b729dc79f75447f23e307c86018f0a4bf67237c

  return (
    <div className='containerCard relative'>
      <img src={image} />

      <img
        className=' inset-0 rounded-full w-20 max-h-20 absolute ml-[42%] mt-16 border-[#28315C] border-solid border-2 '
        src={profile}
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
