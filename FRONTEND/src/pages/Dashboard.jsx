import React from 'react'
import { useTheme } from '../context/themeContext';
import UrlForma from '../components/UrlForma';

function Dashboard() {

  const { darkMode} = useTheme();
  return (
    <>
      <div
        className={`flex flex-col min-h-screen ${
          darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-800"
        }`}
      >


          <UrlForma darkMode={darkMode} />

     

      </div>
    </>
  )
}

export default Dashboard