import ProfileCard from '@/components/Card/ProfileCard'
import EditProfileForm from '@/components/Form/EditProfileForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-start gap-10 p-5 bg-[#F5F6FA] md:px-20 md:py-14 shadow-inner'>
      {/* left  */}
      <ProfileCard />
      <EditProfileForm />
    </div>
  )
}

export default page