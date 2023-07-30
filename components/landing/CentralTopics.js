import React from 'react'
import BlueBorderCard from '@/components/common/BlueBorderCard'
import BlueCard from '@/components/common/BlueCard'
import seed from '@/public/seeds.png'
import tourism from '@/public/tourism.png'
import economic from '@/public/economic.png'



const CentralTopics = () => {
  return (
    <section className='#centraltopics'>
      <h4 className='text-primaryBlue font-bold text-center text-2xl mt-[3em] mb-[.5em]'>Central Topics</h4>
      <div className='flex flex-col md:flex-row gap-[4em]'>
        <BlueBorderCard imageAlt="Seeds" image={seed} subHeading="seed multiplication and livestock rearing" description={"Nurturing growth through sustainable agriculture and livestock initiatives, cultivating prosperity and compassion."} />
        <BlueCard imageAlt="economic" image={economic} subHeading="Income generating for economic empowerment." description={"Empowering communities with thriving income-generating opportunities, uplifting lives, and fostering economic independence."} />
        <BlueBorderCard imageAlt="tourism" image={tourism} subHeading="Impact tourism and conservation" description={"Embarking on transformative journeys that support local communities and safeguard the beauty of nature for future generations."} />
      </div>
    </section>
  )
}

export default CentralTopics
