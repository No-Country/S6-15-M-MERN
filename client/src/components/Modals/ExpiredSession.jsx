import React from 'react'
import Modal from '../Modal'
import { useSelector, useDispatch } from "react-redux"
import { expiredReducer } from "../../features/booleans/booleanSlice"

function ExpiredSession() {
    const loginStatus = useSelector(state => state.modales)
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(
            expiredReducer(!loginStatus.expiredSession)
        )
        localStorage.removeItem('user')
        window.location.replace("/")


    }
    return (
        <div>
            <Modal isOpen={loginStatus.expiredSession} closeModal={handleClose}>
                <div className=' bg-[#28315C] rounded-xl shadow-2xl  flex '>
                    <div className=' mb-4 py-16 px-10 text-center flex-col justify-center items-center m-auto '>
                        <header className=''>
                            <h2 className='text-2xl font-bold text-[#ffffff] text-center  font-khula '>
                                Tu sesión expiró.
                            </h2>
                            <h3 className='mb-7 text-white'>Por favor vuelve a ingresar</h3>

                            <button onClick={handleClose} className='bg-[#43936c] w-20 h-9 text-lg rounded-lg shadow-lg mt-auto  text-white  '>
                                Cerrar
                            </button>
                        </header>
                        <div className='flex justify-center'>

                        </div>


                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default ExpiredSession