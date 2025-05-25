import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import { Outlet} from '@tanstack/react-router'
import RegisterForm from '../components/RegisterForm';
import { useTheme } from '../context/themeContext';

function AuthenticationPage() {

  // const [login, setLogin] = useState(false)
  const { darkMode } = useTheme();

 
 
  return (
   <div className={darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}>
    <div className='min-h-screen flex flex-col items-center justify-center pt-20'>
    {/* {login?<LoginForm state={setLogin} darkMode={darkMode}/>:<RegisterForm state={setLogin}  darkMode={darkMode}/>} */}
    <Outlet />
   </div>
   </div>
  )
}

export default AuthenticationPage