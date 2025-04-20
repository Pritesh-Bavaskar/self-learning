import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { jwtDecode } from "jwt-decode";
import landing_img from "../assets/landingPage/landing_bck.webp";
const Hero = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    checkAuthStatus();
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

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${landing_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Crack Exams, Your Way.
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Self-paced learning, mentor-guided seminars, and curated challenges
          for CAT & OMETs.
        </p>
        {!isAuthenticated && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login">
              <Button text="LOGIN" variant="primary" />
            </Link>
            <Link to="/signup">
              <Button text="SIGN UP" variant="secondary" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
