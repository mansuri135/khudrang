import React from 'react';

const videos = [
  {
    id: 1,
    title: 'Maa Par Likhe Khubsurat Ashaar',
    date: 'Oct 10, 2025',
    embedUrl: 'https://www.youtube.com/embed/XXclQtZd65k?si=18e2GC-rr3PpHR5x',
  },
  {
    id: 2,
    title: 'Mangal Rathod Sahab - Mehfil e Mushayra',
    date: 'Oct 15, 2025',
    embedUrl: 'https://www.youtube.com/embed/uGyVGotVgwk?si=nZ2CdLQOSFPFkmLP',
  },
  {
    id: 3,
    title: 'SAHIB AHMEDABADI',
    date: 'Oct 20, 2025',
    embedUrl: 'https://www.youtube.com/embed/45tdyNzKjyI?si=ZeKQE9ZcIkteYrsc',
  },
  {
    id: 4,
    title: 'Maa Par Likhe Khubsurat Ashaar',
    date: 'Oct 10, 2025',
    embedUrl: 'https://www.youtube.com/embed/XXclQtZd65k?si=18e2GC-rr3PpHR5x',
  },
  {
    id: 5,
    title: 'Mangal Rathod Sahab - Mehfil e Mushayra',
    date: 'Oct 15, 2025',
    embedUrl: 'https://www.youtube.com/embed/uGyVGotVgwk?si=nZ2CdLQOSFPFkmLP',
  },
  {
    id: 6,
    title: 'SAHIB AHMEDABADI',
    date: 'Oct 20, 2025',
    embedUrl: 'https://www.youtube.com/embed/45tdyNzKjyI?si=ZeKQE9ZcIkteYrsc',
  },
];

export default function UpcomingVideos() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">KhudRang Videos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Premieres on {video.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
