import React from 'react'
import { useSearchParams } from 'react-router-dom'
import image from '../../assets/Image.png'
import './CardService.css'

export const CardServices = ({title, image, description, service}) => {

 

  const [searchparams] = useSearchParams();
  console.log(title, "la props");

  return (
      <div className='containerCard'>
        <img src={image}/> 
            <div className='cardDiv'>
              <div className='serviceDiv'>
                <h4> {service}</h4>
                <p className='pCard'>{title}</p>
              </div>
                <div className='divTetx'>
                  <div className='divPrice'>
                   <p>{description}</p> 
                   <h5 className='text-buttons-buttonGreen font-black'> $price</h5>
                  </div>
                </div>
            </div>    
      </div>
  )
}
