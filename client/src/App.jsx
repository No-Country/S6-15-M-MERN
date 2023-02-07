import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='bg-background-color'>
        <NavBar />
        <h1 className='text-3xl font-bold underline'>PROBANDO</h1>
      </div>
      <Reviews />
    </>
  );
}

export default App;
