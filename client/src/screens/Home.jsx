import React,{useState} from 'react'
import Login from '../components/Login';
import NavBar from '../components/NavBar'
import { HeaderHome } from './../components/HeaderHome';
import OurServices from './../components/OurServices/OurServices';
import Reviews from './../components/Reviews';
import MostRequested from './../components/MostRequested/MostRequested';
import Footer from '../components/Footer';
import Modal from '../components/modal';
export const Home = () => {
  const [isOpen,setIsOpen]=useState(true)
  const onClose=()=>setIsOpen(false)
  return (
    <>
      <NavBar/>
      <HeaderHome/>
      <OurServices/>
      <MostRequested/>
      <Reviews/>
      <Footer />
        
      <Modal isOpen={isOpen} backgroundStyle="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 z-50" innerStyle="bg-[#28315C] rounded-xl  md:m-auto md:w-1/2">

      <button onClick={onClose}>x</button>    
      <Login/>
      </Modal>
         
    </>
  )
}
