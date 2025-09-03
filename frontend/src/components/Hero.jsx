import React from 'react';

function Hero() {
  return (
    <div className='flex justify-center py-16 bg-gradient-to-br'>
      <div className="bg-white rounded-2xl shadow-2xl p-12 w-full max-w-6xl flex flex-col sm:flex-row items-center gap-12">
        
        {/* Left Side - Text */}
        <div className='w-full sm:w-1/2 flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-4'>
            <img src='/logo.png' className='w-24 md:w-32 lg:w-40' alt="Logo"/>
            
            <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414141]'>
              Everything you need to start your investment journey
            </h1>
            
            <p className='text-gray-700 text-lg md:text-xl leading-relaxed'>
              Whether you're a beginner or a pro, ANIKZZZY helps you invest smarter and achieve financial independence. 
              Get access to expert opinions, mutual fund SIPs, F&O trading, and much more—all in one app.
            </p>
            
            <div className='w-20 h-[3px] bg-[#414141] rounded-full mt-4'></div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <img 
            className="w-full h-auto max-w-md md:max-w-lg object-cover rounded-xl shadow-xl" 
            src="/demo.avif"
            alt="Hero" 
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;
