import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from "../services/AuthContext"; 

function Navbar() {
    const {user} = useAuth();
  return (
    <div className='flex item-center bg-gradient-to-br from-blue-50 to-blue-100 justify-between py-3 pl-3  font-medium'>
        <Link to="/"><img src='/logo.png' className='w-60' alr=""></img></Link>
        
        <ul className=' sm:flex py-5 gap-5 text-3xlbase text-gray-700'>
            <NavLink to="/" className="flex flex-col items-center gap-1">
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
            </NavLink>
            <NavLink to="/transfer" className="flex flex-col items-center gap-1">
                <p>Transfer</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
            </NavLink>

            <NavLink to="/contact" className="flex flex-col items-center gap-1">
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
            </NavLink>
        </ul>

         <div className='flex items-center gap-3 pr-4'>
        {user? (
          <span className='text-gray-700 font-semibold'>
            Hi, {user.user.firstName || user.user.userName} 👋
          </span>
        ) : (
          <Link to="/signup">
            <img src='/profile.png' className='w-20 p-4' alt="profile" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar