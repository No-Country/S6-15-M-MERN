import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import OurServices from './components/OurServices/OurServices';
import Footer from './components/Footer';
import './App.css';
import { Home } from './screens/Home';

function App() {
  return (
    <div className='bg-background-color'>
       <NavBar/>
      <h1 className="text-3xl font-bold underline">
        PROBANDO
      </h1>
      <OurServices/>
      <Footer/>
      <Home/>
    </div>
  );
}

export default App;
