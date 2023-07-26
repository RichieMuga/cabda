import Image from 'next/image'
import heroLogo from '@/public/HeroImage.jpg'

const Hero = () => {
  return (
 <section className='flex mt-[1em] flex-1 justify-between flex-shrink-2 lg:mx-[5em] mx-[2em] flex-col lg:flex-row'>
      <div className="md:mt-[1em] mt-[5em]">
        <h2 className='lg:text-5xl md:text-3xl text-xl mt-[1em] font-bold mb-[1em]'>Lorem ipsum dolor</h2>
        <h3 className='lg:text-lg text-base lg:mr-[10em] mr-[2em] mb-[1em]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
        <button className='button-secondary'>
          Talk with us
        </button>
      </div>
      <div className='flex-4 flex-start flex-grow-2 mt-[2em]'>
        <Image width={390} height={410} alt='mother child and father' src={heroLogo} />
      </div>
</section>
  )
}

export default Hero
