import { useState } from "react";

export default function HeaderFaqs(){
 const [name, setName] = useState('');
    
 function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name) 
 }

 return(
        <div className="width-[1514px] h-[294px] left-[-2px] top-[119px] bg-[#28315C]">
           <div className="relative flex items-center text-center w-[258px] h-[30px] left-[600px] top-[40px]">
             <p className="font-['Inter'] not-italic font-medium text-[25px] leading-[120%] text-[#FFFFFF]">Preguntas frecuentes</p>
           </div>

           <div className="relative flex items-center text-center w-[676px] h-[59px] left-[418px] top-[50px]">
             <h1 className="font-['Inter'] not-italic font-extrabold text-[49px] leading-[120%] text-[#FFFFFF]">Todo lo que necesitas saber</h1>
           </div>

           <div className="flex flex-col items-start p-[0px 28px] gap-2.5 relative left-[580px] top-[130px] text-[#FAFAFA]">
             <input className="bg-[#28315C] bg-[#FFFFFF14] w-[240px] h-[44px] rounded-[12px] items-star" type="text"
             placeholder= "Que estabas buscando?🔍︎" 
             value={name}
             onChange={(e) => handleInputChange(e)}/>
          </div>
        </div>
    )
}