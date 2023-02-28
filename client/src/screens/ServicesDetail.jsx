import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardServices } from '../components/services/CardServices';
import Dropdown from '../components/services/Dropdown'
import { useSelector } from 'react-redux';
import { useApi } from '../hooks/useApi';
import image from '../assets/Frame.png';
import { useNavigate } from 'react-router-dom';
import HeaderServicios from '../components/HeaderServicios';

export const ServicesDetail = ({ props }) => {
  const [searchparams] = useSearchParams(); 
  const [, , , professionalsList] = useApi();
  const [professional, setProfessional] = useState([]);
  const [ciudad, setCiudad] = useState('');
  const [imagen, setImagen] = useState("https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/banners%2Felectricista.png?alt=media&token=41be896c-0152-4d4c-a6c4-79f14258b954")

  const navigate = useNavigate();
  const handleOption = (e) => {
    e.target.value === 'Todos' ? setCiudad('') : setCiudad(e.target.value);
  };

  const professionals = useSelector((state) => state.professionals);
  const jobs = useSelector(state => state.jobs)

  const [busqueda, setBusqueda] = useState('Todos');

  useEffect(()=>{
    if(jobs.jobs.length > 1){
      setImagen(jobs.jobs.filter(job => job._id === searchparams.get('id'))[0].jobBannerUrl)
      

    }

  }, [jobs])


  useEffect(() => {
    /* setProfessional({ id: searchparams.get('id') }); */
    professionalsList(searchparams.get('id'), ciudad);
  }, [ciudad]);

  function handleOnClick(item) {
   /*  navigate(
      {
        pathname: '/perfilProfesional',
        search: createSearchParams({
          id: id,
        }).toString(),
      }
    ) */
    navigate(`/perfilProfesional?id=${item._id}`);
  }

  return (
    <>
      <div><HeaderServicios/></div>
      <div className=' flex flex-col p-10 justify-evenly'>
        <div className='flex-col items-center justify-around flex'>
          <div>
            <h5 className='leading-9 text-2xl font-normal text-greyText'>
              ¿Problemas eléctricos? ¿Necesitas cambiar los interruptores?
              Nuestros técnicos tiene la solución para que tu hogar siempre esté
              iluminado.
            </h5>
            <br />
            <h5 className='leading-9 text-2xl font-normal text-greyText'>
              Puedes programar o reprogramar hasta con 24 horas de anticipación
              evitando el cobro del 100% del valor del servicio. Consulta
              nuestros Términos y condiciones para más información
            </h5>
          </div>
        </div>
        <div className='h-full flex flex-col justify-evenly'>
          <div>
            <h6 className='leading-9 text-2xl font-normal pb-5'>
              Selecciona la ciudad para tu servicio
            </h6>
            <div className='mb-4'>
              {/* agrego esta porcion de código solo para probarlo rápido */}

              <select className='text-base mx-auto mt-16 font-normal rounded-full border-2 bg-green-100 text-gray-600 h-12 w-[429px] pl-5 pr-10  hover:border-gray-400 focus:outline-none appearance-none'>
                <option onClick={handleOption}>Todos</option>

                <option onClick={handleOption}>Cucuta</option>
              </select>

              {/* aqui termina el agregado configurarlo con el dropdown */}

              {/* <Dropdown /> */}
            </div>
          </div>
          <div className=' p-2 flex flex-wrap gap-5 items-center justify-center '>
            {professionals.professionals.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className='flex max-sm:flex-col max-sm:items-center'
                  onClick={() => handleOnClick(item)}
                >
                  <CardServices
                    image={image}
                    description={item.description}
                    service={item.name}
                    id={item._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
