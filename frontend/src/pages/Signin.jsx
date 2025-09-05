import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../services/AuthContext';

function Signin() {
  const{setUser} = useAuth();

  const [form,setForm ] = useState({
    userName:"",
    password:""
  });
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSumbit = async (e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("https://paytm-clone-pi-three.vercel.app/api/v1/user/signin" , form);
      console.log("signin success" , res.data);
      alert("signin succssfully")
      setUser(res.data)
      navigate("/")
    }catch(err){
      console.error("Signup error :" , err.response?.data || err.message)
      alert("Signin faild")
    }
  }
  


  return (
    <div  className="min-h-screen flex items-center justify-center p-4"
      style={{
      backgroundImage: `url('/signup.png'), url('/signdown.png')`,
      backgroundPosition: 'left top, right bottom',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundSize: 'auto, auto',
      }}>

      <div className='flex flex-row items-center justify-center gap-3 w-full max-w-6xl mx-auto'>

        
      
      <div className='flex flex-col justify-between  gap-10'>

        <form onSubmit={handleSumbit}>

        <div>
          <img src="/logo.png" className='w-70 xl:w-80 '></img>
        </div>

        <div className=' flex flex-col bg-white rounded-2xl p-10 shadow-2xl gap-3 w-full max-w-md'>
          
          <div className='flex flex-row items-center  border-2 gap-3 border-blue-300 w-90 rounded-2xl p-2 shadow-2xl'>
            <img src='/user.png' className='w-6 p'></img>
            <input type="text" name="userName" onChange={handleChange} value={form.userName} placeholder='User Name' className='w-full px-1 border border-white focus:outline-none focus:rind-0'></input>
          </div>

          <div className='flex flex-row items-center  border-2 gap-3 border-blue-300 w-90 rounded-2xl p-2 shadow-2xl'>
            <img src='/password.png' className='w-6 p'></img>
            <input type="text" name="password" onChange={handleChange} value={form.password} placeholder='Password' className='w-full px-1 border border-white focus:outline-none focus:rind-0'></input>
          </div>

          


          

          <div className='flex items-center space-x-2  cursor-pointer '>
            <input type="checkbox" class="w-5 h-7 accent-blue-500" />
            <span className='text-blue-600 hover:text-blue-800'>Remember me</span>
          </div>

          
          <div className='flex items-center justify-center '>
          <button type="submit" className="flex items-center justify-center hover:bg-blue-600 text-lg font-semibold bg-blue-500 rounded-2xl w-40 h-9 cursor-pointer text-white">
            Sign up
          </button>
          </div>
          
          

        </div>
        </form>
      </div>

        <div className="flex flex-col justify-center gap-4 p-6 rounded-2xl w-full max-w-sm">
  <img src="/cat2.png" alt="Decoration" className="w-90 h-auto items-end" />
  <div className="text-lg font-semibold text-gray-800 pl-14">
    Welcome Back Dude
  </div>
  
</div>

      

      </div>

    </div>
  )
}

export default Signin