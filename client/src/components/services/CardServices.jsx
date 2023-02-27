import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import profile from "../../assets/profile.jpeg"
import './CardService.css'

export const CardServices = ({id, title, image, description, service}) => {


 

  /* const [searchparams] = useSearchParams(); */

  const navigate = useNavigate();

  function handleredirect() {
    navigate(`/perfilProfesional/${id}`);
    console.log(item._id);
  }

  return (
      <div onClick={handleredirect} className='containerCard relative'>
        <img src={image}/> 
       
        <img className=' inset-0 rounded-full w-20 max-h-20 absolute ml-[42%] mt-16 border-[#28315C] border-solid border-2 ' src={profile} alt="" />
            <div className='cardDiv'>
              <div className='serviceDiv'>
                <h4> {service}</h4>
                <p className='pCard'>{title}</p>
              </div>
                <div className='divTetx'>
                  <div className='divPrice'>
                   <p>{description}</p> 
                  </div>
                </div>
            </div>    
      </div>
  )
}
