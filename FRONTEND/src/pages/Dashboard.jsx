import React from 'react';
import { useTheme } from '../context/themeContext';
import UrlForma from '../components/UrlForma';
import UserUrl from '../components/UserUrl';

function Dashboard() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen items-center px-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
    
      <div className="w-full max-w-2xl mt-2">
        <UrlForma darkMode={darkMode} />
      </div>

    
      
    </div>
  );
}

export default Dashboard;
