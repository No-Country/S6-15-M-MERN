import React from 'react'

export default function Estrellas() {
    const Start = ({avrg}) => {

        return(
            <div className="starts">
            <img src={avrg < 1 ? star : starColor} alt="star" />
            <img src={avrg < 2 ? star : starColor} alt="star" />
            <img src={avrg < 3 ? star : starColor} alt="star" />
            <img src={avrg < 4 ? star : starColor} alt="star" />
            <img src={avrg < 5 ? star : starColor} alt="star" />
         </div>
        )
    }
}
