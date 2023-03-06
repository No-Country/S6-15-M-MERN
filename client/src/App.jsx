import './App.css';
import { Services } from './screens/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import Profile from './screens/Profile';
import { ServicesDetail } from './screens/ServicesDetail';
import SolicitedService from './screens/SolicitedService';
import Faq from './components/Faq';
import { OrderService } from './screens/OrderService';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { BoolHook } from './hooks/BoolHook';
import Footer from './components/Footer';
import PerfilProfesional from './components/PerfilProfesional/PerfilProfesional';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { userStatus } from './features/user/userSlice';
import Team from './screens/Team';
import InvalidLogin from './components/Modals/InvalidLogin';
import MustLogin from './components/Modals/MustLogin';
import AccountExists from './components/Modals/AccountExists';
import GuardarCambios from './components/Modals/GuardarCambios';
import ProyectsCarrousel from './components/ProyectsCarrousel';
import ExpiredSession from './components/Modals/ExpiredSession';

const App = () => {
  const [isModalOpen, changeModalStatus] = BoolHook(false);

 const stateDispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('user')){
      JSON.parse(localStorage.getItem('user'))
      stateDispatch(
        userStatus(JSON.parse(localStorage.getItem('user'))))
    }
   
  }, [])

  return (
    <BrowserRouter>
      <NavBar changeModal={changeModalStatus} />
      <Login isOpen={isModalOpen} closeModal={changeModalStatus} />
      <InvalidLogin />
      <AccountExists />
      <GuardarCambios />
      <ExpiredSession />

      <MustLogin />
 
      <section className='center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/perfil' element={<Profile />} />
          <Route path='/servicesDetail' element={<ServicesDetail />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/sol-servicio' element={<OrderService />} />
          <Route
            path='/sol-servicio/solicitado'
            element={<SolicitedService />}
          />
          <Route
            path='/perfilProfesional'
            element={<PerfilProfesional />}
          />
          <Route
            path='/team'
            element={<Team />}
          />          
        </Routes>
      </section>
      <div className='footerDiv'>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
