// importing library
import React from "react";
import "./Logo.css";

// functionality start from here
const Logo = () => {
  return (
    <div className="logo">
      <svg
        aria-hidden="true"
        focusable="false"
        align="centre"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="85vw"
        height="90vh"
      >
        <path
          className="path"
          stroke="#f7971e"
          strokeWidth="0.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeDasharray="132"
          strokeDashoffset="132"
          fill="#404040"
          d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z"
        />
        <path
          className="path"
          stroke="#f7971e"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeDasharray="125"
          strokeDashoffset="125"
          fill="#404040"
          d="M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"
        />
      </svg>
    </div>
  );
};

// exporting functionlaity
export default Logo;
