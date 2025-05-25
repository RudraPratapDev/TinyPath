
import React, { useState } from 'react';
import { ClipboardCopy, Loader2, Check } from 'lucide-react';

import { createShortUrl } from '../api/shortUrl.api.js';
import { useTheme } from '../context/themeContext.js';
import { useSelector} from 'react-redux'
import { QueryClient } from '@tanstack/react-query'
import { queryClient } from '../main'

function UrlForma() {
    const [originalUrl,setOriginalUrl]=useState("");
    const [shortenUrl,setShortenUrl]=useState("");
    const [isCopied,setIsCopied]=useState(false);
    const { darkMode } = useTheme();
    const [error, setError] = useState(null)
    const [customSlug,setCustomSlug]=useState("")
    const {isAuthenticated}=useSelector((state)=>state.auth)



    const HandleSubmit=async  ()=> {
        try{
          const tempUrl=await createShortUrl(originalUrl,customSlug);

        setShortenUrl(tempUrl)
        queryClient.invalidateQueries({queryKey:['userUrls']})
        setError(null)
        }catch(err){
          setError("custom Url already exists")
        }
    }
   

    const copyToClipboard=function(){
        navigator.clipboard.writeText(shortenUrl);
        setIsCopied(true)
        setTimeout(()=>{
            setIsCopied(false);
        },2000);

    }



  return (
   <>
    <div className={`w-full max-w-2xl mx-auto mt-58 p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Shorten your URL
        </h2>
        <div className="space-y-4">
            <div>
                <label htmlFor="originalUrl" className="block text-sm font-medium mb-2">
            Enter your long URL
          </label>
          <div className='flex'>
          <input
            type="text"
            id="originalUrl"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="https://example.com/very-long-url-that-needs-shortening"
            className={` w-4/5 px-4 py-3 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-gray-50 border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150`}
          />
          <button
          onClick={HandleSubmit}
          className={` bg-blue-600 w-1/5 px-3 py-2 rounded-md font-medium text-white  transition duration-150 ml-5`}
        >{"Shorten URL"}
        </button>
        </div>
         </div>

        {isAuthenticated &&(
          <div>
                <label htmlFor="customSlug" className="block text-sm font-medium mb-2">
                    Custom URL (optional)
                </label>
                <div className="flex items-center">
                    
                    <input
                        type="text"
                        id="customSlug"
                        value={customSlug}
                        onChange={(e) => setCustomSlug(e.target.value)}
                        placeholder="Enter custom slug"
                        className={`flex-1 px-4 py-3 rounded-r-md border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-gray-50 border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150`}
                    />
                </div>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Leave empty for auto-generated short URL
                </p>
            </div>
        )}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {shortenUrl && (
        <div className={`mt-6 p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-between">
            <div className="flex-1 truncate mr-2">
              <p className="text-sm font-medium mb-1">Your shortened URL:</p>
              <a
                href={shortenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
              >
                {shortenUrl}
              </a>
            </div>
            <button
              onClick={copyToClipboard}
              className={`p-2 rounded-md ${isCopied ? (darkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-700') : (darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300')} transition duration-150 flex items-center`}
              title={isCopied ? 'Copied!' : 'Copy to clipboard'}
            >
              {isCopied ? (
                <Check size={20} />
              ) : (
                <ClipboardCopy size={20} />
              )}
            </button>
          </div>
        </div>
      )}

        
        
           
        </div>
    </div>
   </>
  )
}

export default UrlForma