import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { useTheme } from '../context/themeContext';

const NotFoundPage = () => {
  const { darkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className={`absolute rounded-full opacity-20 animate-pulse`}
      style={{
        width: `${20 + (i * 15)}px`,
        height: `${20 + (i * 15)}px`,
        left: `${10 + (i * 15)}%`,
        top: `${20 + (i * 10)}%`,
        background: `linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${3 + (i * 0.5)}s`,
      }}
    />
  ));

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
    }`}>
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          darkMode ? 'opacity-30' : 'opacity-40'
        }`}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${
            darkMode 
              ? 'rgba(59, 130, 246, 0.3) 0%, transparent 50%'
              : 'rgba(99, 102, 241, 0.2) 0%, transparent 50%'
          })`,
        }}
      />
      
      {floatingElements}
      
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        darkMode ? 'opacity-10' : 'opacity-5'
      }`}>
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px),
            linear-gradient(90deg, ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className={`relative z-10 min-h-screen flex flex-col justify-center items-center px-4 pt-20 transition-colors duration-500 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-black tracking-wider relative">
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              404
            </span>
            <span className={`absolute top-0 left-0 text-8xl md:text-9xl font-black opacity-70 animate-ping ${
              darkMode ? 'text-red-500' : 'text-red-400'
            }`} style={{ animationDuration: '2s' }}>
              404
            </span>
            <span className={`absolute top-1 left-1 text-8xl md:text-9xl font-black opacity-50 animate-bounce ${
              darkMode ? 'text-cyan-400' : 'text-cyan-500'
            }`} style={{ animationDuration: '3s' }}>
              404
            </span>
          </h1>
        </div>

        <div className="text-center mb-12 max-w-2xl">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors duration-500 ${
            darkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            Houston, we have a problem!
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed mb-6 transition-colors duration-500 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            The page you're looking for has drifted into the digital void. 
            But don't worry, our navigation system is still operational.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className={`backdrop-blur-sm rounded-lg p-4 border transition-all duration-500 ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-gray-200/50 shadow-sm'
            }`}>
              <div className="text-blue-400 font-semibold">Fun Fact</div>
              <div className={`transition-colors duration-500 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>404 errors were named after room 404 at CERN</div>
            </div>
            <div className={`backdrop-blur-sm rounded-lg p-4 border transition-all duration-500 ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-gray-200/50 shadow-sm'
            }`}>
              <div className="text-purple-400 font-semibold">Did You Know?</div>
              <div className={`transition-colors duration-500 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>The first website is still online at CERN</div>
            </div>
            <div className={`backdrop-blur-sm rounded-lg p-4 border transition-all duration-500 ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-gray-200/50 shadow-sm'
            }`}>
              <div className="text-pink-400 font-semibold">Space Fact</div>
              <div className={`transition-colors duration-500 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>There are over 34,000 pieces of space junk</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10 flex items-center gap-2">
              🚀 Return to Base
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className={`group px-8 py-4 backdrop-blur-sm border rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                : 'bg-white/60 border-gray-200/50 text-gray-800 hover:bg-white/80 shadow-sm'
            }`}
          >
            <span className="flex items-center gap-2">
              ⬅️ Go Back
            </span>
          </button>
        </div>

        <div className="mt-16 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>
          👨‍🚀
        </div>
        
        <p className={`mt-8 text-center max-w-md transition-colors duration-500 ${
          darkMode ? 'text-gray-500' : 'text-gray-600'
        }`}>
          Lost in space? Try checking the URL or use the navigation menu to find what you're looking for.
        </p>
      </div>

      {/* Shooting stars animation */}
      <div className={`absolute top-10 left-10 w-1 h-1 rounded-full animate-ping ${
        darkMode ? 'bg-white' : 'bg-gray-400'
      }`} style={{ animationDelay: '1s' }} />
      <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default NotFoundPage;