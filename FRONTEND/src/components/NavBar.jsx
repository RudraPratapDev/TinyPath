import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';


const NavBar=({darkMode,toggleDarkMode})=>{


return (
    
    <nav className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md py-4 px-4 md:px-8 fixed w-full top-0 z-50 transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className={`font-bold text-xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            tinyPath
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>
            Create Short URL
          </button>
          <button className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>
            Custom URL
          </button>
          <button className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>
            Generate QR
          </button>
          <div className="flex items-center space-x-4">
              <a 
                href="/login" 
                className={`${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
              >
                Login
              </a>
              <a 
                href="/signup" 
                className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded-md transition-colors`}
              >
                Sign Up
              </a>
            </div>
            <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        
        
       
        
        </div>
   
    </nav>



)
    
};

export default NavBar;
