import { useState } from "react";

export default function HeaderFaqs(){
 const [name, setName] = useState('');
    
 function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name) 
 }

 return(
        <div className="w-full h-[294px] left-[-2px] top-[119px] bg-[#28315C]">
          <div className="flex items-center flex-col justify-center">
           <div className=" flex items-center text-center w-[258px] h-[30px] mt-20 justify-center   ">
             <p className="font-['Inter'] not-italic font-medium max-[480px]:text-lg text-[25px] leading-[120%] text-[#FFFFFF] text-center">Preguntas frecuentes</p>
           </div>

           <div className=" flex items-center text-center max-[480px]:mt-5 h-[59px] mt-10 ">
             <h1 className="font-['Inter'] not-italic font-extrabold max-[480px]:text-2xl text-[49px]  leading-[120%] text-[#FFFFFF]">Todo lo que necesitas saber</h1>
           </div>

           
         </div>
        </div>
    )
}