import React from 'react';
import { HeaderHome } from './../components/HeaderHome';
import OurServices from './../components/OurServices/OurServices';
import Reviews from './../components/Reviews';
import MostRequested from './../components/MostRequested/MostRequested';
import Messages from '../components/Messages';

export const Home = () => {
  // const [isModalOpen, changeModalStatus] = BoolHook(false);

  return (
    <>
      <HeaderHome />
      <OurServices />
      <MostRequested />
      <Reviews />
    </>
  );
};
