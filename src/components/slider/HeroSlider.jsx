'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    id: 1,
    title: '',
    description: '',
    bgImage: '/images/banner01.jpg', // your public folder image
  },
  {
    id: 2,
    title: '',
    description: '',
    bgImage: '/images/banner02.jpg',
  },
  {
    id: 3,
    title: '',
    description: '',
    bgImage: '/images/banner03.jpg',
  },
  
];

export default function HeroSlider() {
  return (
    <div className='mt-[130px]'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="overflow-hidden"
      >
        {slides.map(({ id, title, description, bgImage }) => (
          <SwiperSlide key={id}>
            <div
              className="h-[500px] flex flex-col justify-center items-center text-white bg-cover bg-center relative"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 "></div>
              
              <div className="relative z-10 text-center px-4">
                <h2 className="text-3xl font-bold mb-2">{title}</h2>
                <p className="text-lg">{description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
