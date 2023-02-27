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
import Messages from './components/Messages';
import PerfilProfesional from './components/PerfilProfesional/PerfilProfesional';
import EditProfileProfessional from './components/Profile/EditProfileProfessional';

function App() {
  const [isModalOpen, changeModalStatus] = BoolHook(false);
  return (
    <BrowserRouter>
      <NavBar changeModal={changeModalStatus} />
      <Login isOpen={isModalOpen} closeModal={changeModalStatus} />
      <section className='center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/perfil' element={<Profile />} />
          <Route path='/servicesDetail' element={<ServicesDetail />} />
          <Route path='faq' element={<Faq />} />
          <Route path='/sol-servicio' element={<OrderService />} />
          <Route
            path='/sol-servicio/solicitado'
            element={<SolicitedService />}
          />
          <Route
            path='/perfilProfesional/:id'
            element={<PerfilProfesional />}
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
