"use client";

import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const ScrollButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="font-stint-ultra-expanded relative overflow-hidden bg-[#000000] text-[#ededed] px-8 py-3 rounded-full text-sm md:text-xl  transition-colors duration-300 mx-auto -mt-[15%] md:mt-0 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.3),transparent)] before:animate-[shimmer_3s_infinite] @keyframes[shimmer]:{from:{left:-100%}to:{left:100%}}"
    >
      {children}
    </button>
  );
};

export default ScrollButton;
