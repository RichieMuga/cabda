import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import patners from "@/public/patners.png"

const Patnerprograms = () => {
  return (
    <>
      <Head>
        <title>PatnerPrograms | CABDA</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Navbar />
      <div className='flex justify-center py-[1em] md:mt-[2em] mt-[6em] mb-[2em]'>
        <Image src={patners} alt="together we are one" width={200} height={200} />
      </div>
      <div className='px-[3em] text-center pb-[2em]'>
        <h1 className="py-[1em] font-bold text-3xl">Patner Programs</h1>
        <p className="pb-[1em]">Discover boundless possibilities!Join our partner program now to access a thriving network of innovators, exclusive resources, and expert support.Together, we&apos; ll soar to new heights, driving mutual success and amplifying our impact.Embrace collaboration, ignite growth, and be part of a dynamic community that empowers your brand.Let&apos;s forge a powerful alliance and seize opportunities for greatness.Don&apos;t wait—come aboard and let&apos;s shape a remarkable future together! </p>
        <Link href='contactus' className="bg-primaryBlue hover:bg-secondaryBlue text-white font-bold py-2 px-4 rounded mb-[10em]">
          Contact Us
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Patnerprograms
