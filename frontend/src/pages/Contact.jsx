import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">

        <div className='flex flex-col gap-1 text-blue-500 p-10'>
          <div className='text-5xl font-semibold'>Contact Us</div>
          <div className=''> We're here to help you</div>
        </div>

        <div className='flex justify-between items-center'>

        <div className="  flex justify-between w-full items-start py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8">
          <div className=' flex flex-col bg-white rounded-2xl p-10 shadow-2xl gap-3 w-full max-w-md'>

            <div className=''>
            Name
            </div>

            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>

              <input type="text"placeholder=" Subject  (Ceneral Support, Billing Question?)"className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <input
                type="text"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <NavLink to="/">
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
                Submit
              </button>
              </NavLink>
            </div>
          </div>
    
                    
        </div>


        <div className="  flex justify-between w-full items-start py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8">
          <div className=' bg-white rounded-2xl shadow-xl p-8 w-full md:w-1/2 lg:w-2/5'>
            dfh
          </div>
        </div>

        </div>
        

      </div>
      <Footer></Footer>
      </div>
  )
}

export default Contact