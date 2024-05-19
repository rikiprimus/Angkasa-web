"use client";
import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import AccordionItem from "../Accordion/AccordionItem";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import PaymentInput from "../Input/PaymentInput";
import RangeSlider from "../Others/RangeSlider";
import { TransitItem, FacilitiesItem, TimeItem, DepartureItem, AirlinesItem } from "@/constants";

const CardFilter = () => {
  const [openIndexes, setOpenIndexes] = useState([0, 1, 2, 3, 4, 5]);

  const handleItemClick = (index) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // close the clicked item
          : [...prevIndexes, index] // open the clicked item
    );
  };

  const contentItem = (value) => {
    return (
      <div className="flex flex-col gap-5">
        {value.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <h1>{item.title}</h1>
            <input type="checkbox" />
          </div>
        ))}
      </div>
    );
  };

  const contentPrice = () => {
    return (
      <div className="w-full">
        <RangeSlider
          initialMin={2500}
          initialMax={7500}
          min={0}
          max={10000}
          step={100}
          priceCap={1000}
        />
      </div>
    );
  };

  const filterItem = [
    {
      title: "Transit",
      content: contentItem(TransitItem),
    },
    {
      title: "Facilities",
      content: contentItem(FacilitiesItem),
    },
    {
      title: "Departure Time",
      content: contentItem(DepartureItem),
    },
    {
      title: "Time Arrived",
      content: contentItem(TimeItem),
    },
    {
      title: "Airlines",
      content: contentItem(AirlinesItem),
    },
    {
      title: "Ticket Price",
      content: contentPrice(),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-8 p-5">
      {/* title */}
      <div className="flex items-center justify-between font-bold">
        <h1 className="text-2xl">Filter</h1>
        <button className="text-primary">Reset</button>
      </div>

      {/* content filter  */}
      <div className="rounded-xl overflow-hidden">
        {filterItem.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            icon={
              openIndexes.includes(index) ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowUp />
              )
            }
            isOpen={openIndexes.includes(index)}
            color="white"
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardFilter;
