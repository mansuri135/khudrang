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
          Khudrang serves as a vibrant platform for artists, offering them an opportunity to showcase their poetic talent. The foundation organizes various events, including open mics, nashist, mushairas, and more, helping foster a creative environment for poetry lovers and performers alike.
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
          <p className="text-gray-500 mb-2">Founder & Secretory</p>
          <p className="text-sm max-w-md mx-auto">
           Sahib Ahmedabadi, born Mohammed Yunus, is a prominent poet and writer from Ahmedabad. His pen name, "Sahib Ahmedabadi," has earned him a place in the world of literature, reflecting his deep connection to his roots in Ahmedabad. A post-graduate in Commerce with a diploma in Urdu language, Sahib has carved a unique niche for himself not only as a businessman in the eyewear industry but also as a passionate poet.

His poetry, particularly the famous ghazal "Nayi Zameen Naya Aasmaan, He Hi Nahi, Jahan Mein Dusra Hindustan, He Hi Nahi," resonates deeply with poetry lovers in Ahmedabad and beyond. Known for his distinct style of reciting poetry, Sahib has performed across all formats, including open mics, mushairas, and nashist.

Sahib Ahmedabadi is also the founder and secretary of the Khudrang Foundation, an initiative dedicated to the promotion of Urdu and Hindi literature. His first book, Uski Aankhon Mein, is set to be published in June 2025 with the support of the Gujarat Sahitya Academy. Sahib continues to inspire and engage audiences through his literary works and performances.
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
          <p className="text-gray-500 mb-2">Director & Co-Founder</p>
          <p className="text-sm max-w-md mx-auto">
           Sufyan Sufi, a businessman from Vatva, Ahmedabad, originally hailing from Tonk, Rajasthan, is a rising star in the world of poetry. His debut book of ghazals, Pehla Ishq, was published in 2023, and in recognition of his literary contribution, he was honored with the prestigious Gujarat Sahitya Yuva Gaurav Puraskar by the Gujarat Sahitya Academy in 2025.
Known for his evocative poetry, Sufyan’s work beautifully explores themes of emotion, love, and relationships. He has gained immense popularity among young poetry lovers, particularly for his unique style of reciting poetry. He has performed across various platforms, including open mics, nashist, and mushairas, capturing the hearts of audiences with his powerful words. One of his most famous lines, "Marne walon ko kya khabar Sufi, Jine walon pe kya gujarti hai," resonates deeply with poetry enthusiasts.
          </p>
        </div>
      </section>
    </main>
      <Footer />
    </div>
  );
}