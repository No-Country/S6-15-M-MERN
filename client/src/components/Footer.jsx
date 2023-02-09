import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/fontawesome-free-brands"
import Contrata from "../assets/Marcaempresa.png"


export default function Footer(){
    return(
     <div>
        <footer className="flex flex-col items-center p-[64px 24px 8px] w-[1506px] h-[303px] rounded-none flex-none order-4 grow-0">
        <div className="flex justify-end">
            <div className="columns-3 flex flex-row items-start p-4 gap-8 absolute w-[600px] h-[135px] left-[721px] top-0px rounded-none">
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
          
          <div className="flex flex-row items-center p-8 gap-16 absolute left-[1.5px] top-[603px]">
           <img src={Contrata}/>
          </div>

          <div className="columns-3">
          <ul className="flex flex-row items-center p-10 gap-16 absolute w-[229.4px] h-[51px] left-[1.5px] top-[680px]">
                <li><FontAwesomeIcon icon={faFacebook} className="absolute w-12 h-12"></FontAwesomeIcon></li>
                <li><FontAwesomeIcon icon={faInstagram} className="absolute w-12 h-12"></FontAwesomeIcon></li>
                <li><FontAwesomeIcon icon={faTwitter} className="absolute w-12 h-12"></FontAwesomeIcon></li>
            </ul>
          </div>
          <div className="flex flex-row items-center p-10 gap-16 absolute bottom-px left-[540px] top-[760px] text-gray-600">  
            <span>Copyright © 2023 Contratá</span>
          </div>
        </footer>
     </div>
    )
}