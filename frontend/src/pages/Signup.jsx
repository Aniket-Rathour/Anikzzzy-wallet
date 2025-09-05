import React, { createContext, useContext, useState  } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../services/AuthContext";
import axios from "axios";
function Signup() {
  const navigate = useNavigate();
  const{setUser} = useAuth();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = async (e)=>{
    e.preventDefault();
    try{
      const res= await axios.post("https://paytm-clone-pi-three.vercel.app/api/v1/user/signup",formData)
      console.log("signup success:", res.data);

      if(res.status ===200){
      alert("user created succssfully")
      setUser(res.data);
      navigate("/");
      }
    }catch(err){
        console.error("Signup error :", err.response?.data || err.message )
        alert("Signup faild")
    }
  };

  return (
    <div  className="min-h-screen flex items-center justify-center p-4"
      style={{
      backgroundImage: `url('/signup.png'), url('/signdown.png')`,
      backgroundPosition: 'left top, right bottom',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundSize: 'auto, auto',
      }}>

        

      <div className='flex flex-row items-center justify-center gap-3 w-full max-w-6xl mx-auto'>

      <form onSubmit={handleSumbit}>

      <div className='flex flex-col justify-between  gap-10'>

        <div>
          <img src="/logo.png" className='w-70 xl:w-80 '></img>
        </div>

        <div className=' flex flex-col bg-white rounded-2xl p-10 shadow-2xl gap-3 w-full max-w-md'>
          
          <div className='flex flex-row items-center  border-2 gap-3 border-blue-300 w-90 rounded-2xl p-2 shadow-2xl'>
            <img src='/user.png' className='w-6 p'></img>
            <input type="text" placeholder='User Name' name="userName" onChange={handleChange} value={formData.userName} className='w-full px-1 border border-white focus:outline-none focus:rind-0'></input>
          </div>

          <div className='flex flex-row items-center  border-2 gap-3 border-blue-300 w-90 rounded-2xl p-2 shadow-2xl'>
            <img src='/password.png' className='w-6 p'></img>
            <input type="text" placeholder='Password' name="password" onChange={handleChange} value={formData.password} className='w-full px-1 border border-white focus:outline-none focus:rind-0'></input>
          </div>

          <div className='flex flex-row items-center  border-2 gap-3 border-blue-300 w-90 rounded-2xl p-2 shadow-2xl'>
            <img src='/first.png' className='w-6 p'></img>
            <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} placeholder='First Name' className='w-full px-1 border border-white focus:outline-none focus:rind-0'></input>
          </div>

          <div className='flex flex-row items-center  border-2 gap-3 border-blue-300 w-90 rounded-2xl p-2 shadow-2xl'>
            <img src='/last.png' className='w-6 p'></img>
            <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} placeholder='Last Name' className='w-full px-1 border border-white focus:outline-none focus:rind-0'></input>
          </div>


          

          <div className='flex items-center space-x-2  cursor-pointer '>
            <input type="checkbox" class="w-5 h-7 accent-blue-500" />
            <span className='text-blue-600 hover:text-blue-800'>Remember me</span>
          </div>

          <div className='flex flex-row items-center justify-center '>
          
          <button type="submit" className="flex items-center justify-center hover:bg-blue-600 text-lg font-semibold bg-blue-500 rounded-2xl w-40 h-9 cursor-pointer text-white">
            Sign up
          </button>
          
          </div>

        </div>
      </div>

      </form>

        <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl w-full max-w-sm">
  <img src="/cat.png" alt="Decoration" className="w-60 h-auto items-end" />
  <div className="text-lg font-semibold text-gray-800 text-center">
    I guess I have seen you somewhere 👀
  </div>
  <NavLink to="/signin">
    <div className="flex justify-center w-full">
      <span className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
        Already have an account?
      </span>
    </div>
  </NavLink>
</div>

      

      </div>

    </div>
  )
}

export default Signup