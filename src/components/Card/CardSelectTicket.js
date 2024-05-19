"use client"
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import CardTicket from "./CardTicket";
import { useFetch } from "@/lib/api/api";

const CardSelectTicket = () => {
  const { data, error, isLoading } = useFetch("/airlines/flight");
  console.log(data?.data)
  const TicketItem = data?.data

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
        {TicketItem?.map((item, index)=>(
          <CardTicket 
            key={index}
            id={item.code}
            image={item?.photo} 
            name={item?.name}
            takeoff={item?.takeoff}
            landing={item?.landing}
            interval_time={item?.interval_time}
            transit={item.transit}
            from={item?.from}
            to={item?.to}
            hours={item?.interval_time}
            price={item?.price}
            facility={item?.facilities}
          />
        ))}
      </div>
    </div>
  )
}

export default CardSelectTicket