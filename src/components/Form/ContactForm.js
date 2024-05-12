import React from 'react'
import Button from '../Button/Button'
import InputText from '../Input/Input'

const ContactForm = () => {
  return (
    <div>
      <form className='flex flex-col gap-16'>
        <div className='flex flex-col gap-4 bg-white rounded-lg p-8'>
          <InputText
            label='Full Name'
            name='fullname'
            placeholder='Full Name'
            // onChange={}
          />
          <InputText
            label='Full Name'
            name='fullname'
            placeholder='Full Name'
            // onChange={}
          />
          <InputText
            label='Full Name'
            name='fullname'
            placeholder='Full Name'
            // onChange={}
          />
        </div>
      </form>
      <Button>Proceed to Payment</Button>
    </div>
  )
}

export default ContactForm