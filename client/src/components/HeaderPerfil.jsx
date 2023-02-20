import Frame from "../assets/Frame.png"
import Frame2 from "../assets/Frame2.png"

export default function HeaderPerfil(){
    return(
        <div>
            <img className="opacity-[0.6] w-[1503px] height-[146px] flex-none order-1 self-stretch grow-0" src={Frame}/>
            <img className="relative width-[180px] height-[180px] left-[40px] top-[-55px]" src={Frame2}/>

            <div>
               <h1 className="relative font-['Nunito_Sans'] left-[260px] top-[-165px] not-italic font-bold text-[24px] leading-[33px] flex items-center text-[#083A50]">
                Mariana Sepúlveda
               </h1>
               
               <p className="relative left-[260px] top-[-165px] font-['Nunito_Sans'] not-italic font-bold text-[20px] leading-[20px] text-[#083A50]">Tu cuenta esta lista, ya puedes postular para trabajos.</p> 
           </div>
        </div>
    )
}