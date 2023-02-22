import './App.css';
import { Services } from './screens/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import Profile from './screens/Profile';
import { ServicesDetail } from './screens/ServicesDetail';
import SolicitedService from './screens/SolicitedService';
import Faq from './components/Faq';
import {OrderService} from './screens/OrderService';
import PerfilProfesional from './components/PerfilProfesional/PerfilProfesional';


function App() {
  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} /> 
          <Route path= "/perfil" element={<Profile/>}/>
          <Route path='/servicesDetail' element={<ServicesDetail/>}/>
          <Route path='faq' element={<Faq />} />          
          <Route path="/sol-servicio" element={<OrderService />} />
          <Route path="/sol-servicio/solicitado" element={<SolicitedService />} />
          <Route path='perfilProfesional' element={<PerfilProfesional/>} />
        </Routes>
      </BrowserRouter>
  )

  
}

export default App;
