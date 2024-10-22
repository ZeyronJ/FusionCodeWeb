import React from 'react';

const About = () => {
  return (
    <section
      className='relative flex items-center justify-center min-h-screen bg-cover bg-center'
      //   style={{ backgroundImage: `url('/about.jpg')` }}
      id='about'
    >
      <div className='relative flex flex-col items-center justify-center md:flex-row bg-white p-10 md:rounded-xl shadow-2xl max-w-6xl mx-auto'>
        <img
          src={'/logo.webp'}
          alt='Logo FusionCode'
          className='w-44 h-auto rounded-lg shadow-md border-4 border-[#007bbd]'
        />

        <div className='mt-8 md:mt-0 md:ml-8 max-w-2xl text-center md:text-left'>
          <h2 className='text-4xl font-bold text-[#007bbd] mb-4'>
            ¿Quiénes Somos?
          </h2>
          <p className='text-lg text-gray-800 mb-6'>
            En FusionCode, nos especializamos en soluciones de outsourcing que
            transforman negocios, permitiendo a las empresas centrarse en su
            core business mientras nosotros nos encargamos de sus necesidades
            tecnológicas.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            <div className='bg-white p-4 rounded-lg shadow-lg transform hover:shadow-xl transition'>
              <h3 className='text-2xl font-semibold text-[#007bbd] mb-2'>
                Misión
              </h3>
              <p className='text-gray-600'>
                Brindar soluciones tecnológicas que optimicen el rendimiento de
                nuestros clientes.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg transform hover:shadow-xl transition'>
              <h3 className='text-2xl font-semibold text-[#007bbd] mb-2'>
                Visión
              </h3>
              <p className='text-gray-600'>
                Ser líderes en el sector del outsourcing y la innovación
                tecnológica.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg transform hover:shadow-xl transition'>
              <h3 className='text-2xl font-semibold text-[#007bbd] mb-2'>
                Valores
              </h3>
              <p className='text-gray-600'>
                Innovación, calidad, compromiso y trabajo en equipo.
              </p>
            </div>
          </div>

          <button className='mt-8 bg-gradient-to-r from-[#007bbd] to-[#005a8c] text-white py-3 px-8 rounded-full shadow-lg font-bold transform hover:scale-105 transition'>
            Conócenos Más
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
