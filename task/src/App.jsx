import { useState } from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  

  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/about" element={<About />}/>
   
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
