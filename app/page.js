import AboutUs from '@/components/landing/AboutUs';
import Navbar from '@/components/Navbar';
import  Hero  from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='px-[3em]'>
        <Hero />
        <AboutUs/>
      </div>
    </main>
  )
}
