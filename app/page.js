import AboutUs from '@/components/landing/AboutUs';
import Navbar from '@/components/Navbar';
import  Hero  from '@/components/Hero';
import CentralTopics from '@/components/landing/CentralTopics';
import VisionMission from '@/components/landing/VisionMission';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='px-[3em]'>
        <Hero />
        <AboutUs/>
        <CentralTopics/>
        <VisionMission/>
      </div>
    </main>
  )
}
