import React from 'react'
import Login from '../components/Login';
import NavBar from '../components/NavBar'
import { HeaderHome } from './../components/HeaderHome';
import OurServices from './../components/OurServices/OurServices';
import Reviews from './../components/Reviews';
import MostRequested from './../components/MostRequested/MostRequested';
import Footer from '../components/Footer';
import { BoolHook } from '../hooks/BoolHook';

export const Home = () => {

  // const [isModalOpen, changeModalStatus] = BoolHook(false);
  
  return (
    <>
      {/* <NavBar changeModal={changeModalStatus} /> */}
      <HeaderHome/>
      <OurServices/>
      <MostRequested/>
      {/* <Login isOpen={isModalOpen} closeModal={changeModalStatus} />       */}
      <Reviews/>
      {/* <Footer/> */}
    </>
  )
}
