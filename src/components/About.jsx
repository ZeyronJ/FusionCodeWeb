import React from 'react';
import { motion } from 'framer-motion';
import { handleMenuClick } from '../utils/domUtils';

const About = () => {
  const infoCards = [
    {
      title: 'Misión',
      description:
        'Brindar soluciones tecnológicas que optimicen el rendimiento de nuestros clientes.',
    },
    {
      title: 'Visión',
      description:
        'Ser líderes en el sector del outsourcing y la innovación tecnológica.',
    },
    {
      title: 'Valores',
      description: 'Innovación, calidad, compromiso y trabajo en equipo.',
    },
  ];

  return (
    <motion.section
      className='relative flex items-center justify-center min-h-screen bg-cover bg-center'
      id='about'
      initial={{ opacity: 0, y: 50 }} // Estado inicial fuera de vista
      whileInView={{ opacity: 1, y: 0 }} // Aparece y sube cuando entra en el viewport
      transition={{ duration: 0.8 }} // Duración de la animación
      viewport={{ once: true }} // Solo se anima una vez
    >
      <div className='relative flex flex-col items-center justify-center md:flex-row bg-white p-10 md:rounded-xl shadow-2xl max-w-5xl mx-auto border border-blue-100'>
        <motion.img
          src={'/logo.webp'}
          alt='Logo FusionCode'
          className='w-44 h-auto rounded-lg shadow-md border-4 border-[#007bbd]'
          style={{ backfaceVisibility: 'hidden' }}
          initial={{ opacity: 0, x: -50 }} // La imagen se moverá desde la izquierda
          whileInView={{ opacity: 1, x: 0 }} // Aparece y se desplaza a su posición original
          whileHover={{ rotate: 6 }} // Gira la imagen al pasar el ratón
          transition={{ duration: 0.3 }} // Duración de la animación
          viewport={{ once: true }} // Solo se anima la primera vez
        />

        <motion.div
          className='mt-8 md:mt-0 md:ml-8 text-center md:text-left'
          initial={{ opacity: 0, x: 50 }} // El texto se moverá desde la derecha
          whileInView={{ opacity: 1, x: 0 }} // Aparece y se desplaza a su posición original
          transition={{ duration: 0.8 }} // Duración de la animación
          viewport={{ once: true }} // Solo se anima la primera vez
        >
          <h2 className='text-4xl font-bold text-[#007bbd] mb-4'>
            ¿Quiénes Somos?
          </h2>
          <p className='text-lg text-gray-800 mb-6'>
            En FusionCode, nos especializamos en soluciones de outsourcing que
            transforman negocios, permitiendo a las empresas centrarse en su
            core business mientras nosotros nos encargamos de sus necesidades
            tecnológicas.
          </p>

          {/* Animación para las tarjetas individuales */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {infoCards.map((card, index) => (
              <motion.div
                key={index} // Asegúrate de agregar una key única
                className='bg-white p-4 rounded-lg shadow-lg transform hover:shadow-xl transition'
                initial={{ opacity: 0, scale: 0.9 }} // Empieza un poco más pequeña y transparente
                whileInView={{ opacity: 1, scale: 1 }} // Aparece y crece a tamaño original
                transition={{ duration: 0.5, delay: 0.2 * index }} // Duración de la animación
                viewport={{ once: true }} // Solo se anima la primera vez
              >
                <h3 className='text-2xl font-semibold text-[#007bbd] mb-2'>
                  {card.title}
                </h3>
                <p className='text-gray-600'>{card.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            className='mt-8 bg-gradient-to-r from-[#007bbd] to-[#005a8c] text-white py-3 px-8 rounded-full shadow-lg font-bold'
            onClick={() => handleMenuClick('contact')}
            initial={{ opacity: 0, scale: 0.9 }} // Estado inicial
            whileInView={{ opacity: 1, scale: 1 }} // Estado al entrar en vista
            transition={{ duration: 0.5, delay: 0.6 }} // Transición de entrada
            viewport={{ once: true }} // Solo se anima la primera vez
            style={{
              transition: 'transform 0.3s ease', // Transición para el hover
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'; // Efecto de escalado
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'; // Regresa al estado normal
            }}
          >
            Conócenos Más
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
