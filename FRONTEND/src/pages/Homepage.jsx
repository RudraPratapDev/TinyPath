import React from "react";
import UrlForma from "../components/UrlForma.jsx";
import NavBar from "../components/navBar.jsx";
import { useState } from "react";
import Footer from "../components/footer.jsx";

function Homepage() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <>
      <div
        className={`flex flex-col min-h-screen ${
          darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-800"
        }`}
      >
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="flex-grow">
          <UrlForma darkMode={darkMode} />
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}

export default Homepage;
