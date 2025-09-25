import Image from 'next/image';

const events = [
   {
    id: 1,
    title: "Cultural Mushaira 2.0",
    date: "Oct 1, 2025",
    location: "Ahmedabad",
    image: "/images/event01.jpeg",
  },
  {
    id: 2,
    title: "Jashn-e-Urdu Mushaira",
    date: "Oct 5, 2025",
    location: "Gomtipur, Ahmedabad",
    image: "/images/event02.jpg",
  },
  {
    id: 3,
    title: "Jashn-e-Eid Milan Mushaira",
    date: "Oct 10, 2025",
    location: "Lal Darwaza, Ahmedabad",
    image: "/images/event03.jpg",
  },
   {
    id: 4,
    title: "Cultural Mushaira 2.0",
    date: "Oct 1, 2025",
    location: "Ahmedabad",
    image: "/images/event01.jpeg",
  },
  {
    id: 5,
    title: "Jashn-e-Urdu Mushaira",
    date: "Oct 5, 2025",
    location: "Gomtipur, Ahmedabad",
    image: "/images/event02.jpg",
  },
  {
    id: 6,
    title: "Jashn-e-Eid Milan Mushaira",
    date: "Oct 10, 2025",
    location: "Lal Darwaza, Ahmedabad",
    image: "/images/event03.jpg",
  },
];

export default function EventsSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">KhudRang Events</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-sm text-gray-600">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
