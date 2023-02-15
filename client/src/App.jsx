import './App.css';
import { Services } from './screens/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import Faq from './components/Faq';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='faq' element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
