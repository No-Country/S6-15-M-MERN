import './App.css';
import { Services } from './screens/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './screens/Home';
import Profile from './screens/Profile';
import { ServicesDetail } from './screens/ServicesDetail';
import SolicitedService from './screens/SolicitedService';


function App() {
  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} /> 
          <Route path= "/perfil" element={<Profile/>}/>
          <Route path='/servicesDetail' element={<ServicesDetail/>}/>

          <Route path='/solicitado' element={<SolicitedService />} />
        </Routes>
      </BrowserRouter>

      

  );
}

export default App;
