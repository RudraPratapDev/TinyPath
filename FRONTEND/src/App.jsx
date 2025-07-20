
import { Outlet } from '@tanstack/react-router'
import './App.css'
import AuthenticationPage from './pages/AuthenticationPage'

import Homepage from './pages/Homepage.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'
import { ThemeContext } from './context/themeContext.js'


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`flex flex-col min-h-screen ${darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"}`}>
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App
