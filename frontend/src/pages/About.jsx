import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar></Navbar>
      {/* Hero Section */}
      <div className="relative w-full">
        <img src="/office.jpg" alt="Team Meeting" className="w-full h-64 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold">About Anikzzy</h1>
            <p className="mt-2 max-w-xl mx-auto">
              Anikzzzy Wallet is a modern digital wallet designed for fast, secure,
               and hassle-free transactions. With a clean UI and smooth experience, 
               it makes managing your money simple and reliable.
            </p>
            <div className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md inline-block">
              Founded 2024
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Mission & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <img src="/trust.png" alt="Trust" className="mx-auto w-12" />
            <h3 className="text-lg font-semibold mt-4">Trust</h3>
            <p className="text-gray-600 text-sm mt-2">
              Establish trust as the core of all interactions.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <img src="/innovation.png" alt="Innovation" className="mx-auto w-12" />
            <h3 className="text-lg font-semibold mt-4">Innovation</h3>
            <p className="text-gray-600 text-sm mt-2">
              The best innovative financial services and experience.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <img src="/security.png" alt="Security" className="mx-auto w-12" />
            <h3 className="text-lg font-semibold mt-4">Security</h3>
            <p className="text-gray-600 text-sm mt-2">
              Reliable protection with trusted data security.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-12 px-6 text-center bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <img src="/aniket.jpeg" alt="Jane Doe" className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover" />
            <h3 className="mt-4 font-semibold">Aniket Rathour</h3>
            <p className="text-sm text-gray-600">Founder</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/cat.jpeg" alt="John Doe" className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover" />
            <h3 className="mt-4 font-semibold">Meowfiya</h3>
            <p className="text-sm text-gray-600">Emotional Supporter</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/horse3.jpeg" alt="Dane Doy" className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover" />
            <h3 className="mt-4 font-semibold">Horse</h3>
            <p className="text-sm text-gray-600">Guidence</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-xl p-6 font-semibold text-lg text-blue-600">
            1M+ Users
          </div>
          <div className="bg-white shadow rounded-xl p-6 font-semibold text-lg text-blue-600">
            $500M+ Transactions
          </div>
          <div className="bg-white shadow rounded-xl p-6 font-semibold text-lg text-blue-600">
            99.9% Uptime
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Trust & Security</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-blue-50 shadow rounded-xl p-6 font-semibold text-blue-600">
            Security
          </div>
          <div className="bg-blue-50 shadow rounded-xl p-6 font-semibold text-blue-600">
            $500M+ Transactions
          </div>
          <div className="bg-blue-50 shadow rounded-xl p-6 font-semibold text-blue-600">
            99.9% Uptime
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default About;
