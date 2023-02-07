import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import OurServices from './components/OurServices/OurServices';
import Login from './components/Login';
import { HeaderHome } from './components/HeaderHome';

import Reviews from './components/Reviews';

function App() {
  const [count, setCount] = useState(0);

  return (

    <div className='bg-background-color'>
      <NavBar/>
      <HeaderHome/>
      <OurServices/>
      <Login/>
      <Reviews />
    </div>
  );
}

export default App;
