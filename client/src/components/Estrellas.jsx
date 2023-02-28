import estrella from "../assets/estrella.png"
import estrella2 from "../assets/estrella2.png"

export default function Estrellas(){
    return( 
        <div className="flex flex-row  w-[20px] gap-1">
        <img src={estrella} />
        <img src={estrella} />
        <img src={estrella} />
        <img src={estrella} />
        <img src={estrella2} />
       </div>

    )
}
