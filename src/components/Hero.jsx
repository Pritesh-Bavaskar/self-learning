import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 z-0">
        <div className="absolute inset-0 opacity-20">
          {/* This would be your pattern/texture - represented with diagonal stripes */}
          <div
            className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.5)_25%,rgba(68,68,68,.5)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.5)_75%)]"
            style={{ backgroundSize: "100px 100px" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Self Learning Platform Name.
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Crack CAT and other OMETs (small Intro)
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/login">
            <Button text="LOGIN" variant="primary" />
          </Link>
          <Link to="/signup">
            <Button text="SIGN UP" variant="secondary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
