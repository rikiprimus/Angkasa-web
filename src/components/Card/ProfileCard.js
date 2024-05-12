import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FaMapMarkerAlt, FaPlus, FaAngleRight, FaRegUserCircle, FaStar, FaSetting } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

const ProfileCard = () => {

  const navigationItem = [
    {
      icon: <FaRegUserCircle size={25} /> ,
      title: 'Profile',
      link: '/'
    },
    {
      icon: <FaAngleRight size={25} /> ,
      title: 'My Review',
      link: '/'
    },
    {
      icon: <FaStar size={25} /> ,
      title: 'Settings',
      link: '/'
    },
  ]

  return (
    <div className='w-[325px] flex flex-col items-center gap-7 bg-white p-7 rounded-xl'>
      {/* photo  */}
      <div className="rounded-full border-[5px] border-primary p-2">
        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
          <div className="absolute w-[200px] -left-11 top-0 z-10">
            <Image
              src="/assets/paris.jpg"
              alt="Home Image"
              width={500}
              height={200}
              layout="responsive"
              className=""
            />
          </div>
        </div>
      </div>
      {/* button  */}
      <button className=' border-[1px] border-primary font-bold text-primary px-6 py-3 rounded-xl'>
        Select Photo
      </button>
      {/* name & live  */}
      <div className='flex flex-col items-center gap-2'>
        <h1 className='font-bold text-2xl'>Mike Kowalski</h1>
        <div className='flex items-center gap-2'>
          <FaMapMarkerAlt size={30} color='#2395FF' />
          <h1 className='text-[#6B6B6B]'>Medan, Indonesia</h1>
        </div>
      </div>
      {/* cards add */}
      <div className='w-full flex flex-row justify-between font-bold'>
        <h1>Cards</h1>
        <div className='flex items-center justify-between text-primary'>
          <FaPlus size={10} />
          <p>Add</p>
        </div>
      </div>
      {/* my card */}
      <div className='w-full flex flex-col bg-primary text-white p-4 rounded-lg shadow-lg shadow-primary'>
        <h1 className='font-bold'>4441 1235 5512 5551</h1>
        <div className='flex justify-between'>
          <p>x-card</p>
          <p>$ 1,440.2</p>
        </div>
      </div>
      {/* navigation */}
      <div className='w-full flex flex-col gap-8 font-bold'>
        {navigationItem.map((item, index) => (
          <Link key={index} href={item.link} className='flex items-center gap-5 text-[#979797] hover:text-primary'>
            {item.icon}
            <div className='w-full flex items-center justify-between'>
              <p>{item.title}</p>
              <FaAngleRight size={20} />
            </div>
          </Link>
        ))}

        <Link href='/' className='flex items-center gap-5 text-[#F24545] hover:text-opacity-70'>
          <MdOutlineLogout size={25} />
          <div className='w-full flex items-center justify-between'>
            <p>Logout</p>
            <FaAngleRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard