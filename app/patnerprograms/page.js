import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import patners from "@/public/patners.png"

const Patnerprograms = () => {
  return (
    <section>
      <Navbar />
      <div className='px-[10em] flex justify-center'>
        <Image src={patners} alt="together we are one" width={200} height={200} />
      </div>
      <div className='px-[3em] text-center'>
        <h1 className="py-[1em] font-bold text-3xl">Patner Programs</h1>
        <p className="pb-[1em]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil laborum nemo, nulla illum expedita nobis perspiciatis consequatur nisi nam officiis hic eaque ipsa quod facere maiores enim possimus reprehenderit ad.</p>
        <button class="bg-primaryBlue hover:bg-secondaryBlue text-white font-bold py-2 px-4 rounded mb-[10em]">
          Contact Us
        </button>
      </div>
      <Footer />
    </section>
  )
}

export default Patnerprograms
