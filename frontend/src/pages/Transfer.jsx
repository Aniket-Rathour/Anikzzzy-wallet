import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../services/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Transfer() {
   const {user,setUser} = useAuth();
   const [check,setCheck] = useState(false);

    const handleChange = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};



   const [formData, setFormData] = useState({
      senderUserName: user?.user?.userName || "",  // logged-in user
      receiverUserName: "",
      amount: "",
    });

    const handleSumbit = async (e) => {
  e.preventDefault();

  const payload = {
    ...formData,
    amount:Number(formData.amount),
    senderUserName: user?.user?.userName,
  };

  try {
    const res = await axios.post(
      "https://paytm-clone-pi-three.vercel.app/api/v1/transfer/send",
      payload
    );

    console.log("transfered", res.data);
    alert("Money transferred successfully");

    // ✅ Don’t overwrite user with res.data
    setCheck(prev => !prev); // trigger balance refresh

  } catch (err) {
    console.error("Transaction error :", err.response?.data || err.message);
    alert("Money transfer failed");
  }
};
   

    useEffect(() => {
    if (user?.user?.userName) {
      axios.get(`https://paytm-clone-pi-three.vercel.app/api/v1/user/balance/${user.user.userName}`)
        .then(res => {
          setUser(prev => ({
            ...prev,
            Account: { ...prev.Account, balance: res.data.balance }
          }));
        })
        .catch(err => console.error("Balance fetch error", err));
    }
  }, [check, user?.user?.userName, setUser]);


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
              

              {user? (
          <span >
            <div className='text-gray-700 font-semibold'>
           ${user.Account.balance}</div>
          </span>
        ) : (
          
          <Link to="/signup">
            <div className='text-gray-700 ' > 00.00</div>
          </Link>
        )}
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
              <input type="text" placeholder="Recipient Username" name="receiverUserName" onChange={handleChange} value={formData.receiverUserName} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>

              <input type="number"placeholder="$0.00" name="amount" onChange={handleChange} value={formData.amount} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <input
                type="text"
                placeholder="Note / Description"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              
              <button onClick={(e) => {
                  handleSumbit(e);  // send money
                  setCheck(prev => !prev); // trigger balance refresh
                    }}  
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
                Send Money
              </button>
              
            </div>
          </div>
    
                    
        </div>
        
        


      </div>

      <Footer></Footer>
    </div>
  )
}

export default Transfer