"use client";
import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Button from '../Button/Button';
import ButtonBorder from '../Button/ButtonBorder';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col gap-6'>
      <form className="flex flex-col gap-5">
        <h1 className="font-poppins font-bold text-4xl">Register</h1>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Full Name"
          className="w-full text-forText border-b-2 p-4  placeholder:text-placeholder focus:outline-0"
          autoComplete="current-name"
          required
          // onChange = ""
        />
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          className="w-full text-forText border-b-2 p-4  placeholder:text-placeholder focus:outline-0"
          autoComplete="current-email"
          required
          // onChange = ""
        />
        <div className="relative flex flex-row">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full text-forText border-b-2 p-4  placeholder:text-placeholder focus:outline-0"
            autoComplete="current-password"
            required
            // onChange = ""
          />
          <button
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
      </form>
      <Button onClick='' >Sign Up</Button>
      <div className="flex flex-row items-center gap-4">
        <input name='accept' type="checkbox" required/>
        <p className="text-grey2">Accept terms and condition</p>
      </div>
      <div className="w-full border border-[#D8D8D8]"></div>
      <p className="text-grey2 text-center">Already have an account?</p>
      <ButtonBorder href='/sign-in'>Sign In</ButtonBorder>
    </div>
  );
};

export default SignupForm;
