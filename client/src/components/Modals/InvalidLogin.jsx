import React from 'react'
import Modal from '../Modal'
import { useSelector } from 'react-redux'
import { loginReducer } from '../../features/booleans/booleanSlice';
import { useDispatch } from 'react-redux';

function InvalidLogin() {
    const loginStatus = useSelector(state=>state.modales)
    const dispatch = useDispatch();

    const closeInvalidLogin = ()=>{
        dispatch(
            loginReducer(!loginStatus.invalidLogin)
            );
    }

  return (
    <>
    <Modal isOpen={loginStatus.invalidLogin} closeModal={closeInvalidLogin} >

    <div className=' bg-[#28315C] rounded-xl shadow-2xl  flex '>
          <div className=' mb-4 py-16 px-10 text-center flex-col justify-center items-center m-auto '>
            <header className=''>
              <h2 className='text-3xl font-bold text-[#ffffff] text-center mb-7 font-khula '>
                Nombre de usuario o contraseña
              </h2>
              <h4 className='text-xl font-bold text-red-500 text-center mb-7 font-khula' > incorrecta</h4>
              <button onClick={closeInvalidLogin} className='bg-[#43936c] w-20 h-9 text-lg rounded-lg shadow-lg  text-white  '>
                Cerrar
                </button>
            </header>
            <div className='flex justify-center'>
              
            </div>
            
            
          </div>
        </div>



    </Modal>
    </>
    
    
  )
}

export default InvalidLogin