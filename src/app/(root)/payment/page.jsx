import React from 'react'
import { FaArrowRightArrowLeft, FaPlaneDeparture } from 'react-icons/fa6'

const Payment = () => {
  return (
    <div>
      {/* header  */}
      <div className='relative -z-20 w-full h-[180px] flex items-center justify-between bg-primary rounded-b-[40px] overflow-hidden p-5 md:px-20'>
        <FaPlaneDeparture size={250} color='#41A4FF' className='-rotate-[12deg] absolute -bottom-20 -left-8 -z-10' />
        <div className='flex items-center gap-4 ml-10'>
          <FaPlaneDeparture size={60} color='#fff' />
          <div className="w-full flex flex-col gap-3 text-white">
            <div className="flex justify-between">
              <p>From</p>
              <p>To</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-3xl">Medan</p>
              <FaArrowRightArrowLeft size={25}/>
              <p className="font-bold text-3xl">Tokyo</p>
            </div>
            <div className="flex items-center justify-center gap-2 font-light">
              <p>Monday, 20 July 20</p>
              <p className='font-bold'>-</p>
              <p>6 Passenger</p>
              <p className='font-bold'>-</p>
              <p>Economy</p>
            </div>
          </div>
        </div>

        {/* button search */}
        <button className='font-bold text-white p-4'>
          Change Search
        </button>
      </div>
    </div>
  )
}

export default Payment