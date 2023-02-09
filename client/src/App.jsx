import './App.css';
import { Home } from './screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='bg-background-color'>
      <Home/>
    </div>
  );
}

export default App;
