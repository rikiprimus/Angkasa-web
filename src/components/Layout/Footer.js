"use client"
import { FiMapPin } from "react-icons/fi";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 p-7 md:px-20 md:py-10">
      {/* flex 1  */}
      <div className="flex flex-col gap-10 md:flex-row justify-between">
        {/* flex 1.1  */}
        <div className="flex flex-col gap-10">
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
          <p className="w-[300px]">Find your Flight and explore the world with us. We will take care of the rest</p>
        </div>
        {/* flex 1.2  */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-lg">Features</h1>
          <div className="flex flex-row justify-between md:flex-col gap-3">
            <Link href="/" className="active:opacity-50">Find Ticket</Link>
            <Link href="/">My Booking</Link>
            <Link href="/">Chat</Link>
            <Link href="/">Notification</Link>
          </div>
        </div>
        {/* flex 1.3  */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-lg">Download Angkasa app</h1>
          <div className="flex flex-row items-center md:flex-col">
            <Image 
              src="/assets/badge-googleplay.png"
              alt="badge google play store"
              width={190}
              height={40}
              priority 
            />
            <div className="p-4">
              <Image 
                src="/assets/badge-appstore.png"
                alt="badge app store"
                width={175}
                height={50}
                priority 
              />
            </div>
          </div>
        </div>
        {/* flex 1.4  */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-lg">Follow Us</h1>
          <div className="flex flex-row gap-5">
            <FiFacebook size={25} color="#595959" />
            <FiTwitter size={25} color="#595959" />
            <FiInstagram size={25} color="#595959" />
            <FiYoutube size={25} color="#595959" />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-2 md:flex-row justify-between">
        {/* flex 2  */}
        <p>© Ankasa.  All Rights Reserved.</p>
        <div className="flex items-center gap-3 text-textInput">
          <FiMapPin size={25} color="#595959" />
          <p>Jakarta Indonesia</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
