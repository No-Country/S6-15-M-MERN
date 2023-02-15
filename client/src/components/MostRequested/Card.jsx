

const Card = ({imagen, title, description, price})=>{
    return(
        <a href="./servicesDetail">
        <div className="card bg-background-card-color w-[277px] h-[302px] rounded-2xl shadow-md">
            <div className="top ">
                <img
                className="object-cover w-[277px] h-[137px] rounded-t-2xl" 
                src={imagen} 
                alt="imagen lavado de auto" />
            </div>
            <div className="rectangle bg-[#28315C] w-100 h-[5px]"></div>
            <h6 className="mt-6 ml-3.5 text-s font-bold">{title}</h6>
            <p className="description m-3.5 text-xs">{description}</p>
            <div className="desde flex ml-3.5 ">
                <p className="mt-auto">Desde:</p>
                <p className="ml-1 mt-auto font-black text-[#7CC298] text-xl">{price}</p>
            </div>
        </div>
        </a>     
    )
}

export default Card;