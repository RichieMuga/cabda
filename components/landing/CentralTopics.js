import React from 'react'
import BlueBorderCard from '@/components/common/BlueBorderCard'
import BlueCard from '@/components/common/BlueCard'
import seed from '@/public/seeds.png'
import tourism from '@/public/tourism.png'
import economic from '@/public/economic.png'



const CentralTopics = () => {
  return (
    <section>
      <h4 className='text-primaryBlue font-bold text-center text-2xl mt-[3em] mb-[.5em]'>Central Topics</h4>
      <div className='flex flex-col md:flex-row gap-[4em]'>
        <BlueBorderCard imageAlt="Seeds" image={seed} subHeading="seed multiplication and livestock rearing" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo doloribus excepturi. In modi minus soluta ipsum reprehenderit aliquid"} />
        <BlueCard  imageAlt="economic" image={economic} subHeading="Income generating for economic empowerment." description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo doloribus excepturi. In modi minus soluta ipsum reprehenderit aliquid"} />
        <BlueBorderCard imageAlt="tourism" image={tourism} subHeading="Impact tourism and conservation" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo doloribus excepturi. In modi minus soluta ipsum reprehenderit aliquid"} />
      </div>
    </section>
  )
}

export default CentralTopics
