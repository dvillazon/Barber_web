import React, { useEffect, useState } from 'react';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import VariableProximity from './VariableProximity';
import { useRef } from 'react';

const images = [
  {
    src: '/img1.jpeg',
    text: 'Fades modernos y diseños personalizados',
    description: 'Explora nuestros cortes de cabello únicos y personalizados que reflejan tu estilo.',
  },
  {
    src: '/img2.jpeg',
    text: 'Cuidado , protección y estilo para tu barba',
    description: 'Ofrecemos productos de alta calidad para el cuidado de tu barba, asegurando que luzca siempre impecable.',
  },
  {
    src: '/img3.jpeg',
    text: 'Cortes de cabello clásicos y elegantes',
    description: 'Disfruta de cortes de cabello clásicos que nunca pasan de moda, perfectos para cualquier ocasión.',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full relative overflow-hidden h-[700px]"
        ref={containerRef}>
        {/* Carrusel que se mueve */}
        <div
          className="flex transition-transform duration-950 ease-in-out h-full cursor-default"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, idx) => (
            <div key={idx} className="min-w-full relative h-full">
              <img
                src={image.src}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover opacity-80"
              />

              {/* Degradado en la parte inferior de la imagen */}
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-neutral-800 to-transparent z-10" />

              {/* Texto centrado, encima del degradado */}
              <div className="flex flex-col absolute inset-0 items-center justify-center text-center z-20">
                <VariableProximity
                  label={image.text}
                  className="text-5xl text-white font-bold px-6 py-3 rounded-xl opacity-90"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
                <VariableProximity
                  label={image.description}
                  className="text-xl font-extralight  text-white mt-4 max-w-lg"
                  fromFontVariationSettings="'wght' 300, 'opsz' 10"
                  toFontVariationSettings="'wght' 700, 'opsz' 30"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </div>

            </div>
          ))}

        </div>

        {/* Botón fijo de agendar cita  encima del carrusel */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <a href="https://wa.me/+529626242317" target="_blank" rel="noopener noreferrer">
            <button className="bg-yellow-400 text-neutral-900 text-lg font-extrabold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition cursor-pointer hover:scale-103 font-elegant duration-200">
              Agenda tu cita
            </button>
          </a>
        </div>

      </section>
      <section className=' text-white py-5 flex flex-row gap-20 items-center justify-center opacity-80 '>
        <div className='flex flex-col items-center gap-4 '>
          <FaPhone className='text-3xl text-neutral-100' />
          <p className=' text-xl text-yellow-300 font-serif '>+52 55 1234 5678</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <FaLocationDot className='text-3xl text-neutral-100' />
          <p className=' text-xl text-yellow-300 font-elegant'>Monterrey 159, esquina Zacatecas en Roma Norte</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <MdEmail className='text-3xl text-neutral-100' />
          <p className=' text-xl text-yellow-300 font-elegant'>contacto@barberia.com</p>
        </div>
      </section>
    </>
  );
};

export default Home;
