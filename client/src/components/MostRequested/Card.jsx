import { createSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mustLoginReducer } from '../../features/booleans/booleanSlice';
import { useEffect, useState } from 'react';

const Card = ({ imagen, title, description, price, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logged, setLogged] = useState();
  const loginStatus = useSelector((state) => state.modales);

  

  const openCard = (titulo) => {
    JSON.parse(localStorage.getItem('user')) !== null
      ? navigate({
          pathname: '/servicesDetail',
          search: createSearchParams({
            id: id,
          }).toString(),
        })
      : dispatch(mustLoginReducer(!loginStatus.notLogged));
  };
  /* w-[277px] */
  /* w-[265px] */
  return (
    <div
      className='card bg-background-card-color w-[277px] h-[302px] rounded-2xl shadow-md cursor-pointer'
      onClick={openCard}
    >
      <div className='top '>
        <img
          className=' object-cover w-[277px] h-[137px] rounded-t-2xl'
          src={imagen}
          alt='imagen lavado de auto'
        />
      </div>
      <div className='rectangle bg-[#28315C] w-100 h-[5px]'></div>
      <h6 className='mt-6 ml-3.5 text-s font-bold'>{title}</h6>
      <p className='description m-3.5 text-xs'>{description}</p>
      {price !== undefined && (
        <div className='desde flex ml-3.5 '>
          <p className='mt-auto'>Desde:</p>
          <p className='ml-1 mt-auto font-black text-[#7CC298] text-xl'>
            {price}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
