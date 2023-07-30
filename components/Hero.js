"use client"
import Image from 'next/image'
import heroLogo from '@/public/HeroImage.jpg'

const Hero = () => {
  const handlePatners = () => {
    window.location.href = "/patnerprograms"
  }
  return (
 <section className='flex mt-[1em] flex-1 justify-between flex-shrink-2 lg:mx-[5em] mx-[2em] flex-col lg:flex-row'>
      <div className="md:mt-[1em] mt-[5em]">
        <h2 className='lg:text-2xl md:text-3xl text-xl mt-[1em] font-bold mb-[1em]'>COMMUNITY ASSET BUILDING AND DEVELOPMENT ACTION</h2>
        <h2 className='lg:text-5xl md:text-3xl text-xl mt-[1em] font-bold mb-[1em]'>Prosper Together</h2>
        <h3 className='lg:text-lg text-base lg:mr-[10em] mr-[2em] mb-[1em]'><b>Empowering families, creating wealth, and fostering community growth</b>.Join us in supporting the vulnerable through sustainable businesses for a brighter future.</h3>
        <button className="bg-slate-100 text-primaryBlue border-2 border-primaryBlue hover:bg-primaryBlue hover:text-white p-4" onClick={handlePatners}>
          Patner Programs
        </button>
      </div>
      <div className='flex-4 flex-start flex-grow-2 mt-[8em]'>
        <Image width={390} height={410} alt='mother child and father' src={heroLogo} />
      </div>
</section>
  )
}

export default Hero
