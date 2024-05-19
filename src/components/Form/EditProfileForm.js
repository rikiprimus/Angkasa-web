import React from "react";
import Button from "../Button/Button";
import InputText from "../Input/InputText";
import ToggleSwitch from "../Input/ToggleSwitch";
import { IoIosArrowDown } from "react-icons/io";
import ButtonLink from "../Button/ButtonLink";

const EditProfileForm = () => {
  return (
    <div className="w-full flex flex-col items-end bg-white rounded-lg p-8">
      {/* title card  */}
      <div className="w-full flex flex-col gap-5">
        <h1 className="text-primary tracking-[0.2em]">PROFILE</h1>
        <h1 className="font-bold text-2xl">Profile</h1>
      </div>
      {/* form input  */}
      <form className="w-full flex justify-between">
        {/* left  */}
        <div className="w-full flex flex-col gap-2">
          <h1 className="font-bold text-xl">Contact</h1>
          <div className="flex flex-col gap-4 p-4">
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
          </div>
        </div>
        {/* right  */}
        <div className="w-full flex flex-col gap-2">
          <h1 className="font-bold text-xl">Contact</h1>
          <div className="flex flex-col gap-4 p-4">
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
          </div>
        </div>
      </form>
      <div className="w-[200px] m-6">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default EditProfileForm;
