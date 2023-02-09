import { useState, useRef, useEffect } from "react";
import Card from "./Card";

const MostRequested = () => {
  const scrollLeft = ()=>{
    console.log("izq")
  
  }
  
  const scrollrigth = ()=>{
    console.log("der")
  }  

  return (
    <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10 h-500 relative ">
      <section className="carousel my-20 mx-auto font-poppins bg-red-500 w-[1308px] h-[415px]">
      <div className="ml-16 mb-4 text-left">
        <h3 className="text-gray-600 font-extrabold text-3l ">
        Servicios más solicitados
        </h3>
        </div>
        <div className="absolute w-[1308px] top-1/2 flex justify-between">
        <button onClick={scrollLeft} className="border-2 rounded-full h-11 w-11 text-xl font-bold"><p className="mx-auto my-auto">{"<"}</p> </button>
        <button onClick={scrollrigth} className="border-2  rounded-full h-11 w-11 text-xl font-bold">{">"} </button>
        </div>
        <div className="carousel p-4 my-4 flex items-center justify-start overflow-x-auto">
          
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
          
          
        </div>
        
      </section>
    </div>
  );
};

export default MostRequested;
