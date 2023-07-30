import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/favicon.png'

const Footer = () => {
  return (
      <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                  <div className="mb-6 md:mb-0">
                      <a href="https://cabda.co.ke/" className="flex items-center">
                          <Image width={40} height={40} src={Logo} className="h-8 mr-3" alt="CADBA Logo" />
                          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CABDA</span>
                      </a>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                      <div className='ml-[4em]'>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">More info</h2>
                          <ul className="text-gray-500 dark:text-gray-400 font-medium">
                              <li className="mb-4">
                                  <a href="/contactus" className="hover:underline">Location</a>
                              </li>
                              <li>
                                  <a href="/contactus" className="hover:underline">Contact Us</a>
                              </li>
                          </ul>
                      </div>
                      <div className='ml-[2em]'>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                          <ul className="text-gray-500 dark:text-gray-400 font-medium">
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">By using our site you agree to the terms and conditions</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">CADBA™</a>. All Rights Reserved.
                  </span>
              </div>
          </div>
      </footer>

  )
}

export default Footer
