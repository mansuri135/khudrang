import Image from "next/image";
import Navbar from '@/components/layout/Navbar';
import HeroSlider from '@/components/slider/HeroSlider'
import Events from '@/components/events/Events'
import Footer from '@/components/layout/Footer'

export default function EventsMain() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <main className="relative">
        <Events />
        <Image className="absolute hidden 2xl:block top-0 right-0 rotate-[-90deg]"
          src="/images/brush.jpg"
          alt="Logo"
          width={300}
          height={267}
          priority
        />
        <Image className="absolute hidden 2xl:block bottom-0"
          src="/images/brush.jpg"
          alt="Logo"
          width={300}
          height={267}
          priority
        />

      </main>
      <Footer />
    </div>
  );
}