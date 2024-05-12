"use client"
import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick, icon, color }) => {
  return (
    <div>
      <button
        className={`w-full flex items-center justify-between px-4 py-4 bg-${color} hover:bg-gray-300 focus:outline-none transition duration-300`}
        onClick={onClick}
      > 
        <p className="font-semibold">{title}</p>
        {icon}
      </button>
      {isOpen && (
        <div
          className={`overflow-hidden transition-all ${isOpen ? "h-auto" : "h-0"}`}
        >
          <div className="p-4 bg-white">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;