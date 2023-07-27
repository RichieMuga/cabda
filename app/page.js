import AboutUs from '@/components/landing/AboutUs';
import Navbar from '@/components/Navbar';
import  Hero  from '@/components/Hero';
import CentralTopics from '@/components/landing/CentralTopics';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='px-[3em]'>
        <Hero />
        <AboutUs/>
        <CentralTopics/>
      </div>
    </main>
  )
}
