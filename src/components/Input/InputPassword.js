"use client";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const InputPassword = ({ name, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex flex-row">
      <input
        id={name}
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full text-forText border-b-2 p-4 border-[#D2C2FFAD] placeholder:text-placeholder focus:outline-0"
        autoComplete={`current-${name}`}
        required
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute bottom-4 right-0"
      >
        {showPassword ? (
          <IoEyeOutline size={25} color="#2395FF" />
        ) : (
          <IoEyeOffOutline size={25} color="#2395FF" />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
