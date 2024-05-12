"use client"
import Link from "next/link";
import React from "react";
import { FaPlaneDeparture} from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const CardBooking = () => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg">
      {/* first  */}
      <div className="flex flex-col gap-2 px-6 pt-8">
        <p className="font-semibold text-sm">Monday, 20 July ‘20 - 12:33</p>
        <div className="flex items-center gap-8 font-bold">
          <p className="text-2xl">IDN</p>
          <FaPlaneDeparture size={25} color="#979797"/>
          <p className="text-2xl">JPN</p>
        </div>
        <p className="text-grey1">Garuda Indonesia, AB-221</p>
      </div>
      {/* line */}
      <div className="w-full border-[0.5px]"></div>
      {/* two */}
      <div className="flex items-center justify-between font-bold px-6 pb-8">
        <div className="flex items-center gap-10">
          <p className="text-[#7A7A7A]">Status</p>
          <p className="bg-[#FF7F23] text-white py-2 px-4 rounded-lg">Waiting for payment</p>
        </div>
        <Link href="/" className="flex items-center gap-2 text-primary">
          <p className="text-lg">View Details</p>
          <MdKeyboardArrowDown size={32} />
        </Link>
      </div>
    </div>
  );
};

export default CardBooking;
