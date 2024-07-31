"use client"

import Image from "next/image";
import React, { useState } from "react";

const countriesflag = ({ flag, name }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipOpen(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipOpen(false);
  };

  return (
    <>
      <div className="relative inline-block">
      <Image
        src={flag}
        alt={name}
        className="w-16 h-16 rounded-full cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        width={20}
        height={20}
      />
      {isTooltipOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md">
          {name}
        </div>
      )}
    </div>
    </>
  );
};

export default countriesflag;
