import React, { useState } from 'react'
import { registerUser } from '../api/user.api';
import { useTheme } from '../context/themeContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';
import { login } from '../store/slice/authSlice';

function RegisterForm() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const { darkMode} = useTheme();

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit=async()=>{

    if(password.length<8){
      setError("Password Length should be at least 8 characters long")
      return
    }
    setLoading(true);
    setError("");
    try {
      const data=await registerUser(name,email,password);
      setLoading(false);
      dispatch(login(data.user))
      navigate({to:"/dashboard"})
      
      
    }catch(err){
      setLoading(false);
      setError(err.message || "Registeration failed")
    }

  }


  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        {error && (
          <div className={`${darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-700'} mb-4 p-3 rounded-md`}>
            {error}
          </div>
        )}

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline 
              ${darkMode ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400' : 'text-gray-700'}`}
            id="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline 
              ${darkMode ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400' : 'text-gray-700'}`}
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline 
              ${darkMode ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400' : 'text-gray-700'}`}
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        {/* Button */}
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </div>

        {/* Switch to Login */}
        <div className="text-center mt-4">
          <p className={`cursor-pointer text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Already have an account?{' '}
            <span onClick={()=>navigate({to:"/auth/login"})} className="text-blue-500 hover:text-blue-700">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm