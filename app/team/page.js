import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { teamLinks } from '@/utils/teamLinks';

const Team = () => {
    return (
        <>
            <Navbar />
            <section className='grid grid-cols-2 md:grid-cols-4 gap-1 p-4 mt[2em]'>
{
    teamLinks.map((team) => {
        const { id, name, title, image } = team;
        return (
            <div key={id} className='p-4'>
                <Image src={image} alt={name} width={200} height={300} className='h-400 mt-[2em]' />
                <div className='flex flex-col'>
                 <h1 className='text-2xl font-bold'>{name}</h1>
                <h3 className='text-lg font-semibold'>{title}</h3>
                </div>
            </div>
        )
    }
    )
}
</section>
            <Footer />
        </>
    )
}

export default Team
