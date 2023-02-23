import NavBar from "../NavBar";
import Frame from "../../assets/Frame.png"
import Foto from "../../assets/Foto.png"
import Icon from "../../assets/Icon.png"
import Facebook from "../../assets/Facebook.png"
import Telefono from "../../assets/Telefono.png"
import Correo from "../../assets/Correo.png"
import Enviame from "../../assets/Enviame.png"
import OurServices from "../OurServices/OurServices";
import Reviews from "../Reviews";
import Footer from "../Footer";


export default function PerfilProfesional(){
    return(
        <div>
          <span className="w-[284px] ml-[10px]  top-[-4] font-['Nunito Sans'] not-italic font-bold leading-[33px] flex items-center text-[#083A50] mb-3">Configuración de tu perfil</span>

            <img className="opacity-[0.6] w-[1503px] height-[146px] flex-none order-1 self-stretch grow-0" src={Frame}/>
            <img className="relative width-[100px] height-[100px] left-[15px] top-[-55px]" src={Foto}/>

               <h1 className="relative font-['Inter'] not-italic font-bold text-[39px] leading-[120%] flex items-center left-[260px] top-[-165px] ml-[100px] text-[#083A50]">
                Mariana Sepúlveda
               </h1>
               <p className="relative font-['Inter'] not-italic font-semibold text-[18px] leading-[24px] top-[-158px] left-[260px] ml-[100px] text-[#083A50]">Gasista</p> 
                
               <img className="relative left-[260px] right-[16.67%] top-[-148px] bottom-[7.03%] ml-[100px]"src={Icon} />
               <p className="relative font-['Inter'] not-italic font-normal text-[13px] leading-[120%] top-[-166px] left-[298px] ml-[100px] flex items-center text-[#083A50]">CABA-Argentina</p>
                
               <img className="relative left-[458px] right-[16.67%] top-[-189px] ml-[100px]" src={Facebook}/>
               <p className="relative font-['Inter'] not-italic font-normal text-[13px] leading-[120%] top-[-204px] left-[488px] ml-[100px] flex items-center text-[#083A50]">Mariana Sepúlveda</p>
      
            <div>  
               <p className="relative font-['Inter'] not-italic font-normal text-[18px] leading-[24px] top-[-120px] left-[285px] flex items-center w-[832px] h-[119px] ml-[100px] text-[#28315C] bg-backgroundColor">
                 Hola, soy Mariana, una experta gasista. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                 occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
            </div>

               <img className="relative left-[15px] right-[12.5%] top-[-250px] bottom-[12.5%]" src={Telefono}/>
               <p className="relative font-['Inter'] not-italic font-medium text-[16px] leading-[120%] top-[-270px] left-[40px] flex items-center text-[#083A50]">+ 59 1 1001 8830</p>
               <p className="relative font-['Inter'] not-italic font-medium text-[16px] leading-[120%] top-[-250px] left-[40px] flex items-center text-[#083A50]">+ 59 1 1001 8830</p>

               <img className="relative left-[15px] right-[12.5%] top-[-226px] bottom-[20.83%]" src={Correo}/>
               <p className="relative font-['Poppins'] not-italic font-light text-[16px] leading-[150%] top-[-245px] left-[45px] flex items-center text-[#4285F4]">mariana.gasista@gmail.com</p>

               <img className="relative flex flex-row justify-center items-center p-0 gap-4 left-[10px] top-[-200px] w-[204px]" src={Enviame}/>

            <div className="ml-[340px] mt-[-190px] w-[920px] h-[119px]">  
              <OurServices/>
            </div>

            <div className="relative ml-[340px] bottom-[-300px]  w-[920px] h-[119px]">
                <Reviews className="absolute"/>
            </div>

            <div className="relative bottom-[-900px]">
            </div>

        </div>
    )
}