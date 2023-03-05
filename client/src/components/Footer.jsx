import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";
import contrata from "../assets/contrata.png";
import { Link } from "react-router-dom";




export default function Footer(){
  return(
      <footer className="flex flex-col justify-between relative p-3.5 w-[100%] top[3299.25px] bottom-0   rounded-none">
        <div className="flex justify-between max-sm:justify-center max-md:justify-between ">
          <div className="items-start ">
              <img className="flex flex-col p-0 gap[50px] h-[61.28px] left-0 top-0 rounded-none" src={contrata}/>
            {/* <ul className="flex flex-row gap-[20px] ">
              <li><FontAwesomeIcon icon={faFacebook} className="w-[50px] h-[51px]"></FontAwesomeIcon></li>
              <li><FontAwesomeIcon icon={faInstagram} className="w-[50.4px] h-[50.4px]"></FontAwesomeIcon></li>
              <li><FontAwesomeIcon icon={faTwitter} className="w-[49px] h-[42px]"></FontAwesomeIcon></li>
            </ul> */}
          </div>
            <div>
            <Link to='/team'><span className="flex  mt-[30px] text-neutral-700 mas-sm:text-xs text-center font-khula">Team <br/>S6-15-M-MERN</span></Link>
            </div>
          <div className="columns-3 flex flex-row items-start  rounded-none max-sm:hidden -center">
              <ul>
                <li className="font-family['Gilroy'] not-italic font-extrabold text-xs text-black  leading-8  font-khula" ><Link to='/faq'>SOBRE NOSOTROS </Link></li>
                <li className="text-sm font-family['Gilroy-medium'] leading-[150%]  font-khula"><Link to='/faq'>Que hacemos </Link></li>
                <li className="text-sm font-family['Gilroy-medium'] leading-[150%]  font-khula"><Link to='servicios '>Servicios </Link></li>
                <li className=" font-family-['Gilroy-medium'] font-extrabold text-xs text-black leading-8  font-khula"><Link to='/faq'>Contáctanos </Link></li>
              </ul>
          </div>

        </div>
          <div className="flex flex-row items-center justify-center gap-6 mt-[20px] text-gray-600">  
            <span className="">Copyright © 2023 Contratá</span>
          </div>
      </footer>
  )
}
