import electricistas from "../assets/electricistas.png"
import Vector from "../assets/Vector.png"

export default function HeaderServicios(){
    return(
        <div className="w-[100%] h-[100%] left-0 top-0 bg-[#28315C]"> 
        <img className="flex justify-center w-[73.72px] h-[74.78] top-[230px] left-[678px] absolute" src={Vector} />

        <div className=" left-0 right-0 top-0 opacity-20">
            <img
            src={electricistas}/>
        </div>
      
        
        <div className="absolute left-[600px] top-[300px] font-['Nunito_Sans'] font-bold text-[42px] leading-[52px] flex items-center text-center text-[#FFFFFF]"> 
            <h1>Electricistas</h1>
        </div>



        </div>

    )
}