import { useState } from "react";
import Card from "./MostRequested/Card";
import data from "./MostRequested/data.json"

function ServicesCards() {

    const [busqueda, setBusqueda] = useState("Todos");

    const handleOption = (event)=>{
        const election = event.target.value;
        setBusqueda(election);
        console.log(election)

    }
    return (
        <>
            <div className="flex flex-col justify-center">
                <h2 className='text-[#28315C] align-middle font-extrabold text-5xl mt-28 text-center'>
                    Contrata profesionales de confianza
                </h2>
                <p className='mt-6 text-center text-2xl max-w-3xl mx-auto'>
                    Solicita un presupuesto sin cargo, con total confianza.
                    No compartiremos tus datos
                </p>

                <select class="text-base mx-auto mt-16 font-normal rounded-full border-2 bg-green-100 text-gray-600 h-12 w-[429px] pl-5 pr-10  hover:border-gray-400 focus:outline-none appearance-none">
            <option onClick={handleOption}>Todos</option>
            <option onClick={handleOption}>Lavado de autos</option>
            <option  onClick={handleOption}>Mecanico</option>
            <option  onClick={handleOption}>Electricista</option>
            <option  onClick={handleOption}>Plomero</option>
            <option  onClick={handleOption}>Masajista</option>
            <option  onClick={handleOption}>Contadora</option>
            <option  onClick={handleOption}>Jardinero</option>
        </select>
            </div>
            <div className="flex justify-center flex-wrap gap-5 max-w-[1300px] mt-5 mx-auto pt-10">
                {(busqueda === "Todos") &&
                data.resources.map((requested, index) => {
                    return (
                        <div className="my-4" key={index}>
                            <Card imagen={requested.imageUrl} title={requested.title} description={requested.descripcion} price={requested.price} />
                        </div>

                    )
                })

             
                
                }
                {(busqueda !== "Todos") &&
                data.resources.map((requested, index) => {
                    if(requested.title === busqueda){
                        return (
                            <div className="my-4" key={index}>
                                <Card imagen={requested.imageUrl} title={requested.title} description={requested.descripcion} price={requested.price} />
                            </div>
    
                        )

                    }
                    
                })

             
                
                }
            </div>

        </>
    );
}

export default ServicesCards;