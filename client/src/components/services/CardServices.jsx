import React from 'react'
import { useSearchParams } from 'react-router-dom'
import image from '../../assets/image.png'
import './CardService.css'

export const CardServices = ({props}) => {
  console.log(props, " la prop")
  const [searchparams] = useSearchParams();
  console.log(searchparams.get('titulo'));
  return (
      <div className='containerCard'>
        <img src={image}/> 
            <div className='cardDiv'>
              <div className='serviceDiv'>
                <h4>{searchparams.get('titulo')} TITLE</h4>
                <p className='pCard'>Electricidad en general doméstica e industrial. Aires acondicionados, servicio y colocación. <br/> Limpieza de aires acondicionados a vapor. Colocación de cámaras de vigilancia.</p>
              </div>
                <div className='divTetx'>
                  <div className='divPrice'>
                  <p>Desde</p> <h5 className='text-buttons-buttonGreen font-black'>$price</h5>
                  </div>
                  <a className='text-blueLinks'>Conoce mas</a>
                </div>
            </div>    
      </div>
  )
}
