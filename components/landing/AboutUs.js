import React from 'react'
import OrangeBorderCard from '@/components/common/OrangeBorderCard'
import OrangeCard from '@/components/common/OrangeCard'
import { MdHandshake } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbClover } from "react-icons/tb";

const AboutUs = () => {
  return (
    <section id="#aboutus">
      <h4 className='text-primaryBlue font-bold text-center text-2xl mt-[3em] mb-[.5em]'>About Us</h4>
      <h3 className='text-center mb-[.5em] leading-normal font-bold'>Igniting Hope, Sparking Prosperity.</h3>
      <h4 className='text-center mb-[2em] leading-normal'>Together, we pave the way for brighter futures and thriving communities.</h4>
      <div className='flex flex-col md:flex-row gap-[4em]'>
        <OrangeBorderCard icon={<AiOutlineQuestionCircle color={'#0449A2'} size={60} />} heading="Who" subHeading="are we?" description={"We're a beacon of support, fueling change for vulnerable souls."} />
        <OrangeCard icon={<MdHandshake size={60} />} heading="Why" subHeading="we do it?" description={"To set the world ablaze with hope, we intertwine hearts, empowering families, forging sustainable businesses—igniting legacies that kindle thriving communities"} />
        <OrangeBorderCard icon={<TbClover size={60} color={'#0449A2'} />} heading="What" subHeading="are we?" description={"Unleashing dreams, empowering families through wealth-creating ventures."} />
      </div>
    </section>
  )
}

export default AboutUs
