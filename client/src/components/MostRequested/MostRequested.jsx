import { useRef, useEffect } from "react";
import Card from "./Card";
import data from "./data.json";

const MostRequested = () => {

  const carousel = useRef(null);
  let ref = useRef(0);
  const cardWidth = 310;
 


  const scrollLeft = () => {
    if (ref.current > 0) {
      ref.current -= cardWidth;
      carousel.current.scrollTo({
        top: 0,
        left: ref.current - cardWidth,
        behavior: 'smooth'
      });

    }

  }

  const scrollrigth = () => {
    if (ref.current < 930) {
      ref.current += cardWidth;
      carousel.current.scrollTo({
        top: 0,
        left: ref.current + cardWidth,
        behavior: 'smooth'
      });

    }


  }

  return (
    <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10 h-500 relative ">
      <section className="carousel my-20 mx-auto font-poppins w-[1308px] h-[415px]">
        <div className="ml-16 mb-4 text-left">
          <h3 className="text-[#28315C] font-extrabold text-3l ">
            Servicios más solicitados 
          </h3>
        </div>
        <div className="absolute w-[1308px] top-1/2 flex justify-between">
          <button onClick={scrollLeft} className="border-2 border-black rounded-full h-11 w-11 text-xl font-bold"> <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-1 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg> </button>
          <button onClick={scrollrigth} className="border-2 border-black rounded-full h-11 w-11 text-xl font-bold">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg> </button>
        </div>
        <div id="carousel" className="carousel my-4 mx-auto flex items-center justify-start overflow-x-hidden w-[1236px] "
          ref={carousel}>

          {data.resources.map((requested, index) => {
            return (
              <div key={index}>
            <Card imagen={requested.imageUrl} title={requested.title} description={requested.descripcion} price={requested.price} />
          </div>

            )
          })}
        </div>

      </section>
    </div>
  );
};

export default MostRequested;
