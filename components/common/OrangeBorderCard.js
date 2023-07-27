import React from 'react'

const OrangeBorderCard = ({heading,subHeading,description,icon}) => {
  return (
    <div className='border-8 border-primaryOrange flex items-center justify-center flex-col'>
      {/*TODO: add Icon */}
      <div className='mt-[1em]'>
        {icon}
      </div>
      <h3 className='font-bold text-primaryBlue text-3xl mt-[1em]'>{heading}</h3>
      <h3 className='font-bold mb-[1em] text-3xl'>{subHeading}</h3>
      <p className='text-center mb-[2em] px-4'>{description}</p>
    </div>
  )
}

export default OrangeBorderCard
