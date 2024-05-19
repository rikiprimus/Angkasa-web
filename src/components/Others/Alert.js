import React from 'react'

const Alert = ({error}) => {
  return (
    <div>
      {error && <p className='w-full bg-red-400 font-semibold text-white text-center p-4 rounded-lg'>{error}</p>}
    </div>
  )
}

export default Alert