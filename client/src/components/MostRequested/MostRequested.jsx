import { useRef, useEffect, useState } from "react";
import Card from "./Card";
import data from "./data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronCircleRight, faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons' 

const MostRequested = () => {

  const carousel = useRef(null);
  const maxIndex = data.resources.length;
  const [currentIndex, setCurrentIndex] = useState(0);



  const scrollLeft = () => {
    console.log(carousel.current)
    if(carousel.current.scrollLeft === 0){
      console.log(carousel.current.scrollLeftMax)
      let newIndex = Math.floor(carousel.current.scrollLeftMax / 301);
      console.log(newIndex)
      setCurrentIndex(newIndex);
    }else{
      setCurrentIndex(currentIndex-1);
    }
    
  
    
    

  }

  const scrollrigth = () => {
    console.log(carousel.current)
    if(carousel.current.scrollLeft === carousel.current.scrollLeftMax || ((carousel.current.scrollLeftMax - carousel.current.scrollLeft) < 100)){
      setCurrentIndex(0);
    }else{
      setCurrentIndex(currentIndex+1)
    }
  }

  useEffect(() => {
    console.log(currentIndex);
    carousel.current["scrollLeft"] =
        301 * currentIndex;
  }, [currentIndex]);

  return (
    <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10 h-500 relative">
      
      <section className="carousel my-20 mx-auto font-poppins min-w  max-w-[1308px] h-[415px] ">
        <div className="ml-16 mb-4 text-left">
          <h3 className="text-[#28315C] font-extrabold text-3l ">
            Servicios más solicitados
          </h3>
        </div>
        <div className="prueba flex">
          <button onClick={scrollLeft} className=" rounded-full  text-3xl text-[#28315C] font-bold my-auto m-2 sm:ml-2 sm:mr-[14px] flex items-center hover:scale-110 "> <FontAwesomeIcon icon={faCircleChevronLeft} /> </button>

          <div id="carousel" className="carousel my-4 py-3 p-0 p-1 sm:px-3 flex flex-grow items-center justify-start overflow-x-hidden scroll-smooth snap-mandatory touch-pan-x z-0 gap-6 "
            ref={carousel}>

            {data.resources.map((requested, index) => {
              return (
                <div key={index}>
                  <Card imagen={requested.imageUrl} title={requested.title} description={requested.descripcion} price={requested.price} />
                </div>

              )
            })}
          </div>
          <button onClick={scrollrigth} className=" rounded-full  text-3xl text-[#28315C] font-bold m-2 sm:mr-2 sm:ml-[14px] my-auto flex items-center hover:scale-110">    <FontAwesomeIcon icon={faChevronCircleRight} />        </button>

        </div>


      </section>

    </div>
  );
};

export default MostRequested;
