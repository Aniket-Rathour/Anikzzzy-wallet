import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

function Transfer() {
  return (
    <div>
      <Navbar></Navbar>
      
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">


        <div className="  flex justify-center items-start py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8">

          <div className="flex gap-20 bg-white rounded-3xl w-auto  shadow-xl p-6 sm:p-8 md:p-10  max-w-5xl">
            <div className='flex flex-col gap-2'>
              <div>
              Available Balance
            </div>
            <div className='text-4xl font-bold'>
              $12,400.40
            </div>
            </div>

            <div className=' w-20 '>
              <img src="/money.png"></img>
            </div>
          </div>

        </div>

        <div className="  flex justify-center items-start py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8">

          <div className=' flex flex-col bg-white rounded-2xl p-10 shadow-2xl gap-3 w-full max-w-md'>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Recipient Username" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>

              <input type="number"placeholder="$0.00"className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <input
                type="text"
                placeholder="Note / Description"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <NavLink to="/">
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
                Send Money
              </button>
              </NavLink>
            </div>
          </div>
    
                    
        </div>
        
        


      </div>

      <Footer></Footer>
    </div>
  )
}

export default Transfer