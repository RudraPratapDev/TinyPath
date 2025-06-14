import React from "react";
import UrlForma from "../components/UrlForma.jsx";



import { useTheme } from "../context/themeContext.js";

function Homepage() {
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
  );
}

export default Homepage;
