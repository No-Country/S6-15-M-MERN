import { useRef, useEffect, useState } from 'react';
import Card from './Card';
import data from './data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useApi } from '../../hooks/useApi';

const MostRequested = () => {
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [readJobs] = useApi();

  const scrollLeft = () => {
    let maxWidth = carousel.current.scrollWidth - carousel.current.clientWidth;
    if (carousel.current.scrollLeft === 0) {
      let newIndex = Math.floor(maxWidth / 301);
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollrigth = () => {
    let maxWidth = carousel.current.scrollWidth - carousel.current.clientWidth;
    if (
      carousel.current.scrollLeft === maxWidth ||
      maxWidth - carousel.current.scrollLeft < 100
    ) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    readJobs();
  }, []);

  useEffect(() => {
    carousel.current['scrollLeft'] = 301 * currentIndex;
  }, [currentIndex]);

  return (
    <div className='2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10 h-500 relative bg flex-wrap flex '>
      <section className=' relative carousel my-20 mx-auto font-poppins  bg-white w-[320px] min-[390px]:w-[385px] min-[800px]:w-[700px] min-[1130px]:w-[1010px]  min-[1393px]:w-[1308px] h-[415px] '>
        {' '}
        {/* w-[390px] */} {/* w-[700px] */} {/* w-[1010px] */}
        <div className='mx-auto s:ml-16 mb-4 text-left'>
          <h3 className='text-[#28315C] font-extrabold text-3l '>
            Servicios más solicitados
          </h3>
        </div>
        <div className='prueba flex items-center max-[390px]:w-[280px] mx-auto relative'>
          <button
            onClick={scrollLeft}
            className='max-[390px]:absolute  z-10 rounded-full  text-3xl text-[#28315C] font-bold my-auto m-1 min-[390px]:m-2 sm:ml-2 sm:mr-[14px] flex items-center hover:scale-110 h-7'
          >
            {' '}
            <FontAwesomeIcon icon={faCircleChevronLeft} />{' '}
          </button>

          <div
            id='carousel'
            className=' carousel my-4 py-3 p-0 px-1 flex  items-center justify-start overflow-x-hidden scroll-smooth touch-manipulation  touch-pan-x z-0 gap-6'
            ref={carousel}
          >
            {data.resources.map((requested, index) => {
              return (
                <div key={index}>
                  <Card
                  id={requested._id}
                    imagen={requested.imageUrl}
                    title={requested.title}
                    description={requested.descripcion}
                    price={requested.price}
                  />
                </div>
              );
            })}
            
          </div>
          <button
            onClick={scrollrigth}
            className='max-[390px]:absolute right-0 z-10 ml-20rounded-full  sm:left-0 text-3xl text-[#28315C] font-bold m-1 min-[390px]:m-2 sm:mr-2 sm:ml-[14px] my-auto flex items-center hover:scale-110 h-7'
          >
            {' '}
            <FontAwesomeIcon icon={faChevronCircleRight} />{' '}
          </button>
          
        </div>
      </section>
    </div>
  );
};

export default MostRequested;
