import React from 'react'
import Login from '../components/Login';
import MostRequested from '../components/MostRequested/MostRequested';
import NavBar from '../components/NavBar'
import { HeaderHome } from './../components/HeaderHome';
import OurServices from './../components/OurServices/OurServices';
import Reviews from './../components/Reviews';

export const Home = () => {
  return (
    <>
      <NavBar/>
      <HeaderHome/>
      <OurServices/>
      <MostRequested />
      <Login/>
      <Reviews/>
    </>
  )
}
