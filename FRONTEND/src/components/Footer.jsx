import React from 'react';

function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`w-full py-6 text-center ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Social Media Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
              </svg>
              <span className="sr-only">Email</span>
            </a>
          </div>

          {/* Site Links */}
          <div className="flex space-x-4 text-sm">
            <a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}>About</a>
            <a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}>Team</a>
            <a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}>Terms</a>
            <a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}>Policy</a>
          </div>
        </div>

        <div className="">
          <p className="text-sm">
            &copy; {currentYear} Tiny Path. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;