"use client";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillSuitcaseFill } from "react-icons/bs";
import { FaHamburger, FaWifi } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa6";
import dayjs from "dayjs";
import Button from "../Button/Button";
import ButtonLink from "../Button/ButtonLink";
import Link from "next/link";

const CardTicket = ({
  image,
  name,
  from,
  to,
  interval_time,
  transit,
  price,
  takeoff,
  landing,
  facility,
  id
}) => {
  const RenderFacilities = (facility, index) => {
    switch (facility) {
      case "baggage":
        return <BsFillSuitcaseFill size={30} key={index} />;
      case "meal":
        return <FaHamburger size={30} key={index} />;
      case "wifi":
        return <FaWifi size={30} key={index} />;
    }
  };
  return (
    <div className="w-full flex flex-col gap-4 bg-white p-6 rounded-lg">
      {/* first  */}
      <div className="flex items-center gap-5">
        <Image src={image} alt="Logo" width={120} height={50} priority />
        <h1 className="font-semibold text-[#595959]">{name}</h1>
      </div>
      {/* two  */}
      <div className="flex items-center justify-between gap-6">
        {/* from & to  */}
        <div className="w-[250px] flex flex-row items-start justify-between gap-2">
          <div>
            <h1 className="font-bold text-4xl">{from.code}</h1>
            <h1 className="font-bold">{dayjs(takeoff).format("hh:mm")}</h1>
          </div>
          <FaPlaneDeparture size={35} color="#979797" className="pt-2" />
          <div>
            <h1 className="font-bold text-4xl">{to.code}</h1>
            <h1 className="font-bold">{dayjs(landing).format("hh:mm")}</h1>
          </div>
        </div>
        {/* interval time and transit */}
        <div className="w-[300px] flex flex-col gap-2 items-center  text-[#979797]">
          <h1 className="text-lg">{interval_time}</h1>
          {transit === 0 ? (
            <p className="">(Direct)</p>
          ) : (
            <p className="">{transit}</p>
          )}
        </div>
        {/* icon */}
        <div className="w-[150px] flex items-center justify-center gap-3 text-[#979797]">
          {facility?.map((item, index) => {
            return RenderFacilities(item, index);
          })}
        </div>
        {/* price  */}
        <p className="w-[300px] flex gap-1 justify-center font-bold text-lg text-primary">
          ${price},00 <span className="text-[#979797]">/pax</span>
        </p>
        {/* button  */}
        <Link href={`/payment/${id}`} className="bg-primary px-20 py-4 rounded-xl text-white font-bold hover:bg-opacity-90 active:bg-opacity-55">
          Select
        </Link>

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
