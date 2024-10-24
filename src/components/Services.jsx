import React from 'react';

const Services = () => {
  const serviciosData = [
    {
      icon: '/dev.webp',
      titulo: 'Desarrollo de Software',
      descripcion:
        'Creación de soluciones a medida con tecnologías modernas para potenciar tu negocio.',
    },
    {
      icon: '/consultoria.webp',
      titulo: 'Consultoría Estratégica',
      descripcion:
        'Asesoría profesional para optimizar tus procesos y estrategias empresariales.',
    },
    {
      icon: '/outsourcing.webp',
      titulo: 'Outsourcing de TI',
      descripcion:
        'Provisión de talento tecnológico para impulsar la productividad de tu empresa.',
    },
    {
      icon: '/ux.webp',
      titulo: 'Diseño UX/UI',
      descripcion:
        'Diseños intuitivos y centrados en el usuario para mejorar la experiencia digital.',
    },
    {
      icon: '/testing.webp',
      titulo: 'Pruebas de Software',
      descripcion:
        'Aseguramiento de calidad para aplicaciones con pruebas automatizadas y manuales.',
    },
    {
      icon: '/automatizacion.webp',
      titulo: 'Automatización de Procesos',
      descripcion:
        'Mejora de eficiencia mediante la automatización de flujos de trabajo y tareas repetitivas.',
    },
  ];

  return (
    <div className='container mx-auto py-16 text-center' id='services'>
      <h2 className='text-4xl font-bold text-[#007bbd] mb-12'>
        Nuestros Servicios
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 '>
        {serviciosData.map((servicio, index) => (
          <div
            key={index}
            className='rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:translate-y-2 border border-blue-100'
            // className='rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:border-blue-200 border border-blue-100'
          >
            <img
              src={servicio.icon}
              alt='foto'
              className='w-full'
              loading='lazy'
            />
            <div className='p-8'>
              <h3 className='text-2xl font-semibold text-[#007bbd] mb-2'>
                {servicio.titulo}
              </h3>
              <p className='text-gray-600'>{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
