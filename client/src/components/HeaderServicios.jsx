import electricistas from "../assets/electricistas.png"
import Vector from "../assets/Vector.png"
import { opcionesApp } from "../utils/opcionesApp"

export default function HeaderServicios({imagen, job}) {
    const {returnJob} = opcionesApp();
    
    return (
        <div className="w-[100%] h-[300px] left-0 top-0 bg-[#28315C] flex relative">
            

            <div className=" opacity-20  ">
                <img className="h-full"
                    src={imagen} />
            </div>
            <div className="w-[100%] flex items-center justify-center absolute inset-0">
            <img className="  " src={Vector} />
            </div>
            


            <div className="absolute inset-0 font-['Nunito_Sans'] font-bold text-[42px] leading-[52px]  text-center text-[#FFFFFF] flex mt-32 items-center justify-center">
                <h1>{returnJob(job)}</h1>
            </div>



        </div>

    )
}