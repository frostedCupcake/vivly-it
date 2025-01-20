import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaReact } from "react-icons/fa"; // React Icon

const Box = ({
  color = "purple",
  text = "Hover Me",
  year = "2025",
  onClick,
  isFocused,
}) => {
  return (
    <div
      className={`group relative w-full h-full p-1 ${
        isFocused ? "pointer-events-auto" : "cursor-pointer"
      }`}
      onClick={(e) => {
        e.stopPropagation(); // Prevent click from propagating to the overlay
        if (onClick) onClick();
      }}
    >
      {/* Glowing Gradient Border */}
      <div
        className={`absolute border-none inset-0 blur-s opacity-75  transition-all duration-500`}
        style={{
          background: `radial-gradient(circle, ${color} 0%, ${color} 10%, transparent 100%)`,
        }}
      ></div>
      {/* Black Glassy Box */}
      <div className="relative bg-black bg-opacity-50 backdrop-blur-md w-full h-full transition-transform duration-500 group-hover:scale-105">
        <div className="absolute inset-0"></div>
        {/* Content */}
        <div className="flex justify-center p-10 text-center items-center h-full text-white font-semibold text-lg">
          {/* Default Content */}
          <div className="group-hover:hidden flex flex-col items-center">
            <div>{text}</div>
            <div className="text-sm font-normal mt-2">( {year} )</div>{" "}
            {/* Display Year */}
          </div>
          {/* Hover Content */}
          <div className="hidden group-hover:flex flex-col items-center space-y-2">
            <FaReact size={24} />
            <span className="flex flex-row mb-10 items-center justify-center">
              WEBSITE <BsArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
