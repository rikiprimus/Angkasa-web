"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputText from "../Input/InputText";
import ToggleSwitch from "../Input/ToggleSwitch";
import { IoIosArrowDown } from "react-icons/io";
import ButtonLink from "../Button/ButtonLink";
import DropDown from "../Dropdown/Dropdown";
import { fetchDataUser } from "@/lib/api/api";
import { getToken } from "@/lib/api/auth";
import { useRouter } from 'next/navigation';

const ContactForm = ({id}) => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = getToken();
    if (savedToken) {
      const fetchData = async () => {
        const result = await fetchDataUser(savedToken);
        setUserData(result.data);
      };
      fetchData();
    } else {
      router.push('/login'); 
    }
  }, [router]);

  useEffect(() => {
    if (userData) {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        name: userData.name || "",
        email: userData.email || "",
      }));
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Event handler untuk memperbarui nilai input dan memformat nomor telepon
  const handlePhoneChange = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");

    let formattedInput = "";
    for (let i = 0; i < input.length && i < 13; i++) { // Ensure the length is not more than 13
      if (i > 0 && i % 4 === 0) {
        formattedInput += "-";
      }
      formattedInput += input[i];
    }
    setCredentials((prevState) => ({
      ...prevState,
      phone: formattedInput,
    }));
  };

  const genre = ["Men", "Women"];
  const nation = ["Indonesia", "Malaysia", "Singapore", "Thailand"];

  return (
    <div>
      <form className="flex flex-col gap-16">
        {/* first  */}
        <div className="flex flex-col gap-4 bg-white rounded-lg p-8">
          <InputText
            label="Full Name"
            name="name"
            placeholder="Full Name"
            value={credentials.name}
            onChange={handleChange}
          />
          <InputText
            label="Email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
          />
          <InputText
            type="tel"
            label="Phone Number"
            name="phone"
            placeholder="0000-0000-0000"
            value={credentials.phone}
            onChange={handlePhoneChange}
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
            <DropDown title="Mr." list={genre} />
            <InputText
              type="text"
              label="Full Name"
              name="fullname"
              placeholder="Full Name"
              // onChange={}
            />
            <DropDown title="Nation" list={nation} />
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
        <ButtonLink href={`/method/${id}`}>Proceed to Payment</ButtonLink>
      </form>
    </div>
  );
};

export default ContactForm;
