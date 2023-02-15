import { Link } from "react-router-dom";
import check from "../assets/ready/check.png"
import home from "../assets/ready/home.png"
import mail from "../assets/ready/email.png"
import attach from "../assets/ready/attach.png"
import image from "../assets/ready/Imagem.png"

function Ready() {
    return (
        <>
            <div className=" container mx-auto mb-10 p-6 flex flex-col">

                <div className="my-3">
                    <h2 className="text-5xl text-[#28315C] font-extrabold">¡Todo Listo!</h2>
                    <span className="text-5xl text-[#28315C] font-extrabold">Pronto recibirás tu presupuesto</span>
                    <span className="text-5xl  text-[#7CC298] font-extrabold"> sin cargo</span>
                </div>
                <p className="mt-6 mb-28 max-w-[400px] font-normal text-2xl ">Recibirás un mail de confirmación, chequea tu casilla de correo.</p>
                <div className="container flex flex-wrap">
                    <div className="list mx-auto  lg:w-1/2">
                        <ul>
                            <li className="flex items-center my-10"><img src={check} alt="check" className="w-16" /><p className="text-2xl ml-10">25 de Febrero, 2023.</p></li>
                            <li className="flex items-center my-10"><img src={home} alt="check" className="w-16" /><p className="text-2xl ml-10">CABA, Buenos Aires, Argentina.</p></li>
                            <li className="flex items-center my-10"><img src={mail} alt="check" className="w-16" /><p className="text-2xl ml-10">roo.lamberti@gmail.com</p></li>
                            <li className="flex items-center my-10"><img src={attach} alt="check" className="w-16" /><p className="text-2xl ml-10">5 Imagenes adjuntadas</p></li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 items-center justify-end flex-wrap  flex">
                        <img src={image} alt="" className="max-w-[522px] hidden lg:flex" />
                    </div>
                    <div className="mx-auto my-6 w-full flex justify-center">
                        <Link 
                        to={"/"}
                        className="flex 
                        justify-center 
                        items-center 
                        w-48 
                        h-12 
                        p-4 
                        gap-2 
                        rounded-lg 
                        shadow-sm 
                        hover:bg-[#367A59] 
                        bg-[#43936C] 
                        font-bold 
                        text-lg 
                        text-white"
                        >Volver al inicio</Link>
                    </div>

                </div>


            </div>
        </>
    );
}

export default Ready;