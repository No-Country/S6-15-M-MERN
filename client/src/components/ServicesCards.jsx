import Card from "./MostRequested/Card";
import data from "./MostRequested/data.json"

function ServicesCards() {
    return (
        <>
            <div className="flex flex-col justify-center">
                <h2 className='text-[#28315C] align-middle font-extrabold text-5xl mt-28 text-center'>
                    Contrata profesionales de confianza
                </h2>
                <p className='mt-6 text-center text-2xl max-w-3xl mx-auto'>
                    Solicita un presupuesto sin cargo, con total confianza.
                    No compartiremos tus datos
                </p>
            </div>
            <div className="flex justify-center flex-wrap gap-5 max-w-[1300px] mt-5 mx-auto pt-10">
                {data.resources.map((requested, index) => {
                    return (
                        <div className="my-4" key={index}>
                            <Card imagen={requested.imageUrl} title={requested.title} description={requested.descripcion} price={requested.price} />
                        </div>

                    )
                })}
            </div>

        </>
    );
}

export default ServicesCards;