import { useState, useEffect } from 'react';
import Card from './MostRequested/Card';
import { useApi } from '../hooks/useApi';
import { useSelector } from 'react-redux';

function ServicesCards() {
  const jobs = useSelector((state) => state.jobs);
  /* const user = useSelector(state => state.user);
    console.log(user)
    */

  const [readJobs, , , readUser] = useApi();
  const [busqueda, setBusqueda] = useState('Todos');

  useEffect(() => {
    readJobs();
    readUser();
  }, []);

  const handleOption = (e) => setBusqueda(e.target.value);

  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 '>
        <div className='max-[448px]:w-[300px]'>
        <h2 className='  max-[448px]:text-2xl   text-[#28315C] font-extrabold text-5xl mt-28 text-center'>
          Contrata profesionales de confianza
        </h2>
        </div>
    
        
        <p className='max-[448px]:text-lg mt-6 text-center text-2xl max-w-3xl mx-auto'>
          Solicita un presupuesto sin cargo, con total confianza. No
          compartiremos tus datos
        </p>

        <select
          onClick={handleOption}
          className=' max-[448px]:w-[260px] text-base mx-auto mt-16 font-normal rounded-full border-2 bg-green-100 text-gray-600 h-12 w-[429px] pl-5 pr-10  hover:border-gray-400 focus:outline-none appearance-none'
        >
          <option>Todos</option>

          {jobs !== null &&
            jobs.jobs.map((requested) => {
              return <option key={requested._id}>{requested.service}</option>;
            })}
        </select>
      </div>
      <div className='flex justify-center flex-wrap gap-5 max-w-[1300px] mt-5 mx-auto pt-10'>
        {jobs === null ? (
          <h2 className='text-[#28315C] animate-bounce text-xl'>Loading</h2>
        ) : (
          busqueda === 'Todos' &&
          jobs.jobs.map((requested, index) => {
            return (
              <div className='my-4' key={requested._id}>
                <Card
                  id={requested._id}
                  imagen={requested.jobImageUrl}
                  title={requested.service}
                  description={requested.description}
                />
              </div>
            );
          })
        )}
        {busqueda !== 'Todos' &&
          jobs.jobs.map((requested) => {
            if (requested.service === busqueda) {
              return (
                <div className='my-4' key={requested._id}>
                  <Card
                    id={requested._id}
                    imagen={requested.jobImageUrl}
                    title={requested.service}
                    description={requested.description}
                  />
                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export default ServicesCards;
