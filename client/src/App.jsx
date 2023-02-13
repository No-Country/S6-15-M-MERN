import './App.css';
import { Services } from './screens/Services';
import {OrderService} from './screens/OrderService';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './screens/Home';


function App() {
  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} /> 
          <Route path="/sol-servicio" element={<OrderService />} /> 
        </Routes>
      </BrowserRouter>

      

  );
}

export default App;
