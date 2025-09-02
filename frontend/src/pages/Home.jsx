import React from "react";
import { NavLink } from "react-router-dom";


function Home() {
  const actions = [
    { name: "Send Money", img: "/send.png", bg: "bg-blue-100" ,to:"/transfer"},
    { name: "Request", img: "/request.png", bg: "bg-blue-100", to: "/transfer"},
    { name: "Top Up", img: "/top-up.png", bg: "bg-blue-100"  ,to: "/topup" },
    { name: "Withdraw", img: "/withdraw.png", bg: "bg-blue-100" ,to:"/withdraw"},
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-start py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-5xl">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Balance Card */}
          <div className="bg-blue-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg flex flex-col justify-center">
            <p className="text-sm sm:text-base text-blue-500 font-medium">Available Balance</p>
            <h1 className="text-3xl sm:text-5xl md:text-3xl lg:text-5xl font-extrabold text-blue-900 mt-2 sm:mt-3">
              $40,000
            </h1>
          </div>
          
          {/* Quick Actions */}
          <div className="md:col-span-2">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {actions.map((action, index) => (
                    <NavLink
                        key={index}
                        to={action.to}
                        className={({ isActive }) =>`flex flex-col items-center space-y-2 hover:scale-105 transition transform ${isActive ? "ring-2 ring-blue-400" : ""}`}>

                        <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full shadow-md ${action.bg}`}>
                            <img src={action.img} alt={action.name} className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>

                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                            {action.name}
                        </span>

                    </NavLink>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
