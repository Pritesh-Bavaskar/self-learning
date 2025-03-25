import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, variant = "primary", className = "" }) => {
  const baseClasses =
    "px-6 py-3 font-medium uppercase tracking-wider text-sm transition-all duration-300";

  const variantClasses = {
    primary: "bg-white text-black hover:shadow-md",
    secondary:
      "border border-white text-white hover:bg-white hover:bg-opacity-10",
    dark: "bg-black text-white hover:shadow-md",
    light: "bg-white text-black hover:shadow-md",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (link) {
    return (
      <Link to={link} className={buttonClasses}>
        {text}
      </Link>
    );
  }

  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
