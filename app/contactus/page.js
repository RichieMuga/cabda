import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import contactUs from '@/public/contactUs.svg'

const page = () => {
    return (
        <>
        <Navbar/>
        <div class="container my-24 mx-auto md:px-6 px-10">
            <section class="mb-32">
                <div class="flex flex-wrap">
                    <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                        <h2 class="mb-6 text-3xl font-bold">Contact us</h2>
                        <p class="mb-6 text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium, modi accusantium ipsum corporis quia asperiores
                            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
                            autem omnis fugiat perspiciatis? Ad, veritatis.
                        </p>
                        <p class="mb-2 text-black">
                            Kakamega, Kenya
                        </p>
                        <p class="mb-2 text-black">
                            +254722314720
                        </p>
                        <p class="mb-2 text-black">
                            cabda@gmail.com
                        </p>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                        <Image src={contactUs} width={400} height={400} alt="Contact Us" />
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
        </>
    )
}

export default page
