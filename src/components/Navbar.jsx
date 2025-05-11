import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check auth status on mount AND when location changes
    checkAuthStatus();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();
        setIsAuthenticated(!isExpired);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-white shadow-md text-black"
          : isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Ace It
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:opacity-75 transition-opacity">
              Home
            </Link>
            <Link to="/about" className="hover:opacity-75 transition-opacity">
              About
            </Link>
            <Link to="/contact" className="hover:opacity-75 transition-opacity">
              Contact
            </Link>
            <Link to="/payment" className="hover:opacity-75 transition-opacity">
              Plans & Pricing
            </Link>
            {isAuthenticated ? (
              <div className="relative group inline-block">
                <button className="flex items-center space-x-1 focus:outline-none">
                  Prepare
                  {/* <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"> */}
                  {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg> */}
                  {/* </div> */}
                </button>

                {/* Dropdown menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400">
                  <Link
                    to="/courses/cat"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    CAT
                  </Link>
                  <Link
                    to="/courses/xat"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    XAT
                  </Link>
                  <Link
                    to="/courses/mat"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    MAT
                  </Link>
                </div>
              </div>
            ) : null}

            {isAuthenticated ? (
              <div className="relative group inline-block">
                <button className="flex items-center space-x-1 focus:outline-none">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </button>

                {/* Dropdown menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 border border-transparent hover:border-current rounded transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`px-4 py-2 rounded transition ${
                    isScrolled ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="hover:opacity-75 transition-opacity py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:opacity-75 transition-opacity py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/courses/cat"
                    className="hover:opacity-75 transition-opacity py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CAT
                  </Link>
                  <Link
                    to="/courses/xat"
                    className="hover:opacity-75 transition-opacity py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    XAT
                  </Link>
                  <Link
                    to="/courses/mat"
                    className="hover:opacity-75 transition-opacity py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    MAT
                  </Link>
                  <Link
                    to="/profile"
                    className="hover:opacity-75 transition-opacity py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded transition text-center bg-black text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="hover:opacity-75 transition-opacity py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 rounded transition text-center bg-black text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
