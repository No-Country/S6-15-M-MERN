import { opcionesApp } from "../utils/opcionesApp";

function Team() {

    const { integrantes } = opcionesApp();
    return (
        <>
            <div className="text-center container mx-auto">
                <h2 className="mt-5 mb-5 h-[100px] not-italic font-['Gilroy'] text-4xl">Team S6-15-M-MERN</h2>

                <div className="flex flex-wrap gap-10 items-center justify-center">



                    {
                        integrantes.map(integrante => {
                            return (

                                <div className="w-[300px] ">
                                    <img className="w-[300px] h-[300px] object-cover rounded border-2 border-emerald-400 border-double" src={integrante.foto} />
                                    <div className="border-solid rounded border-2 border-emerald-400 bg-emerald-50 w-[300px] h-[200px]">
                                        <h5 className="mr-[10px] top-[100px] text-emerald-700">{integrante.nombre}</h5>
                                        <p className="mr-[20px] top-[100px] mb-[50px] text-emerald-700">{integrante.ocupacion}</p>
                                        <ul className="gap-3">

                                            {integrante.links.map(link => {
                                                return (
                                                    <li className="bottom-[40px] w-[350px] relative left-[50px]">
                                                        <div className="w-[290px] h-[30px] mt-[0px] relative">
                                                            {link.logo}
                                                            <a className="top-[-22px] relative left-[-80px] underline text-emerald-900 hover:bg-emerald-200" href={link.link}>{link.descripcion}</a>
                                                        </div>
                                                    </li>
                                                )
                                            })}




                                        </ul>
                                    </div>
                                </div>

                            )
                        })
                    }






                </div>


            </div>

        </>
    );
}

export default Team;
