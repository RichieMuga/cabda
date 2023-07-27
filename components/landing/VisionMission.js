import React from 'react'
import Image from 'next/image'
import vision from '@/public/visionMission/vision.jpg'
import mission from '@/public/visionMission/mission.jpg'


const VisionMission = () => {
    return (
        <section className='mt-[4em] flex flex-col'>
            {/* Vision */}
            <div className='flex md:flex-row flex-col'>
                <Image height={580} width={480} alt="Vision" src={vision} />
                <div className='lg:px-[7em] md:px-[5em] px-2 flext-shrink-2 leading-normal'>
                    <h4 className='text-primaryBlue font-bold  text-2xl mt-[3em] mb-[.5em] text-right'>Vision</h4>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, recusandae pariatur? Explicabo maiores laudantium sit voluptas? Recusandae commodi praesentium assumenda aperiam eaque nulla aspernatur.</h3>
                </div>
            </div>
            {/* Mission */}
            <div className='flex md:flex-row flex-col'>
                <div className='lg:px-[7em] md:px-[5em] px-2 flext-shrink-2 leading-normal'>
                    <h4 className='text-primaryBlue font-bold text-2xl mt-[3em] mb-[.5em]'>Mission</h4>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, recusandae pariatur? Explicabo maiores laudantium sit voluptas? Recusandae commodi praesentium assumenda aperiam eaque nulla aspernatur.</h3>
                </div>
                <Image height={580} width={480} alt="Mission" src={mission} />
            </div>
        </section>
    )
}

export default VisionMission
