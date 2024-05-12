"use client"
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import CardTicket from "./CardTicket";

const CardSelectTicket = () => {
  return (
    <div className="w-full flex flex-col gap-8 p-5">
      {/* title */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-end">
          <h1 className="font-bold text-2xl">Select Ticket</h1>
          <p className="text-[#979797] pb-[0.5px]">(6 flight found)</p>
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="font-bold text-lg">Sort by</h1>
          <FaArrowRightArrowLeft size={20} className="rotate-90" />
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <CardTicket />
        <CardTicket />
        <CardTicket />
        <CardTicket />
        <CardTicket />
        <CardTicket />
        <CardTicket />
      </div>
    </div>
  )
}

export default CardSelectTicket