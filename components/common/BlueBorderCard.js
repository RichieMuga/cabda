import React from 'react'
import Image from 'next/image'

const BlueBorderCard = ({ image, subHeading, description, imageAlt }) => {
  return (
      <div className='border-8 border-primaryBlue flex items-center justify-center flex-col'>
          <div className='my-[3em] border-10'>
              <Image className='rounded-full' height={100} width={100} src={image} alt={imageAlt} />
          </div>
          <div className='text-center'>
              <h3 className='font-bold mb-[1em] text-xl'>{subHeading}</h3>
              <p className='text-center mb-[2em] px-4'>{description}</p>
          </div>
      </div>
  )
}

export default BlueBorderCard
