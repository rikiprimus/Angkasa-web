import { DestinationCard } from "@/components/Card/DestinationCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const TopDestination = () => {
  return (
    <div className="w-full h-[550px] relative flex flex-col items-center justify-center gap-10 bg-primary rounded-[60px] mb-40">
      <div className="flex flex-col items-center gap-4 text-white">
        <p className="tracking-[0.3em]">TOP 10</p>
        <p className="font-bold text-2xl">Top 10 destinations</p>
      </div>

      <div className="flex items-center justify-center gap-10">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>

      <div className="flex items-center gap-10">
        <button className="border-2 border-[white] py-2 px-4 rounded-lg hover:bg-white text-white hover:text-primary">
          <IoIosArrowBack size={30}/>
        </button>
        <button className="border-2 border-[white] py-2 px-4 rounded-lg hover:bg-white text-white hover:text-primary">
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  )
}
