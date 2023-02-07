import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import OurServices from './components/OurServices/OurServices';

import Register from './components/Register';
import Login from './components/Login';
import { HeaderHome } from './components/HeaderHome';


function App() {
  const [count, setCount] = useState(0)

  return (
 
    <div className='bg-background-color'>
       <NavBar/>
       <HeaderHome/>
      <OurServices/>
     <Login/>
    </div>


  )
}

export default App
