import React from 'react'
import { CardServices } from '../components/services/CardServices'
import Dropdown from '../components/services/Dropdown'
import NavBar from './../components/NavBar';
import HeaderServicios from "./../components/HeaderServicios"

export const ServicesDetail = () => {
  return (
    <>
        <NavBar/>
        <HeaderServicios/>
        <div className='h-screen flex flex-col p-16 justify-evenly'>
            <div className='flex-col items-center justify-around flex'>
                <div>
                    <h5 className='leading-9 text-2xl font-normal text-greyText'>
                    ¿Problemas eléctricos? ¿Necesitas cambiar los interruptores? Nuestros técnicos tiene la solución para que tu hogar siempre esté iluminado.
                    </h5> 
                    <br/>
                    <h5  className='leading-9 text-2xl font-normal text-greyText'>
                    Puedes programar o reprogramar hasta con 24 horas de anticipación evitando el cobro del 100% del valor del servicio. Consulta nuestros Términos y condiciones para más información
                    </h5>
                </div>
            </div>
            <div className='h-full flex flex-col justify-evenly'>
                <div>
                    <h6 className='leading-9 text-2xl font-normal pb-5'>
                    Selecciona la ciudad para tu serviciow
                    </h6>
                    <div className='mb-4'>
                    <Dropdown/>
                    </div>
                </div>
                    <CardServices/>
            </div>
        </div>

    </>
  )
}
