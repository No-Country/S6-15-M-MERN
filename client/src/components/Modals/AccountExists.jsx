import React from 'react';
import { registerReducer } from '../../features/booleans/booleanSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';

function AccountExists() {

    const loginStatus = useSelector(state => state.modales);
    const dispatch = useDispatch();

    const closeInvalidRegister = ()=>{

        dispatch(
            registerReducer(!loginStatus.invalidRegister)
        )


    }



  return (


    <Modal isOpen={loginStatus.invalidRegister} closeModal={closeInvalidRegister} >

    <div className=' bg-[#28315C] rounded-xl shadow-2xl  flex '>
          <div className=' mb-4 py-16 px-10 text-center flex-col justify-center items-center m-auto '>
            <header className=''>
              <h2 className='text-2xl font-bold text-[#ffffff] text-center mb-7 font-khula '>
                Ya existe una cuenta asociada a ese mail
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

export default AccountExists