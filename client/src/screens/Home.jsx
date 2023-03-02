import React from 'react';
import { HeaderHome } from './../components/HeaderHome';
import OurServices from './../components/OurServices/OurServices';
import Reviews from './../components/Reviews';
import MostRequested from './../components/MostRequested/MostRequested';


export const Home = () => {

  return (
    <>
      <HeaderHome />
      <OurServices />
      <MostRequested />
      <Reviews />
    </>
  );
};
