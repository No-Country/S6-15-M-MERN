import React from 'react'
import Modal from '../Modal'
import { mustLoginReducer } from '../../features/booleans/booleanSlice';
import { useDispatch, useSelector } from 'react-redux';


    

   
    

function MustLogin() {

    const loginStatus = useSelector(state=>state.modales)
    const dispatch = useDispatch();

    const closeInvalidLogin = ()=>{
        dispatch(
            mustLoginReducer(!loginStatus.notLogged)
            );
}
  return (
    <Modal isOpen={loginStatus.notLogged} closeModal={closeInvalidLogin} >

    <div className=' bg-[#28315C] rounded-xl shadow-2xl  flex '>
          <div className=' mb-4 py-16 px-10 text-center flex-col justify-center items-center m-auto '>
            <header className=''>
              <h2 className='text-2xl font-bold text-[#ffffff] text-center mb-7 font-khula '>
                Por favor, inicia sesión para poder acceder al perfil de los profesionales
              </h2>
             
              <button onClick={closeInvalidLogin} className='bg-[#43936c] w-20 h-9 text-lg rounded-lg shadow-lg mt-auto  text-white  '>
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

export default MustLogin