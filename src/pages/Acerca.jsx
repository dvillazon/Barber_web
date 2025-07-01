// src/components/Acerca.jsx
import React from 'react';
import salonbarber from '../assets/salonbarber.jpeg';
import AnimatedContent from '../components/AnimatedContent';
const Acerca = () => {
  return (
    <AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1.2}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0.2}
  delay={0.2}
>
  <section
      id="acerca"
      className="w-full px-6 py-20  text-white flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 "
    >
      {/* Texto a la izquierda */}
      <div className="md:w-1/2 space-y-10 ">
        <h2 className="text-4xl md:text-8xl font-elegant font-bold text-yellow-400">
          ¿Quiénes Somos?
        </h2>

        <p className="text-lg md:text-xl font-elegant text-neutral-200 leading-relaxed">
          Somos un equipo de <span className="text-yellow-300 font-semibold">3 barberos</span> apasionados con más de <span className="text-yellow-300 font-semibold">5 años de experiencia</span> brindando estilo, confianza y una experiencia única en cada corte. Nuestra barbería es más que un lugar para cortarte el cabello — es un espacio donde el estilo y el cuidado se encuentran.
        </p>
      </div>

      {/* Imagen a la derecha */}
      <div className="md:w-1/2">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src=  {salonbarber}
            alt="Foto del salón de la barbería"
            className="w-full h-[300px] md:h-[400px] object-cover opacity-80 transform hover:scale-105 transition duration-500 ease-in-out hover:opacity-100"
          />
        </div>
      </div>
    </section>
</AnimatedContent>
    
  );
};

export default Acerca;
