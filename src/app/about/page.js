import Image from "next/image";
import Navbar from '@/components/layout/Navbar';
import HeroSlider from '@/components/slider/HeroSlider'
import Events from '@/components/events/Events'
import Footer from '@/components/layout/Footer'

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
       <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      {/* About Us Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          We are a passionate team building innovative solutions for modern challenges. 
          Our mission is to empower businesses through clean design, efficient code, and real-world impact.
        </p>
      </section>

      {/* Team Section */}
      <section className="grid md:grid-cols-2 gap-12">
        {/* Founder */}
        <div className="text-center">
          <Image
            src="/images/founder.jpg"
            alt="Founder"
            width={300}
            height={300}
            className="rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold">Sahib Ahmedabadi</h2>
          <p className="text-gray-500 mb-2">Founder & CEO</p>
          <p className="text-sm max-w-md mx-auto">
            John has 10+ years of experience in tech leadership and product design. 
            He founded the company with a vision to simplify digital transformation.
          </p>
        </div>

        {/* Co-Founder */}
        <div className="text-center">
          <Image
            src="/images/cofounder.jpg"
            alt="Co-Founder"
            width={300}
            height={300}
            className="rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold">Sufyan Sufi</h2>
          <p className="text-gray-500 mb-2">Co-Founder & CTO</p>
          <p className="text-sm max-w-md mx-auto">
            Jane leads engineering and innovation. With deep expertise in AI and cloud computing, 
            she ensures our platform is robust and forward-thinking.
          </p>
        </div>
      </section>
    </main>
      <Footer />
    </div>
  );
}