import { useState, useEffect } from 'react';
import Card from './MostRequested/Card';
import { useApi } from '../hooks/useApi';
import { useSelector } from 'react-redux';

function ServicesCards() {
  const jobs = useSelector((state) => state.jobs);
  /* const user = useSelector(state => state.user);
    console.log(user)
    */

    const [readJobs] = useApi();
    const [,,,readUser] = useApi();
    const [busqueda, setBusqueda] = useState("Todos");

    useEffect(() => {
        readJobs()
        readUser()
    }, [])
    

  const handleOption = (e) => setBusqueda(e.target.value);

  return (
    <>
      <div className='flex flex-col justify-center '>
        <button className='bg-orange-500'></button>
        <h2 className='text-[#28315C] align-middle font-extrabold text-5xl mt-28 text-center'>
          Contrata profesionales de confianza
        </h2>
        <p className='mt-6 text-center text-2xl max-w-3xl mx-auto'>
          Solicita un presupuesto sin cargo, con total confianza. No
          compartiremos tus datos
        </p>

<<<<<<< HEAD
        <select className='text-base mx-auto mt-16 font-normal rounded-full border-2 bg-green-100 text-gray-600 h-12 w-[429px] pl-5 pr-10  hover:border-gray-400 focus:outline-none appearance-none'>
          <option onClick={handleOption}>Todos</option>
=======
        <select onClick={handleOption} className='text-base mx-auto mt-16 font-normal rounded-full border-2 bg-green-100 text-gray-600 h-12 w-[429px] pl-5 pr-10  hover:border-gray-400 focus:outline-none appearance-none'>
          <option >Todos</option>
>>>>>>> 6b729dc79f75447f23e307c86018f0a4bf67237c

          {jobs !== null &&
            jobs.jobs.map((requested) => {
              return (
<<<<<<< HEAD
                <option key={requested._id} onClick={handleOption}>
=======
                <option key={requested._id}>
>>>>>>> 6b729dc79f75447f23e307c86018f0a4bf67237c
                  {requested.service}
                </option>
              );
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
