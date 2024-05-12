"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { IoIosSearch, bar } from "react-icons/io";
import { FiAlignLeft, FiX } from "react-icons/fi";
import { usePathname } from 'next/navigation'
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative p-7 md:px-20 md:py-10">
      {/* Desktop  */}
      <div className="hidden md:flex md:flex-row justify-between p-7 md:px-0 md:py-10">
        <div className="flex flex-row items-center gap-4">
          <Image 
            src="/assets/logo.jpg"
            alt="Ankasa Header Logo"
            width={50}
            height={10}
            priority
          />
          <p className="font-poppins font-bold text-2xl">Ankasa</p>
        </div>
        <div className="flex items-start gap-8">
          <div className="flex items-center bg-boxInput rounded-lg px-4 py-2">
            <IoIosSearch size={25} color="#6B6B6B" />
            <input type='text' placeholder="Where you want to go?" className="bg-boxInput text-textInput p-2 focus:outline-none" />
          </div>
          <Link href='/' className="flex flex-col items-center">
            <p className="font-semibold text-lg p-4">Find Ticket</p>
            {pathname === '/' ? (
              <div className="w-8 h-1 rounded-full bg-primary"></div>
            ) : null}
          </Link>
          <Link href='/' className="flex flex-col items-center">
            <p className="font-semibold text-lg p-4">My Booking</p>
            {pathname === '/my-booking' ? (
              <div className="w-8 h-1 rounded-full bg-primary"></div>
            ) : null}
          </Link>
        </div>
        <div className="w-[150px] flex items-center justify-center">
          <Button>Sign Up</Button>
        </div>
      </div>

      {/* Mobile  */}
      <div className="flex flex-row items-center justify-between md:hidden">
        <div className="flex flex-row items-center gap-4">
          <Image 
            src="/assets/logo.jpg"
            alt="Ankasa Header Logo"
            width={50}
            height={10}
            priority
          />
          <p className="font-poppins font-bold text-2xl">Ankasa</p>
        </div>
        <button onClick={handleNavbar} className="p-1">
          {isOpen ? (
            <FiX size={35} />
          ) : (
            <FiAlignLeft size={35}  />
          )}
        </button>
      </div>

      {isOpen ? (
        <div className="absolute right-7 w-[375px] mt-10 bg-white md:hidden">
          <div className="w-full flex flex-col items-start gap-8 mt-10">
            <div className="w-full flex items-center bg-boxInput rounded-lg px-4 py-2">
              <IoIosSearch size={25} color="#6B6B6B" />
              <input type='text' placeholder="Where you want to go?" className="w-full bg-boxInput text-textInput p-2 focus:outline-none" />
            </div>
            <Link href='/' className="w-full flex flex-col items-center">
              <p className="font-semibold text-lg p-4">Find Ticket</p>
              {pathname === '/' ? (
                <div className="w-8 h-1 rounded-full bg-primary"></div>
              ) : null}
            </Link>
            <Link href='/' className="w-full flex flex-col items-center">
              <p className="font-semibold text-lg p-4">My Booking</p>
              {pathname === '/my-booking' ? (
                <div className="w-8 h-1 rounded-full bg-primary"></div>
              ) : null}
            </Link>
            <Button>Sign Up</Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Navbar
