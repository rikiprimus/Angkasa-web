import Image from "next/image";
import { SlOptionsVertical } from "react-icons/sl";
import { FaPlaneDeparture } from "react-icons/fa6";
import { Barcodes, BarcodesRotate } from "@/components/Others/Barcodes";

const BookingPass = () => {
  return (
    <div className="w-full h-[900px] flex items-center justify-center bg-primary mb-32">
      {/* Desktop  */}
      <div className="w-auto h-[750px] hidden md:flex flex-col bg-white rounded-lg p-16">
        <div className="flex flex-row items-center justify-between mb-16">
          <h1 className="font-bold text-4xl p-4">Booking Pass</h1>
          <SlOptionsVertical size={30} color="#2395FF" />
        </div>
        <div className="relative flex items-center">
          <div className=" flex flex-row justify-center border-2 border-[#E5E5E5] rounded-xl m-4 divide-x-2 divide-dashed py-4 px-5">
            <div className="w-2/3 flex flex-col gap-10 py-6 pl-4 pr-9">
              {/* flex 1  */}
              <div className="flex flex-row items-center gap-10">
                <Image
                  src="/assets/garuda.png"
                  alt="garuda Logo"
                  width={120}
                  height={50}
                  priority
                />
                <h1 className="font-bold text-4xl">IDN</h1>
                <FaPlaneDeparture size={25} color="#979797" />
                <h1 className="font-bold text-4xl">IDN</h1>
              </div>
              {/* flex 2  */}
              <div className="flex flex-row gap-40">
                <div>
                  <h1 className="text-[#A5A5A5]">Code</h1>
                  <p className="font-semibold text-grey2">AB-221</p>
                </div>
                <div>
                  <h1 className="text-[#A5A5A5]">Class</h1>
                  <p className="font-semibold text-grey2">Economy</p>
                </div>
              </div>
              {/* flex 3  */}
              <div className="flex flex-row gap-40">
                <div>
                  <h1 className="text-[#A5A5A5]">Terminal</h1>
                  <p className="font-semibold text-grey2">A</p>
                </div>
                <div>
                  <h1 className="text-[#A5A5A5]">Gate</h1>
                  <p className="font-semibold text-grey2">221</p>
                </div>
              </div>
              {/* flex 4  */}
              <div className="flex flex-col">
                <h1 className="text-[#A5A5A5]">Departure</h1>
                <p className="font-semibold text-grey2">
                  Monday, 20 July ‘20 - 12:33
                </p>
              </div>
            </div>
            <div className="w-[250px] flex justify-center items-center">
              <BarcodesRotate />
            </div>
          </div>
          {/* effect scretch top  */}
          <div className="absolute right-[272px] top-0 w-[30px] z-10 h-[16px] bg-white"></div>
          <div className="absolute right-[272px] top-0 w-[30px] h-[35px] border-2 bg-white border-[#E5E5E5] rounded-full"></div>
          {/* effect scretch bottom  */}
          <div className="absolute right-[272px] bottom-0 w-[30px] z-10 h-[16px] bg-white"></div>
          <div className="absolute right-[272px] bottom-0 w-[30px] h-[35px] border-2 bg-white border-[#E5E5E5] rounded-full"></div>
        </div>
      </div>

      {/* mobile  */}
      <div className="w-full flex md:hidden flex-col gap-7">
        <div className="px-7">
          <h1 className="font-semibold text-xl text-white">Booking Pass</h1>
        </div>
        <div className="relative">
          <div className="flex flex-col gap-10 bg-white rounded-lg m-4 px-12 py-10 divide-dashed divide-y-2">
            {/* flex 1  */}
            <div className="flex flex-col items-center gap-5">
              <Image
                src="/assets/garuda.png"
                alt="garuda Logo"
                width={120}
                height={50}
                priority
              />
              <div className="flex flex-row items-center gap-8">
                <h1 className="font-bold text-4xl">IDN</h1>
                <FaPlaneDeparture size={25} color="#979797" />
                <h1 className="font-bold text-4xl">IDN</h1>
              </div>
              <label className="bg-[#4FCF4D] text-white font-semibold px-5 py-3 rounded-lg">Eticket issued</label>
            </div>
            {/* flex 2  */}
            <div className="flex flex-col gap-5 pt-10">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col">
                  <h1 className="text-[#A5A5A5]">Passenger</h1>
                  <p className="font-semibold text-grey2">Mike Kowalski</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#A5A5A5]">Class</h1>
                  <p className="font-semibold text-grey2">Economy</p>
                </div>
              </div>

              <div className="flex flex-row gap-10">
                <div className="flex flex-col">
                  <h1 className="text-[#A5A5A5]">Terminal</h1>
                  <p className="font-semibold text-grey2">A</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#A5A5A5]">Gate</h1>
                  <p className="font-semibold text-grey2">221</p>
                </div>
              </div>
            </div>
            {/* flex 3  */}
            <div className="w-full flex justify-center pt-10">
              <Barcodes />
            </div>
          </div>

          {/* object  */}
          {/* effect scretch 1 left  */}
          <div className="absolute left-0 top-[280px] w-[30px] h-[30px] bg-primary rounded-full"></div>
          {/* effect scretch 1 right  */}
          <div className="absolute right-0 top-[280px] w-[30px] h-[30px] bg-primary rounded-full"></div>

          {/* effect scretch 2 left  */}
          <div className="absolute left-0 bottom-[220px] w-[30px] h-[30px] bg-primary rounded-full"></div>
          {/* effect scretch 2 right  */}
          <div className="absolute right-0 bottom-[220px] w-[30px] h-[30px] bg-primary rounded-full"></div>

        </div>
      </div>
    </div>
  );
};

export default BookingPass;
