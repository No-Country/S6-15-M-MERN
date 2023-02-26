import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { CardServices } from '../components/services/CardServices'
import Dropdown from '../components/services/Dropdown'
import { useSelector } from 'react-redux';
import { useApi } from '../hooks/useApi';

export const ServicesDetail = ({props}) => {

 const [searchparams] = useSearchParams();

 
  const [filteredJob, setFilteredJob] = useState([])
  const [,,, readUser] = useApi();
  const jobSelected = useSelector(state => state.users);

  useEffect(() => {
    readUser()
    const job  = jobSelected.users.filter(item => item.job == searchparams.get('titulo'))
    setFilteredJob(job)
    console.log(job, "EL JOB")
  }, [])


  return (
    <>
        <div>
        ServicesDetail Header
        </div>
        <div className=' flex flex-col p-10 justify-evenly'>
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
                    Selecciona la ciudad para tu servicio
                    </h6>
                    <div className='mb-4'>
                    <Dropdown/>
                    </div>
                </div>
                <div>
                {filteredJob.map((item, index) => {
                    return (
                        <div key={index} className='flex max-sm:flex-col max-sm:items-center'>
                            <CardServices image={item.jobImageUrl} title={item.title} description={item.description} service={item.service}/>
                        </div>
                    )})
                }
                   
                </div>
               
            </div>
        </div>

    </>
  )
}
