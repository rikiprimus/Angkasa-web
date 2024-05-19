"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const DropDown = ({ title, list }) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col rounded">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white p-4 min-w-28 w-auto flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent text-gray-600 active:border-white duration-300 active:text-white"
      >
        {title}
        {!isOpen ? (
          <IoIosArrowDown size={25} />
        ) : (
          <IoIosArrowUp size={25} />
        )}
      </button>
      {isOpen && (
        <div className="bg-boxInput absolute z-40 top-[74px] flex flex-col items-start rounded-lg p-2 space-y-2">
          {list?.map((item, index) => (
            <div
              key={index}
              className="flex w-32 hover:bg-white  cursor-pointer px-1"
            >
              <h3 className="font-semibold text-gray-600">{item}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
