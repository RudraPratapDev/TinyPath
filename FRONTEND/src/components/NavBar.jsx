import { Sun, Moon, LogOut, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "../context/themeContext";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../api/user.api";
import { logout } from "../store/slice/authSlice";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate({ to: "/" });
      setIsMobileMenuOpen(false);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <nav
      className={`${
        darkMode
          ? "bg-gray-900/95 text-white border-gray-800"
          : "bg-white/95 text-gray-800 border-gray-200"
      } backdrop-blur-md border-b shadow-lg py-4 px-4 md:px-8 fixed w-full top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            tinyPath
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`${
              darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
            } transition-colors font-medium`}
          >
            Create Short URL
          </Link>
          {isLoggedIn && (
            <Link
              to="/urls"
              className={`${
                darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
              } transition-colors font-medium`}
            >
              Your links
            </Link>
          )}

          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/auth/login"
                  className={`${
                    darkMode
                      ? "text-gray-200 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  } transition-colors font-medium`}
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <span
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } font-medium`}
                >
                  Welcome, {user?.user?.name || 'User'}
                </span>
                <button
                  onClick={handleLogout}
                  className={`flex items-center space-x-2 ${
                    darkMode
                      ? "text-red-400 hover:text-red-300 hover:bg-red-900/20"
                      : "text-red-600 hover:text-red-700 hover:bg-red-50"
                  } px-4 py-2 rounded-lg transition-all duration-200 font-medium`}
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-800 text-yellow-400"
                  : "hover:bg-gray-100 text-gray-600"
              } transition-all duration-200`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg ${
              darkMode
                ? "hover:bg-gray-800 text-yellow-400"
                : "hover:bg-gray-100 text-gray-600"
            } transition-all duration-200`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-3 rounded-xl ${
              darkMode
                ? "hover:bg-gray-800 text-white"
                : "hover:bg-gray-100 text-gray-600"
            } transition-all duration-300 transform hover:scale-105`}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="transform rotate-90 transition-transform duration-300" />
            ) : (
              <Menu size={24} className="transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`${
            darkMode 
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700" 
              : "bg-gradient-to-br from-white via-gray-50 to-white border-gray-200"
          } border-t backdrop-blur-md mx-4 my-2 rounded-2xl shadow-xl overflow-hidden`}
        >
          <div className="p-6 space-y-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navigation
            </div>
            
            <Link
              to="/"
              className={`flex items-center py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                darkMode
                  ? "hover:bg-gray-700/50 hover:text-blue-400 text-gray-200"
                  : "hover:bg-blue-50 hover:text-blue-600 text-gray-700"
              } group`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="flex-1">Create Short URL</span>
              <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            {isLoggedIn && (
              <Link
                to="/urls"
                className={`flex items-center py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                  darkMode
                    ? "hover:bg-gray-700/50 hover:text-blue-400 text-gray-200"
                    : "hover:bg-blue-50 hover:text-blue-600 text-gray-700"
                } group`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex-1">Your Links</span>
                <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            )}
          </div>

          {!isLoggedIn ? (
            <div className={`px-6 pb-6 border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 pt-4">
                Account
              </div>
              <div className="space-y-3">
                <Link
                  to="/auth/login"
                  className={`flex items-center justify-center py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-700/30 hover:bg-gray-700/50 text-gray-200 hover:text-white border border-gray-600"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border border-gray-300"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  className="flex items-center justify-center py-3 px-4 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className={`px-6 pb-6 border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 pt-4">
                Account
              </div>
              
              <div className={`p-4 rounded-xl mb-4 ${
                darkMode 
                  ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-gray-600" 
                  : "bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200"
              }`}>
                <div className={`text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                  Welcome back! 👋
                </div>
                <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {user?.user?.name || 'User'}
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                className={`flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                  darkMode
                    ? "bg-red-900/20 hover:bg-red-900/30 text-red-400 hover:text-red-300 border border-red-800"
                    : "bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-200"
                } transform hover:scale-[1.02]`}
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;