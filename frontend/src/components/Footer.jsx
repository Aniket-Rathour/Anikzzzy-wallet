import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 my-10 mt-10  ml-10 text-sm'>
            <div className=''>
                <img src="/logo.png" className='mb-5 w-32'></img>
                <p className='w-full md:w-2/3 text-gray-600'>
                    I’m building Anikzzzy, a Paytm-like wallet app that lets users signup,
                     signin, and manage their accounts securely. Users can check their balance, 
                     send or transfer money, and track transactions in real-time. The app features a 
                     simple and intuitive UI, secure authentication, and a random initial balance for 
                     new accounts to simulate a live wallet experience—all built with Node.js, Express, 
                     MongoDB, and Zod for input validation.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us </li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-81307-46342</li>
                    <li>aniketrathour9911@gmail.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr/>
            <p className='py-5 hover:underline text-sm text-center text-blue-700'>
                Copyright 2025@ https://anikzzzy-e-commerce-website.vercel.app/  - All Right Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer