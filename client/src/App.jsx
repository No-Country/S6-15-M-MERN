import './App.css';
import { Home } from './screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Services } from './screens/Services';

function App() {
  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} /> 
        </Routes>
      </BrowserRouter>

  );
}

export default App;
