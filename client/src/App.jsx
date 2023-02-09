import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import OurServices from './components/OurServices/OurServices';

function App() {
  const [count, setCount] = useState(0)

  return (
 
    <div className='bg-background-color'>
       <NavBar/>
      <h1 className="text-3xl font-bold underline">
        PROBANDO desde mi rama
      </h1>
      <OurServices/>
    </div>


  )
}

export default App
