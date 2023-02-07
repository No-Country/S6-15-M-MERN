

const Card = ()=>{
    return(
        <>
        <div className="card bg-background-card-color w-[277px] h-[302px] rounded-lg">
            <div className="top ">
                <img
                className="object-cover w-[277px] h-[137px] rounded-t-lg" 
                src="https://www.uniradioserver.com/media/news_thumbs/202207/20220720155714_218.jpg" 
                alt="imagen lavado de auto" />
            </div>
            <div className="rectangle bg-primary w-100 h-[5px]"></div>
            <h6 className="mt-6 ml-3.5 text-s font-bold">Lavado de autos</h6>
            <p className="description m-3.5 text-xs">¿Te vas de viaje? Prepara tu vehículo con servicios de limpieza experto.</p>

        </div>
        
        </>
    )
}

export default Card;