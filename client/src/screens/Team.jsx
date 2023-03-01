import { opcionesApp } from "../utils/opcionesApp";

function Team() {

    const { integrantes } = opcionesApp();
    return (
        <>
            <div className="team-container container text-center">

                <h2 className="team-title mt-5 mb-5 inter">Team S6-15-M-MERN</h2>


                <div className="cards-container">



                    {
                        integrantes.map(integrante => {
                            return (

                                <div>
                                    <img src={integrante.foto} />
                                    <div>
                                        <h5>{integrante.nombre}</h5>
                                        <p>{integrante.ocupacion}</p>
                                        <ul>

                                            {integrante.links.map(link => {
                                                return (
                                                    <li>
                                                        <div>
                                                            {link.logo}
                                                            <a href={link.link}>{link.descripcion}</a>

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