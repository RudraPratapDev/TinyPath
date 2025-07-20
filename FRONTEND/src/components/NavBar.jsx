import { Sun, Moon, LogOut } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "../context/themeContext";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../api/user.api";
import { logout } from "../store/slice/authSlice";
import { useNavigate } from "@tanstack/react-router";

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate({ to: "/" });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <nav
      className={`$${
        darkMode
          ? "bg-gray-900/95 text-white border-gray-800"
          : "bg-white/95 text-gray-800 border-gray-200"
      } backdrop-blur-md border-b shadow-lg py-4 px-4 md:px-8 fixed w-full top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            tinyPath
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`$${
              darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
            } transition-colors font-medium`}
          >
            Create Short URL
          </Link>
          {isLoggedIn && (
            <Link
              to="/urls"
              className={`$${
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
                  className={`$${
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
                  className={`$${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } font-medium`}
                >
                  Welcome, {user?.user?.name || 'User'}
                </span>
                <button
                  onClick={handleLogout}
                  className={`flex items-center space-x-2 $${
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
              className={`p-2 rounded-lg $${
                darkMode
                  ? "hover:bg-gray-800 text-yellow-400"
                  : "hover:bg-gray-100 text-gray-600"
              } transition-all duration-200`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
