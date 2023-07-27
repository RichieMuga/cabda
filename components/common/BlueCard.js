import React from 'react'
import Image from 'next/image'

const BlueCard = ({ image, subHeading, description, imageAlt }) => {
    return (
        <div className='flex items-center justify-center flex-col bg-secondaryBlue'>
            <div className='my-[2em]'>
                <Image className='rounded-full' height={100} width={100} src={image} alt={imageAlt} />
            </div>
            <div className='text-center text-white'>
                <h3 className='font-bold mb-[1em] text-xl'>{subHeading}</h3>
                <p className='text-center mb-[2em] px-4'>{description}</p>
            </div>
        </div>
    )
}

export default BlueCard
