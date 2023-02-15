import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/fontawesome-free-brands"
import Contrata from "../assets/Marcaempresa.png"


export default function Footer(){
  return(
    <div>
      <footer className="flex flex-col justify-between relative items-center m-0 p-[64px 24px 8px] w-[100%] top[3299.25px] bottom-0 left-[3px] rounded-none bg-red-600">
        <div className="flex justify-start">
          <div className="items-start mr-[150px]">

              <img className="flex flex-col p-0 gap[50px] w-[320px] h-[61.28px] left-0 top-0 rounded-none" src={Contrata}/>

            <ul className="flex flex-row  md sm p-[0px] gap-[20px] left-[1.5px] top-[106.38px] mt-10">
              <li><FontAwesomeIcon icon={faFacebook} className="w-[50px] h-[51px]"></FontAwesomeIcon></li>
              <li><FontAwesomeIcon icon={faInstagram} className="w-[50.4px] h-[50.4px]"></FontAwesomeIcon></li>
              <li><FontAwesomeIcon icon={faTwitter} className="w-[49px] h-[42px]"></FontAwesomeIcon></li>
            </ul>
          </div>

        <div className="columns-3 flex flex-row items-start py-8 p-[16px 0px 0px] gap-8 left-[721px] top-[0px] rounded-none ml-[150px] sm md lg xl">
            <ul>
              <li className="font-family['Gilroy'] not-italic font-extrabold text-xs text-black 600 leading-8" >SOBRE NOSOTROS</li>
              <li className="text-sm font-family['Gilroy-medium'] leading-[150%]">Que hacemos</li>
              <li className="text-sm font-family['Gilroy-medium'] leading-[150%]">Servicios</li>
              <li className="text-sm font-family['Gilroy-medium'] leading-[150%]">FAQ's</li>
            </ul>
              <br/>

            <ul>
              <li class="font-family['Gilroy'] not-italic font-extrabold text-xs text-black 600 leading-8">RECURSOS</li>
              <li className="text-sm font-family['Gilroy-medium'] leading-[150%] text-black">Blog de consejos para tu 
              <br/>hogar</li>
              <li className="text-sm font-family-['Gilroy-medium'] leading-[150%]">Contáctanos</li>
            </ul>
              <br/>

            <ul>
              <li className="font-family['Gilroy'] not-italic font-extrabold text-xs text-black 600 leading-8">SOBRE NOSOTROS</li>
              <li className="text-sm font-family['Gilroy-medium'] leading-[150%] text-black" >Terminos & condiciones del 
              <br/>servicio</li>
              <li className="text-sm font-family['Gilroy-medium'] leading-[150%] text-black">Política de privacidad</li>
            </ul>
          </div>
        </div>

          <div className="flex flex-row items-center justify-center p-[16px 0px] gap-8 mt-[20px] text-gray-600">  
            <span className="mr-[45px]">Copyright © 2023 Contratá</span>
          </div>
      </footer>
    </div>
  )
}