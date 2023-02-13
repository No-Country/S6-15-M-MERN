import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";
import Contrata from "../assets/Marcaempresa.png";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="top-row ">
        <div className="flex justify-end">
          <div className="columns-3 flex flex-row items-start p-4 gap-8  h-[135px]   rounded-none">
            <ul>
              <li className="font-family['Gilroy'] not-italic font-extrabold text-xs text-black  leading-8">
                SOBRE NOSOTROS
              </li>
              <li className="text-sm font-family['Gilroy-medium'] ">
                Que hacemos
              </li>
              <li className="text-sm font-family['Gilroy-medium'] ">
                Servicios
              </li>
              <li className="text-sm font-family['Gilroy-medium'] ">
                FAQ's
              </li>
            </ul>
            <br />

            <ul>
              <li className="font-family['Gilroy'] not-italic font-extrabold text-xs text-black  leading-8">
                RECURSOS
              </li>
              <li className="text-sm font-family['Gilroy-medium'] leading-[150%] text-black">
                Blog de consejos para tu
                <br />
                hogar
              </li>
              <li className="text-sm font-family-['Gilroy-medium'] leading-[150%]">
                Contáctanos
              </li>
            </ul>
            <br />

            <ul>
              <li className="font-family['Gilroy'] not-italic font-extrabold text-xs text-black  leading-8">
                SOBRE NOSOTROS
              </li>
              <li className="text-sm font-family['Gilroy-medium'] leading-[150%] text-black">
                Terminos & condiciones del servicio
                <br />
              </li>
              <li className="text-sm font-family['Gilroy-medium'] leading-[150%] text-black">
                Política de privacidad
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row items-center p-2 gap-2  ">
          <img src={Contrata} />
        </div>

        <div className="columns-3">
          <ul className="flex flex-row items-center p-2 gap-1  ">
            <li>
              <FontAwesomeIcon
                icon={faFacebook}
                className=" w-12 h-12"
              ></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className=" w-12 h-12"
              ></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTwitter}
                className=" w-12 h-12"
              ></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-row text-gray-600">
        <p className="text-center">Copyright © 2023 Contratá</p>
      </div>
    </footer>
  );
}
