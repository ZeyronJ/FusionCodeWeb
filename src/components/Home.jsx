import React from 'react';
import { handleMenuClick } from '../utils/domUtils';

export default function TaskForceTI() {
  return (
    <section
      id='home'
      className='relative py-20 text-white' // Añadido 'relative' para el overlay
      style={{
        backgroundImage: "url('/about.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-60 md:opacity-40'></div>

      <div className='container mx-auto text-center relative z-10'>
        {' '}
        {/* Añadido 'relative z-10' para el contenido */}
        <div className='md:bg-black/50 py-10 my-10 rounded-lg'>
          <h2 className='text-4xl font-bold mb-4'>
            Fortalece tu Negocio con Software especializado
          </h2>
          <p className='text-xl'>
            Ofrecemos servicios de desarrollo de software diseñados para
            potenciar tu negocio, mejorando la eficiencia y la satisfacción del
            cliente a través de soluciones a medida.
          </p>
        </div>
        <button
          className='bg-gradient-to-r from-[#007bbd] to-[#005a8c] px-6 py-3 text-lg bg-[#007bbd] text-white rounded-full shadow-lg font-bold transition duration-300 transform hover:bg-[#005a8c] hover:-translate-y-2'
          onClick={() => handleMenuClick('contact')}
        >
          Solicita tu equipo especializado
        </button>
      </div>
    </section>
  );
}
