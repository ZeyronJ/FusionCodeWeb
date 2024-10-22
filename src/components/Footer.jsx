import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Iconos de Instagram y LinkedIn

export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto text-center'>
        <p>© 2024 FusionCode. Todos los derechos reservados</p>
        <div className='flex justify-center space-x-6 mt-4'>
          {/* Icono de Instagram */}
          <a
            href='https://www.instagram.com/taskforceti/profilecard/?igsh=MXBnajZqeDdwcTRseQ=='
            aria-label='Instagram'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram size={24} className='text-white hover:text-gray-300' />
          </a>
          {/* Icono de LinkedIn */}
          <a
            href='https://www.linkedin.com/company/taskforceti/'
            aria-label='LinkedIn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={24} className='text-white hover:text-gray-300' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
