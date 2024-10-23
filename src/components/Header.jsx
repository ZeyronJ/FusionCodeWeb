import React, { useState } from 'react';
import { handleMenuClick } from '../utils/domUtils';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    handleMenuClick(section);
    setIsOpen(false);
  };

  return (
    <nav className='w-full fixed bg-blue-950/50 backdrop-filter backdrop-blur-sm z-20 shadow-md'>
      <div className='container flex items-center justify-between sm:justify-center py-2 px-4 mx-auto text-white'>
        <img src='logo.webp' alt='logo' width={40} className='mr-4' />

        {/* Mobile menu button */}
        <div className='flex sm:hidden'>
          <button onClick={toggleMenu} className=''>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className='hidden sm:flex items-center font-semibold text-xl'>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('home')}>Inicio</button>
          </li>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('about')}>
              Quiénes somos
            </button>
          </li>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('services')}>
              Servicios
            </button>
          </li>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('projects')}>
              Proyectos
            </button>
          </li>
          <li className='mr-4 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('contact')}>Contacto</button>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out text-white`}
      >
        <ul className='flex flex-col font-semibold text-xl p-4'>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('home')}>Inicio</button>
          </li>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('about')}>
              Quiénes somos
            </button>
          </li>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('services')}>
              Servicios
            </button>
          </li>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('projects')}>
              Proyectos
            </button>
          </li>
          <li className='py-2 hover:text-neutral-200'>
            <button onClick={() => handleNavClick('contact')}>Contacto</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
