import React from "react";
import Button from "../Button/Button";
import InputText from "../Input/Input";
import ToggleSwitch from "../Input/ToggleSwitch";
import { IoIosArrowDown } from "react-icons/io";

const ContactForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-16">
        {/* first  */}
        <div className="flex flex-col gap-4 bg-white rounded-lg p-8">
          <InputText
            type="text"
            label="Full Name"
            name="fullname"
            placeholder="Full Name"
            // onChange={}
          />
          <InputText
            type="email"
            label="Email"
            name="email"
            placeholder="Email"
            // onChange={}
          />
          <InputText
            type="number"
            label="Phone Number"
            name="phone"
            placeholder="0000-0000-0000"
            // onChange={}
          />
        </div>
        {/* two  */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-2xl">Passenger Details</h1>
          <div className="flex flex-col gap-4 bg-white rounded-lg p-8">
            <div className="w-full p-5 flex items-center justify-between rounded-lg bg-[#2395FF1A]">
              <span>
                <h1>Passenger: 1 Adult</h1>
              </span>
              <span className="flex items-center space-x-3">
                <h1>Same as contact person</h1>
                <ToggleSwitch />
              </span>
            </div>
            <InputText
              type="text"
              label="Title"
              name="fullname"
              placeholder="Full Name"
              // onChange={}
            />
            <InputText
              type="text"
              label="Full Name"
              name="fullname"
              placeholder="Full Name"
              // onChange={}
            />
            <InputText
              type="text"
              label="Nationality"
              name="fullname"
              placeholder="Full Name"
              // onChange={}
            />
          </div>
        </div>
        {/* three  */}
        <div className="bg-white rounded-lg">
          {/* travel insurance */}
          <div className="flex justify-between gap-5 p-6">
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-bold text-xl">Travel Insurance</p>
            </div>
            <p className="flex gap-1 font-bold text-lg text-primary">
              $2,00 <span className="text-[#979797]">/pax</span>
            </p>
          </div>
          {/* line  */}
          <div className="w-full border-[1px] border-[#E6E6E6]"></div>
          {/* total  */}
          <div className="flex justify-between items-center p-6">
            <h1 className="">Get travel compensation up to $ 10.000,00</h1>
          </div>
        </div>
        <Button>Proceed to Payment</Button>
      </form>
    </div>
  );
};

export default ContactForm;
