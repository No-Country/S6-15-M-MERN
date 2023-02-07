import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import OurServices from './components/OurServices/OurServices';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  const [count, setCount] = useState(0)

  return (
 
    <div className='bg-background-color'>
      <Register/>
       {/* <NavBar/>
      <h1 className="text-3xl font-bold underline">
        PROBANDO
      </h1>
      <OurServices/> */}
    </div>


  )
}

export default App
