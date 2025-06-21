import React, { useEffect, useState } from 'react';

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative overflow-hidden h-[750px]">
      {/* Carrusel que se mueve */}
      <div
        className="flex transition-transform duration-950 ease-in-out h-full cursor-default" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, idx) => (
          <div key={idx} className="min-w-full relative">
            <img
              src={image.src}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="flex flex-col absolute inset-0 items-center justify-center text-center">
              <h2 className="text-5xl font-elegant text-white font-bold px-6 py-3 rounded-xl opacity-90">
                {image.text}
              </h2>
              <p className="text-xl font-extralight font-elegant text-white mt-4 max-w-lg">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón fijo encima del carrusel */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
      <a href="https://wa.me/9626242317" target="_blank" rel="noopener noreferrer">
        <button className="bg-yellow-400 text-neutral-900 text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition cursor-pointer hover:scale-103">
          Agenda tu cita
        </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
