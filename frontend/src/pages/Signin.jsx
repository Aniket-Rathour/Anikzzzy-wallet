import React from 'react'
import { NavLink } from 'react-router-dom'

function Signin() {
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

        <div>
          <img src="/logo.png" className='w-70 xl:w-80 '></img>
        </div>

        <div className=' flex flex-col bg-white rounded-2xl p-10 shadow-2xl gap-3 w-full max-w-md'>
          
          <div className='flex flex-row items-center  border-2 gap-3 border-blue-300 w-90 rounded-2xl p-2 shadow-2xl'>
            <img src='/user.png' className='w-6 p'></img>
            <input type="text" placeholder='User Name' className='w-full px-1 border border-white focus:outline-none focus:rind-0'></input>
          </div>

          <div className='flex flex-row items-center  border-2 gap-3 border-blue-300 w-90 rounded-2xl p-2 shadow-2xl'>
            <img src='/password.png' className='w-6 p'></img>
            <input type="text" placeholder='Password' className='w-full px-1 border border-white focus:outline-none focus:rind-0'></input>
          </div>

          


          

          <div className='flex items-center space-x-2  cursor-pointer '>
            <input type="checkbox" class="w-5 h-7 accent-blue-500" />
            <span className='text-blue-600 hover:text-blue-800'>Remember me</span>
          </div>

          <NavLink to="/">
          <div className='flex items-center justify-center '>
          <div className='flex items-center justify-center hover:bg-blue-600 text-lg font-semibold bg-blue-500  rounded-2xl w-40 h-9 cursor-pointer'>
              <div className=' flex text-white   '>
                Sign In
              </div>
          </div>
          </div>
          </NavLink>
          

        </div>
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