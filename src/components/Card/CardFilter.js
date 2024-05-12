"use client";
import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import AccordionItem from "../Accordion/AccordionItem";
import { IoIosArrowUp } from "react-icons/io";
import PaymentInput from "../Input/PaymentInput";

const CardFilter = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const contentItem = () => {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1>Direct</h1>
          <input type="checkbox"  />
        </div>
        <div className="flex items-center justify-between">
          <h1>Transit</h1>
          <input type="checkbox"  />
        </div>
        <div className="flex items-center justify-between">
          <h1>Transit 2+</h1>
          <input type="checkbox"  />
        </div>
      </div>
    );
  };

  return (
    <div className="w-[330px] flex flex-col gap-8 p-5">
      {/* title */}
      <div className="flex items-center justify-between font-bold">
        <h1 className="text-2xl">Filter</h1>
        <p className="text-primary">Reset</p>
      </div>

      {/* content filter  */}
      <div className="rounded-xl overflow-hidden">
        <AccordionItem
          title="Transit"
          content={contentItem()}
          icon={<IoIosArrowUp />}
          isOpen={openIndex === 1}
          color='white'
          onClick={() => handleItemClick(1)}
        />
        <AccordionItem
          title="Facilities"
          content={contentItem()}
          icon={<IoIosArrowUp />}
          isOpen={openIndex === 1}
          color='white'
          onClick={() => handleItemClick(1)}
        />
        <AccordionItem
          title="Departure Time"
          content={contentItem()}
          icon={<IoIosArrowUp />}
          isOpen={openIndex === 1}
          color='white'
          onClick={() => handleItemClick(1)}
        />
        <AccordionItem
          title="Time Arrived"
          content={contentItem()}
          icon={<IoIosArrowUp />}
          isOpen={openIndex === 1}
          color='white'
          onClick={() => handleItemClick(1)}
        />
        <AccordionItem
          title="Airlines"
          content={contentItem()}
          icon={<IoIosArrowUp />}
          isOpen={openIndex === 1}
          color='white'
          onClick={() => handleItemClick(1)}
        />
        <AccordionItem
          title="Ticket Price"
          content={contentItem()}
          icon={<IoIosArrowUp />}
          isOpen={openIndex === 1}
          color='white'
          onClick={() => handleItemClick(1)}
        />
      </div>
    </div>
  );
};

export default CardFilter;
