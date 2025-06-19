import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setHidden(true); // scroll hacia abajo → esconder
      } else {
        setHidden(false); // scroll hacia arriba → mostrar
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-transform duration-800 ease-in-out 
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
        bg-neutral-900/80 backdrop-blur-md shadow-md`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        <div className="text-yellow-400 text-2xl font-bold">Logo</div>
        <ul className="flex space-x-6 text-lg font-medium text-white">
          <li className="hover:text-yellow-400 cursor-pointer">Inicio</li>
          <li className="hover:text-yellow-400 cursor-pointer">Acerca de nosotros</li>
          <li className="hover:text-yellow-400 cursor-pointer">Servicios</li>
          <li className="hover:text-yellow-400 cursor-pointer">Tienda</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contacto</li>
        </ul>
        <div className='text-yellow-400 text-2xl cursor-pointer'>Usuario</div>
      </div>
    </nav>
  );
};

export default Navbar;
