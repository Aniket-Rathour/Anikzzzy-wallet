import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Transfer from './pages/Transfer'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/transfer' element={<Transfer />} />
        </Routes>
        
      </div>
  )
}

export default App
