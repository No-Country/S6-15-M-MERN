import React from 'react';
import { cambiosReducer } from '../../features/booleans/booleanSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import {  useNavigate } from 'react-router-dom';

function GuardarCambios() {

  const navigate = useNavigate();

    const loginStatus = useSelector(state => state.cambios);
    console.log();
    const dispatch = useDispatch();

    const closeInvalidRegister = ()=>{

        dispatch(
          cambiosReducer(!loginStatus.cambios)
        )

        navigate('/')


    }



  return (


    <Modal isOpen={loginStatus.cambios} closeModal={closeInvalidRegister} >

    <div className=' bg-[#28315C] rounded-xl shadow-2xl  flex '>
          <div className=' mb-4 py-16 px-10 text-center flex-col justify-center items-center m-auto '>
            <header className=''>
              <h2 className='text-2xl font-bold text-[#ffffff] text-center mb-7 font-khula '>
                Datos actualizados
              </h2>
             
              <button onClick={closeInvalidRegister} className='bg-[#43936c] w-20 h-9 text-lg rounded-lg shadow-lg mt-auto  text-white  '>
                Cerrar
                </button>
            </header>
            <div className='flex justify-center'>
              
            </div>
            
            
          </div>
        </div>



    </Modal>
    
    
  )
}

export default GuardarCambios