import Frame from "../../assets/Frame.png"
import Foto from "../../assets/Foto.png"
import Icon from "../../assets/Icon.png"
import Facebook from "../../assets/Facebook.png"
import Telefono from "../../assets/Telefono.png"
import Correo from "../../assets/Correo.png"
import Enviame from "../../assets/Enviame.png"
import OurServices from "../OurServices/OurServices";
import Reviews from "../Reviews";
import Estrellas from "../Estrellas"


export default function PerfilProfesional() {
  return (
    <div>
      <span className="w-[284px] ml-[10px]  top-[-4] font-['Nunito Sans'] not-italic font-bold leading-[33px] flex items-center text-[#083A50] mb-3">
        Configuración de tu perfil
      </span>

      <img
        className='opacity-[0.6] w-[1503px] height-[146px] flex-none order-1 self-stretch grow-0'
        src={Frame}
      />
      <img
        className='relative width-[100px] height-[100px] left-[15px] top-[-55px]'
        src={Foto}
      />

            <img className="opacity-[0.6] w-[1503px] height-[146px] flex-none order-1 self-stretch grow-0" src={Frame}/>
            <img className="relative width-[100px] height-[100px] left-[15px] top-[-55px] ml-[20px]" src={Foto}/>

      <img
        className='relative left-[260px] right-[16.67%] top-[-148px] bottom-[7.03%] ml-[100px]'
        src={Icon}
      />
      <p className="relative font-['Inter'] not-italic font-normal text-[13px] leading-[120%] top-[-166px] left-[298px] ml-[100px] flex items-center text-[#083A50]">
        CABA-Argentina
      </p>

               <img className="relative left-[15px] right-[12.5%] top-[-250px] bottom-[12.5%] ml-[20px]" src={Telefono}/>
               <p className="relative font-['Inter'] not-italic font-medium text-[16px] leading-[120%] top-[-270px] left-[40px] flex items-center text-[#083A50] ml-[20px]">+ 59 1 1001 8830</p>
               <p className="relative font-['Inter'] not-italic font-medium text-[16px] leading-[120%] top-[-250px] left-[40px] flex items-center text-[#083A50] ml-[20px]">+ 59 1 1001 8830</p>

               <img className="relative left-[15px] right-[12.5%] top-[-226px] bottom-[20.83%] ml-[20px]" src={Correo}/>
               <p className="relative font-['Poppins'] not-italic font-light text-[16px] leading-[150%] top-[-245px] left-[45px] flex items-center text-[#4285F4] ml-[20px]">mariana.gasista@gmail.com</p>

               <img className="relative flex flex-row justify-center items-center p-0 gap-4 left-[10px] top-[-200px] w-[204px] ml-[20px]" src={Enviame}/>

      <img
        className='relative left-[15px] right-[12.5%] top-[-226px] bottom-[20.83%]'
        src={Correo}
      />
      <p className="relative font-['Poppins'] not-italic font-light text-[16px] leading-[150%] top-[-245px] left-[45px] flex items-center text-[#4285F4]">
        mariana.gasista@gmail.com
      </p>

      <img
        className='relative flex flex-row justify-center items-center p-0 gap-4 left-[10px] top-[-200px] w-[204px]'
        src={Enviame}
      />

      <div className='ml-[340px] mt-[-190px] w-[920px] h-[119px]'>
        <OurServices />
      </div>
          <h2 className="relative w-[86px] h-[69px] left-[-4px] top-[-198px] font-['Inter'] not-italic font-normal text-[57.3051px] leading-[120%] ml-[20px]">4.3</h2>

          <div className="relative flex flex-row justify-center items-center p-0 gap-4 left-[-4px] top-[-260px] w-[204px] ml-[20px]">
           <Estrellas />
          </div>

                <p className="relative w-[81px] h-[18px] left-[104px] top-[-245px] font-['Inter'] not-italic font-normal text-[15.2034px] leading-[120%] text-[#808080]">43 reseñas</p>

      <div className='relative ml-[340px] bottom-[-300px]  w-[920px] h-[119px]'>
        <Reviews className='absolute' />
      </div>

      <div className='relative bottom-[-900px]'></div>
    </div>
  );
}
