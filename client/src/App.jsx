import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import OurServices from './components/OurServices/OurServices';
import Login from './components/Login';
import { HeaderHome } from './components/HeaderHome';

import Reviews from './components/Reviews';
import MostRequested from './components/MostRequested/MostRequested';

function App() {
  const [count, setCount] = useState(0);

  return (

    <div className='bg-background-color'>
      <NavBar/>
      <HeaderHome/>
      <OurServices/>
      <MostRequested />
      <Login/>
      <Reviews />
    </div>
  );
}

export default App;
