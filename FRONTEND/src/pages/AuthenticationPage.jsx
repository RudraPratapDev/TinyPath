

import { Outlet} from '@tanstack/react-router'

import { useTheme } from '../context/themeContext';

function AuthenticationPage() {


  const { darkMode } = useTheme();

 
 
  return (
   <div className={darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}>
    <div className='min-h-screen flex flex-col items-center justify-center pt-20'>
    <Outlet />
   </div>
   </div>
  )
}

export default AuthenticationPage