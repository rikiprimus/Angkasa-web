"use client"
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightArrowLeft, FaPlaneDeparture, FaArrowRightLong } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "../Button/Button";
import "react-datepicker/dist/react-datepicker.css";

const SearchCard = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dummyManyData = [
    {
      id: 1,
      value: 1
    },
    {
      id: 2,
      value: 2
    },
    {
      id: 3,
      value: 3
    },
    {
      id: 4,
      value: 4
    },
  ]

  const CustomInputDate = React.forwardRef(({ value, onClick }, ref) => (
    <button
      ref={ref}
      className="w-full flex justify-between font-semibold border-2 border-[#DDDDDD] p-4 rounded-xl"
      onClick={onClick}
    >
      {value}
      <IoIosArrowForward size={25} color="#2395FF" />
    </button>
  ));

  return (
    <div className="w-[400px] flex flex-col gap-5 bg-white p-7 shadow-2xl rounded-2xl">
      <div className="flex flex-col gap-5">
        <p className="font-semibold">Hey, </p>
        <h1 className="font-semibold text-xl">Where you want to go?</h1>
      </div>

      <div className="flex flex-row items-center justify-between text-primary">
        <p className="font-semibold ">Recently Searched</p>
        <IoIosArrowForward size={25} />
      </div>
      
      <div className="w-full flex flex-col gap-3 bg-white shadow-lg p-4 rounded-xl">
        <div className="flex justify-between text-[#979797]">
          <p>From</p>
          <p>To</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-3xl">Medan</p>
          <FaArrowRightArrowLeft size={25} color="#2395FF"/>
          <p className="font-bold text-3xl">Tokyo</p>
        </div>
        <div className="flex justify-between">
          <p>Indonesia</p>
          <p>Japan</p>
        </div>
      </div>

      <div className="w-full flex flex-row gap-4 justify-between">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary text-white text-center font-bold px-4 py-3 rounded-xl hover:bg-opacity-90 active:bg-opacity-50"
        > 
          <FaPlaneDeparture size={25} />
          <p>One Way</p>
        </button>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#F0F0F0] text-[#595959] text-center font-bold px-4 py-3 rounded-xl hover:bg-opacity-90 active:bg-opacity-50"
        > 
          <TbReload size={25} fontWeight={900} />
          <p>One Way</p>
        </button>
      </div>

      <div className="w-full flex flex-col gap-3">
        <h1 className="font-semibold text-[#6B6B6B]">Departure</h1>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<CustomInputDate />}
          dateFormat="EEEE, d MMMM yyyy"
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <h1 className="font-semibold text-[#6B6B6B]">How many person?</h1>
        <div className="w-full flex items-center gap-5 justify-center">
          <button className="w-full flex justify-between font-semibold border-2 border-[#DDDDDD] p-4 rounded-xl">
            data
            <IoIosArrowForward size={25} color="#2395FF" />
          </button>
          <button className="w-full flex justify-between font-semibold border-2 border-[#DDDDDD] p-4 rounded-xl">
            data
            <IoIosArrowForward size={25} color="#2395FF" />
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <h1 className="font-semibold text-[#6B6B6B]">Which class do you want?</h1>
        <div className="w-full flex items-center gap-5 justify-center">
          <div className="flex gap-2">
            <input type="radio" id="economy" name="class" value="economy" className="w-5"/>
            <label htmlFor="economy" className="font-bold">Economy</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="business" name="class" value="Business" className="w-5" />
            <label htmlFor="business" className="font-bold">Business</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="firstclass" name="class" value="First Class" className="w-5"/>
            <label htmlFor="firstclass" className="font-bold">First Class</label>
          </div>
        </div>
      </div>
      <Button>
        <div className="flex justify-between">
          <h1 className="font-bold">SEARCH FLIGHT</h1>
          <FaArrowRightLong size={25} />
        </div>
      </Button>
    </div>
  )
}

export default SearchCard;