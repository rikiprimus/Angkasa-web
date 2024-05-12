import CardBooking from '@/components/Card/CardBooking'
import ProfileCard from '@/components/Card/ProfileCard'
import React from 'react'

const MyBooking = () => {
  return (
    <div className='flex items-start gap-10 p-5 bg-[#F5F6FA] md:px-20 md:py-14'>
      <div>
        <ProfileCard />
      </div>
      <div className='w-full flex flex-col gap-10'>
        {/* title card  */}
        <div className='w-full flex flex-col gap-5 bg-white rounded-lg p-6'>
          <h1 className='text-primary tracking-[0.2em]'>MY BOOKING</h1>
          <div className='flex items-center justify-between font-bold'>
            <h1 className='text-2xl'>My Booking</h1>
            <p className='text-primary'>Order history</p>
          </div>
        </div>
        {/* content card */}
        <CardBooking />
      </div>
    </div>
  )
}

export default MyBooking
