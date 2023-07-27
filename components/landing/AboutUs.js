import React from 'react'
import OrangeBorderCard from '@/components/common/OrangeBorderCard'
import OrangeCard from '@/components/common/OrangeCard'
import { MdHandshake } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbClover } from "react-icons/tb";

const AboutUs = () => {
  return (
    <section>
        <h4 className='text-primaryBlue font-bold text-center text-2xl mt-[3em] mb-[.5em]'>About Us</h4>
        <h3 className='text-center mb-[.5em] leading-normal font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fuga, perferendis dignissimos debitis beatae blanditiis!</h3>
        <h4 className='text-center mb-[2em] leading-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
        <div className='flex flex-col md:flex-row gap-[4em]'>
        <OrangeBorderCard icon={<AiOutlineQuestionCircle color={'#0449A2'} size={60}/>} heading="Who" subHeading="are we?" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo doloribus excepturi. In modi minus soluta ipsum reprehenderit aliquid"}/>
        <OrangeCard icon={<TbClover size={60} />} heading="What" subHeading="are we?" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo doloribus excepturi. In modi minus soluta ipsum reprehenderit aliquid" }/>
        <OrangeBorderCard icon={<MdHandshake size={60} color={'#0449A2'} />} heading="Why" subHeading="we do it?" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo doloribus excepturi. In modi minus soluta ipsum reprehenderit aliquid"} />
        </div>
    </section>
  )
}

export default AboutUs
