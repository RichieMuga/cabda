import React from 'react'

const OrangeCard = ({ heading, subHeading, description, icon }) => {
  return (
    <div className='flex items-center justify-center flex-col bg-secondaryOrange'>
      {/*TODO: add Icon */}
      <div className='mt-[1em]'>
        {icon}
      </div>
      <h3 className='text-primaryBlue text-3xl font-bold mt-[1em]'>{heading}</h3>
      <h3 className='font-bold mb-[1em] text-3xl'>{subHeading}</h3>
      <p className='text-center mb-[2em] px-4'>{description}</p>
    </div>
  )
}

export default OrangeCard
