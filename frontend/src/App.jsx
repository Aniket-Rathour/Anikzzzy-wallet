import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Transfer from "./pages/Transfer";
import { Route, Router ,Routes} from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Topup from './pages/Topup';
import Withdraw from './pages/Withdraw';

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <div>
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
          <Route path="/topup" element={<Topup/>}/>
          <Route path="/withdraw" element={<Withdraw/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
