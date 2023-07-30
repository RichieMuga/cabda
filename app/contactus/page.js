import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import contactUs from '@/public/contactUs.svg'

const page = () => {
    return (
        <>
            <Navbar />
            <div className="container my-24 mx-auto md:px-6 px-10">
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                            <h2 className="mb-6 text-3xl font-bold">Contact us</h2>
                            <h4 className="font-semibold text-xl"> Welcome to CABDA Private Limited!</h4>
                            <p className="mb-6 text-black">
                                Have any questions or inquiries about our products or services? We would love to hear from you! Contact us using the information provided below:
                            </p>
                            <h4 className='font-semibold text-lg'>Location:</h4>
                            <p className="mb-2 text-black">
                                Murram next to Kasarani Estate, Off Mumias-Kakamega Road, CABDA Compound, P.O. BOX 2978-50100 Kakamega, Kenya.
                            </p>
                            <h4 className='font-semibold text-lg'>Operating Hours:</h4>
                            <p className="mb-2 text-black">
                                Monday to Friday, from 8:00 AM to 5:00 PM.
                            </p>
                            <h4 className='font-semibold text-lg'>Contact Details:</h4>
                            <p className="mb-2 text-black">
                                +254723713022
                            </p>
                            <p className="mb-2 text-black font-semibold">
                                cabdaprivatelimited@gmail.com
                            </p>
                        </div>
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                            <Image src={contactUs} width={400} height={400} alt="Contact Us" />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default page
