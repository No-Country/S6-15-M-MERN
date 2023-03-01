import contrata from "../assets/contrata.png";
import Facebook1 from "../assets/Facebook1.png"
import Instagram from "../assets/Instagram.png"
import Twitter from "../assets/Twitter.png"



export default function Footer(){
  return(
      <footer className="flex flex-col justify-between relative p-3.5 w-[100%] top[3299.25px] bottom-0  rounded-none">
        <div className="flex justify-between max-sm:justify-center">
          <div className="items-start ">

              <img className="flex flex-col p-0 gap[50px] h-[61.28px] left-0 top-0 rounded-none" src={contrata}/>

            <ul className="flex flex-row gap-[20px] ">
            <img src={Facebook1}/>
            <img src={Instagram}/>
            <img src={Twitter}/>
            </ul>
          </div>

          <div className="columns-3 flex flex-row items-start  rounded-none max-sm:hidden -center">
              <ul>
                <li className="font-family['Gilroy'] not-italic font-extrabold text-xs text-black  leading-8" >SOBRE NOSOTROS</li>
                <li className="text-sm font-family['Gilroy-medium'] leading-[150%]">Que hacemos</li>
                <li className="text-sm font-family['Gilroy-medium'] leading-[150%]">Servicios</li>
                <li className="text-sm font-family['Gilroy-medium'] leading-[150%]">FAQ's</li>
                <li className=" font-family-['Gilroy-medium'] font-extrabold text-xs text-black leading-8">Contáctanos</li>
              </ul>
          </div>
        </div>
          <div className="flex flex-row items-center justify-center gap-6 mt-[20px] text-gray-600">  
            <span className="">Copyright © 2023 Contratá</span>
          </div>
      </footer>
  )
}