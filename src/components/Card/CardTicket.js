"use client";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillSuitcaseFill } from "react-icons/bs";
import { FaHamburger, FaWifi } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa6";
import Button from "../Button/Button";
import ButtonLink from "../Button/ButtonLink";

const CardTicket = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-white p-6 rounded-lg">
      {/* first  */}
      <div className="flex items-center gap-5">
        <Image
          src="/assets/garuda.png"
          alt="garuda Logo"
          width={120}
          height={50}
          priority
        />
        <h1 className="font-semibold text-[#595959]">Garuda Indonesia</h1>
      </div>
      {/* two  */}
      <div className="flex items-center justify-between gap-20">
        {/* from to  */}
        <div className="flex flex-row items-center gap-10">
          <h1 className="font-bold text-4xl">IDN</h1>
          <FaPlaneDeparture size={25} color="#979797" />
          <h1 className="font-bold text-4xl">IDN</h1>
        </div>
        {/* hours */}
        <div className="w-full flex flex-col gap-2 items-center  text-[#979797]">
          <h1 className="text-lg">3 hours 11 minutes</h1>
          <p className="">(Direct)</p>
        </div>
        {/* icon */}
        <div className="flex items-center gap-3 text-[#979797]">
          <BsFillSuitcaseFill size={30} />
          <FaHamburger size={30} />
          <FaWifi size={30} />
        </div>
        {/* pax  */}
        <p className="flex gap-1 font-bold text-lg text-primary">
          $214,00 <span className="text-[#979797]">/pax</span>
        </p>
        {/* button  */}
        <ButtonLink href="/contact-person" >Select</ButtonLink>
      </div>
      {/* three  */}
      <div className="flex items-center gap-3 font-bold text-primary">
        <h1 className="text-lg">View Details</h1>
        <IoIosArrowDown size={20} />
      </div>
    </div>
  );
};

export default CardTicket;
