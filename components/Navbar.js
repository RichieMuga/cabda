"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.png'
import { navbarLinks } from '@/utils/navbarLinks'
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window size
    setWindowWidth(window.innerWidth);

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 816;

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
const DesktopNavbar = () => {
  return (
    <nav className="navbar w-[100%] bg-white text-black flex md:flex-row flex-col justify-between items-center px-10 drop-shadow-lg">
      <div className='flex items-center justify-between w-full'>
        <Link href="/">
          <Image src={Logo} width={65} height={65} alt="Logo" />
        </Link>
        <div className='tracking-wider font-semibold my-5 space-x-4'>
          {navbarLinks.map((link) => (
            <span key={link.id}>
              <Link href={link.href}>
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-#0449A2 to-#FFA92C origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
            </span>
          ))}
        </div>
        <button className='button-primary'>
          Partner Programs
        </button>
      </div>
    </nav>

  )
}

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  }
  return (
    <nav className="navbar  fixed top-0 left-0 w-[100%] bg-white text-black flex md:flex-row flex-col justify-between items-center px-10 drop-shadow-lg">
      <div className='flex justify-between w-full'>
        <Link href="/">
          <Image className='py-2' src={Logo} width={60} height={60} alt="Logo" />
        </Link>
        <button className="nav__toggle" aria-expanded="false" type="button" onClick={toggleNav}>
          {navOpen ? <MdOutlineClose size={30} /> : <MdMenu size={30} />}
        </button>
        <ul style={{ transition: '300ms ease-in', background: `white` }} className={`nav__wrapper ${navOpen ? 'active' : ''}`}>
          {navOpen ?
          (
            navbarLinks.map((link) => (
              <Link key={link.id} href={link.href} className="nav__item text-right mr-10 text-lg my-10 font-semibold">
                {link.label}
              </Link>
            ))
          )
        :
        null
        }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
