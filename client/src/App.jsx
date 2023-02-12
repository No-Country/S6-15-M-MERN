import './App.css';
import { Services } from './screens/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './screens/Home';


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
